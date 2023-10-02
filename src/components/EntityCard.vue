<template>
    <base-model v-if="modelShow" @close="modelShow=false">
    <template #content>
    <ul>
    <template v-for="(f, i) in props.card.films" :key="i">
    <li><p>
        {{ f }}
    </p></li>
    </template>
</ul>
</template>

</base-model>
    <button @click="modelShow=!modelShow">{{ props.card.name }}</button>
</template>

<script lang="ts" setup>
import {type PropType, ref} from 'vue'
const props = defineProps({
    card : {type: Object as PropType<Planet>, required: true},
    });

const modelShow = ref(false)

</script>