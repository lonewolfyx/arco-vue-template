import {resolve} from 'path';
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import {vitePluginForArco} from "@arco-plugins/vite-vue";

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vitePluginForArco()
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