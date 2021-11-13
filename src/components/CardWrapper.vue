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
            <template v-if="cards.type === 'c'">
                <div
                    v-for="i in 6"
                    :key="i"
                    class="city-bg flex items-end justify-center p-4 text-lg font-medium"
                >
                    <p class="text-white">台北</p>
                </div>
            </template>
            <VCard v-if="cards.type === 'v'" />
            <HCard v-if="cards.type === 'h'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    padding-bottom: 40px;
    .city-bg {
        height: 236px;
        width: 182px;
        background-image: url('@/assets/taipei.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
}
</style>
