<template>
<div class="main-section">
    <div v-on:click="flip();" v-if="flag==true" class="content-box">
        <p class="default-content">AddBook</p>
    </div>
    <div v-if="flag==false" class="container">
        <form>
            <h3>Add Books</h3>
            <div class="title-section">
                <p>Title</p>
                <input type="name" class="namebox" required>
            </div>
            <div class="author-section">
                <p>Author</p>
                <input type="name" class="authorbox" required>
            </div>
            <div class="file-upload">
                <p>ImagePath</p>
                <input type="text" class="imageUrl" required>
            </div>
            <div class="price-qty-section">
                <div class="headings">
                    <p class="price-section">Price</p>
                    <p class="number-section">quantity</p>
                </div>
                <div class="quantity-section">
                    <input type="number" class="pricebox" required>
                    <input type="number" class="qtybox" required>
                </div>
            </div>
            <div class="description-section">
                <p>Description</p>
                <textarea class="book-description"></textarea>
            </div>
            <button type="button" class="btn btn-success" v-on:click="flip();">Submit</button>
        </form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            flag: true,
        }
    },
    methods: {
        flip() {
            this.flag = !this.flag;
        }
    }
}
</script>

<style scoped>
h3 {
    text-align: center;
}

.default-content {
    cursor: pointer;
}

.container {
    height: 550px;
    width: 550px;
    margin-top: 45px;
    box-shadow: 5px 5px 10px #e0dede;

}

.title-section p {
    color: black;
}

.title-section p {
    margin-top: 45px;
    margin-left: 69px;
    width: 45px;
    height: 13px;
    text-align: left;
    font: normal normal normal 12px/13px Roboto;
    letter-spacing: 0px;
    text-transform: capitalize;
    opacity: 1;
    margin-bottom: 0px;
}

.namebox {
    background: white 0% 0% no-repeat padding-box;
    border: 1px solid gray;
    border-radius: 2px;
    opacity: 1;
    margin-left: 69px;
    width: 372px;
    height: 35px;
}

.author-section {
    margin-top: -20px;
}

.author-section p {
    color: black;
    margin-top: 45px;
    margin-left: 69px;
    width: 45px;
    height: 13px;
    text-align: left;
    font: normal normal normal 12px/13px Roboto;
    letter-spacing: 0px;
    text-transform: capitalize;
    opacity: 1;
    margin-bottom: 0px;
}

.file-upload {
    margin-top: -25px;
}

.file-upload p {
    color: black;
    margin-top: 45px;
    margin-left: 69px;
    width: 45px;
    height: 13px;
    font: normal normal normal 12px/13px Roboto;
    letter-spacing: 0px;
    text-transform: capitalize;
    opacity: 1;
    margin-bottom: 0px;

}

.imageUrl {
    background: white 0% 0% no-repeat padding-box;
    border: 1px solid gray;
    border-radius: 2px;
    opacity: 1;
    margin-left: 69px;
    width: 372px;
    height: 35px;
}

.authorbox {

    background: white 0% 0% no-repeat padding-box;
    border: 1px solid gray;
    border-radius: 2px;
    opacity: 1;
    margin-left: 69px;
    width: 372px;
    height: 35px;
}

.headings {
    display: flex;
    width: 500px;
    margin-left: 69px;
    color: black;
    margin-top: 25px;
    width: 45px;
    height: 13px;
    font: normal normal normal 12px/13px Roboto;
    letter-spacing: 0px;
    text-transform: capitalize;
    opacity: 1;
}

.number-section {
    margin-left: 175px;
}

.quantity-section {
    display: flex;
    width: 500px;
    margin-left: 69px;
    background: white 0% 0% no-repeat padding-box;
    border-radius: 2px;
    opacity: 1;
    width: 372px;
    height: 35px;
}

.pricebox {
    width: 175px;

}

.qtybox {
    margin-left: 24px;
    width: 175px;

}

.book-description {
    resize: none;
    width: 372px;
    margin-left: 69px;
    height: 90px;
    margin-top: -15px;
}

.description-section p {
    margin-left: 69px;
    margin-top: 10px;
    width: 45px;
    height: 13px;
    font: normal normal normal 12px/13px Roboto;
    letter-spacing: 0px;
    text-transform: capitalize;
    opacity: 1;
    color: black;
}

.btn-success {

    margin-left: 200px;
    width: 100px;
    background: #A03737;
    border: none;
    margin-top: 20px;
}
</style>
