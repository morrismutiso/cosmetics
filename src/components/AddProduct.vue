<template>
  <div class="newprod">
      <img class="logo" alt="Vue logo" src="@/assets/images/logo.jpeg" />
      <h3>Register New Product</h3>  
      <input type="text" name="name" placeholder="Product name" v-model="products.name" />
      <input type="text" name="cartegory" placeholder="Cartegory" v-model="products.cartegory" />
      <input type="text" name="cost" placeholder="Estimated cost" v-model="products.cost" />
      <button type="button" v-on:click="addProduct">Add new Product</button>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name:"Add-Page",
    data()
    {
      return{
        products:{
          name:'',
          cartegory:'',
          cost:''
        }

      }
    },
    methods:{
      async addProduct()
      {
        console.warn(this.products);
        const result = await axios.post("http://localhost:3000/Products",{
          name:this.products.name,
          cartegory:this.products.cartegory,
          cost:this.products.cost
        });
        if(result.status==201)
        {
          this.$router.push({name:"Products"});
        }
        console.warn("result",result)
      }
    },
     mounted()
    {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({name:'SignUp'})
      }
    }
}
</script>

<style scoped>
.newprod{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100vh;
  background-color: rgb(248, 238, 248);
}
.newprod img{
  width: 84px;
  height: 84px;
  border-radius: 50%;
  overflow: hidden;
}
.newprod input{
    width: 300px;
    height: 40px;
    border: 1px solid pink;
  }
  .newprod button{
    width: 300px;
    height: 40px;
    border: 1px solid pink;
    border-radius: 5px;
    background: skyblue;
    color: #fff;
    cursor: pointer;
  }
</style>