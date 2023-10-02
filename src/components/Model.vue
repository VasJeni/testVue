<template>
    <div class="model">
        <div class="model-conten">
        <header class="model-header">
            <button @click="emit('close')">close</button>
        </header>
        <slot name="content"></slot>
    </div>
    </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
    (event: 'close'): void;
}>();
</script>

<style lang="scss">
.model {
    position:fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    z-index: 500;
    background-color: rgba($color: #000000, $alpha: .4);
}
.model-content {
    min-width: 150px;
    min-height: 150px;
    background-color: white;
}
</style>