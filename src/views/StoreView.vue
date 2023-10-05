<template>
  <div id="info" class="store center">
    <div>
      <h1>Introducing Swipestore!</h1>
      <p><em>"Saving you money one swipe at a time...""</em></p>
      <hr />
    </div>
    <form @submit.prevent="checkStore">
      <h4>What do you want to do?</h4>
      <div class="btn-group" role="group" aria-label="Basic example">
        <input
          class="button"
          id="buyButton"
          :class="{ active: saleType }"
          type="button"
          @click="changeToBuy"
          value="Buy"
        />
        <input
          id="sellButton"
          class="button align-baseline"
          :class="{ active: !saleType }"
          type="button"
          @click="changeToSell"
          value="Sell"
        />
      </div>
      <h2></h2>
      <input
        class="input"
        :hidden="this.saleType"
        v-model="price"
        placeholder="Price ..."
        type="text"
      />
      <h2></h2>
      <button id="submitButton"
        :disabled="!saleType && !price" >
        {{ submitText }}
      </button>
    </form>
  </div>
</template>

<script>
import {onSnapshot, collection, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import db, { auth } from '../Firebase/init.js'
export default {
  components: {},
  data() {
    return {
      saleType: 1,
      price:null,
      submitText: "Show available swipes!"
    };
  },
  methods: {
    changeToBuy() {
      if (this.saleType != 1) {
        this.saleType = 1;
        console.log(this.saleType);
        this.submitText = "Show available swipes!"
      }
    },
    changeToSell() {
      if (this.saleType != 0) {
        this.saleType = 0;
        this.price = null;
        console.log(this.saleType);
        this.submitText = "Sell swipes!"
      }
    },
    checkStore(){
      if(!this.saleType){
        addDoc(collection(db, 'sellSwipes'), {
        price: parseFloat(this.price),
        username: auth.currentUser.displayName,
        })
        console.log("sell swipe registered! \nPrice = ", this.price, " by: ", auth.currentUser.displayName)
        this.price=""
      }
      else{
        this.$router.push({name:'swipes page'});
      }
    },
  },
};
</script>

<style scoped>
.btn-group {
  height: 30px;
  border: none;
  border-radius: 10px;
}

#info {
  border-radius: 10px;
  background-color: #f4f4f4;
  padding: 5%;
  width: 60%;
  height: 80%;
  border-width: 5px;
}

.center {
  margin: 0;
  top: 50%;
  left: 50%;
  position: absolute;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
h1 {
  margin: 0 0 20px 0;
}

p {
  margin: 0 0 30px 0;
}

hr {
  margin: 0 0 50px 0;
}

h4,
h2 {
  margin: 0 0 30px 0;
}

form {
  background-color: hsl(0, 5%, 75%);
  padding: 5%;
  height: 70%;
  border-width: 5px;
  border-radius: 10px;
}
input{
  border: none;
  border-radius: 10px;
}

#submitButton {
  width: 50%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border-width: 0.5px;
  border-radius: 10px;
  cursor: pointer;
  vertical-align: bottom;
  text-align: bottom;
}

input.button {
  background-color: #f4f4f4;
  padding: 0px 20px 0px 20px;
  border: 5px;
  margin: 0px 10px 0px 10px;
  border-radius: 10px;
  cursor: pointer;
}

#buyButton{
  font-weight: bold;
}

#sellButton{
  font-weight: bold;
}
#buyButton.active {
  background-color: rgb(92, 92, 196);
}
#sellButton.active {
  background-color: rgb(235, 52, 52);
}

#submitButton:disabled{
  cursor:default;
  background-color: rgb(34, 230, 165);
}
</style>
