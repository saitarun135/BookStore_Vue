<template>
<div class="main">
    <div v-if="flag==true" class="container">
        <img id="side-img" src="../assets/sideImg.png" alt="notFound" />
        <p id="side-content">Online Book Shopping</p>
        <div class="box">
            <div class="headings">
                <h5 class="signin" v-on:click="flip();" id="login" :class="{ active: isLogin }" @click="isLogin = true">Login</h5>
                <h5 class="signup" id="signup" :class="{ active: !isLogin }" @click="isLogin = false">signup</h5>
            </div>
            <form ref="myForm" @submit.prevent="handlesubmit">
                <div class="fullname">
                    <p>FullName</p>
                    <input type="name" id="name-input" class="namebox" required v-model="fullName" autocomplete="off" pattern="[A-Za-z]{3,12}">
                </div>
                <div class="username">
                    <p>EmailID</p>
                    <input type="email" id="Email-input" class="emailbox" autocomplete="off" required v-model="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                </div>
                <div class="password-section">
                    <p>Password</p>
                    <input :type="password_type" class="password" :class="{'password-visible': isPasswordVisible }" id="passField" v-model="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" required>
                    <i class="bi bi-eye-slash" id="togglePassword" @click="togglePassword();"></i>
                </div>
                <div class="mobile">
                    <p>MobileNumber</p>
                    <input type="tel" class="telephone" autocomplete="off" v-model="mobile" id="tel" pattern="^\d{10}$" required>
                </div>
                <!-- <div class="role-btns">
                    <input type="radio" id="user" value="User" name="role" v-model="role">
                    <label for="user" class="radio-label">User</label>
                    <input type="radio" id="admin" value="Admin" name="role" v-model="role">
                    <label for="admin" class="admin-label">Admin</label>
                </div> -->
                <button class="btn-section" id="btn" type="submit">Signup</button>
            </form>
        </div>
    </div>
    <Login v-if="flag==false" />
</div>
</template>

<script>
import service from '../service/User'
export default {
    name: 'Register',
    components: {
        Login: () => import('./Login.vue')
    },
    data() {
        return {
            fullName: '',
            email: '',
            password: '',
            mobile: '',
            // role: '',
            password_type: "password",
            isLogin: false,
            isPasswordVisible: false,
            flag: true,
            title: 'Online Book Shopping'
        }
    },
    methods: {
        flip() {
            this.flag = !this.flag;
        },
        togglePassword() {
            this.password_type = this.password_type === 'password' ? 'text' : 'password'
            this.isPasswordVisible = !this.isPasswordVisible
        },
        handlesubmit() {
            let userData = {
                fullName: this.fullName,
                email: this.email,
                password: this.password,
                mobile: this.mobile,
                // role: this.role
            }
            service.userRegister(userData).then(response => {
                if (response.status == 201) {
                    alert("user registered successfully");
                    this.$refs.myForm.reset();
                    this.$router.push('/login');
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
