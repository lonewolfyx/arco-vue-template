<template>
    <div class="relative w-[30rem] m-auto mt-5">
        <a-form :model="queryParams" @submit="handleSubmit">
            <a-form-item label="用户名称">
                <a-input v-model="queryParams.username"/>
            </a-form-item>
            <a-form-item label="密码">
                <a-input-password v-model="queryParams.password"/>
            </a-form-item>
            <a-form-item>
                <a-button html-type="submit">登录</a-button>
            </a-form-item>
            <a-form-item>
                {{ message }}
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useUserStore} from "@/stores";
import {Message} from "@arco-design/web-vue";
import {DEFAULT_REDIRECT_ROUTE} from "@/constants";

const router = useRouter()
const route = useRoute()

const queryParams = ref<{ username: string; password: string }>({
    username: 'admin',
    password: 'REWeqw,23123'
})

const message = ref('')

const handleSubmit = async () => {
    const {redirect} = route.query as { redirect: string }
    try {
        const res = await useUserStore().login(queryParams.value)
        Message.info('登录成功')
        await router.push({
            name: redirect ?? DEFAULT_REDIRECT_ROUTE
        })
    } catch (error) {
        message.value = (error as Error).message
    }
}
</script>

<style scoped>

</style>