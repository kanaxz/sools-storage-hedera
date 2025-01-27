const Card = require('sools-modeling-hedera/components/Card')
const template = require('./template.html')
const Image = require('storage/Image')
require('./style.scss')

module.exports = class ImageCard extends Card {
  async update() {
    await super.update()
  }
}
  .define({
    name: 'image-card',
    template,
  })
  .properties({
    imgSrc: 'any',
  })
  .register(Image, 'card')

