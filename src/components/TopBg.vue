<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const obj = {
    spot: '景點',
    restaurant: '美食',
    hotel: '活動',
    activity: '住宿'
};
const bgType = computed(() => store.state.mainType);
const bgText = computed(() =>
    store.state.mainType === '' ? '探險旅行的美好' : obj[store.state.mainType]
);
</script>
<template>
    <section
        class="absolute left-1/2 h-16 z-10 transform text-white -translate-x-1/2 -translate-y-1/4"
    >
        <h2 class="text-3xl pb-4 font-medium">{{ bgText }}</h2>
        <h3 v-show="bgType === ''" class="text-base font-medium">探索美食、景點、住宿、活動</h3>
    </section>
    <img v-show="bgType === ''" alt="main bg logo" src="/src/assets/main-bg.png" class="w-full" />
    <img
        v-show="bgType === 'spot'"
        alt="spot bg logo"
        src="/src/assets/spot-bg.png"
        class="w-full"
    />
    <img
        v-show="bgType === 'restaurant'"
        alt="restaurant bg logo"
        src="/src/assets/restaurant-bg.png"
        class="w-full"
    />
    <img
        v-show="bgType === 'hotel'"
        alt="hotel bg logo"
        src="/src/assets/hotel-bg.png"
        class="w-full"
    />
    <img
        v-show="bgType === 'activity'"
        alt="activity bg logo"
        src="/src/assets/activity-img.png"
        class="w-full"
    />
</template>
