<template>
    <div class="main">
        <div class="heading">
        <h3 class="ResetContent"> Reset Password</h3>
    </div>
    <div class="container">
        <form @submit.prevent="">
            <div class="New-section">
                <p class="newPassword">NewPassword</p>
                <input type="password"  class="passwordbox" autocomplete="off" required v-model="newPassword" id="password-input" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" >
            </div>
            <div class="confirm-section">
                <p class="confirmPassword">confirmPassword</p>
                <input type="password"  class="passwordbox" autocomplete="off" required v-model="confirmPassword" id="confirm-input" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" >
            </div>
            <div class="btn-section">
                <button type="submit" id="btn-group" @click="handlesubmit();">Update</button>
            </div>
        </form>
    </div>
    </div>
</template>
<script>
import service from '../service/User'
export default{
    name:'Reset',
    data(){
        return{
           newPassword:'',
           confirmPassword:'',
           title:'Reset Password',
           newPasswordContent:'NewPassword',
           confirmPasswordContent:'confirmPassword'
        }
    },
    methods:{
        handlesubmit(){
            let userData={
                newPassword:this.newPassword,
                confirmPassword:this.confirmPassword
            }
            service.userReset(userData).then(response=>{
                alert("password updated successfully");
                return response;
            }).catch(error=>{
                alert("password not match");
                return error;
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/styles/Reset.scss";
</style>