const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/heyman333/zero-blog.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
