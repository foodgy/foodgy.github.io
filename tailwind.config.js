module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans-serif': ['Montserrat', 'sans-serif'],
                'serif': ['Merriweather', 'serif'],
            },
            fontSize: {
                '80': '80%',
                '2.5xl': '1.75rem',
                '4.5xl': '2.5rem',
            },
            lineHeight: {
                '11': '2.75rem',
            },
            boxShadow: {
                'framed': '0 2px 15px 0 var(--shadow-color)',
            }           
        },
    },
    plugins: []
  }