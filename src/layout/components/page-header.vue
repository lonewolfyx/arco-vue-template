<template>
    <a-layout-header
        class="relative overflow-hidden min-h-16 bg-[var(--color-bg-2)] px-3 border-b-[var(--color-border)]"
        style="border-bottom-style: solid"
    >
        <div class="flex justify-between items-center w-full h-full">
            <div class="logo">{{ title }}</div>
            <div class="right-side">
                <ul class="flex">

                    <li class="pr-5">
                        <a-tooltip content="全屏">
                            <a-button
                                class="nav-btn"
                                type="outline"
                                :shape="'circle'"
                                @click="toggleFullScreen"
                            >
                                <template #icon>
                                    <IconFullscreenExit v-if="isFullscreen"/>
                                    <IconFullscreen v-else/>
                                </template>
                            </a-button>
                        </a-tooltip>
                    </li>
                    <li class="pr-5">
                        <a-tooltip content="语言">
                            <a-button
                                class="nav-btn"
                                type="outline"
                                :shape="'circle'"
                            >
                                <template #icon>
                                    <IconLanguage/>
                                </template>
                            </a-button>
                        </a-tooltip>
                    </li>
                    <li class="pr-5">
                        <a-tooltip content="主题模式">
                            <a-button
                                class="nav-btn"
                                type="outline"
                                :shape="'circle'"
                            >
                                <template #icon>
                                    <IconSun/>
                                </template>
                            </a-button>
                        </a-tooltip>
                    </li>
                    <li class="pr-5">
                        <a-tooltip content="主题设置">
                            <a-button
                                class="nav-btn"
                                type="outline"
                                :shape="'circle'"
                            >
                                <template #icon>
                                    <IconSettings/>
                                </template>
                            </a-button>
                        </a-tooltip>
                    </li>

                    <li>
                        <a-dropdown>
                            <a-avatar
                                :size="32"
                                :style="{ marginRight: '8px', cursor: 'pointer' }"
                            >
                                <img alt="avatar"
                                     src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"/>
                            </a-avatar>
                            <template #content>
                                <a-doption>
                                    <a-space @click="(e)=>{console.log(e)}">
                                        <IconUser/>
                                        <span>个人中心</span>
                                    </a-space>
                                </a-doption>
                                <a-doption>
                                    <a-space @click="handleLogout">
                                        <IconExport/>
                                        <span>退出登录</span>
                                    </a-space>
                                </a-doption>
                            </template>
                        </a-dropdown>
                    </li>
                </ul>
            </div>
        </div>
    </a-layout-header>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {clearToken} from "@/utils";
import {useFullscreen} from "@vueuse/core";

defineOptions({
    name: 'PageHeader'
})

const title = import.meta.env.VITE_APP_TITLE;
const router = useRouter()
const {isFullscreen, toggle: toggleFullScreen} = useFullscreen();


const handleLogout = () => {
    clearToken()
    router.push('/login')
}

</script>

<style scoped lang="scss">
.nav-btn {
    border-color: rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    font-size: 16px;
}
</style>