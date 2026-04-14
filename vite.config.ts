import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        flap: resolve(__dirname, 'src/flap.html'),
        asteroid: resolve(__dirname, 'src/asteroid.html'),
        bricks: resolve(__dirname, 'src/bricks.html'),
        blockdrop: resolve(__dirname, 'src/blockdrop.html'),
        'ocr-test': resolve(__dirname, 'src/ocr-test.html'),
      },
    },
  },
})
