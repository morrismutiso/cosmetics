  <template>
  <div class="user-table">
    <div class="header">
    <h1>
      Users
    </h1>
    <input class="search" type="search" v-model="searchQuery" placeholder="Search users..." />
    <!-- <button>New User + </button> -->
    </div>
  <table border=".5" v-if="filteredUsers.length">
    <thead>
      <tr>
        <th>Id</th>
        <th>User Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tr v-for="item in filteredUsers" :key="item.id">
      <td align="center">{{ item.id }}</td>
      <td align="center">{{ item.name }}</td>
      <td>
        <button
            class="main-btn"
            v-if="!showInnerButtons"
            @click="showInnerButtons = true"
          >
            Action
          </button>
          <div class="inner-btns" v-else>
            <button class="updete">
              <router-link :to="'/update/' + item.id">Update</router-link>
            </button>
            <button class="delete" v-on:click="deleteItem(item.id)">
              Delete
            </button>
          </div>
      </td>
    </tr>
  </table>
   <p v-else>No users match your search option!</p>
   <!-- <p v-if="error">{{ error }}</p> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UsersPage",
  data() {
    return {
      name: "",
      user: [],
      showInnerButtons: false, 
      searchQuery: "",
      error: null
  
    };
  },
  async created(){
    let result = await axios.get("http://localhost:3000/user");
      this.user = result.data;
   },
  mounted(){
    this.fetchData();
  },
  computed: {
    //searching logic
    filteredUsers() {
        return this.user.filter(user1 => 
        user1.id == this.searchQuery ||
        user1.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },

  methods:{
    async fetchData(){
      try{
      const response = await axios.get("http://localhost:3000/user");
      this.user = response.data;
    } catch(error){
      this.error = "Error in fetching data!"
      console.error('Error fetching data:',error);
    }
    },
    async deleteItem(id){
      this.user = this.user.filter(item => item.id !== id);
      await axios.delete(`http://localhost:3000/user/${id}`);
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
.user-table {
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