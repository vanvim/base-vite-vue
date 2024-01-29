<template>
  <!-- <component :is="layout" class="min-h-[100vh]"> -->
    <router-view :key="path"/>
  <!-- </component> -->
</template>
<script setup>
import {computed,ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
// import LayoutDefault from "@/layouts/LayoutDefault.vue";
// import LayoutAuth from "@/layouts/LayoutAuth.vue";

// const listLayout = {
//   LayoutDefault: LayoutDefault,
//   LayoutAuth: LayoutAuth,
// }

const layout = ref('')
const router = useRouter();
const route = useRoute();
console.log(route);
const path = computed(() => route.fullPath)
</script>