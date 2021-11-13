<script setup>
import { defineProps } from 'vue';
import CardTag from './CardTag.vue';

defineProps({
    cols: {
        type: Number,
        default: 4
    }
});
</script>

<template>
    <div
        v-for="i in cols"
        :key="i"
        class="activity-card bg-white rounded-3xl border border-gray-100"
    >
        <div class="card-img-wrapper flex items-end p-4">
            <CardTag />
        </div>
        <div class="p-4 text-left">
            <h4 class="font-medium text-gray-800 pb-4">大溪橋（大溪情人橋）</h4>
            <p class="pb-4 text-gray-200 font-sm font-normal">
                「大溪橋」位於大溪鎮大漢溪上，橫跨大漢溪，
            </p>
            <div class="divider bg-gray-600 w-full"></div>
            <div class="flex justify-between pt-4">
                <span class="flex font-xs text-gray-200"
                    ><img src="../assets/location.png" alt="" class="mr-3" />桃園縣</span
                >
                <span class="text-gray-400">全天候開放</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-img-wrapper {
    height: 222px;
    background-image: url('../assets/spot.png');
}
.activity-card {
    width: 285px;
    height: 403px;
}
</style>
