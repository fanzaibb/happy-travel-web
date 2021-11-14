<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import CardTag from './CardTag.vue';

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
const viewDetail = info => {
    router.push('/detail');
};
</script>

<template>
    <div
        v-for="item in data"
        :key="item.ID"
        class="activity-card bg-white rounded-3xl border border-gray-100 cursor-pointer"
        @click="viewDetail"
    >
        <div
            class="card-img-wrapper flex items-end p-4 rounded-t-3xl rounded-tr-3lx"
            :style="`background-image: url(${item.Picture.PictureUrl1})`"
        >
            <CardTag :tag="item.Class1" />
        </div>
        <div class="p-4 text-left">
            <h4 class="font-medium text-gray-800 pb-4">{{ item.Name }}</h4>
            <p class="ellipsis text-gray-200 text-sm font-normal">
                {{ item.DescriptionDetail }}
            </p>
            <div class="divider my-4 bg-gray-600 w-full"></div>
            <div class="flex justify-between">
                <span class="flex font-xs text-gray-200"
                    ><img src="../assets/location.png" alt="" class="mr-3" />{{ item.City }}</span
                >
                <p class="text-gray-400">
                    {{ item.OpenTime.length < 5 ? item.OpenTime : '請見明細' }}
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
</style>
