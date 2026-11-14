/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        page: 'var(--bg)',
        surface: 'var(--surface)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
      },
      maxWidth: {
        measure: '65ch',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(.22, 1, .36, 1)',
      },
    },
  },
  plugins: [],
}
