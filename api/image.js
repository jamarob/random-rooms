const { SCREENSHOT_MACHINE_KEY } = process.env
const request = require('request')
const screenshotmachine = require('screenshotmachine')

const getImageUrl = ({ groups, rooms }) => {
  const encodedRooms = encodeURIComponent(rooms)
  const encodedGroups = encodeURIComponent(groups)
  const url = `https://random-rooms.vercel.app/share?rooms=${encodedRooms}&groups=${encodedGroups}`
  return screenshotmachine.generateScreenshotApiUrl(
    SCREENSHOT_MACHINE_KEY,
    '',
    {
      url,
      dimension: '1366xfull', // or "1366xfull" for full length screenshot
      device: 'desktop',
      format: 'png',
      cacheLimit: '0',
      delay: '200',
      zoom: '100',
    }
  )
}

module.exports = (req, res) => {
  request.get(getImageUrl(req.query)).pipe(res)
}
