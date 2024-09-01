import User from "../models/User.js";
import TokenVerify from "../middleware/TokenVerify.js";

class AuthController{

    async login(req, res){
        try{
            let email = req.body.email;
            const findUser = await User.findOne({email:email});
            if(!findUser){
                return res.status(404).json({message: 'User not found'});
            }else{
                let password = req.body.password;
                const verify = await findUser.verifyPassword(password);
                if(verify){
                   let token = findUser.generateToken();
                   return res.status(200).json({message: 'Login success', token: token});
                }else{
                    return res.status(401).json({message: 'Password is incorrect'});
                }
            }

        }catch(e){
            console.log(e);
            res.status(500).json({message: e.message});
        }
    }

    async verify_token(req, res){
        try{
            TokenVerify.verifyToken(req, res,async () => {
                let userId = req.user.id;
                let user =await User.findById(userId);
                if(!user){
                    return res.status(404).json({message: 'User not found'});
                }
                return res.status(200).json({message: 'Token is valid', user: user});
            });
        }catch(e){
            console.log(e);
            res.status(500).json({message: e.message});
        }
    }

}

export default AuthController;