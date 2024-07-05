<template>
    <form class="newprod" @submit.prevent="addProduct">
      <img class="logo" alt="Vue logo" src="@/assets/images/logo.jpeg" />
      <h3>Add New Expense</h3>
      <input type="text" name="expensename" placeholder="Expense" v-model="expensename" required>
      <input type="number" name="cost" placeholder="Cost" v-model.number="cost" required>
  
      <button type="submit" v-on:click="addExpenses">Add Expense</button>
    </form>
    <div><router-view /></div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: "AddExpense",
    data() {
      return {
          expensename:'',
          cost: null,
          date: ''
        }
    },
//     computed: {
//     formattedDate() {
//       return this.formatDate(this.currentDate);
//     },
//   },
  methods: {
    // formatDate(date) {
    //   const day = String(date.getDate()).padStart(2, "0");
    //   const month = String(date.getMonth() + 1).padStart(2, "0");
    //   const year = String(date.getFullYear());
    //   return `${year}-${month}-${day}`;
    // },
    async addExpenses() {
        this.currentDate = this.formattedDate;
      alert("Expense added succesfully");
        // Set date to current timestamp using Date.now()
     await axios.post('http://localhost:3000/expenses', {
        expensename: this.expensename,
        cost: this.cost,
        // date: this.currentDate,
      })
      .then(() => {
        this.$router.push('/expenses'); // Redirect to expenses list after adding
      })
      .catch(error => {
        console.error('Error adding expense', error);
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
  