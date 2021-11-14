<script setup>
import TopBg from '../components/TopBg.vue';
import SearchBar from '../components/SearchBar.vue';
import CategoryNav from '../components/CategoryNav.vue';
import CardWrapper from '../components/CardWrapper.vue';
import { useStore } from 'vuex';
import { reactive, computed } from 'vue';

const store = useStore();

const cards = [
    { title: '熱門城市', value: 'city', type: 'c' },
    // { title: '熱門活動', value: 'activity', type: 'h' },
    { title: '熱門景點', value: 'spot', type: 'v' }
    // { title: '熱門美食', value: 'restaurant', type: 'v' },
    // { title: '熱門住宿', value: 'hotel', type: 'v' }
];
store.dispatch('GET_SPOT');
const data = {
    city: [
        { id: 'Taipei', name: '台北' },
        { id: 'Kaohsiung', name: '高雄' },
        { id: 'Taichung', name: '台中' },
        { id: 'Tainan', name: '台南' },
        { id: 'PingtungCounty', name: '屏東' },
        { id: 'TaitungCounty', name: '台東' }
    ],
    spot: computed(() => store.state.spot),
    activity: computed(() => store.state.spot),
    restaurant: computed(() => store.state.restaurant),
    hotel: computed(() => store.state.hotel)
};
</script>

<template>
    <div id="top-bg" class="relative w-full">
        <TopBg />
    </div>
    <div id="option-target" class="container relative-tag">
        <SearchBar />
        <CategoryNav />
        <CardWrapper
            v-for="card in cards"
            :key="card"
            :cards="card"
            :data="data[card.value].value || data[card.value]"
        />
    </div>
</template>

<style lang="scss"></style>
