<script setup>
import VCard from '../components/VerticalCard.vue';
import NavTab from '../components/NavTab.vue';
import { useStore } from 'vuex';
import { reactive, computed } from 'vue';

const store = useStore();
const searchType = computed(() => store.state.navList.find(e => e.text !== '')?.text);
const navList = computed(() => store.state.navList);
console.log(navList.value);
const data = computed(() => store.state['spot']);
const list = ['全年無休', '週末開放', '平日開放'];
const selectList = reactive([
    {
        title: '開放時間',
        selection: [
            { id: 1, text: '全年無休', checked: false },
            { id: 2, text: '週末開放', checked: false },
            { id: 3, text: '平日開放', checked: false }
        ]
    },
    {
        title: '景點類別',
        selection: [
            { id: 1, text: '親近自然', checked: false },
            { id: 2, text: '文化之旅', checked: false },
            { id: 3, text: '文化之旅', checked: false }
        ]
    }
]);

const addChecked = item => {
    console.log('click');
    item.checked = !item.checked;
};

const setSearch = () => {
    const paramObj = {
        spot: 'ScenicSpot',
        restaurant: 'Restaurant',
        hotel: 'Hotel',
        activity: 'Activity'
    }
    const city = navList[0].value;
    const type = navList[1].value;
    const others = navList[3].value;

    if (type !== '' ) {
        const url = `/${paramObj[type]}/${city}?$format=JSON`
        store.dispatch('GET_SEARCH_DATA');
    } else if (city !== '') {
        
    }

}
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
    <div id="option-target" class="container relative-tag">
        <div class="result-bar text-pink-100 text-3xl text-left">
            <!-- 150個結果  -->
            <span class="text-black">{{ searchType }}</span>
        </div>
        <div class="flex">
            <section class="check-block px-4 py-8 text-left">
                <div v-for="obj in selectList" :key="obj.title" class="pb-11">
                    <div class="flex pb-2">
                        <img src="../assets/location.png" alt="" class="mr-3" />
                        <span class="text-black">{{ obj.title }}</span>
                    </div>
                    <div
                        v-for="item in obj.selection"
                        :key="item.id"
                        class="flex pl-9 py-1 text-gray-250 font-medium text-sm cursor-pointer"
                        :class="{ 'text-pink-100': item.checked }"
                        @click="addChecked(item)"
                    >
                        <div class="check-box mr-2" :class="{ 'bg-pink-100': item.checked }"></div>
                        {{ item.text }}
                    </div>
                </div>

                <button
                    class="
                        rounded-full
                        bg-pink-100
                        flex
                        justify-center
                        items-center
                        text-white
                        font-medium
                        py-4
                        w-full
                    "
                >
                    <img src="../assets/search.png" alt="search" class="mr-1" />
                    搜尋
                </button>
            </section>
            <section class="grid grid-cols-3 gap-5 pl-5 pb-10">
                <VCard :data="data" />
            </section>
        </div>
        <div class="py-10">pagination</div>
    </div>
</template>

<style lang="scss">
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
.result-bar {
    padding: 45px 0 20px 305px;
}
.check-block {
    width: 285px;
    height: 475px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: inset -0.5px 0px 0px rgba(0, 0, 0, 0.2);
}
.check-box {
    width: 17px;
    height: 17px;
    border: 1px solid #cccccc;
    border-radius: 2px;
    transition: background-color 0.8s ease;
}
</style>
