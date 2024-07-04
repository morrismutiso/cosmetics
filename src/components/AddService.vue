<template>
    <form class="newprod" @submit.prevent="addProduct">
      <img class="logo" alt="Vue logo" src="@/assets/images/logo.jpeg" />
      <h3>Add New Service</h3>
      <input type="text" name="name" placeholder="Expense" v-model="name" required>
      <input type="number" name="cost" placeholder="Cost" v-model.number="cost" required>
  
      <button type="submit" v-on:click="addService">Add Service</button>
    </form>
    <div><router-view /></div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: "AddService",
    data() {
      return {
          name :'',
          cost: null,
        }
    },
  methods: {
    async addService() {
        this.currentDate = this.formattedDate;
     await axios.post('http://localhost:3000/services', {
        name: this.name,
        cost: this.cost,
      })
      .then(() => {
        this.$router.push('/services'); // Redirect to expenses list after adding
      })
      .catch(error => {
        console.error('Error adding service', error);
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
  