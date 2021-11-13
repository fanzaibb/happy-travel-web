<template>
    <div class="relative w-full top-bg text-left text-white font-medium flex items-center">
        <!-- <img alt="main bg logo" src="../assets/city-bg.png" class="w-full" /> -->
        <section>
            <h2 class="text-lg pb-2">目的地</h2>
            <h1 class="text-4xl">台北</h1>
        </section>
    </div>
    <div class="text-nav-bar text-gray-250 font-nornmal text-sm py-2 text-left">
        <p class="container">首頁 <span>/ &nbsp;景點</span></p>
    </div>
    <div id="option-target" class="container relative-tag">
        <div class="result-bar text-pink-100 text-3xl text-left">
            150個結果 <span class="text-black">景點</span>
        </div>
        <div class="flex">
            <section class="check-block px-4 py-8 text-left">
                <div v-for="obj in checkObj" :key="obj.title" class="pb-11">
                    <div class="flex pb-2">
                        <img src="../assets/location.png" alt="" class="mr-3" />
                        <span class="text-black">{{ obj.title }}</span>
                    </div>
                    <div
                        v-for="item in list"
                        :key="item"
                        class="flex pl-9 py-1 text-gray-250 font-medium text-sm"
                    >
                        <div class="check-box mr-2"></div>
                        {{ item }}
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
                <VCard />
            </section>
        </div>
        <div class="py-10">pagination</div>
    </div>
</template>

<script setup>
import VCard from '../components/VerticalCard.vue';

const list = ['全年無休', '週末開放', '平日開放'];

const checkObj = [
    {
        title: '開放時間',
        selection: ['全年無休', '週末開放', '平日開放']
    },
    {
        title: '景點類別',
        selection: ['全年無休', '週末開放', '平日開放']
    }
];
</script>

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
}
</style>
