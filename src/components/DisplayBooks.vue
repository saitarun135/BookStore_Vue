<template>
<div class="carddisplay-section">
    <div v-for="book in books" :key="book.id" class="card">
        <div class="image-section">
            <div class="image-container">
                <img v-bind:src="'storage'+'/'+'app'+'/'+book.file" /> 
            </div>
        </div>
        <div class="title-section">
            {{book.name}}
        </div>
        <div class="author-section">
            by {{book.author}}
        </div>
        <div class="price-section">
            Rs. {{book.price}}<label>(2000)</label>
                <button v-if="flag" type="submit" @click="handlesubmit();Togglebtn();">close</button>
        </div>

    </div>
</div>
</template>

<script>
import service from '../service/User'
export default {
    data() {
        return {
            flag: true,
            books: [{
                id: 1,
                file: 'i want to display image',
                name: 'Dont Make me think',
                author: 'sai',
                price: '1500'
            }, ]
        }
    },
    methods: {
        Togglebtn() {
            this.flag = !this.flag;
        },
        handlesubmit() {
            service.userDisplayBooks().then(response => {
                this.books.push(...response.data);
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/DisplayBooks.scss";
</style>
