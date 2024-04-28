const {Schema,model} =require("mongoose");

const serviceSchema=new Schema({
    service:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    provider:{type:String,required:true},
})

//Service will be converted to Services

const Service=new model("Service",serviceSchema);

module.exports=Service;