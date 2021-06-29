<template>
<div class="main">
    <nav class="navbar navbar-default">
        <div class="navbar-header">
            <img src="../assets/education.png" id="brand-logo" alt="notFound" />
        </div>
        <ul class="nav navbar-nav">
            <li>
                <p>Bookstore</p>
            </li>
        </ul>
    </nav>
    <div class="heading">
        <h3 class="forgotContent"> Forgot Your Password?</h3>
    </div>
    <div class="container">
        <p class="content">Enter your email address and we'll send you a link to reset your password.</p>
        <form @submit.prevent="">
            <div class="username">
                <p class="email">EmailID</p>
                <input type="email"  class="emailbox" autocomplete="off" required v-model="email" id="Email-input" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
            </div>
            <div class="btn-section">
                <button type="submit" id="btn-group" @click="handlesubmit();">Reset Password</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import service from '../service/User'
export default {
    name: 'Forgot',
    data() {
        return {
            email: '',
            brandName:'Bookstore',
            title:'Forgot Your Password?',
            content:"Enter your email address and we'll send you a link to reset your password."
        }
    },
    methods: {
        handlesubmit() {
            let userData = {
                email: this.email,
            }
            service.userForgot(userData).then(response => {
                if (response.status == 200) {
                    alert("check your mail for reset-password... ");
                    return response;
                }
            }).catch(error => {
                alert("Email is not registred");
                return error;
            })
        }
    }

}
</script>

<style lang="scss" scoped>
@import "@/styles/Forgot.scss";
</style>
