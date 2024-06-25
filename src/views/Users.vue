  <template>
  <div class="user-table">
    <div class="header">
    <h1>
      Users
    </h1>
    <button>New User + </button>
    </div>
  <table border=".5">
    <thead>
      <tr>
        <th>Id</th>
        <th>User Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tr v-for="item in user" :key="item.id">
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
            <button class="delete" v-on:click="deleteProduct(item.id)">
              Delete
            </button>
          </div>
      </td>
    </tr>
  </table>
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
    };
  },

  methods: {
    async deleteProduct(id) {
      let result = await axios.delete("http://localhost:3000/user/" + id);
      console.warn(result);
      if (result == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "Users-Page" });
      }
      let result = await axios.get("http://localhost:3000/user");
      console.warn(result);
      this.user = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>

 <style scoped>
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