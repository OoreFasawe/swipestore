<template>
  <div id="info" class="store center">
    <div>
      <h1>Introducing Swipestore!</h1>
      <p><em>"Saving you money one swipe at a time...""</em></p>
      <hr>
    </div>
    <form>
      <h4>What do you want to do?</h4>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button id="buyButton" :class="{'active': this.saleType}" type="button" @click="changeToBuy">Buy</button>
        <button id="sellButton" :class="{'active': !this.saleType}" type="button" @click="changeToSell">Sell</button>
      </div>
      <h2></h2>
      <button id="checkStore">Show available swipes!</button>
    </form>
  </div>
</template>

<script>
export
 default {
  components: {},
  data() {
    return {
      saleType: 1,
    };
  },
  methods:{
    changeToBuy(){
      if(this.saleType!=1){
        this.saleType = 1;
        console.log(this.saleType);
      }
    },
    changeToSell(){
      if(this.saleType!=0){
        this.saleType=0;
        console.log(this.saleType);
      }
    }
  }
};
</script>

<style scoped>
.btn-group {
  height: 30px;
}

#info{
  border-radius: 10px;
  background-color: #f4f4f4;
  padding:5%;
  width: 60%;
  height:80%;
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
h1{
  margin:0 0 20px 0
}

p{
  margin:0 0 30px 0
}

hr{
  margin:0 0 50px 0
}

h4,h2{
  margin: 0 0 30px 0
}

form {
  background-color: hsl(0, 5%, 75%);
  padding: 5%;
  height: 70%;
  border-width: 5px;
  border-radius: 10px;

}

#checkStore {
  width: 50%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  vertical-align: bottom;
  text-align: bottom;
}

button.active{
  background-color: blue
}

</style>
