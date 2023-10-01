
<template>
 <ul>
    <template v-for="(data, key, index) in resault" :key="index">
        <li><RouterLink :to="{name:'category', params:{category:key}}">{{ key }}</RouterLink></li>
    </template>
 </ul>

</template>


<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from "axios"

const resault = ref(null)


onMounted(()=> {

    console.log(axios.defaults.baseURL)
    axios.get("").then((res)=>{
        resault.value=res.data
    })
})
</script>