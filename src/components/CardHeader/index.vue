<template>
    <div class="flex justify-between items-center mb-5">
        <slot/>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'CardHeader'
})
</script>