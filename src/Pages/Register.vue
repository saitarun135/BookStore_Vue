<template>
<div class="main">

    <div class="container">
        <img src="../assets/sideImg.png" alt="notFound" />
        <p>Online Book Shopping</p>
        <div class="box">
            <div class="headings">
                <h5 class="signin">Login</h5>
                <h5 class="signup">signup</h5>
            </div>
            <form>
                <div class="fullname">
                    <p>FullName</p>
                    <input type="text" class="namebox" required v-model="name" autocomplete="off" pattern="[A-Za-z]{3,12}">
                </div>
                <div class="username">
                    <p>EmailID</p>
                    <input type="email" class="emailbox" required v-model="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                </div>
                <div class="pass">
                    <p>Password</p>
                    <input type="password" class="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" v-model="password" required>
                </div>

                <div class="mobile">
                    <p>MobileNumber</p>
                    <input type="tel" class="telephone" pattern="^\d{10}$" required>
                </div>
                <button class="btn-section" type="submit">Signup</button>
            </form>
        </div>
    </div>

</div>
</template>

<style lang="scss" scoped>
    @import "@/styles/Register.scss";
</style>