import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar } from '@quasar/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            tag.startsWith('arcgis-') || tag.startsWith('calcite-'),
        },
      },
    }),
    quasar(),
  ],
  base: '/freshwater-network/wisconsin/',
  // build: {
  //   outDir: '../wisconsin-v3-build',
  //   emptyOutDir: false,
  // },
});
