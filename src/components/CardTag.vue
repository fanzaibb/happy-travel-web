<template>
    <div class="bg-yellow-500 text-gray-800 py-2 px-4 rounded-full flex text-sm">
        <img src="../assets/calendar.png" alt="search" class="mr-4" />
        {{ tag }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    tag: {
        type: String,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
div {
    box-shadow: 0px 4px 4px rgba(155, 179, 196, 0.2);
}
</style>
