<template>
  <div id="nav">
    <router-link :to="{name: 'about'}">About</router-link>
    <router-link :to="{name: 'home'}">Swipestore</router-link>
  </div>
</template>

<style scoped>
#nav {
  background: #3D4450;
  position: sticky;
  top: 0;
  border-radius: 10px;
  padding: 25px
}
#nav a {
  background: #ddd;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  margin: 25px;
  text-decoration: none;
}

#nav a:hover {
  background: hsl(0, 5%, 75%);
}

#nav a.router-link-exact-active{
background: hsl(0, 5%, 75%);
}
</style>
