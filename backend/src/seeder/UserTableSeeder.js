import User from '../models/User.js';

class UserTableSeeder{

    static async run(){
        let userData =[
            {
                "name":"admin",
                "email":"admin@gmail.com",
                "password":"admin002",
                "gender":"male",
                "role":"admin",
                "image":""
            },
            {
                "name":"user",
                "email":"user@gmail.com",
                "password":"user002",
                "gender":"male",
                "role":"admin",
                "image":""
            },

        ]

        try{
            userData.map(async (user) => {
                let findData = await User.findOne({email: user.email});
                if(!findData){
                    await User.create(user);
                    console.log('User table seeded successfully');
                }
            })
           
        }catch(err){
            console.log(err);
        }
    }


}

export default UserTableSeeder;