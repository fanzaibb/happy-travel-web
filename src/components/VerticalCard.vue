<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { defineProps } from 'vue';
import CardTag from './CardTag.vue';
import { dateParser } from '@/utils/format.js';

defineProps({
    data: {
        type: Array,
        default: () => []
    },
    cols: {
        type: Number,
        default: 4
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
        v-for="item in data"
        :key="item.ID"
        class="activity-card bg-white rounded-3xl border border-gray-100 cursor-pointer relative"
        @click="viewDetail(item)"
    >
        <div class="bg-wrap rounded-t-3xl">
            <div
                class="card-img-wrapper flex items-end p-4 rounded-t-3xl rounded-tr-3lx"
                :style="
                    item.Picture.PictureUrl1
                        ? `background-image: url(${item.Picture.PictureUrl1})`
                        : ''
                "
            ></div>
            <CardTag v-if="item.Class" class="absolute bottom-1/2 left-4" :tag="item.Class" />
            <CardTag v-if="item.Class1" class="absolute bottom-1/2 left-4" :tag="item.Class1" />
        </div>
        <div class="p-4 text-left">
            <h4 class="font-medium text-gray-800 pb-4">{{ item.Name }}</h4>
            <p class="ellipsis text-gray-200 text-sm font-normal" style="min-height: 40px">
                {{ item.Description }}
            </p>
            <div class="divider my-4 bg-gray-600 w-full"></div>
            <div class="flex justify-between">
                <div class="flex font-xs text-gray-200">
                    <div>
                        <img src="../assets/location.png" alt="" class="mr-3" />
                    </div>
                    {{ item.City || item.Address.substring(0, 3) }}
                </div>
                <p class="text-gray-400">
                    {{ item.OpenTime?.length < 5 ? item.OpenTime : '' }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-img-wrapper {
    height: 222px;
}
.activity-card {
    width: 285px;
    height: 403px;
}
.ellipsis {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    &.one-lined {
        -webkit-line-clamp: 1;
    }
}

.bg-wrap {
    width: 283px;
    height: 222px;
    overflow: hidden;
    .card-img-wrapper {
        width: 283px;
        height: 222px;
        background-repeat: no-repeat;
        background-size: cover;
        transform: scale(1, 1);
        transition: all 1s ease-out;
        &:hover {
            transform: scale(1.2, 1.2);
        }
    }
}
</style>
