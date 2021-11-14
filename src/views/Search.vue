<script setup>
import VCard from '../components/VerticalCard.vue';
import NavTab from '../components/NavTab.vue';
import { useStore } from 'vuex';
import { reactive, computed } from 'vue';

const store = useStore();
const searchType = computed(() => store.state.navList.type);
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
</script>

<template>
    <div class="relative w-full top-bg text-left text-white font-medium flex items-center">
        <section>
            <h2 class="text-lg pb-2">目的地</h2>
            <h1 class="text-4xl flex">
                <img src="../assets/w-location.png" alt="" class="mr-3" />台北
            </h1>
        </section>
    </div>
    <NavTab />
    <div id="option-target" class="container relative-tag">
        <div class="result-bar text-pink-100 text-3xl text-left">
            150個結果 <span class="text-black">{{ searchType.label }}</span>
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
