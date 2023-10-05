<template>
  <div id="nav">
    <div class="left navOp">
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <div class="right navOp">
      <router-link :to="{ name: 'store' }">Swipestore</router-link>
      <button  @click="signOut">Logout</button>
    </div>
  </div>
</template>

<script>
import { auth } from "../Firebase/init.js";
import { signOut } from "firebase/auth";
export default {
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    signOut() {
      signOut(auth).then(() => {
        console.log("logged out");
        this.$emit("loggedIn", false);
        this.$router.push({name: 'login'});
      });
    },
  },

};
</script>

<style scoped>
#nav, button {
  background: transparent;
  position: sticky;
  top: 0;
  padding: 25px;
}
#nav div a, button {
  background: #ddd;
  color: #541a8b;
  padding: 10px 20px 10px 20px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  display: inline;
  margin-right: 20px;
}

button {
  border: 0
}
#nav div a:hover, button:hover {
  background: purple;
  color: white;
}

#nav div .router-link-exact-active , button active{
  background: hsl(0, 5%, 75%);
}

.left {
  float: left;
}
.right {
  float: right;
}

.navOp {
  display: inline;
}
</style>
