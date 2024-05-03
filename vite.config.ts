import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import UnoCSS from 'unocss/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_PROD_DEVTOOLS__: true,
  },
  build: {
    sourcemap: 'inline',
  },
  resolve: {
    alias: {
            '~/': `${pathSrc}/`,
          },
  },
  css: {
        preprocessorOptions: {
          scss: {
            additionalData: `
                @use "~/styles/element/index.scss";
            `,
          },
        },
      },
  plugins: [

    vue({
      customElement: true,
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue'],
      dts: './auto-imports.d.ts',
      // resolvers: [
      //           ElementPlusResolver({
      //             importStyle: 'sass',
      //           }),
      //         ],
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ['src/components', 'src/routes'],
      extensions: ['vue'],
      dts: './components.d.ts',
      resolvers: [
                ElementPlusResolver({
                  importStyle: 'sass',
                  directives: true,
                }),
              ],
    }),

    UnoCSS( {
      mode: 'shadow-dom',
    }),

    ElementPlus({
      useSource: true,
    }),

  ],
})
