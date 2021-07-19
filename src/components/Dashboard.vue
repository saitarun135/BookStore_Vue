<template>
<div class="main">
    <div class="navbar navbar-default navbar-fixed-top">
        <div class="navbar-header">
            <img src="../assets/education.png" alt="notFound" class="education-image" />
        </div>
        <ul class="nav navbar-nav">
            <li>
                <p class="brand">Bookstore</p>
            </li>
        </ul>
        <div class="input-group">
            <i @click="handlesubmit();" class="fas fa-search"></i>
            <div class="form-outline">
                <input type="search" v-model="name" class="form-control" placeholder='search...' />
            </div>
        </div>

        <ul class="nav navbar-nav navbar-right" id="right-bar">
            <li><a> <i class="far fa-user"></i></a></li>
            <p class="profile-content">profile</p>
            <li @click="shownComponent='Cart'"><a><i class="fas fa-cart-plus"></i></a></li>
            <p class="cart-content" >cart <span class="length" v-if="booksCount">{{booksCount}}</span></p>
            
        </ul>
    </div>
    <div class="mid-body">
        <select class="options" @change="applyOption">
            <option disabled value="">Sort by relevance</option>
            <option value="HighToLow">price:High to Low</option>
            <option value="LowToHigh">price:Low to High</option>
        </select>
    </div>

    <div v-if="flam==false">
        <h2>Hello</h2>
    </div>
    <DisplayBooks v-show="flag==='noOrder' && shownComponent==='DisplayBooks'" @update-books-count="(n)=>booksCount=n" />
    <Cart v-show=" shownComponent==='Cart'"   />
    <sortBooksLowtoHigh v-show="flag==='lowToHigh'" @update-books-count="(n)=>booksCount=n" />
    <sortBooksHightoLow v-show="flag==='highToLow'" @update-books-count="(n)=>booksCount=n" />
   
</div>
</template>

<script>
import sortBooksLowtoHigh from './sortBooksLowtoHigh.vue'
import sortBooksHightoLow from './sortBooksHightoLow.vue'
import DisplayBooks from './DisplayBooks.vue'
import Cart from './Cart.vue'
export default {
    components: {
        DisplayBooks,
        sortBooksLowtoHigh,
        sortBooksHightoLow,
        Cart
    },
    data() {
        return {
            shownComponent:'DisplayBooks',
             booksCount:0,
            flag: 'noOrder',
            brand: 'Bookstore',
            name: '',
            flam: true,
            visible: true,
        }
    },
    methods: {
        flip() {
            this.flam = !this.flam;
        },
        applyOption(evt) {
            if (evt.target.value === "HighToLow") {
                this.flag = 'highToLow';
            } else this.flag = 'lowToHigh';
        },
    }

}
</script>

<style lang="scss" scoped>
@import "@/styles/Dashboard.scss";
</style>
