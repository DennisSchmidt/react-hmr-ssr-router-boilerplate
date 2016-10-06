export const assetPath = (name, type) => {
  if (process.env.NODE_ENV != 'production') {
    return `http://${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}/assets/${name}.${type}`
  } else {
    return '/assets/' + require('../../build/manifest.json')[`${name}.${type}`]
  }
}
