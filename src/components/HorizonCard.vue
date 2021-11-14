<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { defineProps } from 'vue';
import CardTag from './CardTag.vue';
import { dateParser } from '@/utils/format.js';

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    cols: {
        type: Number,
        default: 2
    }
});
const router = useRouter();
const store = useStore();
const viewDetail = info => {
    const obj = {
        type: 'detail',
        clear: true,
        value: info.Name,
        text: info.Name
    };
    store.dispatch('UPDATE_NAV', obj);
    store.dispatch('SET_DETAIL', info);
    router.push('/detail');
};
</script>

<template>
    <div
        v-for="item in props.data"
        :key="item.ID"
        class="
            activity-card
            bg-white
            flex
            rounded-3xl
            border border-gray-100
            cursor-pointer
            relative
        "
        @click="viewDetail(item)"
    >
        <div class="bg-wrap rounded-l-3xl">
            <div
                class="card-img-wrapper flex items-end p-4"
                :style="`background-image: url(${item.Picture.PictureUrl1})`"
            ></div>
            <CardTag class="absolute bottom-4 left-4" :tag="item.Class1" />
        </div>
        <div class="card-text p-4 text-left w-full">
            <h4 class="font-medium text-gray-800 pb-4">{{ item.Name }}</h4>
            <p class="ellipsis mb-4 text-gray-200 font-sm font-normal">
                {{ item.Description }}
            </p>
            <div class="divider bg-gray-600 w-full"></div>
            <span class="flex pt-2 font-xs">
                <img src="../assets/calendar.png" alt="" class="mr-3 pl-1" />
                {{ dateParser(item.StartTime) }}
            </span>
            <span class="flex pt-1 font-xs">
                <img src="../assets/location.png" alt="" class="mr-3" />
                {{ item.Location }}
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.activity-card {
    width: 590px;
    height: 213px;

    .bg-wrap {
        height: 213px;
        width: 295px;
        overflow: hidden;
        .card-img-wrapper {
            width: 295px;
            height: 213px;
            background-repeat: no-repeat;
            background-size: cover;
            transform: scale(1, 1);
            transition: all 1s ease-out;
            &:hover {
                transform: scale(1.2, 1.2);
            }
        }
    }
    .card-text {
        width: 295px;
    }
    .ellipsis {
        height: 46px;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        white-space: normal;
    }
}
</style>
