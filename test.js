var trends = require('./')

trends.load(['kr'], function (err, result) {
  console.log(err, JSON.stringify(result))
})
