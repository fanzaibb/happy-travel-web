<script setup>
import TopBg from '../components/TopBg.vue';
import SearchBar from '../components/SearchBar.vue';
import CategoryNav from '../components/CategoryNav.vue';
import CardWrapper from '../components/CardWrapper.vue';
import { useStore } from 'vuex';
import { reactive, computed } from 'vue';
import VCard from '../components/VerticalCard.vue';

const store = useStore();

const card = { title: '熱門住宿', value: 'hotel', type: 'v' };

store.dispatch('GET_HOTEL', { page: 8 });
const hotel = computed(() => store.state.hotel);
</script>

<template>
    <div id="top-bg" class="relative w-full">
        <TopBg />
    </div>
    <div id="option-target" class="container relative-tag">
        <SearchBar />
        <CategoryNav />
        <div class="grid grid-cols-4 gap-5 pl-5 pb-10">
            <VCard :data="hotel" />
        </div>
    </div>
</template>
