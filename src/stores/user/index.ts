import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {UserState} from "@/stores/user/types";
import {getUserInfoAPI, userLogin as useUserLogin, userLoginOut} from "@/api/user";
import {UserLoginParamsData} from "@/types";
import {clearToken, setToken} from "@/utils";


export const useUserStore = defineStore('user', () => {
    const user = ref<UserState>({
        info: {},
        role: ''
    })

    const userInfo = computed({
        get() {
            return user;
        },
        set(value) {
            user.value.info = value;
        }
    })

    const userRole = computed({
        get() {
            return user.value.role
        },
        set(value) {
            console.log('更新数据', value)
            user.value.role = value
        }
    })


    // 获取用户信息
    const getUserInfo = async () => {
        const res = await getUserInfoAPI() as any;
        user.value.info = res?.data;
        user.value.role = 'admin'
    }

    // 用户推出了
    const logout = async () => {
        try {
            await userLoginOut();
        } finally {
            logoutCallBack();
        }
    }

    // 用户登录
    const login = async (loginForm: UserLoginParamsData) => {
        try {
            const res = await useUserLogin(loginForm)
            setToken(res.data.access_token)
            console.log('用户store 的res', res)
        } catch (error) {
            clearToken()
            throw error
        }
    }

    const logoutCallBack = () => {
        // TODO 清理当前的 token 值
        // TODO 清理当前存储的用户信息
        user.value.info = {};
        user.value.role = '';
    }

    return {
        user,
        userRole,
        userInfo,
        getUserInfo,
        logout,
        login,
    }
})
