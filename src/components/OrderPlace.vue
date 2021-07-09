<template>
<div class="order-place">
    <div class="image-container">
        <img src="../assets/success.png" alt="not found" />

    </div>
    <div class="title-container">
        <p>Order placed Successfully</p>
    </div>
    <div class="message-section">
        <p>hurray!!!your order is confirmed the order id is #123456
            save the order id for further communication..</p>
    </div>
    <div class="title-section">
        <div class="email-us">
            <p>Email-us</p>
        </div>
        <div class="contact-us">
            <p>Contact-us</p>
        </div>
        <div class="address">
            <p>Address</p>
        </div>
    </div>
    <div class="email-sec">
        <p>admin@bookstore.com</p>
    </div>
    <div class="contact-sec">
        <p>+918163475881</p>
    </div>
    <div class="address-sec">
        42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034
    </div>
    <div class="button">
        <router-link to="/dashboard" class="btn">Continue Shopping</router-link>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "@/styles/OrderPlace.scss";
</style>
