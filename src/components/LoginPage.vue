<template>
<!-- login form -->
    <div class="login" v-show="toggleLogin">
      <img class="logo" alt="Vue logo" src="@/assets/images/logo.jpeg" />
      <h1>Log in</h1>
      <input type="text" v-model="email" placeholder="Email" />
      <input type="text" v-model="Password" placeholder="Password" />
      <button v-on:click="login">Login</button>
      <p>
        <a @click="swapRegister()">SignUp</a>
      </p>
  </div>

  <!-- register form -->
<div class="login" v-show="toggleRegister">
    <img class="logo" alt="Vue logo" src="../assets/images/logo.jpeg" />
    <h1>Sign Up</h1>
    <input type="text" v-model="name" placeholder="Enter your Name" />
    <input type="text" v-model="email" placeholder="Email" />
    <input type="text" v-model="Password" placeholder="Password" />
    <button v-on:click="signUp">Sign Up</button>
    <p>
       <a @click="swapLogin()">Login</a>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toggleLogin = ref(true);
const toggleRegister = ref(false);

function swapLogin(){
  toggleLogin.value = true;
  toggleRegister.value = false;
}
function swapRegister(){
  toggleRegister.value = true;
  toggleLogin.value = false;
}

// import axios from 'axios'
// export default {
//     name:'Login-Page',
//     data()
//     {
//       return{
//         email:'',
//         password:''
//       }
//     },
//     methods:{
//       async login()
//       {
//         let result = await axios.get(
//           `http://localhost:3000/user?email=${this.email}&password=${this.password}`
//         )

//         console.warn(result);
//             if(result.status==200 && result.data.length>0)
//             {
//               localStorage.setItem("user-info", JSON.stringify(result.data[0]))
//               this.$router.push({name:'Home'})
//             }
//         console.warn(result);
//       }
//     },
//        mounted()
//     {
//       let user = localStorage.getItem('user-info');
//       if (user) {
//         this.$router.push({name:'Home'})
//       }
//     }
// };

// export default {
//     name :'SignUp',
//     data(){
//         return{
//             name:'',
//             email:'',
//             password:''
//         }
//     },
//     methods:{
//         async signUp(){
//             let result = await axios.post("http://localhost:3000/user", {
//               name:this.name,
//               emai:this.email,
//               password:this.password            
//             });

//             console.warn(result);
//             if(result.status==201)
//             {
//               localStorage.setItem("user-info", JSON.stringify(result.data))
//               this.$router.push({name:'Home'})
//             }
//         }
//     },
//     mounted()
//     {
//       let user = localStorage.getItem('user-info');
//       if (user) {
//         this.$router.push({name:'Home'})
//       }
//     }
// }
</script>
<style scoped>
a{
  cursor: pointer;
  color: blue;
}
</style>