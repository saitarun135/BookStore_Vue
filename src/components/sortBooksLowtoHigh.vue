<template>
<div class="carddisplay-section">
    <div v-for="book in books" v-bind:key="book.id" class="card book">
        <div class="image-section">
            <div class="image-container">
                <img  v-bind:src="book.file" />
            </div>
        </div>
        <div class="title-section">
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
    </div>
    </div>

</template>

<script>
import service from '../service/User'

export default {
    created() {
            service.userDisplayBooksLowtoHigh().then(response => {
                this.books.push(...response.data);  
                console.log(this.response);   
            })
        },
    data() {
        return {
            result: 0,
            authorPrefix: 'by',
            pricePrefix: 'Rs.',
            defaultStrikePrice: '(2000)',
            buttonValue: 'close',
             buttonBag: 'Add to Bag',
            buttonWishlist:'wishlist',
            buttonAddedBag:'Added to Bag',
            flag: true,
            state: true,
            clickedCard: '',
            addedBooks:[],
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
         toggle(id) {  
            this.clickedCard = id;
            // this.card.content = this.notes.filter((note) => note.id === id);
          console.log(this.clickedCard);
        },
    
        flip() {
            this.state = !this.state;
        },
        Togglebtn() {
            this.flag = !this.flag;
        },
        // mounted() {
        //     service.userDisplayBooksLowtoHigh().then(response => {
        //         this.books.push(...response.data);  
        //         console.log(this.response);   
        //     })
        // },
        handleCart(bookId){
            let userData={
                id: bookId,
            }
            service.userUpdateCart(userData).then(response=>{
                return response;
            })
        },
        removeFromCart(bookId){
            let userData={
                id:bookId,
            }
            service.userRemoveFromCart(userData).then(response=>{
                return response;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/DisplayBooks.scss";
</style>
