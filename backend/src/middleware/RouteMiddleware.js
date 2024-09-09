import TokenVerify from "./TokenVerify.js";

class RouteMiddleware{

    check(req,res,next){
        try{
        let token = req.headers.authorization
        if (!token) return res.status(401).send("Access Denied");
        TokenVerify.verifyToken(req,res,next);

        }catch(err){
            res.status(400).send("Invalid Token");
        }
    }

}

export default RouteMiddleware;