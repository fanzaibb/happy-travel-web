<script setup>
import { ref } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'select'
    },
    width: {
        type: String,
        default: ''
    },
    left: {
        type: String,
        default: ''
    },
    selection: {
        type: Array,
        default: () => {}
    },
    setClass: {
        type: String,
        default: ''
    }
});
const setSize = `width: ${props.width}; left: ${props.left}`;
const toggle = ref(false);
const switchToggle = () => (toggle.value = !toggle.value);
const onFocus = () => {
    console.log('show option');
    switchToggle();
};
</script>

<template>
    <div v-if="props.type === 'select'" class="input-wrapper cursor-pointer" @click="switchToggle">
        <div class="flex text-black">
            <slot name="title"></slot>
            <div class="p-2">
                <img
                    src="../assets/arrow.png"
                    alt="arrow"
                    class="ease"
                    :class="{ expand: toggle }"
                />
            </div>
        </div>
        <p class="text-left text-gray-300 text-sm"><slot></slot></p>
    </div>
    <input
        v-else
        type="text"
        class="input-wrapper text-left pt-1 font-medium"
        placeholder="請輸入關鍵字"
        @focus="onFocus"
    />
    <teleport v-if="toggle" to="#option-target">
        <transition id="option">
            <div
                v-if="toggle"
                class="option-wrapper bg-white rounded-lg"
                :class="props.setClass"
                :style="setSize"
            >
                <slot name="option">
                    <div
                        v-for="item in props.selection"
                        :key="item"
                        class="cursor-pointer hover:bg-pink-200 rounded text-gray-800 pt-1"
                    >
                        {{ item }}
                    </div>
                </slot>
            </div>
        </transition>
    </teleport>
</template>

<style lang="scss" scoped>
.expand {
    transform: rotate(180deg);
}

.ease {
    transition: transform 0.5s ease-out;
}

input {
    outline: none;
    &::placeholder {
        @apply text-sm text-gray-300;
    }
}

.option-wrapper {
    position: absolute;
    top: 70px;
    left: 141px;
    z-index: 9999;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    padding: 10px;
    div {
        height: 32px;
    }
}

.bounce-enter-active {
    animation: bounce-in 3s ease-out both;
}

.bounce-leave-active {
    animation: bounce-in 2s reverse ease-in both;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>