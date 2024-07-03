<!-- testing line -->
<template>
<div v-if="isLoggedin">
  <HeaderPage @logout="backlogin"/>
</div> 
<div v-else>
  <Login @success="showhidelog" />
</div>
</template>

<script setup>
import { ref } from "vue";
import HeaderPage from "./components/navHeader.vue"
import Login from "./components/LoginPage.vue"
const isLoggedin = ref(false);

const showhidelog = () =>{
  isLoggedin.value = true;
}
const backlogin = () =>{
  isLoggedin.value = false;
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.logo{
  width: 100px;
}
.msgdiv{
  background-color: rgb(133, 223, 193);
  padding: 15px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  width: fit-content;
  color: rgb(7, 68, 17);
  top: 10px;
  font-size: 13px;
  z-index: 20px;
}

</style>
