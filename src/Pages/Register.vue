<template>
<div class="main">
    <div class="container">
        <img src="../assets/sideImg.png" alt="notFound" />
        <p>Online Book Shopping</p>
        <div class="box">
            <div class="headings">
                <h5 class="signin" :class="{ active: isLogin }" @click="isLogin = true">Login</h5>
                <h5 class="signup" :class="{ active: !isLogin }" @click="isLogin = false">signup</h5>
            </div>
            <form ref="myForm" @submit.prevent="handlesubmit">
                <div class="fullname">
                    <p>FullName</p>
                    <input type="name" class="namebox" required v-model="fullName" autocomplete="off" pattern="[A-Za-z]{3,12}">
                </div>
                <div class="username">
                    <p>EmailID</p>
                    <input type="email" class="emailbox" required v-model="emailID" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                </div>
                <div class="password-section">
                    <p>Password</p>
                    <input :type="password_type" class="password" id="passField" v-model="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" required>
                    <i class="bi bi-eye-slash" id="togglePassword" @click="togglePassword();"></i>
                </div>
                <div class="mobile">
                    <p>MobileNumber</p>
                    <input type="tel" class="telephone" v-model="mobile" pattern="^\d{10}$" required>
                </div>
                <button class="btn-section" type="submit">Signup</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import service from '../service/User'
export default {
    name: 'Register',
    data() {
        return {
            fullName: '',
            emailID: '',
            password: '',
            mobile: '',
            password_type: "password",
            isLogin:false
        }
    },
    methods: {
        togglePassword() {
            this.password_type = this.password_type === 'password' ? 'text' : 'password'
            document.getElementById('passField').style.margin = '0px 0px 0px 69px';
            document.getElementById('passField').style.width = "252px";
            document.getElementById('passField').style.height = "35px";
            document.getElementById('passField').style.background = "$pale_white 0% 0% no-repeat padding-box";
        },

        handlesubmit() {
            let userData = {
                fullName: this.fullName,
                emailID: this.emailID,
                password: this.password,
                mobile: this.mobile
            }
            service.userRegister(userData).then(response => {
                if (response.status == 201) {
                    alert("user registered successfully");
                    this.$refs.myForm.reset();
                }
                return response;
            }).catch(error => {
                alert("invalid credentials");
                return error;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/Register.scss";
</style>
