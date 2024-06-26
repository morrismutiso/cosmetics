<template>
<div v-if="messagebox" class="msgdiv">
  <span>{{ message }}</span>
</div>
<div v-if="messagebox1" class="errordiv">
  <span>{{ message }}</span>
</div>
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
const emit = defineEmits(['success'])
const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");
const register = async() =>{
  try{
     const response = await axios.get( `http://localhost:3000/user?email=${email.value}`);
      if(response.data.length > 0){
        const msg = "User already exists";
        errorMsg(msg)
      }
      else{
        let result = await axios.post("http://localhost:3000/user", {
              name:name.value,
              email:email.value,
              password:password.value            
            });
        if(result){
          const msg = "Registration Successful";
          successMsg(msg);
          
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
        emit('success', "Login successful");
        router.push({name: 'Home'});
      }
      else{
        errorMsg("Invalid email or password x");
      }
  }
  catch(error){
    console.error(error);
  }
}

const messagebox1 = ref(false);
const messagebox = ref(false);
const message = ref("");


const errorMsg = (msg) =>{
  messagebox1.value = true;
  message.value = msg;
  setTimeout(() => {
    messagebox1.value = false;
  },3000);
}

const successMsg = (msg) =>{
  messagebox.value = true;
  message.value = msg;
  setTimeout(() => {
    messagebox.value = false;
  }, 3000);
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
  gap: 15px;
  
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

.errordiv{
  background-color: rgb(224, 174, 174);
  padding: 15px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  width: fit-content;
  color: brown;
  top: 10px;
  font-size: 13px;
  z-index: 20px;
}
</style>