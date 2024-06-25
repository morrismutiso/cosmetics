<template>
  <div class="aboutpage">
    <img src="../assets/images/logo.jpeg" alt="">
    <div class="about">
    <h1>Pawamwani Beauty Shop Management System</h1>
    <ol>
        <li>
            <h3>Products</h3>
            <p>Pawamwani is the leading Beauty and Cosmetics Supplier and also in terms of Services delivery in the town.</p></li>
        <li>
            <h3>Services</h3>
            <p>Pawamwani is the leading Beauty and Cosmetics Supplier and also in terms of Services delivery in the town.</p></li>
        <li>
            <h3>Attendants Reviews</h3>
            <p>Pawamwani is the best Cosmetics Agent with the best  Products and Services delivery in the town.</p></li>
        <li>
            <h3>Customer Reviews</h3>
            <p>Pawamwani is the leading Beauty and Cosmetics Supplier and also in terms of Services delivery in the town.</p></li>
    </ol>
    </div>
    
    <router-link to="/author"><button>About Author</button></router-link>
  </div>
  <div><router-view /></div>
</template>

<style scoped>
.aboutpage {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;     /*Vertical centering*/
    background-color: rgb(248, 238, 248);
    gap: 20px;
}
.aboutpage button{
    width: 100px;
    border: #300e31 1px solid;
    background: #f368f8;
    border-radius: 3px;
    padding: 8px;
}
.aboutpage button:hover{
    color: #fff;
    cursor: pointer;
}
.aboutpage img{
    margin-top: 10px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
}
.about{
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    border: rgb(104, 250, 206,0.6) 2px solid;
    border-radius: 5px;
    background-color: rgb(104, 250, 206,0.2);
}
li{
    list-style-type: none;
}
</style>