/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'dark-bg': "#252128",
        'btn-light':"#3730A3",
        'header-light-blue':"#4338CA",
        'header-black':"#1F2937",
        'header-light-gray':'#6B7280',
        'bg-footer':"#F9F9F9",
        'header-dark-gray':"#AEBCCF",
        'header-dark-purple':'#B7AAFF',
        'btn-dark':'#E1E1FF',
        'border-dark':"#BAB2E7",
        'tag-bg-dark':'#383838',
        'tag-text-dark':"#8F88FF",
        'footer-bg-dark':'#141414',
        'github-green':'#17D18B',
        'linkedin-blue':'#0BA6F6'
      },
    },
  },
  plugins: [],
}

