//? await schema.parseAsync(req.body) is the line where you use Zod to validate
// the request body data against the defined schema.
// https://github.com/colinhacks/zod#parseasync
// .parse(data: unknown): Tˆ
// Given any Zod schema, you can call its .parse method to check `data` is
// valid. If it is, a value is returned with full type information! Otherwise, an
// error is thrown.
//.parseAsync(data:unknown): Promise<T>
// If you use asynchronous [refinements](https://github.com/colinhacks/zod#refine
// or [transforms](https://github.com/colinhacks/zod#transform) (more on those
 
const validate=(schema) => async(req,res,next) => {
    try{
        const parseBody= await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    }
    catch(err){
       
        const status = 422;
        let message = "Fill the Input Properly";

       const extraDetails=err.errors[0].message;
        //res.status(400).json({msg:message})
        const error={
            status,
            message,
            extraDetails
        };
        //console.log("error from validate middleware",err);
        next(error);
        
    }
 }

 module.exports=validate;