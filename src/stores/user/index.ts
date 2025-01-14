import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {UserState} from "@/stores/user/types";
import {getUserInfoAPI, userLoginOut} from "@/api/user";


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
        logout
    }
})
