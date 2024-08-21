import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    image:{
        type:String
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    }
    
},{
    versionKey:false
});


UserSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

UserSchema.methods.toJSON = function(){
    console.log(process.env.APP_URL);
    var obj = this.toObject();
    if(obj.image){
        obj.image = `${process.env.APP_URL}/users/${obj.image}`;
    }else{
        obj.image = `${process.env.APP_URL}/icons/notfound.png`;
    }
    delete obj.password;
    return obj;
}


UserSchema.methods.verifyPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

UserSchema.methods.generateToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE
    });
}


export default mongoose.model("User", UserSchema);