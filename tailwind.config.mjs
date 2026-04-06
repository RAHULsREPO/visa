/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#15459a',
                    light: '#2663b8',
                    dark: '#1e3a6d',
                },
                accent: {
                    DEFAULT: '#f1c75b',
                    light: '#f6d67a',
                    dark: '#c9962b',
                },
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                heading: ['Sora', 'system-ui', 'sans-serif'],
                display: ['Sora', 'system-ui', 'sans-serif'],
            },
            letterSpacing: {
                tighter: '-0.03em',
                tight: '-0.02em',
                normal: '0',
                wide: '0.025em',
                wider: '0.05em',
                widest: '0.1em',
            },
            lineHeight: {
                'none': '1',
                'tight': '1.2',
                'snug': '1.375',
                'normal': '1.6',
                'relaxed': '1.7',
                'loose': '1.8',
            },
        },
    },
    plugins: [],
}
