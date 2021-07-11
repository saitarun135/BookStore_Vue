<template>
<div class="main">
    <div class="content">
             <h5>My Cart({{books.length-1}})</h5>
        </div>
    <div v-for="book in books" :key="book.id"  class="container">
       
    <div class="mid-section">
        <img v-bind:src="book.file"  alt="not found">
        <p class="title-section">{{book.name}}</p>
    </div>
    <div class="author-section">
        <p>by {{book.author}}</p>
    </div>
    <div class="price-section">
        <h6>Rs.{{book.price}}</h6>
    </div>
    <div class="btn-grps">
        <button class="btn" type="submit" >Place Order</button>
    </div>
    <button class="close-btn" v-if="flag"  @click="handlesubmit();Togglebtn();" type="submit">close</button>
    </div>
</div>
</template>
<script>
import service from '../service/User'
export default{
   data(){
       return {
            flag:true,
            booksCount:0,
            books: [{
                id: 0,
                file: 'https://images-na.ssl-images-amazon.com/images/I/41MdP5Tn0wL._SX258_BO1,204,203,200_.jpg',
                name: 'Dont Make me think',
                author: 'Sai',
                price: '1500'
            },]
       }
   },
   methods:{
       handlesubmit(){
           service.userDisplayCart().then(response=>{
                 this.books.push(...response.data);  
               return response;
           })
       },
         Togglebtn() {
            this.flag = !this.flag;
        },
   }
}
</script>
<style lang="scss" scoped>
@import "@/styles/Cart.scss";
</style>