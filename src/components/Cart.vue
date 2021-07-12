<template>
<div class="main">
    <div class="first-section">
        <div class="content">
            <h5>My Cart({{books.length}})</h5>
        </div>
        <div v-for="book in books" :key="book.id" class="container">

            <div class="mid-section">
                <img v-bind:src="book.file" alt="not found">
                <p class="title-section">{{book.name}}</p>
            </div>
            <div class="author-section">
                <p class="author-name">by {{book.author}}</p>
            </div>
            <div class="price-section">
                <h6>Rs.{{book.price}}</h6>
            </div>
            <div class="icons">
                <i class="fas fa-minus-circle"></i>
                <input class="rectangle" value=1>
                <i class="fas fa-plus-circle"></i>
            </div>
        </div>
        <div class="btn-grps">
            <button class="btn" v-on:click="flip()" v-if="hide==true" type="submit">Place Order</button>
        </div>
    </div>
    <div class="second -section">
        <div class="details-box">
            <input type="text" v-if="hide==true" class="initial-btn" placeholder="Customer Details" />
        </div>
        <div v-if="hide==false" class="fill-details">
            <form @submit.prevent="" class="address">
                <h4 class="heading">Customer Details</h4>
                <div class="name">
                    <input type="name" required pattern="[A-Za-z]{3,10}" v-model="name">
                    <label class="label">Name</label>
                </div>

                <div class="name">
                    <input type="text" required v-model="phoneNumber">
                    <label class="label">Phone Number</label>
                </div>
                <div class="pin">
                    <input type="text" required v-model="pincode">
                    <label class="label">PinCode</label>
                </div>
                <div class="pin">
                    <input type="text" required v-model="locality">
                    <label class="label">Locality</label>
                </div>
                <div class="address-block">
                    <input class="address" type="text" required v-model="address">
                    <label id="Add" class="label">Address</label>
                </div>
                <div class="city-landMark">
                    <input type="text" required v-model="city">
                    <label class="label">City/Town</label>
                </div>
                <div class="city-landMark">
                    <input type="text" required v-model="landmark">
                    <label class="label">LandMark</label>
                </div>
                <div class="Radio-Buttons">
                    <p>Type</p>
                    <div class="radio-btns flex-container">
                        <div>
                            <input type="radio" id="Home" value="Home" name="type" v-model="type">
                           <div class="first-radio"> <label class="home" for="Home">Home</label></div>
                        </div>

                        <div>
                            <input type="radio" id="Work" value="Work" name="type" v-model="type">
                           <div class="second-radio"> <label for="Work" class="work-label">Work</label></div>
                        </div>

                        <div>
                            <input type="radio" id="Other" value="Other" name="type" v-model="type">
                            <div class="third-radio"><label for="Other">Other</label></div>
                        </div>
                    </div>

                    <div class="btn-continue">
                        <button type="submit" @click="handlesubmit();" class="continue">continue</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import service from '../service/User'
export default {
    created() {
    service.userDisplayCart().then(response => {
      this.books = response.data;
    })
    },
    data() {
        return {
            flag: true,
            hide: true,
            booksCount: 0,
            name:'',
            phoneNumber:'',
            pincode:'',
            locality:'',
            city:'',
            address:'',
            landmark:'',
            type:'',
            books: [ ]
        }
    },
    methods: {
        flip() {
            this.hide = !this.hide;
        },
        Togglebtn() {
            this.flag = !this.flag;
        },
        handlesubmit(){
             let userData = {
                 name:this.name,
            phoneNumber:this.phoneNumber,
            pincode:this.pincode,
            locality:this.locality,
            city:this.city,
            address:this.address,
            landmark:this.landmark,
            type:this.type,
            }
            service.customerRegister(userData).then(response => {
                alert("user registered successfully");
                return response;
            })
        
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/Cart.scss";
</style>
