<template>
    <form class="update">
      <p>Update Expense</p>
      <input type="text" name="name" placeholder="Enter name" v-model="expenses.name" />
      <input type="text" name="cost" placeholder="Enter cost" v-model="expenses.cost" />
      <button type="button" v-on:click="updateExpense">Update Expense</button>
    </form>
    <div><router-view /></div>
</template>

<script>
import axios from 'axios';
export default{

       data()
    {
      return{
        expenses:{
        expensename:'',
        cost:''
        }

      }
    },
    methods:{
      async updateExpense()
      {
        console.warn(this.products)
        const result = await axios.put("http://localhost:3000/expenses/"+this.$route.params.id,{
          name:this.expenses.name,
          cost:this.expenses.cost
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
//         .then(() => {
//             this.$router.push('/expenses');
//         })
//       }
//     },
//      async mounted()
//     {
//       let user = localStorage.getItem('user-info');
//       if (!user) {
//         this.$router.push({name:'SignUp'})
//       }
//       const result = await axios.get('http://localhost:3000/Products/'+this.$route.params.id)
//       //console.warn(this.$route.params.id)
//       console.warn(result.data)
//       this.products=result.data
//     }
// }
</script>