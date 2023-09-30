<script setup lang="ts">
import { reactive, ref } from "vue"
const text = ref('')
const count = reactive({ number: 0 })

const counterPlus = () => { count.number++ }
const counterMunis = () => { count.number-- }
</script>


<template>
  <h1>Hello world <b>{{ count }}</b></h1>
  <button @click="counterPlus">plus</button>
  <button @click="counterMunis">minus</button>
  <br>

  <template v-if="true">
    <div v-show="count.number > 1">
      <input type="text" v-model="text">
      <p>input: {{ text }}</p>
    </div>
  </template>
</template>


<style scoped></style>
