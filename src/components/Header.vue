<template>
  <div id="nav">
    <div class = "left navOp"><router-link :to="{ name: 'about' }" >About</router-link></div>
    
    <div class = "right navOp"><router-link :to="{ name: 'home' }">Swipestore</router-link></div>
  </div>
</template>

<style scoped>
#nav {
  background: transparent;
  position: sticky;
  top: 0;
  padding: 25px;
}
#nav div a {
  background: #ddd;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  display: inline;
}

#nav div a:hover {
  background: purple;
}

#nav div .router-link-exact-active {
  background: hsl(0, 5%, 75%);
}

.left {
  float: left;
}
.right {
  float:right;
}

.navOp{
  display: inline
}
</style>
