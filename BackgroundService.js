const Service = require('sools-hedera/Service')
const { app } = require('sools-hedera/global')
const ModelLayout = require('sools-modeling-hedera/routing/ModelLayout')
module.exports = class BackgroundService extends Service {
  constructor(defaultImage) {
    super()
    Object.assign(this, {
      defaultImage,
      image: defaultImage,
    })
    this.image = defaultImage

  }

  start(app) {
    app.on('pageLoaded', this.b(this.onPageLoaded))
  }

  async onPageLoaded(layouts, page) {
    const modelLayout = layouts.find((l) => l instanceof ModelLayout)
    const image = modelLayout?.model?.backgroundImage
    if (image) {
      this.image = image.path
    } else {
      this.image = this.defaultImage
    }
  }
}
  .define()
  .properties({
    image: 'any',
  })