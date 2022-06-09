const { getImageFromGoogle } = require('../helpers/scraping')

const getImage = async (req, res) => {
  console.time('getImage')
  const link = await getImageFromGoogle(req.params.query)

  console.timeEnd('getImage')
  res.send('<img src="' + link + '" />')
}
module.exports = {
  getImage
}
