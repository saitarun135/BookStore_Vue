<template>
<div class="carddisplay-section">
    <div v-for="book in books" :key="book.id" class="card book">
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
            <button v-if="flag" class="btn-grp" type="submit" @click="handlesubmit();Togglebtn();">close</button>
        </div>
        <div class="buttons">
            <div class="button-groups">
                <button type="button"  @click="toggle(book.id);flip(book.id);"  v-if="state==true" class="AddBag">Add to Bag</button>
                <button v-if="state==true" class="wishlist">wishlist</button>
            </div>
            <div v-if="state==false" class="AddedBag">
                <button class="big-btn">Added to Bag</button>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import service from '../service/User'

export default {

    data() {
        return {
            result: 0,
            authorPrefix: 'by',
            pricePrefix: 'Rs.',
            defaultStrikePrice: '(2000)',
            buttonValue: 'close',
            flag: true,
            state: true,
            clickedCard: '',
            books: [{
                id: 0,
                file: 'https://images-na.ssl-images-amazon.com/images/I/41MdP5Tn0wL._SX258_BO1,204,203,200_.jpg',
                name: 'Default Card',
                author: 'Sai',
                price: '..'
            }, ]
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
        handlesubmit() {
            service.userDisplayBooksLowtoHigh().then(response => {
                this.books.push(...response.data);  
                console.log(this.response);   
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/DisplayBooks.scss";
</style>
