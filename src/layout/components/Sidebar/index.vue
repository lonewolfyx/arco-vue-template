<template>
    <a-layout-sider
        theme="light"
        :collapsed="collapsed"
    >
        <a-menu
            :style="{ height: '100%' }"
            :default-open-keys="['0']"
            :default-selected-keys="['0_2']"
            show-collapse-button
            breakpoint="xl"
            @collapse="onCollapse"
        >
            <a-sub-menu key="0">
                <template #icon>
                    <icon-apps></icon-apps>
                </template>
                <template #title>Navigation 1</template>
                <a-menu-item key="0_0">Menu 1</a-menu-item>
                <a-menu-item key="0_1">Menu 2</a-menu-item>
                <a-menu-item key="0_2">Menu 3</a-menu-item>
                <a-menu-item key="0_3">Menu 4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="1">
                <template #icon>
                    <icon-bug></icon-bug>
                </template>
                <template #title>Navigation 2</template>
                <a-menu-item key="1_0">Menu 1</a-menu-item>
                <a-menu-item key="1_1">Menu 2</a-menu-item>
                <a-menu-item key="1_2">Menu 3</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="2">
                <template #icon>
                    <icon-bulb></icon-bulb>
                </template>
                <template #title>Navigation 3</template>
                <a-menu-item key="2_0">Menu 1</a-menu-item>
                <a-menu-item key="2_1">Menu 2</a-menu-item>
                <a-sub-menu key="2_2" title="Navigation 4">
                    <a-menu-item key="2_2_0">Menu 1</a-menu-item>
                    <a-menu-item key="2_2_1">Menu 2</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<script setup lang="ts">
import {Message} from "@arco-design/web-vue";
import {ref} from "vue";

defineOptions({
    name: 'SideBarNav'
})
const collapsed = ref(false);

const onCollapse = (val: boolean, type: 'clickTrigger' | 'responsive') => {
    const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
    collapsed.value = val
    Message.info({
        content,
        duration: 2000,
    });

}
</script>

<style scoped>

</style>