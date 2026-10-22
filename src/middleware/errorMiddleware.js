function notFound(req,res) { res.status(404).json({status:'error',message:`Route not found: ${req.method} ${req.originalUrl}`}); }
function errorHandler(err,req,res,next) { console.error(err); res.status(err.statusCode||500).json({status:'error',message:(err.statusCode&&err.statusCode!==500)?err.message:'Internal server error'}); }
module.exports={notFound,errorHandler};
