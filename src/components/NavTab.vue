<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const router = useRouter();
const list = computed(() => store.state.navList);
const clickNav = item => {
    if (item.to === '/') {
        store.dispatch('UPDATE_NAV');
        store.dispatch('SET_MAIN_TYPE', '');
    } else {
        store.dispatch('UPDATE_NAV', { ...item, clear: true });
    }
    router.push(item.to);
};
</script>

<template>
    <div class="text-nav-bar text-gray-250 font-nornmal text-sm py-2 text-left">
        <ul class="container flex">
            <li class="cursor-pointer" @click="clickNav({ to: '/' })">首頁</li>
            <li
                v-for="(item, index) in list"
                :key="item.value"
                v-show="item.value !== ''"
                :class="{ 'cursor-pointer': index < list.length - 1 }"
                @click="clickNav(item)"
            >
                &nbsp;/ &nbsp;&nbsp;{{ item.text }}
            </li>
        </ul>
    </div>
</template>
