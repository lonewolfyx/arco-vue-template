import {resolve} from 'path';
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import {vitePluginForArco} from "@arco-plugins/vite-vue";
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vitePluginForArco(),
        AutoImport({
            // resolvers: [ArcoResolver()],
            imports: [
                'vue',
                'pinia',
                '@vueuse/core'
            ],
            dts: 'src/types/auto-imports.d.ts',
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, '../src'),
            },
        ]
    },
    server: {
        host: '0.0.0.0'
    }
})