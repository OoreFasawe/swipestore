<template>
    <button @click="gotoStore">Back</button>
    <div class="col-sm-6 mb-3 mb-sm-0 mx-auto">
      <div v-for="i in swipesList" :key="i" class="card mb-3 mt-3">
        <div class="card-body">
          <h5 class="card-title">${{i.price}}</h5>
          <button @click="toggleDone(i.id)" class="button ">Buy</button>
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
