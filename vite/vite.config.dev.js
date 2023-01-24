import { defineConfig, splitVendorChunkPlugin } from 'vite'
import copy from 'rollup-plugin-copy'
import path from 'path'
// import liveReload from 'vite-plugin-live-reload'
// import serve from 'rollup-plugin-serve'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [
    // liveReload([
    //   // edit live reload paths according to your source code
    //   // for example:
    //   __dirname + '/(images|scripts)/**/*.*',
    //   __dirname + '/styles/**/*.css',
    //   __dirname + '/src/public/*.html',
    // ]),
    splitVendorChunkPlugin(),
  ],

  // config
  root: 'src/public/',
  css: {
    devSourcemap: true
  },
  build: {
    emptyOutDir: false,
    minify: 'esbuild',
    outDir: "",
    rollupOptions: {
      input: {
        "main": path.resolve(__dirname, '../scripts/main.js'),
        "style": path.resolve(__dirname, '../styles/style.css'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images/";
          } else {
            extType = "";
          }
          return `${extType}[name][extname]`;
        },
        //assetFileNames: "[name][extname]",
        chunkFileNames: "[name][extname]",
        entryFileNames: "[name].js"
      },
      plugins: [
        copy({
          targets: [
            { src: 'images/**/*', dest: 'src/public/images' }
          ]
        }),
        //serve('src/public')
      ]
    },
    sourcemap: true,
    manifest: true
  },

  // server: {
  //   strictPort: true,
  //   port: 5133,
  //   open: '/',
  //   https: false,
  //   proxy: {
  //     '*': {
  //       target: "http://localhost:5133"
  //     }
  //   }
  // },
})