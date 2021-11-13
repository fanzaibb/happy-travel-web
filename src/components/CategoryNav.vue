<template>
    <div class="icon-nav flex justify-center items-center">
        <div
            class="toggole-bar w-full absolute flex justify-between"
            :style="`width: ${getToggleWidth}px;`"
        >
            <button class="toggle-btn bg-white rounded-full left-arrow">
                <div class="toggle-btn-icon">&lt;</div>
            </button>
            <button class="toggle-btn bg-white rounded-full left-arrow">
                <div class="toggle-btn-icon">&gt;</div>
            </button>
        </div>
        <div
            v-for="item in list"
            :key="item"
            class="icon-box bg-white flex justify-center items-center"
        >
            <div class="h-1/2">
                <img src="../assets/building.png" alt="hotel" class="m-auto pb-5" />
                <span class="text-gray-800 text-sm font-medium">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const cardNum = 4;
const fullWidth = 183 * cardNum + 20 * (cardNum - 1);
const getToggleWidth = computed(() => fullWidth + 64);

const list = [
    { name: '自然風景' },
    { name: '遊憩類' },
    { name: '觀光工廠' },
    { name: '休閒農業' },
    { name: '生態類' },
    { name: '古蹟類' },
    { name: '其他' }
];
</script>

<style lang="scss" scoped>
.icon-nav {
    padding: 52px 0 92px 0;
    .icon-box {
        width: 183px;
        height: 183px;
        border: 1px solid #e0e0e0;
        border-radius: 20px;
        margin: 0 10px;
    }
    .toggle-btn {
        opacity: 0.8;
        width: 64px;
        height: 64px;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
        .toggle-btn-icon {
            font-size: 24px;
            font-weight: 500;
            @apply text-pink-100;
        }
    }
}
</style>
