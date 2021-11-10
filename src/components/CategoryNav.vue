<template>
    <div class="icon-nav flex justify-center">
        <div v-for="i in 4" :key="i" class="icon-box bg-white flex justify-center items-center">
            <div class="h-1/2">
                <img src="../assets/building.png" alt="hotel" class="m-auto pb-5" />
                <span class="text-gray-800 text-sm font-medium">在地住宿</span>
            </div>
        </div>
    </div>
</template>

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
}
</style>
