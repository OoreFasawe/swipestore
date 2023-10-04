<template>
    <button @click="gotoStore">Back</button>
    <h1>SwipeBoard</h1>
    <div class="col-sm-6 mb-3 mb-sm-0 mx-auto"> 
      <div v-for="i in swipesList" :key="i" class="card mb-3 mt-3">
        <div class="card-body">
          <h5 class="card-title">{{i.username}}</h5>
          <button class="button-primary">Buy</button> 
          <h5 class="card-title">${{i.price}}</h5>
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

</style>
