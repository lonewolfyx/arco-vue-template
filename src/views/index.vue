<template>
    <div class="flex">default page info</div>

    {{ userInfo }}
</template>

<script setup lang="ts">
import {useUserStore} from "@/stores";
import {ref} from "vue";

console.log(import.meta.env);

const userStore = useUserStore()
const userInfo = ref(userStore.userInfo)
</script>

<style scoped></style>
