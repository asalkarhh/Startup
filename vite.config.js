import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs/promises'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /.*\.js$/ }, async (args) => {
              if (args.path.includes('node_modules')) return
              return {
                loader: 'jsx',
                contents: await fs.readFile(args.path, 'utf8'),
              }
            })
          },
        },
      ],
    },
  },
})
