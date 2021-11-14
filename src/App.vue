<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useStore } from 'vuex';

const store = useStore();

const el = document.getElementById('app');
el.addEventListener('click', () => store.dispatch('SHOW_DROPDOWN'));

store.dispatch('GET_SPOT');
</script>

<template>
    <Header />
    <router-view></router-view>
    <Footer />
</template>

<style lang="scss">
body {
    height: 100%;
    background-image: url('@/assets/full-bg.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow-x: hidden;
}

.container {
    width: 100%;
    width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 120px;
}

.relative-tag {
    position: relative;
}

#top-bg {
    section {
        top: 42%;
    }
}

.divider {
    height: 2px;
}
</style>
