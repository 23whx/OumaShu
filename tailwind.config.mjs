/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  safelist: [
    // 渐变背景 - 动态生成的 HTML 中使用
    'bg-gradient-to-br',
    // 樱花色渐变类名 - 在 innerHTML 中动态使用
    'from-sakura-400',
    'from-sakura-500', 
    'to-sakura-600',
    'to-sakura-700',
    'hover:from-sakura-500',
    'hover:to-sakura-700',
    // 樱花色其他类名
    'bg-sakura-50',
    'bg-sakura-900',
    'text-sakura-600',
    'text-sakura-400',
    'border-sakura-200',
    'border-sakura-800',
    // 使用正则匹配所有可能的 sakura 和 leaf 颜色组合
    {
      pattern: /^(from|to|bg|text|border|ring)-(sakura|leaf)-(50|100|200|300|400|500|600|700|800|900)$/,
      variants: ['hover', 'focus', 'dark'],
    },
    {
      pattern: /^(bg|text|border)-(sakura|leaf)-(50|100|200|300|400|500|600|700|800|900)\/(10|20|30|40|50|60|70|80|90)$/,
      variants: ['hover', 'dark'],
    },
    // 透明度类 - 在动态 HTML 中使用
    'bg-white/10',
    'bg-white/20',
    'text-white/80',
    'text-white/90',
    'backdrop-blur-sm',
    'opacity-10',
    'opacity-20',
  ],
  theme: {
    extend: {
      colors: {
        // 樱花红主色
        'sakura': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#e91e63', // 主色
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // 樱叶绿点缀色
        'leaf': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80', // 点缀色
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // 自定义背景色
        'sakura-bg': {
          light: '#fff5f7',
          dark: '#0b0b0c'
        }
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans SC', 'Hiragino Sans GB', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
