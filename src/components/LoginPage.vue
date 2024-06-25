<template>
<!-- login form -->
    <div class="login" v-show="toggleLogin">
      <h3>Pawamwani Beauty Shop</h3>
      <img class="logo" alt="Vue logo" src="@/assets/images/logo.jpeg" />
      <h1>Log in</h1>
      <form class="loginform" @submit.prevent="login">
        <input type="email" required v-model="email" placeholder="Email" />
        <input type="password" required v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        <a @click="swapRegister()">SignUp</a>
      </p>
  </div>

  <!-- register form -->
<div class="login" v-show="toggleRegister">
    <h3>Pawamwani Beauty Shop</h3>
    <img class="logo" alt="Vue logo" src="../assets/images/logo.jpeg" />
    <h1>Sign Up</h1>
    <form class="loginform" @submit.prevent="register">
      <input type="text" required v-model="name" placeholder="Enter your Name" />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" required placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
    <p>
       <a @click="swapLogin()">Login</a>
    </p>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

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

import axios from 'axios';
import { useRouter } from 'vue-router';
// const route = useRoute();
const emit = defineEmits(['login', 'success'])
const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");
const register = async() =>{
  try{
     const response = await axios.get( `http://localhost:3000/user?email=${email.value}`);
      if(response.data.length > 0){
        alert("User already exists");
      }
      else{
        let result = await axios.post("http://localhost:3000/user", {
              name:name.value,
              email:email.value,
              password:password.value            
            });
        if(result){
          alert("Registered successfully")
        }
      }
  }
  catch(error){
    console.error(error);
  }
} 

const login = async() =>{
  try{
     const response = await axios.get( `http://localhost:3000/user?email=${email.value}&password=${password.value}`);
      if(response.data.length > 0){
        alert("Login successful");
        emit('success')
        // router.push({name: 'Home'});
      }
      else{
        alert('Invalid email or passsword')
      }
  }
  catch(error){
    console.error(error);
  }
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
.loginform{
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>