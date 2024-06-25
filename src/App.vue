<template>
<div v-if="success">
  <HeaderPage/>
</div>
<div v-else>
  <Login />
</div>
</template>

<script setup>
// defineProps({
//   success: String,
// })
import { ref } from "vue";
import HeaderPage from "./components/navHeader.vue"
import Login from "./components/LoginPage.vue"
const success = ref(true);

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

</style>
