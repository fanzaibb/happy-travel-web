<script setup>
import VCard from './VerticalCard.vue';
import HCard from './HorizonCard.vue';

defineProps({
    cards: {
        type: Object,
        default: () => {}
    }
});
</script>

<template>
    <div class="wrapper">
        <h2 class="text-2xl text-black pb-8 text-left font-medium">{{ cards.title }}</h2>
        <div class="flex justify-between">
            <div v-if="cards.type === 'c'" class="city-card">
                <img v-for="i in 6" :key="i" src="../assets/taipei.png" alt="taipei" />
            </div>
            <VCard v-if="cards.type === 'v'" />
            <HCard v-if="cards.type === 'h'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    padding-bottom: 40px;
}
</style>
