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
            }            
        },
    },
    plugins: []
  }