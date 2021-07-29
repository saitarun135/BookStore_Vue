<template>
<div class="main">
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
                <button type="submit" id="btn-group" @click="handlesubmit();">Send Recovery Link</button>
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
                    this.$router.push('/reset');
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
