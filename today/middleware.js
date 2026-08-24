const middleware = (req, res, next) => {
  let time_taken = new Date().getTime() / 1000

  console.log(`Request received at ${time_taken} for ${req.url}`)

  next()
}

module.exports = middleware
