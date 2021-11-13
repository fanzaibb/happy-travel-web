<template>
    <div class="icon-nav flex justify-center items-center">
        <div v-if="list.length > 6" class="toggle-bar w-full absolute flex justify-between">
            <button
                class="toggle-btn bg-white rounded-full left-arrow"
                :class="{ invisible: reachFirst }"
                @click="toLast"
            >
                <div class="toggle-btn-icon">&lt;</div>
            </button>
            <button
                class="toggle-btn bg-white rounded-full left-arrow"
                :class="{ invisible: reachLast }"
                @click="toNext"
            >
                <div class="toggle-btn-icon">&gt;</div>
            </button>
        </div>
        <transition-group tag="section" class="flex justify-center items-center" name="slide">
            <div
                v-for="item in showList"
                :key="item"
                class="icon-box bg-white flex justify-center items-center pointer-cursor"
            >
                <div class="h-1/2">
                    <img src="../assets/building.png" alt="hotel" class="m-auto pb-5" />
                    <span class="text-gray-800 text-sm font-medium">{{ item.name }}</span>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const list = [
    { name: '自然風景' },
    { name: '遊憩類' },
    { name: '觀光工廠' },
    { name: '休閒農業' },
    { name: '生態類' },
    { name: '古蹟類' },
    { name: '其他' },
    { name: '其他1' }
];

const lastIndex = ref(5);
const showList = reactive([]);
list.forEach((e, index) => {
    if (index < 6) showList.push(e);
});

const reachFirst = computed(() => showList[0].name === list[0].name);
const reachLast = computed(() => showList[5].name === list[list.length - 1].name);

const toLast = () => {
    if (reachFirst.value) return;
    const findFirstIndex = list.findIndex(e => e.name === showList[0].name);
    showList.unshift(list[findFirstIndex - 1]);
    showList.pop();
    lastIndex.value -= 1;
};

const toNext = () => {
    if (reachLast.value) return;
    lastIndex.value += 1;
    showList.shift(0, 1);
    showList.push(list[lastIndex.value]);
};
</script>

<style lang="scss" scoped>
.icon-nav {
    padding: 52px 0 92px 0;
    .icon-box {
        min-width: 183px;
        height: 183px;
        border: 1px solid #e0e0e0;
        border-radius: 20px;
        margin: 0 10px;
    }
    .toggle-bar {
        width: 1262px;
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
    .slide-enter-active {
        transition: all 0.5s ease-out;
    }

    .slide-leave-active {
        transition: all 0.3s ease;
    }

    .slide-enter-from {
        transform: translateX(-20px);
        opacity: 0;
    }
    .slide-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }

    button {
        transition: visibility 0.5s ease-in-out;
        &:hover {
            animation: move-in 1s ease-out;
        }
    }
    
    @keyframes move-in {
        0% {
            opacity: 0.5;
            transform: translateY(3px);
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
}
</style>
