<template>
  <div class="center">
    <img
      alt="Swipestore logo"
      src="../assets/swipestoreLogo.png"
      height="150"
      width="150"
    />
    <form @submit="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email" required v-model="email" />
      <h2></h2>
      <input
        type="Password"
        placeholder="Password"
        required
        v-model="password"
      />
      <h2></h2>
      <button>Login</button>
    </form>
  </div>
</template>

<style scoped>
.center {
  margin: 0;
  top: 50%;
  left: 50%;
  position: absolute;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button{
  width: 80%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: darkgreen;
}

div {
  border-radius: 10px;
  background-color: #f4f4f4;
  padding: 20px;
  width:35%;
  border-width: 5px;
}
</style>
