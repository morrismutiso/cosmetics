<template>
    <div class="reportContainer">
        <h1>Reports</h1>
        <form class="reportbyProducts" @submit.prevent="generateProductsReport">
            <span>By Products</span>
            From:<input type="date" v-model="startDate" required>
            To:<input type="date" v-model="endDate" required>
            <button type="submit">Generate</button>
        </form>
        <form class="reportbyServices" @submit.prevent="generateServiceReport">
            <span>By Services</span>
             From:<input type="date" v-model="startDate1" required>
            To:<input type="date" v-model="endDate1" required>
            <button type="submit">Generate</button>
        </form>
        <form class="reportbyExpense" @submit.prevent="generateExpenseReport">
            <span>By Expenses</span>
             From:<input type="date" v-model="startDate2" required>
            To:<input type="date" v-model="endDate2" required>
            <button type="submit">Generate</button>
        </form>
    </div>
</template>


// <script>
import axios from "axios";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
export default {
  name: "ReportsPage",
  data(){
  return {
    startDate: '',
    endDate: '',
    startDate1: '',
    endDate1: '',
    startDate2: '',
    endDate2: '',
    salesProducts: [],
    salesServices: [],
    expenses: [],
  }
},
methods: {
   async generateProductsReport(){
    try {
        const response = await axios.get('http://localhost:3000/salesProducts');
        this.salesProducts = response.data.filter(salesProducts => 
        new Date(salesProducts.date) >= new Date(this.startDate) && new Date(salesProducts.date) <= new Date(this.endDate));
        const doc = new jsPDF();
        const columns = ['No', 'Date', 'Name', 'Cost', 'Quantity', 'Amount'];
        // Map data to rows array
        const rows = this.salesProducts.map(salesProducts => [salesProducts.id, salesProducts.date, salesProducts.name, salesProducts.cost, salesProducts.quantity, salesProducts.amount]);
        // Set content for PDF
        doc.setFontSize(18);
        doc.text('PAWAMWANI COSMETICS', doc.internal.pageSize.width /2,15, {align: 'center'});
        doc.setFontSize(14);
        doc.text('Sales Report - By Product', doc.internal.pageSize.width /2,22, {align: 'center'});
        doc.setFontSize(14);
        doc.text(`From Date: ${this.startDate} to ${this.endDate}`, doc.internal.pageSize.width /2,28, {align: 'center'});
        doc.autoTable({
            startY: 30,
            head: [columns],
            body: rows,
        });
        // Convert the PDF to a base64 string
        const pdfOutput = doc.output('datauristring');
        // Set iframe src with PDF content
        const newTab = window.open();
        newTab.document.body.innerHTML = `<iframe src=${pdfOutput} style="width: 100%; height: 100%; border: 1px solid #ccc;"></iframe>`;
        // this.$refs.pdfViewer.src = pdfOutput;
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
},
   async generateServiceReport(){
    try {
        const response = await axios.get('http://localhost:3000/salesServices');
        this.salesServices = response.data.filter(salesServices => 
        new Date(salesServices.date) >= new Date(this.startDate1) && new Date(salesServices.date) <= new Date(this.endDate1));
        const doc = new jsPDF();
        const columns = ['No', 'Date', 'Name', 'Cost'];
        // Map data to rows array
        const rows = this.salesServices.map(salesServices => [salesServices.id, salesServices.date, salesServices.name, salesServices.cost]);
        // Set content for PDF
        doc.setFontSize(18);
        doc.text('PAWAMWANI COSMETICS', doc.internal.pageSize.width /2,15, {align: 'center'});
        doc.setFontSize(14);
        doc.text('Sales Report - By Services', doc.internal.pageSize.width /2,22, {align: 'center'});
        doc.setFontSize(14);
        doc.text(`From Date: ${this.startDate1} to ${this.endDate1}`, doc.internal.pageSize.width /2,28, {align: 'center'});
        doc.autoTable({
            startY: 30,
            head: [columns],
            body: rows,
        });
        // Convert the PDF to a base64 string
        const pdfOutput = doc.output('datauristring');
        // Set iframe src with PDF content
        const newTab = window.open();
        newTab.document.body.innerHTML = `<iframe src=${pdfOutput} style="width: 100%; height: 100%; border: 1px solid #ccc;"></iframe>`;
        // this.$refs.pdfViewer.src = pdfOutput;
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
   },
    async generateExpenseReport(){
    try {
        const response = await axios.get('http://localhost:3000/expenses');
        this.expenses = response.data.filter(expenses => 
        new Date(expenses.date) >= new Date(this.startDate2) && new Date(expenses.date) <= new Date(this.endDate2));
        const doc = new jsPDF();
        const columns = ['No', 'Date', 'Expense Name', 'Cost', 'Quantity', 'Amount'];
        // Map data to rows array
        const rows = this.expenses.map(expenses => [expenses.id, expenses.date, expenses.expensename, expenses.cost]);
        // Set content for PDF
        doc.setFontSize(18);
        doc.text('PAWAMWANI COSMETICS', doc.internal.pageSize.width /2,15, {align: 'center'});
        doc.setFontSize(14);
        doc.text('Sales Report - By Expenses', doc.internal.pageSize.width /2,22, {align: 'center'});
        doc.setFontSize(14);
        doc.text(`From Date: ${this.startDate2} to ${this.endDate2}`, doc.internal.pageSize.width /2,28, {align: 'center'});
        doc.autoTable({
            startY: 30,
            head: [columns],
            body: rows,
        });
        // Convert the PDF to a base64 string
        const pdfOutput = doc.output('datauristring');
        // Set iframe src with PDF content
        const newTab = window.open();
        newTab.document.body.innerHTML = `<iframe src=${pdfOutput} style="width: 100%; height: 100%; border: 1px solid #ccc;"></iframe>`;
        // this.$refs.pdfViewer.src = pdfOutput;
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
   }
}
}
</script>

<style scoped>
.reportContainer{
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 20px;
    display: flex;
    align-items: center;
    font-size: 26px;
    line-height: 22px;
    background-color: rgb(104, 250, 206,0.2);
}
.reportbyProducts, .reportbyServices, .reportbyExpense{
    display: flex;
    gap: 10px;
    background: #fff;
    padding: 20px;
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
button:hover{
    color: #fff;
}
</style>