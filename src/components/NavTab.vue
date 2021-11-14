<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const router = useRouter();
const list = computed(() => store.state.navList);

const clickNav = item => {
    router.push(item.to);
};
</script>

<template>
    <div class="text-nav-bar text-gray-250 font-nornmal text-sm py-2 text-left">
        <ul class="container flex">
            <li class="cursor-pointer" @click="clickNav({ to: '/' })">首頁</li>
            <li class="cursor-pointer" v-for="item in list" :key="item.key" @click="clickNav(item)">
                &nbsp;/ &nbsp;&nbsp;{{ item.label }}
            </li>
        </ul>
    </div>
</template>
