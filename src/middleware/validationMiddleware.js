function validateUser(req, res, next) {
  const {name,email,age} = req.body; const errors=[];
  if (typeof name !== 'string' || !name.trim()) errors.push('name is required and must be a non-empty string');
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('email must be a valid email address');
  if (age !== undefined && (!Number.isInteger(age) || age < 13 || age > 120)) errors.push('age must be an integer between 13 and 120');
  if(errors.length) return res.status(400).json({status:'error',message:'Validation failed',errors}); next();
}
function validateProduct(req,res,next) {
  const {name,description,price,stock}=req.body; const errors=[];
  if(typeof name!=='string'||!name.trim()) errors.push('name is required and must be a non-empty string');
  if(typeof description!=='string'||!description.trim()) errors.push('description is required and must be a non-empty string');
  if(typeof price!=='number'||!Number.isFinite(price)||price<=0) errors.push('price must be a number greater than 0');
  if(stock!==undefined&&(!Number.isInteger(stock)||stock<0)) errors.push('stock must be a non-negative integer');
  if(errors.length) return res.status(400).json({status:'error',message:'Validation failed',errors}); next();
}
module.exports={validateUser,validateProduct};
