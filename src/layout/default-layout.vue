<template>
    <a-layout class="flex justify-center h-full">
        <PageHeader/>
        <a-layout>
            <SideBarNav/>
            <a-layout-content class="p-3">
                <PageLayout/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import PageLayout from "@/layout/page-layout.vue";
import PageHeader from "@/layout/components/page-header.vue";
import SideBarNav from "@/layout/components/Sidebar/index.vue";

defineOptions({
    name: 'DefaultLayout'
})

</script>
