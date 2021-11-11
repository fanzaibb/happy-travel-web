<script setup>
import Header from './Header.vue';
import TopBg from './TopBg.vue';
import SearchBar from './SearchBar.vue';
import CategoryNav from './CategoryNav.vue';
import CityNav from './CityNav.vue';
// import VCard from './VerticalCard.vue';
// import HCard from './HorizonCard.vue';
import Footer from './Footer.vue';
import CardWrapper from './CardWrapper.vue';

const cards = {
    title: '熱門活動',
    type: 'h'
};
</script>

<template>
    <Header />
    <div id="top-bg" class="relative w-full">
        <TopBg />
    </div>
    <section id="main-content">
        <div id="option-target" class="container relative-tag">
            <SearchBar />
            <CategoryNav />
            <CardWrapper :cards="cards" />
        </div>
    </section>
    <Footer />
</template>

<style lang="scss">
.container {
    width: 100%;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 123px;
}

.relative-tag {
    position: relative;
}

#top-bg {
    section {
        top: 42%;
    }
}

#main-content {
    background-image: url('../assets/full-bg.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

.divider {
    height: 2px;
}
</style>
