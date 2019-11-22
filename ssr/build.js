const path = require('path')
const fs = require('fs')

const template = fs.readFileSync(
  path.resolve(__dirname, '..', 'public/template.html'),
  'utf-8'
)

const bundled = require('./bundle')

fs.writeFileSync(
  path.resolve(__dirname, '..', 'public/index.html'),
  template.replace('<!-- app -->', bundled.render().html),
  'utf-8'
)
