<script setup>
import VCard from './VerticalCard.vue';
import HCard from './HorizonCard.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const props = defineProps({
    cards: {
        type: Object,
        default: () => {}
    },
    data: {
        type: Array,
        default: () => []
    }
});
const router = useRouter();
const store = useStore();
const searchCity = city => {
    const obj = {
        type: 'city',
        clear: true,
        ...city
    };
    store.dispatch('UPDATE_NAV', obj);
    router.push('/search-city');
};
</script>

<template>
    <div class="wrapper">
        <h2 class="text-2xl text-black pb-8 text-left font-medium">{{ props.cards.title }}</h2>
        <div class="flex justify-between">
            <template v-if="props.cards.type === 'c'">
                <div
                    v-for="city in props.data"
                    :key="city.value"
                    class="city-bg flex items-end justify-center text-lg font-medium cursor-pointer"
                    :class="city.value"
                    @click="searchCity(city)"
                >
                    <div class="mask w-full h-full rounded-2xl"></div>
                    <p class="text-white absolute bottom-3">{{ city.text }}</p>
                </div>
            </template>
            <VCard v-if="props.cards.type === 'v'" :data="data" />
            <HCard v-if="props.cards.type === 'h'" :data="data" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    padding-bottom: 40px;
    .city-bg {
        height: 236px;
        width: 182px;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all 1s ease-out;

        .mask::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            transition: opacity 0.5s ease-out;
            opacity: 0;
            z-index: -1;
        }
        .mask:hover::before {
            z-index: 2;
            opacity: 1;
        }

        &.Taipei {
            position: relative;
            background-image: url('@/assets/taipei.png');
            .mask {
                background: linear-gradient(
                    359.76deg,
                    rgba(243, 114, 44, 0.8) 0.24%,
                    rgba(243, 114, 44, 0.4) 15.42%,
                    rgba(243, 114, 44, 0.175398) 32.54%,
                    rgba(243, 114, 44, 0) 99.82%
                );
            }
            .mask::before {
                background: linear-gradient(
                    359.76deg,
                    rgba(243, 114, 44, 0.8) 0.24%,
                    rgba(243, 114, 44, 0.4) 49.66%,
                    rgba(243, 114, 44, 0) 79.23%
                );
            }
        }
        &.Kaohsiung {
            position: relative;
            background-image: url('@/assets/Kaohsiung.png');
            .mask {
                background: linear-gradient(
                    359.76deg,
                    rgba(249, 65, 68, 0.8) 0.24%,
                    rgba(249, 65, 68, 0.4) 20.67%,
                    rgba(249, 65, 68, 0) 99.82%
                );
            }
            .mask::before {
                background: linear-gradient(
                    359.76deg,
                    rgba(249, 65, 68, 0.89) 0.24%,
                    rgba(249, 65, 68, 0.253) 20.67%,
                    rgba(249, 65, 68, 0) 99.82%
                );
            }
        }
        &.Taichung {
            position: relative;
            background-image: url('@/assets/Taichung.png');
            .mask {
                background: linear-gradient(
                    359.76deg,
                    rgba(87, 117, 144, 0.8) 0.24%,
                    rgba(87, 117, 144, 0.4) 20.67%,
                    rgba(87, 117, 144, 0) 99.82%
                );
            }
            .mask::before {
                background: linear-gradient(
                    359.76deg,
                    rgba(87, 117, 144, 0.63) 0.24%,
                    rgba(87, 117, 144, 0.4) 20.67%,
                    rgba(87, 117, 144, 0) 99.82%
                );
            }
        }
        &.Tainan {
            position: relative;
            background-image: url('@/assets/Tainan.png');
            .mask {
                background: linear-gradient(
                    359.76deg,
                    rgba(144, 190, 109, 0.8) 0.24%,
                    rgba(144, 190, 109, 0.4) 20.67%,
                    rgba(144, 190, 109, 0) 99.82%
                );
            }
            .mask::before {
                background: linear-gradient(
                    359.76deg,
                    rgba(144, 190, 109, 0.61) 0.24%,
                    rgba(144, 190, 109, 0.4) 20.67%,
                    rgba(144, 190, 109, 0) 99.82%
                );
            }
        }
        &.PingtungCounty {
            position: relative;
            background-image: url('@/assets/Pingtung.png');
            .mask {
                background: linear-gradient(
                    359.76deg,
                    rgba(243, 114, 44, 0.8) 0.24%,
                    rgba(243, 114, 44, 0.4) 20.67%,
                    rgba(243, 114, 44, 0) 99.82%
                );
            }
            .mask::before {
                background: linear-gradient(
                    359.76deg,
                    rgba(243, 114, 44, 0.8) 0.24%,
                    rgba(243, 114, 44, 0.4) 20.67%,
                    rgba(243, 114, 44, 0) 99.82%
                );
            }
        }
        &.TaitungCounty {
            position: relative;
            background-image: url('@/assets/Taitung.png');
            .mask {
                background: linear-gradient(
                    359.76deg,
                    rgba(67, 170, 139, 0.8) 0.24%,
                    rgba(67, 170, 139, 0.4) 20.67%,
                    rgba(67, 170, 139, 0) 99.82%
                );
            }
            .mask::before {
                background: linear-gradient(
                    359.76deg,
                    rgba(67, 170, 139, 0.747) 0.24%,
                    rgba(67, 170, 139, 0.603) 20.67%,
                    rgba(67, 170, 139, 0) 99.82%
                );
            }
        }
    }
}
</style>
