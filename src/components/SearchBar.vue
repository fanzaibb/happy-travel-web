<script setup>
import InputWrapper from './InputWrapper.vue';
import { useStore } from 'vuex';
import cities from '@/utils/cities.json';
import { computed } from 'vue';

const store = useStore();
const selectCity = computed(() => store.state.navList.city.key);
const selectType = computed(() => store.state.navList.type.key);
const tourTypes = {
    美食饗宴: 'restaurant',
    在地住宿: 'hotel',
    活動訊息: 'activity',
    特色景點: 'spot'
};
</script>

<template>
    <div
        id="search-bar"
        class="relative bottom-10 rounded-full bg-white m-auto z-10 px-6 flex justify-between"
    >
        <section class="flex">
            <InputWrapper
                set-class="grid grid-cols-3 gap-2"
                width="327px"
                left="218px"
                :selection="cities"
                param-key="city"
                :selected="selectCity"
            >
                <template #title>你想去哪裡</template>
                {{ selectCity.length !== 0 ? selectCity : '台北市、高雄市' }}
            </InputWrapper>
            <InputWrapper
                width="174px"
                left="502px"
                :selection="tourTypes"
                param-key="type"
                :selected="selectType"
            >
                <template #title>你想去做什麼</template>
                {{ selectType.length !== 0 ? selectType : '戶外活動、當地景點' }}
            </InputWrapper>
            <InputWrapper type="input" width="327px" left="765px">
                <template #option>
                    <div class="text-left text-gray-800">
                        <p>熱門關鍵字</p>
                        <div class="pt-2 pb-5 flex flex-wrap">
                            <span
                                v-for="i in 10"
                                :key="i"
                                class="p-1 mr-1 mb-1 bg-gray-500 rounded cursor-pointer"
                                >#高雄</span
                            >
                        </div>
                        <p>最近搜尋</p>
                        <p v-for="i in 3" :key="i" class="pb-2 text-gray-200 cursor-pointer">
                            #台南有什麼好吃的
                        </p>
                    </div>
                </template>
            </InputWrapper>
        </section>
        <button
            class="
                rounded-full
                bg-pink-100
                flex
                justify-center
                items-center
                text-white
                font-medium
                my-4
            "
        >
            <img src="../assets/search.png" alt="search" class="mr-1" />
            搜尋
        </button>
    </div>
</template>

<style lang="scss" scoped>
#search-bar {
    width: 997px;
    height: 88px;
    box-shadow: 5px 10px 20px 0px #0000001c;
    :deep(.input-wrapper) {
        width: 260px;
        margin: 23px 0;
        &:not(:last-child) {
            box-shadow: -1px 0px 0px 0px #00000033 inset;
        }
        &:not(:first-child) {
            padding-left: 23px;
        }
    }
    button {
        width: 98px;
        height: 56px;
    }
}
</style>
