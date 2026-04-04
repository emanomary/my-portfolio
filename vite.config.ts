import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // أو حسب طريقة استيراد التيلويند لديكِ

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // تأكدي أن هذا الاسم يطابق تماماً اسم المستودع (Repository) في GitHub
  base: '/my-portfolio/', 
  build: {
    outDir: 'dist', // التأكد من أن المخرجات تذهب لمجلد dist
  }
})
