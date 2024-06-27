<template>
  <div class="container" >
    <div class="sidebar">
      <div class="head">
        <div class="logonav">
          <img src="../assets/images/logo.jpeg" alt="profile" />
        </div>
        <div class="user-details">
          <p class="title">Beauty shop</p>
          <p class="name">Pawamwani</p>
        </div>
      </div>
      <div class="nav">
        <p class="title dashboard"><router-link to="/">DASHBOARD</router-link></p>
        <ul class="menu">
          <router-link to="/">
            <img src="../assets/images/home.png" alt="" />
            <li class="link">Home</li>
          </router-link>
          <div>
            <router-link to="" @click="toggleMenu" style="color: #1f155b;" class="regdiv">
              <img src="../assets/images/registration.png" alt="" />
              <li>Registration</li></router-link>
            <div class="dropdown" :style="{display: showhide}">
              <router-link to="/users"><li>Users</li></router-link>
              <router-link to="/products"><li>Products | Services</li></router-link>
              <router-link to="/prodcat"><li>Product Categories</li></router-link>
            </div>
          </div>
          <div>
            <router-link to="" @click="toggleMenu1" style="color: #1f155b;" class="regdiv">
              <img src="../assets/images/registration.png" alt="" />
              <li>Sales</li></router-link>
            <div class="dropdown" :style="{display: showhide1}">
              <router-link to="/pos"><li>POS</li></router-link>
              <router-link to="/saleslist"><li>Sales List</li></router-link>
            </div>
          </div>
            <router-link to="/about">
            <img src="../assets/images/expenses.png" alt="" />
            <li class="link">Appointments</li></router-link>
          <router-link to="/expenses">
            <img src="../assets/images/expenses.png" alt="" />
            <li class="link">Expenses</li></router-link>
          <router-link to="/products">
            <img src="../assets/images/reports.png" alt="" />
            <li class="link">Reports</li></router-link>
          <router-link to="/about">
            <img src="../assets/images/about.png" alt="" />
            <li class="link">About</li></router-link>
          <router-link to="/login">
            <img src="../assets/images/logout.png" alt="" />
            <li class="link">Logout</li></router-link>
        </ul>
      </div>
    </div>
    <div class="display">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const showhide = ref("none");
const showhide1 = ref("none");

function toggleMenu(){
  if(showhide.value == "none"){
    showhide.value = "block";
  }
  else if(showhide.value == "block"){
    showhide.value = "none";
  }
}

function toggleMenu1(){
  if(showhide1.value == "none"){
    showhide1.value = "block";
  }
  else if(showhide1.value == "block"){
    showhide1.value = "none";
  }
}
// import axios from "axios";
// export default {
//   name: "Home",
//   methods: {
//     logout() {
//       localStorage.clear();
//       this.$router.push({ name: "Login" });
//     },
//   },
// };

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  display: flex;
  width: 100%;
  min-height: 100vh;
}
.sidebar {
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: url("@/assets/images/navcolor.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px;
  border-radius: 10px;
  border-bottom: 1px solid #ddd;
}
.sidebar .head {
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
}
.logonav {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
}
.logonav img {
  width: 100%;
  /*object-fit: cover;*/
}
.user-details .title,
.title {
  font-size: 18px;
  font-weight: 500;
  color: #5e2548;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.dashboard {
  font-size: 16px;
}
.user-details .name {
  font-size: 14px;
  font-weight: 500;
  color: rgb(44, 8, 41);
  font-family: Cambria, serif;
  font-style: italic;
}
.menu ul li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #1f155b;
  text-decoration: none;
  padding: 12px 8px;
  border-radius: 8px;
  transition: all 0.3s;
}
.menu ul li a img {
  width: 20px;
  height: 20px;
}
.menu ul li .text {
  flex: 1;
}
.menu .sub-menu {
  display: none;
  margin-left: 20px;
  padding-left: 20px;
  padding-top: 5px;
  border-left: 1px solid #f6f6f6;
}
.menu .sub-menu li a {
  padding: 10px 8px;
  font-size: 12px;
}
.display {
  flex: 1;
}
a:hover {
  background-color: #beb0b0;
  color: red;
}
.router-link-active {
  color: red;
}
.list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
a {
  display: flex;
  gap: 5px;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  text-decoration: none;
  color: #1f155b;
}
a img {
  width: 20px;
}
.menu {
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  margin-top: 10px;
}
.menu li {
  list-style-type: none;
}
.dropdown{
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-left: 30px;
  /* display: none; */
}
.dropdown li{
  cursor: pointer;
}
.regdiv {
  color: red;
}
</style>
