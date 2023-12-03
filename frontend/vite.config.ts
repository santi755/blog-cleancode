import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vuetify({ autoImport: true })],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "src/assets/css/base/_vite_preprocessed.scss";`
            }
        }
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url))
            }
        ]
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        watch: {
            usePolling: true
        }
    }
});
