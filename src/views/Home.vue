<script setup>
import TopBg from '../components/TopBg.vue';
import SearchBar from '../components/SearchBar.vue';
import CategoryNav from '../components/CategoryNav.vue';
import CardWrapper from '../components/CardWrapper.vue';

const cards = {
    title: '熱門活動',
    type: 'c'
};
</script>

<template>
    <div id="top-bg" class="relative w-full">
        <TopBg />
    </div>
    <div id="option-target" class="container relative-tag">
        <SearchBar />
        <CategoryNav />
        <CardWrapper :cards="cards" />
    </div>
</template>

<style lang="scss">
</style>
