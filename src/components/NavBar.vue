<template>
    <div class="container">
        <button class="nav_btn">
            <router-link to="/">Main</router-link>
        </button>
        <button class="nav_btn">
            <router-link to="/tasks">Tasks</router-link>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        background: #ceff99;
        width: 100vw;
        height: 12vh;
    }
    .nav_btn {
        border: none;
        background: none;
        width: 100px;
        font-size: larger;
    }

    a {
        all: unset;
    }
</style>