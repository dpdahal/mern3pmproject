import mongoose from "mongoose";
import slugify from "slugify";

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

NewsSchema.pre("validate", function(next){
    this.slug = slugify(this.slug, {lower:true, strict:true});
    next();
});

export default mongoose.model("News", NewsSchema);