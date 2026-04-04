import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // أو حسب طريقة استيراد التيلويند لديكِ

export default defineConfig({
  plugins: [tailwindcss()],
  // تأكدي أن هذا هو اسم المستودع بالضبط على GitHub
  base: '/my-portfolio/', 
})