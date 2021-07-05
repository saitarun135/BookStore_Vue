<template>
<div class="main">
    <div v-if="flag" class="container">
        <img id="side-img" src="../assets/sideImg.png" alt="notFound" />
        <p id="side-content">Online Book Shopping</p>
        <div class="box">
            <div class="headings">
                <h5 class="signin" id="login" :class="{ active: !isSignup }" @click="isSignup = false">Login</h5>
                <h5 class="signup" id="signup" v-on:click="flip();" :class="{ active: isSignup }" @click="isSignup = true">signup</h5>
            </div>
            <form @submit.prevent="">
                <div class="username">
                    <p>EmailID</p>
                    <input type="email" id="Email-input" class="emailbox" autocomplete="off" required v-model="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                </div>
                <div class="password-section">
                    <p>Password</p>
                    <input :type="password_type" class="password" :class="{'password-visible': isPasswordVisible}" id="passField" v-model="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" required>
                    <i class="bi bi-eye-slash" id="togglePassword" @click="togglePassword();"></i>
                </div>
                <div class="forget-section">
                    <router-link to="/forgot">
                        Forgot-password</router-link>
                </div>
                <div class="btn-section">
                    <button type="submit" @click="handlesubmit();" class="login-btn">Login</button>
                </div>

            </form>
        </div>
    </div>
    <Register v-else />
</div>
</template>

<script>
import service from '../service/User'
export default {
    name: 'Login',
    components: {
        Register: () => import('./Register.vue'),
    },
    data() {
        return {
            email: '',
            password: '',
            password_type: "password",
            isPasswordVisible: false,
            isSignup: false,
            flag: true,
            sideContent: 'Online Book Shopping'
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
                email: this.email,
                password: this.password,
            }
            service.userLogin(userData).then(response => {
                if (response.status == 200) {
                    alert("user logged in... ");
                     localStorage.setItem('token', response.data.token);
                    this.$router.push('/dashboard');
                    return response;
                }
            }).catch(error => {
                alert("invalid credentials");
                return error;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/Login.scss";
</style>
