/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { poppins: ['Poppins', 'sans-serif'] },
      colors: {
        primary: { 50:'#EDE7FF', 500:'#5D5FEF', 800:'#4079ED', 900:'#05004E' },
        dgray: { 200:'#7B91B0', 300:'#C3D3E2', 400:'#A098AE', 500:'#737791', 600:'#425166', 900:'#151D48' },
        green100: '#DCFCE7', green500: '#3CD856',
        purple100: '#F3E8FF', violet500: '#A700FF',
        yellow100: '#FFF4DE', orange500: '#FFA412',
        red100: '#FFE2E5',
        cyan500: '#00E096', blue500: '#0095FF',
      },
      boxShadow: { card: '0px 4px 20px 0px rgba(238,238,238,0.5)' },
    },
  },
  plugins: [],
}
