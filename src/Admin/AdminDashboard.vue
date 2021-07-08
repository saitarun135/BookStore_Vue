<template>
<div class="main">
    <div class="navbar navbar-default navbar-fixed-top">
        <div class="navbar-header">
            <img src="../assets/education.png" alt="notFound" class="education-image" />
        </div>
        <ul class="nav navbar-nav">
            <li>
                <p class="brand">Bookstore</p>
            </li>
        </ul>
        <div class="input-group">
            <i class="fas fa-search"></i>
            <div class="form-outline">
                <input type="search" class="form-control" placeholder='search...' />
            </div>
        </div>

        <ul class="nav navbar-nav navbar-right" id="right-bar">
            <li><a> <i class="far fa-user"></i></a></li>
            <p class="profile-content">profile</p>
        </ul>
    </div>
    <div class="mid-body">
        <h6>Books<span class="items">(128items)</span></h6>
        <select class="options">
            <option value="volvo">sort by relevance</option>
        </select>
    </div>
    <div class="create-book">
        <CreateBook class="createBook" />
    </div>

</div>
</template>

<script>
import CreateBook from './CreateBook.vue'
export default {
    components: {
        CreateBook
    },
    data() {
        return {

        }
    },

}
</script>

<style lang="scss" scoped>
@import "@/styles/AdminDashboard.scss";
</style>
