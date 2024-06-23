<template>
    <form class="update">
      <p>Update Product</p>
      <input type="text" name="name" placeholder="Enter name" v-model="products.name" />
      <input type="text" name="cartegory" placeholder="Enter cartegory" v-model="products.cartegory" />
      <input type="text" name="cost" placeholder="Enter cost" v-model="products.cost" />
      <button type="button" v-on:click="updateProduct">Update Product</button>
    </form>
</template>

<script>
import axios from 'axios';
export default{

       data()
    {
      return{
        products:{
          name:'',
          cartegory:'',
          cost:''
        }

      }
    },
    methods:{
      async updateProduct()
      {
        console.warn(this.products)
        const result = await axios.put("http://localhost:3000/Products/"+this.$route.params.id,{
          name:this.products.name,
          cartegory:this.products.cartegory,
          cost:this.products.cost
        });
        if(result.status==200)
        {
          this.$router.push({name:"Products"});
        }
      }
    },
     async mounted()
    {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({name:'SignUp'})
      }
      const result = await axios.get('http://localhost:3000/Products/'+this.$route.params.id)
      //console.warn(this.$route.params.id)
      console.warn(result.data)
      this.products=result.data
    }
}
</script>