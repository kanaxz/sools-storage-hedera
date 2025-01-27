require('storage-client/setup')
const mixer = require('sools-core/mixer')
const setup = require('sools-modeling-hedera/setup')
const Folderable = require('storage/mixins/Folderable')
const Imageable = require('storage/mixins/Imageable')

setup.routing.layout.header.before.push(async (model) => {
  if (!mixer.is(model, Imageable)) { return null }
  return {
    fragment: '<img class="imageable-image" :src="this.@model?.image ? `${this.@model?.image?.path}?width=200&height=90` : \'\'">'
  }
})

setup.routing.actions.push({
  name: 'storage',
  content: '<i class="fa-solid fa-folder"></i>',
  url: '/storage',
  check(model) {
    return mixer.is(model, Folderable)
  },
  async execute(req, res, next) {
    await req.model.folder.load()
    await res.page(import('./StoragePage'), req.model.folder)
  }
})