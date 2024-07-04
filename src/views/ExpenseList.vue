  <template>
    <div class="expensetable">
    <div class="header">
    <h1>
      Expenses
    </h1>
    <input class="search" type="search" v-model="searchQuery" placeholder="Search expense..." />
    <router-link to="/addexpense"><button>New Expense + </button></router-link>
    </div>
    <table border=".5" v-if="filteredExpenses.length">
      <thead>
        <tr>
          <th>Id</th>
          <th>Expense Name</th>
          <th>Cost</th>
          <th>Action</th>
        </tr>
      </thead>
      <tr v-for="item in filteredExpenses" :key="item.id">
        <td align="center">{{ item.id }}</td>
        <td align="center">{{ item.expensename }}</td>
        <td align="center">{{ item.cost }}</td>
        <td>
          <button
            class="main-btn"
            v-if="!showInnerButtons"
            @click="showInnerButtons = true"
          >
            Action
          </button>
          <div class="inner-btns" v-else>
            <router-link to="/expense/"><button class="updete">Edit</button></router-link>
            <button class="delete" v-on:click="deleteItem(item.id)">
              Delete
            </button>
          </div>
        </td>
      </tr>
    </table>
    <p v-else>No expense match your search option!</p>
  </div>
    <div><router-view /></div>
</template>

<script>
import axios from "axios";
export default {
  name: "expensesPage",
  data() {
    return {
      expensename: "",
      expenses: [],
      showInnerButtons: false,
      searchQuery: "",
      error: null
    };
  },
async created(){
    // fetch('/data/db.json')
    let result = await axios.get("http://localhost:3000/expenses");
      this.expenses = result.data;
   },
  mounted(){
    this.fetchData();
  },
  computed: {
    //searching logic
    filteredExpenses() {
        return this.expenses.filter(filteredExpenses1 => 
        filteredExpenses1.id == this.searchQuery ||
        filteredExpenses1.expensename.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  
  methods:{
    async fetchData(){
      try{
      const response = await axios.get('/db.json');
      this.expenses = response.data;
    } catch(error){
      console.error('Error fetching data:',error);
    }
    },
    async deleteItem(id){
      this.expenses = this.expenses.filter(item => item.id !== id);
      await axios.delete(`http://localhost:3000/expenses/${id}`);
    },
    showInnerBtns(id){
      console.log("my id is", id);
    }
  }
  };
</script>

 <style scoped>
 .search{
  border: #007bff 1px solid;
  border-radius: 2px;
  background: transparent;
  padding: 3px;
 }
.expensetable {
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 20px;
  background-color: rgb(248, 238, 248);
}
tr:nth-child(even){
    background-color: #f2f2f2; /*Light grey*/
}
tr:nth-child(odd){
    background-color: #ffffff; /*White*/
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.header button{
  border:#1f155b 1px solid;
  padding: 5px;
  font-weight: 500;
  border-radius: 3px;
  background: rgb(235, 148, 195);
  border:#1f155b 1px solid;
  color: #1f155b;
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
th {
  background: #d3a5d4;
  padding: 10px;
}
td {
  padding: 10px;
  height: auto;
  align-content: center;
}
table .main-btn {
  border: 14px;
  padding: 5px;
  border-radius: 3px;
  color: #fff;
  background: #007bff;
  border: #007bff 1px solid;
  cursor: pointer;
}
table .inner-btns {
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 50px;
}
table .updete {
  /* border: 14px; */
  padding: 5px;
  border-radius: 3px;
  background: #007bff;
  border: #007bff 1px solid;
  cursor: pointer;
}
table .updete a {
  text-decoration: none;
  color: #fff;
}
table .delete {
  border-radius: 3px;
  border: #dc3545 1px solid;
  background: #dc3545;
  color: #fff;
  padding: 5px;
  cursor: pointer;
}
table .delete a {
  font-size: 14px;
}
</style>