const { SCREENSHOT_MACHINE_KEY } = process.env
const request = require('request')
const screenshotmachine = require('screenshotmachine')

const getImageUrl = ({ groups, rooms }) => {
  const encodedRooms = encodeURIComponent(rooms)
  const encodedGroups = encodeURIComponent(groups)
  // hardcode the url to the deployment branch so that we can take advantage of caching
  // and don't exceep screenshotmachines free limit
  const url = `https://random-rooms.vercel.app/share?rooms=${encodedRooms}&groups=${encodedGroups}`
  return screenshotmachine.generateScreenshotApiUrl(
    SCREENSHOT_MACHINE_KEY,
    '',
    {
      url,
      dimension: '1024x768',
      device: 'desktop',
      format: 'png',
      delay: '200',
    }
  )
}

module.exports = (req, res) => {
  request.get(getImageUrl(req.query)).pipe(res)
}
