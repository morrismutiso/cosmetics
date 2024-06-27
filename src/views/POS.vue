<script>
import axios from "axios";
export default {
  data() {
    return {
      Products: [],
      selected: 0,
      quantity: 1,
      total: 0,
      payment: null,
      balance: 0,
      prodName: "",
    };
  },
  async created(){
    let result = await axios.get("http://localhost:3000/Products");
    this.Products = result.data;
   },
     mounted(){
    this.fetchData();
  },
  methods:{
    async fetchData(){
      try{
      const response = await axios.get("http://localhost:3000/Products");
      this.Products = response.data;
    } catch(error){
      console.error('Error fetching data:',error);
    }
    },
    payDue(){
        this.balance = this.total - this.payment;
        return this.balance;
    },
    getProductDetails(event){
        this.product();
        // this.getInnerHTML(event)
        console.log("my event",event);
    },
    product(){
        this.total = this.quantity * this.selected;
        return this.total;
    },
    getInnerHTML(event) {
      let selectedOptionElement = event.target.options[event.target.selectedIndex];

    // Get the innerHTML of the selected option
      this.prodName = selectedOptionElement.innerHTML;
    },
  }
};
</script>


<template>
    <div class="sales">
        <div class="salesdiv1">
            <div>{{ prodName }}kkkk</div>
            <select v-model="selected" @change="getProductDetails(event)">
                <option value= "" disabled>select a product</option>
                <option v-for="item in Products" :key="item.id" :value="item.cost" ref="productName">{{ item.name }}</option>
            </select>
            <div class="innerdiv1">
                <div class="innerinput">
                    <label for="">QTY</label>
                    <input type="number" @change="getProductDetails()" v-model="quantity">
                </div>
                <div class="innerinput">
                    <label for="">COST</label>
                    <input type="number" :value="this.selected">
                </div>
            </div>
            <label for="">TOTAL</label>
            <input type="text" :value="this.total">
        </div>
        <div class="salesdiv2">
            <div class="topay">
                <label for="">PAYMENT</label>
                <input type="number" @input="payDue" v-model="payment">
                <form class="paymentOption">
                    MPESA <input type="radio" name="pay" v-model="pick" :value="first" />
                    CASH <input type="radio" name="pay" v-model="pick" :value="second" />
                </form>
            </div>
            <div class="innerdiv2">
                <label for="">BALANCE</label>
                <input type="number" :value="balance">
            </div>
            <button>Complete</button>
        </div>
    </div>
</template>
<style scoped>
.sales{
    display: flex;
    gap: 10px;
    /* background-color: yellow; */
    justify-content: center;
    height: 100vh;
    align-items: center;
}
.sales select{
    width: 200px;
}
.salesdiv1, .salesdiv2{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.innerdiv1, .innerdiv2{
    display: flex;
    gap: 10px;
}
.innerinput{
    display: flex;
    flex-direction: column;
    width: 100px;
}
.topay{
    display: flex;
    flex-direction: column;
    width: 100px;
    justify-items: center;
}
.salesdiv2{
    display: flex;
    flex-direction: column;
    /* background-color: green; */
    justify-items: center;
}
.innerdiv2{
    flex-direction: column;
}
.innerdiv2 input{
    width: 100px;
}
button{
    width: 100px;
}
.paymentOption{
    display: flex;
}
</style>