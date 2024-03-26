
module.exports.auth= (req, res,next) => {
  if (!req.session.user) {
    res.clearCookie('token');
    
  }
  next()

}