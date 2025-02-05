/// <reference types="vite/client" />

declare module '*.vue' {
    import {DefineComponent} from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_PORT: number
    readonly VITE_REQUEST_QUEUE_LIMIT: number
    readonly VITE_API_URL: string
    // 更多环境变量...
}
