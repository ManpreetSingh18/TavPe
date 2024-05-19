const errorMiddleware=(err ,req ,res,next)=>{
    //console.log("Error from auth-middleware",err);
    const status=err.status || 500;
    const message=err.message || "BACKEND ERROR";
    const extraDetails =err.extraDetails || "Error From Backend";
    console.log(extraDetails)
    console.log(message)
    return res.status(status).json({message,extraDetails});
};

module.exports=errorMiddleware;
