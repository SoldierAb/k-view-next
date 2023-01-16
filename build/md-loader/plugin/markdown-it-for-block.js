module.exports = function iterator (...[context, tag, callback]) {
  // 如果覆盖，或者是对默认渲染器的代理，则记住老的渲染器。 arguments[0] markdown 的实例
  const defaultRender = context.renderer.rules[tag] || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

  context.renderer.rules[tag] = function (tokens, idx, options, env, self) {
    callback(tokens, idx, options, env, self)
    // 传递 token 到默认的渲染器。
    return defaultRender(tokens, idx, options, env, self)
  }
}
