<script setup>
import FooterPage from '@/components/FooterPage.vue';
</script>

<template>
  <div class="homediv">
    <div class="topview">
      <div class="inputdiv">
        <input type="search" class="search" style="border:none"/>
        <img src="@/assets/images/search.png" style="width:20px;height:20px;padding:2px">
        </div>
      <div class="profile">
        <img src="@/assets/images/profile.png" />
      </div>
    </div>
    <div class="centerview">
      <img src="@/assets/images/1.jpg" />
    </div>
    <div class="bottomview">
      <div class="items">
        <img src="@/assets/images/perfumes.png" alt="" />
        <span>Perfume</span>
      </div>
      <div class="items">
        <img src="@/assets/images/oral.jpeg" alt="" />
        <span>Oral Care</span>
      </div>
      <div class="items">
        <img src="@/assets/images/body.png" alt="" />
        <span>Body Care</span>
      </div>
      <div class="items">
        <img src="@/assets/images/sun.png" alt="" />
        <span>Sun Care</span>
      </div>
      <div class="items">
        <img src="@/assets/images/skin.png" alt="" />
        <span>Skin Care</span>
      </div>
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.topview .inputdiv{
    height: 25px;
    width: 200px;
    margin: 0 auto;/* to center search input button*/
    border-radius: 2px;
    display: flex;
    align-items: center;
    /* background-color: green; */
    border: 1px solid rgb(102, 91, 91);
}
.topview input{
    height: 100%;
    width: 100%;
    border-radius: 2px;
    outline: none;
    border: none;
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
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; 
  align-items: center;  */
  width: 150px;
  height: 100px;
  border: rgb(104, 250, 206,0.6) 2px solid;
  background-color: rgb(104, 250, 206,0.2);
}
.items img{
  width: 100%;
  height: 100%;
}
</style>