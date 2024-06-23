<template>
    <form class="add">
      <img class="logo" alt="Vue logo" src="@/assets/images/logo.jpeg" />
      <h3>Register Product</h3>  
      <input type="text" name="name" placeholder="Enter name" v-model="products.name" />
      <input type="text" name="cartegory" placeholder="Enter cartegory" v-model="products.cartegory" />
      <input type="text" name="cost" placeholder="Enter cost" v-model="products.cost" />
      <button type="button" v-on:click="addProduct">Add new Product</button>
    </form>
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