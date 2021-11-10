<template>
    <div
        v-for="i in 2"
        :key="i"
        class="activity-card bg-white flex rounded-3xl border border-gray-100"
    >
        <img src="../assets/activies.png" alt="activities" width="321" height="241" />
        <div class="py-8 px-4 text-left">
            <h4 class="font-medium text-gray-800 pb-4">大溪橋（大溪情人橋）</h4>
            <p class="pb-4 text-gray-200 font-sm font-normal">
                「大溪橋」位於大溪鎮大漢溪上，橫跨大漢溪，
            </p>
            <div class="divider bg-gray-600 w-full"></div>
            <span class="flex pt-4 font-xs">
                <img src="../assets/calendar.png" alt="" class="mr-3 pl-1" />
                109-12-12
            </span>
            <span class="flex pt-3 font-xs">
                <img src="../assets/location.png" alt="" class="mr-3" />
                桃園縣
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.activity-card {
    width: 590px;
    height: 241px;
}
</style>
