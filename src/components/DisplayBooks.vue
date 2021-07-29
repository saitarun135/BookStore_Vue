<template>
<div class="carddisplay-section">
    <div class="books-total">
        <h6>Books<span class="items">({{books.length}}items)</span></h6>
    </div>
    <div v-for="book in books" :key="book.id" class="card book" >
        <div class="image-section"  @mouseover="book.hover = true" @mouseleave="book.hover = false">
            <div class="image-container">
                <img  v-bind:src="book.file" />
            </div>
        </div>
        <div class="title-section" >
            {{book.name}}
        </div>
        <div class="author-section">
            by {{book.author}}
        </div>
        <div class="price-section">
            Rs. {{book.price}}<label class="default">(2000)</label>
           
        </div>
      
        <div class="buttons">
            <div class="button-groups"  v-if="!addedBooks.includes(book.id)">
                <button type="submit"  @click="handleCart(book.id);toggle(book.id);addedBooks.push(book.id)"  class="AddBag">Add to Bag</button>
                <button  class="wishlist">wishlist</button>
            </div>
            <div class="AddedBag" v-else>
            <button class="big-btn" @click="removeFromCart(book.id);addedBooks=addedBooks.filter(id=>id!==book.id)">Added to Bag</button>
            </div>
        </div>
        <div class="description" v-if="book.hover">
            <p class="hovered-heading">BookDetails</p>
            {{book.description}}
        </div>
    </div>
</div>
</template>

<script>
import service from '../service/User'
export default {
      mounted() {
        service.userDisplayBooks().then(response => { 
        let data = response.data;
        data.map(function(obj) {
            obj.hover = false;
            return obj;
        });

        this.books.push(...data); 
        return response; 
    })
        },
    data() {
        return {
            isActive:true,
            result: 0,
            authorPrefix: 'by',
            pricePrefix: 'Rs.',
            defaultStrikePrice: '(2000)',
            buttonValue: 'Add to Bag',
            buttonWishlist:'wishlist',
            buttonAddedBag:'Added to Bag',
            flag: true,
            state: true,
            addedBooks:[],
            clickedCard: '',
            books: []
        }
    },
    watch:{
    addedBooks:{
            handler(val){
               this.$emit('update-books-count',val.length) 
             },
             deep:true
          }
        },
    methods: {
        toggleClass: function(event){
            this.isActive = !this.isActive;
            return event;
        },
         toggle(id) {
            this.clickedCard = id;
            console.log(this.clickedCard);
          
        },
        flip() {
            this.state = !this.state;
        },
        Togglebtn() {
            this.flag = !this.flag;
        },
  
        handleCart(bookId){
            let userData={
                id: bookId,
            }
            service.userUpdateCart(userData).then(response=>{
                return response;
            }).catch(error=>{
                alert("error while displaying Books");
                return error;
            })
        },
        removeFromCart(bookId){
            let userData={
                id:bookId,
            }
            service.userRemoveFromCart(userData).then(response=>{
                return response;
            }).catch(error=>{
                alert("error while removing from cart");
                return error;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/DisplayBooks.scss";
</style>
