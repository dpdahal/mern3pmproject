import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
    },
    description:{
        type:String,
    },
    
},{
    versionKey:false
});

export default mongoose.model("News", NewsSchema);