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
    { title: '熱門活動', value: 'activity', type: 'h' },
    { title: '熱門景點', value: 'spot', type: 'v' },
    { title: '熱門美食', value: 'restaurant', type: 'v' },
    { title: '熱門住宿', value: 'hotel', type: 'v' }
];

const data = {
    city: [
        { value: 'Taipei', text: '台北', mask: 'src/assets/taipei-h.png' },
        { value: 'Kaohsiung', text: '高雄', mask: 'src/assets/tainan-h.png' },
        { value: 'Taichung', text: '台中', mask: 'src/assets/taichung-h.png' },
        { value: 'Tainan', text: '台南', mask: 'src/assets/kaohsiung-h.png' },
        { value: 'PingtungCounty', text: '屏東', mask: 'src/assets/pingtung-h.png' },
        { value: 'TaitungCounty', text: '台東', mask: '../assets/taitung-h.png' }
    ],
    spot: computed(() => store.state.spot),
    activity: computed(() => store.state.activity),
    restaurant: computed(() => store.state.restaurant),
    hotel: computed(() => store.state.hotel)
};

store.dispatch('GET_SPOT');
store.dispatch('GET_ACTIVITY');
store.dispatch('GET_RESTAURANT');
store.dispatch('GET_HOTEL');
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
