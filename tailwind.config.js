/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        gruvbox: {
          'bg-hard': 'var(--bg-hard)',
          'bg-medium': 'var(--bg-medium)',
          'bg-soft': 'var(--bg-soft)',
          'bg0-h': 'var(--bg0-h)',
          'bg0': 'var(--bg0)',
          'bg1': 'var(--bg1)',
          'bg2': 'var(--bg2)',
          'bg3': 'var(--bg3)',
          'bg4': 'var(--bg4)',
          'fg0': 'var(--fg0)',
          'fg1': 'var(--fg1)',
          'fg2': 'var(--fg2)',
          'fg3': 'var(--fg3)',
          'fg4': 'var(--fg4)',
          'red-dark': 'var(--red-dark)',
          'red': 'var(--red)',
          'red-light': 'var(--red-light)',
          'green-dark': 'var(--green-dark)',
          'green': 'var(--green)',
          'green-light': 'var(--green-light)',
          'yellow-dark': 'var(--yellow-dark)',
          'yellow': 'var(--yellow)',
          'yellow-light': 'var(--yellow-light)',
          'blue-dark': 'var(--blue-dark)',
          'blue': 'var(--blue)',
          'blue-light': 'var(--blue-light)',
          'purple-dark': 'var(--purple-dark)',
          'purple': 'var(--purple)',
          'purple-light': 'var(--purple-light)',
          'aqua-dark': 'var(--aqua-dark)',
          'aqua': 'var(--aqua)',
          'aqua-light': 'var(--aqua-light)',
          'orange-dark': 'var(--orange-dark)',
          'orange': 'var(--orange)',
          'orange-light': 'var(--orange-light)',
        }
      },
      fontFamily: {
        fantasque: ['"Fantasque Sans Mono"', 'ui-monospace']
      }
    }
  },
  plugins: [],
}
