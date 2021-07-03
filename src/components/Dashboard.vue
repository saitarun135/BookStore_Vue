<template>
<div class="main">
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="navbar-header">
            <img src="../assets/education.png"  alt="notFound" />
        </div>
        <ul class="nav navbar-nav">
            <li>
                <p class="brand">Bookstore</p>
            </li>
        </ul>
        <div class="input-group">
            <i class="fas fa-search"></i>
            <div class="form-outline">
                <input type="search"  class="form-control" placeholder='search...' />
            </div>
        </div>
       
        <ul class="nav navbar-nav navbar-right" id="right-bar">
             <li><a> <i class="far fa-user"></i></a></li>
             <p class="profile-content">profile</p>
             <li><a><i class="fas fa-cart-plus"></i></a></li>
             <p class="cart-content">cart</p>
         </ul>
      
    </nav>

</div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "@/styles/Dashboard.scss";
</style>
