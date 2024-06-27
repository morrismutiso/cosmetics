<template>
<div v-if="isLoggedin">
  <div v-if="messagebox" class="msgdiv">
  <span>{{ message }}</span>
</div>
<Login @success="showhidelog" />
</div>
<div v-else>
  <HeaderPage/>
</div>
</template>

<script setup>
import { ref } from "vue";
import HeaderPage from "./components/navHeader.vue"
import Login from "./components/LoginPage.vue"
const isLoggedin = ref(false);

const showhidelog = (msg) =>{
  isLoggedin.value = true;
  successMsg(msg)
}

const messagebox = ref(false);
const message = ref("");

const successMsg = (msg) =>{
  messagebox.value = true;
  message.value = msg;
  setTimeout(() => {
    messagebox.value = false;
  }, 5000);
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
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
