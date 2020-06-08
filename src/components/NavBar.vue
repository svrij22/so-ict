<template>
    <div class="navbar">
        <div class="logo">
            SO - ICT
        </div>
        <div class="links">
            <a href="#">Info</a>
            <a href="#">Ervaring</a>
            <a href="#">Contact</a>
        </div>
        <div>
            <a>Login</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

    .logo{
        font-size: 28px;
        margin-left: 10px;
    }

    .navbar{
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .links{
        align-content: center;
    }

    .navbar a{
        color: #636b6f;
        padding: 0 25px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }
</style>