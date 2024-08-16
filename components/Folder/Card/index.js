const Card = require('sools-modeling-hedera/components/Card')
const template = require('./template.html')
const Folder = require('storage/Folder')
require('./style.scss')

module.exports = class FolderCard extends Card {

}
  .define({
    name: 'folder-card',
    template,
  })
  .register(Folder, 'card')

