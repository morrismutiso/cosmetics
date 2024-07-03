  <template>
    <div class="prodtable">
    <div class="header">
    <h1>
     Sales list - Services
    </h1>
    <input class="search" type="search" v-model="searchQuery" placeholder="Search service sale..." />
    <router-link to="/saleslist"><button style="background:#1f155b;color:#fff">Switch To Products Sales-List</button></router-link>
    </div>
    <table border=".5" v-if="filteredServiceSale.length">
      <thead>
        <tr>
          <th>Id</th>
          <th>Date</th>
          <th>Service Name</th>
          <th>Cost</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tr v-for="item in filteredServiceSale" :key="item.id">
        <td align="center">{{ item.id }}</td>
        <td align="center">{{ item.date }}</td>
        <td align="center">{{ item.name }}</td>
        <td align="center">{{ item.cost }}</td>
        <td align="center">{{ item.amount }}</td>
      </tr>
    </table>
    <p v-else>No sales List match your search option!</p>
  </div>
    <div><router-view /></div>
</template>

<script>
import axios from "axios";
export default {
  name: "servicesList",
  data() {
    return {
      name: "",
      salesServices: [],
      searchQuery: "",
      error: null
    };
  },
  async created(){
    let result = await axios.get("http://localhost:3000/salesServices");
      this.salesServices = result.data;
   },
     mounted(){
    this.fetchData();
  },
      computed: {
    //searching logic
    filteredServiceSale() {
        return this.salesServices.filter(salesServices1 => 
        salesServices1.id == this.searchQuery ||
        salesServices1.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
 methods:{
    async fetchData(){
      try{
      const response = await axios.get("http://localhost:3000/salesServices");
      this.salesServices = response.data;
    } catch(error){
      console.error('Error fetching data:',error);
    }
    },
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
.prodtable {
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 20px;
  background-color: rgb(248, 238, 248);
}
tr:nth-child(even){
    background-color: #f2f2f2; 
}
tr:nth-child(odd){
    background-color: #ffffff; 
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