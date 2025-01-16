<template>
    <a-layout class="flex justify-center h-full">
        <PageHeader/>
        <a-layout>
            <a-layout-sider theme="dark">Sider</a-layout-sider>
            <a-layout-content class="p-3">
                <PageLayout/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import PageLayout from "@/layout/page-layout.vue";
import PageHeader from "@/layout/components/page-header.vue";

defineOptions({
    name: 'DefaultLayout'
})

</script>
