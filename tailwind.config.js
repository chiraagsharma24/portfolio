/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: {
          primary: '#0a0a0f',
          secondary: '#121218',
          tertiary: '#1a1a23',
        },
        accent: {
          blue: '#4361ee',
          purple: '#7209b7',
          pink: '#f72585',
        },
        text: {
          primary: '#f5f5f7',
          secondary: '#a0a0a5',
          tertiary: '#6c6c70',
        },
        status: {
          success: '#4ade80',
          warning: '#facc15',
          error: '#f43f5e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #4361ee, #7209b7)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 5px #4361ee, 0 0 20px #4361ee, 0 0 60px #4361ee',
        'neon-purple': '0 0 5px #7209b7, 0 0 20px #7209b7, 0 0 60px #7209b7',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};