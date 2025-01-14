import {loadEnv, mergeConfig} from "vite";
import baseConfig from './vite.config.base'

const mode = 'development'
const env = loadEnv(mode, process.cwd(), '')

export default mergeConfig({
    mode,
    server: {
        port: env.VITE_PORT,
        open: true,
    },
}, baseConfig)