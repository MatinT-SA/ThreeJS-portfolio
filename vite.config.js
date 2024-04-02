import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
    base: '/',
=======
    base: "/ThreeJS-portfolio",
>>>>>>> a9670e76df62698085b816a8a13cf9b5dc6520ba
    plugins: [react()],
    assetsInclude: ['**/*.glb'],
})
