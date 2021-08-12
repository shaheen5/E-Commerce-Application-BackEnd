class Helper {
    setRole=(role)=>{
        return (req,res,next)=>{
            req.body.role = role;
            next();
        }
    }
}
module.exports = new Helper();