<script setup>
// import CardWrapper from '../components/CardWrapper.vue';
import NavTab from '../components/NavTab.vue';
import { useStore } from 'vuex';
import { dataInCity } from '../mock.json';
import { computed } from 'vue';

const store = useStore();
const data = computed(() => store.state.detail);
const detail = computed(() => store.state.navList[3]);
// console.log(data.value, detail.value);
const photos = [
    {
        url: 'https://www.travel.taipei/image/182690',
        show: false
    },
    {
        url: 'https://www.travel.taipei/image/63313',
        show: true
    },
    {
        url: 'https://www.travel.taipei/image/63327',
        show: false
    }
];

const cards = {
    activity: { title: '熱門活動', value: 'activity', type: 'h' },
    spot: { title: '熱門景點', value: 'spot', type: 'v' },
    restaurant: { title: '熱門美食', value: 'restaurant', type: 'v' },
    hotel: { title: '熱門住宿', value: 'hotel', type: 'v' }
};
</script>

<template>
    <div class="relative w-full top-bg text-left text-white font-medium flex items-center">
        <section>
            <h2 class="text-lg pb-2">目的地</h2>
            <h1 class="text-4xl flex">
                <img src="../assets/w-location.png" alt="" class="mr-3" />{{ detail.text }}
            </h1>
        </section>
    </div>
    <NavTab />
    <div class="container">
        <div class="result-bar text-gray-800 text-xl text-left flex">
            {{ data.Name }}
            <img src="../assets/location.png" alt="" class="ml-4 h-5 pt-1" />
            <div v-if="data.Address" class="text-sm text-gray-300 pt-1 pl-1">
                {{ data.Address }}
            </div>
        </div>
    </div>
    <div class="w-full m-auto flex justify-center">
        <div class="slide-wrapper flex flex-nowrap justify-center pt-8" style="width: 2400px">
            <div class="toggle-bar h-full absolute flex justify-between items-center z-50">
                <button class="toggle-btn bg-white rounded-full left-arrow">
                    <div class="toggle-btn-icon">&lt;</div>
                </button>
                <button class="toggle-btn bg-white rounded-full left-arrow">
                    <div class="toggle-btn-icon">&gt;</div>
                </button>
            </div>
            <div
                v-for="photo in photos"
                :key="photo.url"
                class="picture-wrapper rounded-3xl mx-4"
                :class="{ 'opacity-50': !photo.show }"
                :style="`background-image: url(${photo.url});`"
            ></div>
        </div>
    </div>
    <div class="container pt-20">
        <div class="grid grid-cols-4 gap-2 text-left pb-20">
            <section class="detail-block col-start-1 col-end-3 px-4 py-8">
                <h3 class="text-gray-800 text-lg font-medium">景點介紹</h3>
                <article class="text-sm pt-10">
                    {{ data.DescriptionDetail || data.Description }}
                </article>
            </section>
            <section class="info-block col-start-4 px-4 py-8 font-xs text-gray-200">
                <div class="flex pb-4">
                    <div><img src="../assets/location.png" alt="" class="mr-3" /></div>
                    {{ data.City || data.Address }}
                </div>
                <div class="flex pb-4">
                    <div><img src="../assets/location.png" alt="" class="mr-3" /></div>
                    {{ data.Phone }}
                </div>
                <div class="flex pb-4">
                    <div><img src="../assets/location.png" alt="" class="mr-3" /></div>
                    {{ data.OpenTime || data.StartTime }}
                </div>
                <div class="flex pb-4">
                    <div><img src="../assets/location.png" alt="" class="mr-3" /></div>

                    {{ data.Organizer }}
                </div>
            </section>
        </div>
        <!-- <CardWrapper :cards="cards[store.state.navList[1].value]" :data="others" class="py-10" /> -->
    </div>
</template>

<style lang="scss" scoped>
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
    padding: 45px 0 20px 0;
}
.detail-block {
    width: 893px;
    min-height: 404px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.5);
}
.info-block {
    width: 285px;
    height: 297px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.5);
}
.picture-wrapper {
    width: 790px;
    height: 615px;
    background-repeat: no-repeat;
    background-size: cover;
}
.slide-wrapper {
    position: relative;
    .toggle-bar {
        width: 840px;
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
