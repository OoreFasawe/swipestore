<template>
  <Header @loggedIn ="logIn" v-if="isLoggedIn"/>
  <router-view @loggedIn ="logIn"/>
  <Footer/>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {auth} from "./Firebase/init.js";

export default {
  components: {
    Header,
    Footer,
  },
  data(){
    return{
      isLoggedIn: false
    }

  },
  beforeMount(){
    if(auth.currentUser == null){
      this.$router.push({name: 'login'})
    }
  },
  methods:{
    logIn(showHeader){
      if(showHeader){
        this.isLoggedIn = true
      }
      else{
        this.isLoggedIn = false
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

