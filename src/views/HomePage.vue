<script setup>
import FooterPage from "@/components/FooterPage.vue";
</script>

<template>
  <div class="homediv">
    <div class="topview">
      <input type="search" class="search" />
      <div class="profile">
        <img src="@/assets/images/profile.png" />
      </div>
    </div>
    <div class="centerview">
      <img src="@/assets/images/1.jpg" />
    </div>
    <div class="bottomview">
      <div class="items">Category 1</div>
      <div class="items">Category 2</div>
      <div class="items">Category 3</div>
      <div class="items">Category 4</div>
      <div class="items">Category 4</div>
    </div>
    <FooterPage/>
  </div>
</template>
<style scoped>
.homediv {
    display: flex;
    flex-direction: column;
    background-color: rgb(248, 238, 248);
    height: 100vh;
    flex: 1;
    justify-content: space-between;
}
.topview{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
}
.topview input{
    height: 25px;
    width: 200px;
    border-radius: 5px;
    outline: none;
    border: 1px solid rgb(218, 206, 206);
}
.topview img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
}
.profile{
  position: absolute;
  right: 5px;
}
.centerview{
    display: flex;
    justify-content: center;
}
.centerview img{
  width: 80%;
  height: 350px;
}
.bottomview{
    display: flex;
    flex-direction: row;
    gap: 25px;
    justify-content: center;
}
.items{
  width: 150px;
  height: 100px;
  border: 1px solid grey;
}
</style>