  <template>
  <div class="prodtable">
    <h1 align="center">Hello {{ name }}, Welcome on Products Page</h1>
  <table border=".5">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Cartegory</th>
        <th>Cost</th>
        <th>Action</th>
      </tr>
    </thead>
    <tr v-for="item in Products" :key="item.id">
      <td align="center">{{ item.id }}</td>
      <td align="center">{{ item.name }}</td>
      <td align="center">{{ item.cartegory }}</td>
      <td align="center">{{ item.cost }}</td>
      <td>
        <button class="updete">
          <router-link :to="'/update/' + item.id">Update</router-link>
        </button>
        <button class="delete" v-on:click="deleteProduct(item.id)">
          Delete
        </button>
      </td>
    </tr>
  </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home-Page",
  data() {
    return {
      name: "",
      Products: [],
    };
  },

  methods: {
    async deleteProduct(id) {
      let result = await axios.delete("http://localhost:3000/Products/" + id);
      console.warn(result);
      if (result == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/Products");
      console.warn(result);
      this.Products = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>

 <style scoped>
.prodtable{
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 20px;
}
table{
  border-collapse: collapse;

}
th{
  background: #d3a5d4;
  padding: 10px;
}
td {
  padding: 10px;
}
/*
tr {
  justify-content: center;
}
th {
  height: 40px;
  background: #ca25cf;
  color: black;
}
td {
  width: 100%;
  height: auto;
  padding: 8px;
  align-content: center;
  background-color: #f3d5ec;
} */
/*additional style table*/
/* table .updete {
  border: 14px;
  padding: 5px;
  border-radius: 3px;
  background: rgb(214, 20, 127);
}
table .updete a {
  text-decoration: none;
  color: #fff;
}
table .delete {
  border-radius: 2px;
  background: red;
  padding: 5px;
  border-radius: 3px;
} */
/* table .delete a {
  font-size: 14px;
} */
</style>