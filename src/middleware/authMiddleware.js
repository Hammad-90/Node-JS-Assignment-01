function requireApiKey(req, res, next) {
  const expected = process.env.API_KEY || 'change-this-to-a-long-secret-key';
  if (!req.query.apiKey || req.query.apiKey !== expected) {
    return res.status(401).json({status:'error',message:'Unauthorized. Provide a valid API key using the apiKey query parameter.'});
  }
  next();
}
module.exports = { requireApiKey };
