import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class Database{
    message ={
        connected:"Database connected successfully",
        error:"Error connecting to database"
    }

    constructor(){
       this.connect();
    }

    async connect(){
        try{
        const dbUrl=process.env.MONGODB_URI;
        await mongoose.connect(dbUrl);
        console.log(this.message.connected);
        }catch(err){
            console.log(this.message.error);
            console.log(err.message);
        }

    }
    

}

export default  Database;