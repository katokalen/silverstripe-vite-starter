import { defineConfig, splitVendorChunkPlugin } from 'vite';
import copy from 'rollup-plugin-copy';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [
    splitVendorChunkPlugin(),
  ],

  // config
  root: 'src/public/',
  css: {
    devSourcemap: false
  },
  build: {
    emptyOutDir: false,
    minify: 'esbuild',
    outDir: "",
    rollupOptions: {
      input: {
        "bundle": path.resolve(__dirname, '../scripts/main.js'),
        "editor": path.resolve(__dirname, '../scripts/editor.js'),
        "oyr": path.resolve(__dirname, '../styles/oyr.css'),
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
        })
      ]
    },
    sourcemap: false,
    manifest: true
  }
});
