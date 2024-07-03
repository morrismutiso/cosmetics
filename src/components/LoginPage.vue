<template>
<div v-if="messagebox" class="popup popup--icon -success js_success-popup popup--visible">
    <div class="popup__background"></div>
    <div class="popup__content">
      <h3 class="popup__content__title">
        Success 
      </h3>
      <p>{{ message }}</p>
    </div>
  </div>
 <div v-if="messagebox1" class="popup popup--icon -error js_error-popup popup--visible">
    <div class="popup__background"></div>
    <div class="popup__content">
      <h3 class="popup__content__title">
        Error 
      </h3>
      <p>{{ message }}</p>
      <p>
      <a href="/login"><button class="button button--error" data-for="js_error-popup">Close</button></a>
    </p>
    </div>
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
const nextId = ref(1);
const users = ref([]);
const register = async() =>{
  try{
     const response = await axios.get( `http://localhost:3000/user?email=${email.value}`);
     const response1 = await axios.get('http://localhost:3000/user');
      users.value = response1.data;
      if(response.data.length > 0){
        const msg = "User already exists";
        errorMsg(msg)
      }
      else{
        console.log("our users", users.value);
        if (users.value.length > 0) {
          nextId.value = Math.max(...users.value.map(user => user.id)) + 1;
        }
        let result = await axios.post("http://localhost:3000/user", {
              id: nextId.value,
              name:name.value,
              email:email.value,
              password:password.value            
            });
        nextId.value += 1;
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
     const response = await axios.get(`http://localhost:3000/user?email=${email.value}`);
      if(response.data.length > 0){
        const result = await axios.get(`http://localhost:3000/user?password=${password.value}`);
        if(result.data.length > 0){
          const msg = "Login Successful";
          successMsg(msg);
          setTimeout(() => {
            emit('success');
            router.push({name: 'Home'});
          }, 1500);
        }
        else{
          errorMsg("Invalid email or password!");
        }
      }
      else{
        errorMsg("Invalid email or password!");
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
  },5000);
}

const successMsg = (msg) =>{
  messagebox.value = true;
  message.value = msg;
  setTimeout(() => {
    messagebox.value = false;
    if(msg == "Registration Successful"){
      toggleLogin.value = true;
      toggleRegister.value = false;
    }
  }, 1500);
}
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

/**
 * Configuration.
 */
/**
 * Buttons.
 */
.button {
  margin-bottom: 4px;
  padding: 8px 12px;
  border: 1px solid #75B9E1;
  border-radius: 3px;
  background: #4FA0D0;
  cursor: pointer;
  font-family: inherit;
  text-transform: uppercase;
  color: #fff;
}
.button:focus {
  outline: none;
}
.button--warning {
  border: 1px solid #FFB039;
  background: #ff9800;
}
.button--success {
  border: 1px solid #71E6AB;
  background: #4AD890;
}
.button--error {
  border: 1px solid #F578A4;
  background: #EF5289;
}

/**
 * Popups.
 */
.popup {
  visibility: hidden;
  transition: visibility 0ms linear 0.3s;
}
.popup--visible {
  visibility: visible;
  transition: visibility 0ms;
}
.popup__background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.popup--visible .popup__background {
  opacity: 1;
}
.popup__content {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10001;
  min-width: 400px;
  padding: 25px 50px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  text-align: center;
  -webkit-animation: hide-popup 0.3s forwards;
          animation: hide-popup 0.3s forwards;
  /**
   * Popup types.
   */
}
.popup--visible .popup__content {
  -webkit-animation: show-popup 0.3s forwards;
          animation: show-popup 0.3s forwards;
}
.popup--icon .popup__content {
  padding-top: 130px;
}
.popup--icon .popup__content:before, .popup--icon .popup__content:after {
  position: absolute;
  top: 25px;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  display: block;
  height: 90px;
  width: 90px;
}
.popup--icon .popup__content:before {
  content: '';
  border: 3px solid currentColor;
  border-radius: 50%;
  -webkit-transform: translateX(-50%) scale(1, 0);
          transform: translateX(-50%) scale(1, 0);
  opacity: 0;
}
.popup--icon .popup__content:after {
  content: '\2713';
  line-height: 90px;
  font-size: 45px;
  -webkit-transform: translateX(-50%) scale(0);
          transform: translateX(-50%) scale(0);
  opacity: 0;
}
.popup--visible.popup--icon .popup__content:before {
  -webkit-animation: show-icon-cirlce 0.3s forwards 0.15s;
          animation: show-icon-cirlce 0.3s forwards 0.15s;
}
.popup--visible.popup--icon .popup__content:after {
  -webkit-animation: show-icon 0.3s forwards 0.3s;
          animation: show-icon 0.3s forwards 0.3s;
}
.-question.popup--icon .popup__content:before {
  border-color: #ff9800;
}
.-question.popup--icon .popup__content:after {
  content: '?';
  color: #ff9800;
}
.-success.popup--icon .popup__content:before {
  border-color: #4AD890;
}
.-success.popup--icon .popup__content:after {
  content: '\2713';
  color: #4AD890;
}
.-error.popup--icon .popup__content:before {
  border-color: #EF5289;
}
.-error.popup--icon .popup__content:after {
  content: '\2717';
  color: #EF5289;
}
.popup__content__title {
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 100;
  color: #626262;
}

/**
 * Popup animations.
 * Based on Sweet Alert: "https://t4t5.github.io/sweetalert/"
 */
@-webkit-keyframes show-popup {
  0% {
    -webkit-transform: translate(-50%, -50%) scale(0.7);
            transform: translate(-50%, -50%) scale(0.7);
    opacity: 0;
  }
  45% {
    -webkit-transform: translate(-50%, -50%) scale(1.05);
            transform: translate(-50%, -50%) scale(1.05);
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(-50%, -50%) scale(0.95);
            transform: translate(-50%, -50%) scale(0.95);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes show-popup {
  0% {
    -webkit-transform: translate(-50%, -50%) scale(0.7);
            transform: translate(-50%, -50%) scale(0.7);
    opacity: 0;
  }
  45% {
    -webkit-transform: translate(-50%, -50%) scale(1.05);
            transform: translate(-50%, -50%) scale(1.05);
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(-50%, -50%) scale(0.95);
            transform: translate(-50%, -50%) scale(0.95);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
  }
}
@-webkit-keyframes hide-popup {
  0% {
    -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(-50%, -50%) scale(0.5);
            transform: translate(-50%, -50%) scale(0.5);
    opacity: 0;
  }
}
@keyframes hide-popup {
  0% {
    -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(-50%, -50%) scale(0.5);
            transform: translate(-50%, -50%) scale(0.5);
    opacity: 0;
  }
}
/**
 * Icon animations.
 */
@-webkit-keyframes show-icon {
  0% {
    -webkit-transform: translateX(-50%) scale(0);
            transform: translateX(-50%) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(-50%) scale(1);
            transform: translateX(-50%) scale(1);
    opacity: 1;
  }
}
@keyframes show-icon {
  0% {
    -webkit-transform: translateX(-50%) scale(0);
            transform: translateX(-50%) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(-50%) scale(1);
            transform: translateX(-50%) scale(1);
    opacity: 1;
  }
}
@-webkit-keyframes show-icon-cirlce {
  0% {
    -webkit-transform: translateX(-50%) scale(1, 0);
            transform: translateX(-50%) scale(1, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(-50%) scale(1, 1);
            transform: translateX(-50%) scale(1, 1);
    opacity: 1;
  }
}
@keyframes show-icon-cirlce {
  0% {
    -webkit-transform: translateX(-50%) scale(1, 0);
            transform: translateX(-50%) scale(1, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(-50%) scale(1, 1);
            transform: translateX(-50%) scale(1, 1);
    opacity: 1;
  }
}

</style>