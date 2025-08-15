/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b', // 深蓝灰色，更商务
        secondary: '#334155', // 中等蓝灰色
        accent: '#3b82f6', // 蓝色替代黄色，更好的对比度
        background: '#ffffff',
        muted: '#f8fafc', // 更浅的背景色
        text: {
          primary: '#1e293b',
          secondary: '#64748b',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        'section': '6rem', // 增加section间距
        'section-lg': '8rem'
      }
    },
  },
  plugins: [],
}