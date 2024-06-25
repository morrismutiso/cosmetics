<template>
  <div class="aboutpage">
    <img src="../assets/images/logo.jpeg" alt="">
    <div class="list">
    <ol>
        <li>
            <h4>Name: Morris Mutiso</h4>
        </li>
        <li>
            <h4>Phone: 0742 438 499</h4>
        </li>
        <li>
            <h4>Email: morris@test.com</h4>
        </li>
        <li>
            <p>Committed to building expert solutions for local industry</p>
        </li>    
    </ol>
    </div>
    
      <router-link to="/about"><button>About Shop</button></router-link>
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
.list{
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
p{
    font-weight: 500;
    font-size: 18px;
    color: #701674;
}
</style>