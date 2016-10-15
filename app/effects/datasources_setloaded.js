const cloneDeep = require('lodash/cloneDeep')

module.exports = (data, state, send, done) => {
  const update = cloneDeep(state.datasources)
  update.loaded = true

  send('datasources_update', update, done)
}
