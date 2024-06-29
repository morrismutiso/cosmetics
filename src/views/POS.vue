<script>
import axios from "axios";
export default {
  data() {
    return {
      Products: [],
      selected: 0,
      quantity: 1,
      total: 0,
      payment: 0,
      payment1: 0,
      balance: 0,
      prodName: "",
      id: null,
      currentDate: new Date(),
    };
  },
  async created(){
    let result = await axios.get("http://localhost:3000/Products");
    this.Products = result.data;
   },
     mounted(){
    this.fetchData();
  },
  computed: {
    formattedDate() {
      return this.formatDate(this.currentDate);
    },
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
    payCash(){
        this.balance = this.total - (this.payment + this.payment1);
        return this.balance;
    },
    payMpesa(){
        this.balance = this.total - (this.payment + this.payment1);
        return this.balance;
    },
    getProductDetails(event){
        this.product(event);
        if(event){
            this.getInnerHTML(event);
        }
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
    formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());
        return `${year}-${month}-${day}`;
    },
    async addSale() {
      // Set date to current timestamp using Date.now()
      this.currentDate = this.formattedDate;
      try {
        // Send a POST request to add sale to your sales table
        await axios.post('http://localhost:3000/sales',{
            id: null,
            date: this.currentDate,
            name: this.prodName,
            cost: this.selected,
            quantity: this.quantity,
            amount: this.total,
        });

        // Optionally reset the form or perform any other action after successful addition
        this.selected = 0
        this.quantity = 1
        this.total = 0
        this.payment = 0
        this.payment1 = 0
        this.balance = 0
        this.prodName = ""
        this.date = ''
      } catch (error) {
        console.error('Error adding sale:', error);
      }
    }
  }
};
</script>

<template>
    <div class="sales">
        <form class="salesform" @submit.prevent="addSale">
            <div class="salesdiv1">
                <h3>POINT OF SALE (POS)</h3>
                <input type="text" :value="prodName" style="display:none">
                <date-picker></date-picker>
                <select v-model="selected" @change="getProductDetails" required>
                    <option value= "" disabled>select a product</option>
                    <option v-for="item in Products" :key="item.id" :value="item.cost" ref="productName">{{ item.name }}</option>
                </select>
                <div class="innerdiv1">
                    <div class="innerinput">
                        <label for="">QTY</label>
                        <input type="number" @change="getProductDetails()" v-model="quantity" required>
                    </div>
                    <div class="innerinput">
                        <label for="">COST</label>
                        <input type="number" :value="this.selected" required>
                    </div>
                </div>
                <label for="">TOTAL</label>
                <input type="text" :value="this.total" required>
            </div>
            <div class="salesdiv2">
                <h3>PAYMENT DETAILS</h3>
                <div class="topay">
                    <label for="">CASH</label>
                    <input type="number" @input="payCash" v-model="payment" required>
                </div>
                <div class="topay">
                    <label for="">MPESA</label>
                    <input type="number" @input="payMpesa" v-model="payment1" required>
                </div>
                <div class="innerdiv2">
                    <label for="">BALANCE</label>
                    <input type="number" :value="balance" required>
                </div>
                <button type="submit">Complete</button>
            </div>
        </form>
    </div>
</template>
<style scoped>
.salesform{
    display: flex;
    gap: 10px;
}
.sales{
    display: flex;
    gap: 10px;
    justify-content: center;
    height: 100vh;
    align-items: center;
    background-color: rgba(97, 187, 160, 0.2);
}
.sales select{
    width: 200px;
}
.salesdiv1, .salesdiv2{
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    border: rgb(104, 250, 206,0.6) 2px solid;
    border-radius: 5px;
    background-color: rgb(104, 250, 206,0.2);
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
    height: 10px;
}
button{
    width: 100px;
    background: #5e2548;
    border: none;
    border-radius: 3px;
    padding: 5px;
    color: aqua;
    cursor: pointer;
}
.paymentOption{
    display: flex;
}
</style>