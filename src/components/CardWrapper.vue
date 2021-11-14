<script setup>
import VCard from './VerticalCard.vue';
import HCard from './HorizonCard.vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    cards: {
        type: Object,
        default: () => {}
    },
    data: {
        type: Array,
        default: () => []
    }
});
const router = useRouter();
const searchCity = city => {
    router.push('/search');
    
};
</script>

<template>
    <div class="wrapper">
        <h2 class="text-2xl text-black pb-8 text-left font-medium">{{ props.cards.title }}</h2>
        <div class="flex justify-between">
            <template v-if="props.cards.type === 'c'">
                <div
                    v-for="city in props.data"
                    :key="city.id"
                    class="
                        city-bg
                        flex
                        items-end
                        justify-center
                        p-4
                        text-lg
                        font-medium
                        cursor-pointer
                    "
                    :class="city.id"
                    @click="searchCity(city.id)"
                >
                    <p class="text-white">{{ city.name }}</p>
                </div>
            </template>
            <VCard v-if="props.cards.type === 'v'" :data="data" />
            <HCard v-if="props.cards.type === 'h'" :data="data" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    padding-bottom: 40px;
    .city-bg {
        height: 236px;
        width: 182px;
        background-repeat: no-repeat;
        background-size: cover;
        &.Taipei {
            background-image: url('@/assets/taipei.png');
        }
        &.Kaohsiung {
            background-image: url('@/assets/Kaohsiung.png');
        }
        &.Taichung {
            background-image: url('@/assets/Taichung.png');
        }
        &.Tainan {
            background-image: url('@/assets/Tainan.png');
        }
        &.PingtungCounty {
            background-image: url('@/assets/Pingtung.png');
        }
        &.TaitungCounty {
            background-image: url('@/assets/Taitung.png');
        }
    }
}
</style>
