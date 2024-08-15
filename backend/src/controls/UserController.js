import User from "../models/User.js";

class UserController{

    async index(req, res){
        try{
            const users = await User.find({});
            return res.status(200).json({users: users});
        }catch(err){
            console.log(err);
            return res.status(500).json({error: "Internal Server Error"});
        }
        
    }

    async show(req, res){
       
    }

    async create(req, res){
        try{
            let image ="";
            if(req.file){
                image = req.file.filename;
            }
           await User.create({...req.body, image: image});
           return res.status(201).json({message: "User created successfully"});
        }catch(err){
            console.log(err);
            return res.status(500).json({error: "Internal Server Error"});
        }
    }

    async update(req, res){
        return res.send('Update User');
    }

    async delete(req, res){
        return res.send('Delete User');
    }

}


export default UserController;