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
            boxShadow: {
                'framed': '0 2px 15px 0 var(--shadow-color)',
            }           
        },
    },
    plugins: []
  }