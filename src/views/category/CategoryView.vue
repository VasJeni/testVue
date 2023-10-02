<template>
    {{ category }}
    <hr>
    <!-- {{ resault }} -->
    <ul v-if="!loading">
    <template v-for="(data, key, index) in response?.results" :key='index'>
    <li>
        <EntityCard :card="data"/>
    </li>
    </template>
</ul>
<template v-else>
    <h1>loading...</h1>
</template>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from "axios"
import {type GetList, type Planet} from "@/interfaces/entity.interface"
import EntityCard from '@/components/EntityCard.vue'

const route = useRoute()
const response = ref<GetList<Planet> | null>(null)
const category = computed(()=> route.params.category as string)
const loading = ref(false)

const getCategory = ()=>{
    loading.value = true
    axios.get<GetList<Planet>>(category.value).then((res)=>{
        loading.value = false;
        response.value = res.data
    })    
}

onMounted(()=>{
    getCategory()
})
</script>