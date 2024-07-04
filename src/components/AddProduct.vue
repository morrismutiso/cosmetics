<template>
  <form class="newprod" @submit.prevent="addProduct">
    <img class="logo" alt="Vue logo" src="@/assets/images/logo.jpeg" />
    <h3>Register New Product</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required>

    <label for="cartegoryname">Category:</label>
    <select id="cartegoryname" v-model="selectedCategory" required>
      <option v-for="cartegoryname in productcartegory" :key="cartegoryname.id" :value="cartegoryname.cartegoryname">{{ cartegoryname.cartegoryname }}
      </option>
    </select>
    <label for="cost">Cost:</label>
    <input type="number" id="cost" v-model.number="cost" required>

    <button type="submit">Add Product</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: "AddProduct",
  data() {
    return {
        name: '',
        selectedCategory: '',
        // cartegoryname: '',
        productcartegory: [],
        cost: null
      }
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      axios.get("http://localhost:3000/productcartegory") // Assuming /categories endpoint in db.json
        .then(response => {
          this.productcartegory = response.data;
        })
        .catch(error => {
          console.error('Error fetching categories', error);
        });
    },
    addProduct() {
      axios.post("http://localhost:3000/Products", {
        name: this.name,
        item: this.selectedCategory,
        cost: this.cost,
        // alert('Product added successfully!');
      })
      
        .then(() => {
          this.$router.push('/products'); // Redirect to product list after adding
        })
        .catch(error => {
          console.error('Error adding product', error);
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
