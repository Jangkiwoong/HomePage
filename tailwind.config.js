/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // src 폴더 내 모든 JavaScript 및 JSX 파일을 포함
  ],
  theme: {
    extend: {
      screens: {
        'h-sm': { 'raw': '(max-height: 400px)' }, // max-height가 785px 이하일 때
      },
      fontFamily: {
        jua: ['Jua', 'sans-serif'], // 로컬 폰트 Jua 추가
      },
    },
  },
  plugins: [],
};
