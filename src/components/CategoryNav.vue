<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, reactive, computed, watch } from 'vue';
import categoryList from '../utils/categories.json';

const store = useStore();
const router = useRouter();
const infoType = [
    { text: '美食饗宴', url: 'src/assets/restaurant.png', value: 'restaurant' },
    { text: '在地住宿', url: 'src/assets/building.png', value: 'hotel' },
    { text: '活動訊息', url: 'src/assets/activity.png', value: 'activity' },
    { text: '特色景點', url: 'src/assets/spot.png', value: 'spot' }
];
const list = computed(() => {
    return store.state.mainType === '' ? infoType : categoryList[store.state.mainType];
});

watch(
    () => store.state.mainType,
    () => {
        resetList();
    }
);

const lastIndex = ref(5);
const showList = ref([]);
const resetList = () => {
    showList.value = [];
    list.value.forEach((e, index) => {
        if (index < 6) showList.value.push(e);
    });
    console.log(showList.value);
};
resetList();

const reachFirst = computed(() => showList.value[0].text === list.value[0].text);
const reachLast = computed(
    () => showList.value[showList.value.length - 1].text === list.value[list.value.length - 1].text
);

const toLast = () => {
    if (reachFirst.value) return;
    const findFirstIndex = list.value.findIndex(e => e.text === showList.value[0].text);
    showList.value.unshift(list.value[findFirstIndex - 1]);
    showList.value.pop();
    lastIndex.value -= 1;
};

const toNext = () => {
    if (reachLast.value) return;
    lastIndex.value += 1;
    showList.value.shift(0, 1);
    showList.value.push(list.value[lastIndex.value]);
};

const searchType = type => {
    if (store.state.mainType === '') {
        store.dispatch('SET_MAIN_TYPE', type.value);
    } else {
        const obj = {
            type: 'others',
            clear: true,
            ...type
        };
        store.dispatch('UPDATE_NAV', obj);
        router.push('/search');
    }
};
</script>

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
                :key="item.text"
                class="icon-box bg-white flex justify-center items-center cursor-pointer"
                @click="searchType(item)"
            >
                <div class="h-1/2 cursor-pointer">
                    <img :src="item.url" :alt="item.text" class="m-auto pb-5 w-auto h-auto" />
                    <span class="text-gray-800 text-sm font-medium">{{ item.text }}</span>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<style lang="scss" scoped>
.icon-nav {
    padding: 52px 0 92px 0;
    .icon-box {
        min-width: 183px;
        height: 183px;
        border: 1px solid #e0e0e0;
        border-radius: 20px;
        margin: 0 10px;
        &:hover {
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
        }
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
