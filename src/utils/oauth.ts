const key = 'oauth';

/**
 * 是否登录
 */
export const isLogin = (): boolean => {
    return !!localStorage.getItem(key);
}

/**
 * 设置 token
 * @param token
 */
export const setToken = (token: string) => {
    localStorage.setItem(key, token);
}

/**
 * 获取 token
 */
export const getToken = (): string => {
    return localStorage.getItem(key) || '';
}

/**
 * 清除 token
 */
export const clearToken = () => {
    localStorage.removeItem(key)
}