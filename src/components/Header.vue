<template>
    <div>
        <header>
            <h2>{{ welMessage}}</h2>
            <p>http://onlinewebtutorhub.blogspot.in/</p>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            welMessage: "Welcome to Online Web Tutor Youtube Channel"
        }
    }
}
</script>

<style scoped>

header{
        background: #3f51b5f2;
        color: white;
        padding: 3px;
        text-align: center;
    }

</style>