<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, reactive, computed } from 'vue';

const store = useStore();
const router = useRouter();
const infoType = [
    { name: '景點', value: 'spot' },
    { name: '美食', value: 'restaurant' },
    { name: '住宿', value: 'hotel' },
    { name: '活動', value: 'activity' }
];

const searchType = type => {
    store.dispatch('SET_MAIN_TYPE', type);
    router.push(`/${type}`);
};

const backToMain = () => {
    store.dispatch('UPDATE_NAV');
    store.dispatch('SET_MAIN_TYPE', '');
    router.push('/');
};
</script>

<template>
    <header class="top-0 left-0 w-full z-50 bg-white flex items-center">
        <nav class="container flex justify-between">
            <div class="text-4xl font-bold">
                <router-link to="/" @click="backToMain">Taiwan</router-link>
            </div>
            <ul class="flex pt-4">
                <li
                    v-for="type in infoType"
                    :key="type.value"
                    class="px-5 cursor-pointer"
                    @click="searchType(type.value)"
                >
                    {{ type.name }}
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 120px;
}
</style>
