const mdContainer = require('markdown-it-container')

module.exports = (md) => {

  md.use(mdContainer, 'external', {
    validate (params) {
      return params.trim().match(/^external\s*(.*)$/)
    },
    render (tokens, idx) {
      // https://github.com/markdown-it/markdown-it/blob/7edd820b57a7018a9886b6b2efacc9bdae20ca98/lib/token.js#L49
      if (tokens[idx].nesting === 1) {
        const content =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        const str = String(content)
        return `<demo-box>
        <!--demo:${str}:demo-->
        `
      }
      return '</demo-box>'
    }
  })
}
