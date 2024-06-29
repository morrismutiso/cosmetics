<template>
    <div class="reportContainer" v-show="hideReport">
        <h1>Reports</h1>
        <form class="reportbyProducts" @submit.prevent="generateProductsReport">
            <span>By Products</span>
            From:<input type="date" v-model="startDate" required>
            To:<input type="date" v-model="endDate" required>
            <button type="submit">Generate</button>
        </form>
        <form class="reportbyServices" @submit.prevent="generateServicesReport">
            <span>By Services</span>
             From:<input type="date" v-model="startDate1" required>
            To:<input type="date" v-model="endDate1" required>
            <button type="submit">Generate</button>
        </form>
        <form class="reportbyExpense" @submit.prevent="generateServicesReport">
            <span>By Expenses</span>
             From:<input type="date" v-model="startDate1" required>
            To:<input type="date" v-model="endDate1" required>
            <button type="submit">Generate</button>
        </form>
    </div>
    <div v-show="showReport">
        <!-- <iframe :src="pdfUrl" width="100%" style="height:100vh"></iframe> -->
     <iframe ref="pdfViewer" style="width: 100%; height: 500px; border: 1px solid #ccc;"></iframe>
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
    hideReport: true,
    showReport: false,
    // pdfSrc: '',
    sales: [],
  }
},
methods: {
   async generateProductsReport(){
    try {
        const response = await axios.get(`http://localhost:3000/sales?_sort=date&_start=0&_end=10`);
        this.sales = response.data;
        console.log(response.data);
        const doc = new jsPDF();
        const columns = ['No', 'Date', 'Name', 'Cost', 'Quantity', 'Amount'];
        // Map data to rows array
        const rows = this.sales.map(sale => [sale.id, sale.date, sale.name, sale.cost, sale.quantity, sale.amount]);
        // Set content for PDF
        doc.text('PAWAMWANI COSMETICS', 5, 5);
        doc.text('Sales Report - By Product', 10, 10);
        doc.autoTable({
            startY: 20,
            head: [columns],
            body: rows,
        });
        // Convert the PDF to a base64 string
        const pdfOutput = doc.output('datauristring');
        // Set iframe src with PDF content
        //   this.pdfSrc = pdfOutput;
        this.$refs.pdfViewer.src = pdfOutput;
        this.showReport = true;
        this.hideReport = false;
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