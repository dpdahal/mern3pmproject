import fs from "fs";
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
        try{
            let id = req.params.id;
            const user = await User.findById(id);
            if(user){
                return res.status(200).json({user: user});
            }else{
                return res.status(404).json({error: "User not found"});
            }

        }catch(err){
            console.log(err);
            return res.status(500).json({error: "Internal Server Error"});
        }
       
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
        let findData = await User.findById(req.params.id);
        if(findData){
            if(findData.image){
                fs.unlink(`./public/users/${findData.image}`, async (err) => {
                    if(err){
                        console.log(err);
                    }
                    await User.findByIdAndDelete(req.params.id);
                    return res.status(200).json({message: "User deleted successfully"});
                });
            }else{
                await User.findByIdAndDelete(req.params.id);
                return res.status(200).json({message: "User deleted successfully"});
            }

        }else{
            return res.status(404).json({error: "User not found"});
        } 
    }

}


export default UserController;