<template>
    <button class="back-button" @click="gotoStore">Back</button>
    <h1>SwipeBoard</h1>
    <div class="col-sm-6 mb-3 mb-sm-0 mx-auto"> 
      <div v-for="i in swipesList" :key="i" class="card mb-3 mt-3">
        <div class="card-body">
          <h5 class="card-title1">{{i.username}}</h5>
          <button class="button-primary">Buy</button> 
          <h5 class="card-title2">${{i.price}}</h5>
        </div>
      </div>
    </div>
</template>

<script>
import {onSnapshot, collection} from 'firebase/firestore'
import db from '../Firebase/init.js'
export default {
    data(){
        return{
            swipesList:[]
        }
    },
    mounted(){
    console.log("mounted")
    onSnapshot(collection(db, 'sellSwipes'), (querySnapshot)=>{
      const swipesArr = []
      querySnapshot.forEach((doc) => {
        const swipe={
          id:doc.id,
          username:doc.data().username,
          price:doc.data().price
        }
        swipesArr.push(swipe)
      })
      this.swipesList = swipesArr
    })
  },
  methods:{
    gotoStore(){
        this.$router.push({name: 'store'})
    }
  }
}
</script>

<style scoped>
h1{
    margin:20px;
    color: #541a8b;
}
button{
    margin-bottom: 15px;
}

.button-primary {
  border: none;
  border-radius: 15px;
  height: 50px;
  width: 60px;
}
.button-primary:hover{
  background-color: green;
  color: white;
  font-weight: bold;
}
.back-button{
  border: none;
  border-radius: 10px;
}
.back-button:hover{
  background-color: purple;
  color: white;
  font-weight: bold;
}
.card-body{
  border-radius: 15px;
}

</style>
