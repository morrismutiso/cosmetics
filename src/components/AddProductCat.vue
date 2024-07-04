<template>
    <form class="newprod" @submit.prevent="addProduct">
      <img class="logo" alt="Vue logo" src="@/assets/images/logo.jpeg" />
      <h3>Add New Product Cartegory</h3>
      <input type="text" name="cartegoryname" placeholder="Product Cartegory" v-model="cartegoryname" required>
  
      <button type="submit" v-on:click="addProductCartegory">Add Product Cartegory</button>
    </form>
    <div><router-view /></div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: "AddProductCartegory",
    data() {
      return {
          cartegoryname:'',
        }
    },

  methods: {
    async addProductCartegory() {
     await axios.post('http://localhost:3000/productcartegory', {
        cartegoryname: this.cartegoryname,
      })
      .then(() => {
        this.$router.push('/prodcat'); // Redirect to Product cartegory list after adding
      })
      .catch(error => {
        console.error('Error adding product cartegory', error);
      });
    }
  }
};
</script>
  
  <style scoped>
  .newprod {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100vh;
    background-color: rgb(248, 238, 248);
  }
  
  .newprod img {
    width: 84px;
    height: 84px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .newprod input {
    width: 300px;
    height: 40px;
    border: 1px solid pink;
  }
  
  .newprod button {
    width: 300px;
    height: 40px;
    border: 1px solid pink;
    border-radius: 5px;
    background: skyblue;
    color: #fff;
    cursor: pointer;
  }
  </style>
  