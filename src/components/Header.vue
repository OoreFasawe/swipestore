<template>
  <div id="nav">
    <div class = "ms-auto">
      <router-link :to="{name: 'about'}" class="about">About</router-link>
    </div>
    <router-link :to="{name: 'home'}">Swipestore</router-link>
  </div>
</template>

<style scoped>
#nav {
  background: transparent;
  position: sticky;
  top: 0;
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
  background: purple;

}

#nav a.router-link-exact-active{
background: hsl(0, 5%, 75%);
}

.about{
  align-self: left;
}
</style>
