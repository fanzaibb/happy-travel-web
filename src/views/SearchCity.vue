<script setup>
import VCard from '../components/VerticalCard.vue';
import NavTab from '../components/NavTab.vue';
import CardWrapper from '../components/CardWrapper.vue';
import { useStore } from 'vuex';
import { reactive, computed } from 'vue';

const store = useStore();
const navList = computed(() => store.state.navList);
console.log(navList.value);
const cards = [
    { title: '熱門活動', value: 'activity', type: 'h' },
    { title: '熱門景點', value: 'spot', type: 'v' },
    { title: '熱門美食', value: 'restaurant', type: 'v' },
    { title: '熱門住宿', value: 'hotel', type: 'v' }
];
const data = {
    spot: computed(() => store.state.spot),
    activity: computed(() => store.state.activity),
    restaurant: computed(() => store.state.restaurant),
    hotel: computed(() => store.state.hotel)
};

store.dispatch('GET_SPOT');
store.dispatch('GET_ACTIVITY');
store.dispatch('GET_RESTAURANT');
store.dispatch('GET_HOTEL');

const setSearch = () => {
    const paramObj = {
        spot: 'ScenicSpot',
        restaurant: 'Restaurant',
        hotel: 'Hotel',
        activity: 'Activity'
    };
    const city = navList[0].value;
    const type = navList[1].value;
    const others = navList[3].value;

    if (type !== '') {
        const url = `/${paramObj[type]}/${city}?$format=JSON`;
        store.dispatch('GET_SEARCH_DATA');
    } else if (city !== '') {
    }
};
</script>

<template>
    <div class="relative w-full top-bg text-left text-white font-medium flex items-center">
        <section>
            <h2 class="text-lg pb-2">目的地</h2>
            <div class="flex">
                <img
                    v-if="navList[0].text.length !== 0"
                    src="../assets/w-location.png"
                    alt=""
                    class="mr-3"
                />
                <span class="text-4xl">{{ navList[0].text }}</span>
                <div v-if="navList[2].text !== ''" class="pills px-4 py-2 rounded-full">
                    #{{ navList[2].text }}
                </div>
            </div>
        </section>
    </div>
    <NavTab />
    <div id="option-target" class="container pt-10">
        <CardWrapper
            v-for="card in cards"
            :key="card"
            :cards="card"
            :data="data[card.value].value"
        />
    </div>
</template>

<style lang="scss" scoped>
.top-bg {
    padding-left: 222px;
    height: 200px;
    background-image: url('@/assets/city-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.pills {
    background: #ffffff33;
}
.text-nav-bar {
    background-color: #ffffff80;
}
</style>
