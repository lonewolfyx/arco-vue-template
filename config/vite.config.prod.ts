import {mergeConfig} from "vite";
import baseConfig from "./vite.config.base";

const mode = 'production'

export default mergeConfig({
    mode,
    build: {
        // 指定生成静态资源的存放路径
        assetsDir: './assets',
        minify: true,
        // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
        cssCodeSplit: true,
        // chunks大小报警限制500KB
        chunkSizeWarningLimit: 2000,
        // 构造 source map
        sourcemap: true,
        rollupOptions: {
            // 最小化拆分包
            manualChunks: {
                arco: ['@arco-design/web-vue'],
                chart: ['echarts', 'vue-echarts'],
                vue: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue-i18n'],
            },
            entryFileNames: `js/[name].js`,
            chunkFileNames: `js/[name]-[hash].js`,
            assetFileNames: `[ext]/[name]-[hash].[ext]`,
            // 告诉打包工具 在external配置的 都是外部依赖项  不需要打包
            // external: ['vue', 'element-plus', 'echarts'],
        },
        terserOptions: {
            compress: {
                drop_console: true, // 删除console语句
                drop_debugger: true, // 删除debugger
            },
            format: {
                comments: false, // 移除注释
            },
        },
    }
}, baseConfig)