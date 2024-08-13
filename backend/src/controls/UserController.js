class UserController{

    async index(req, res){
        return res.send('All Users');
    }

    async show(req, res){
        return res.send('Show User');
    }

    async create(req, res){
        return res.send('Create User');
    }

    async update(req, res){
        return res.send('Update User');
    }

    async delete(req, res){
        return res.send('Delete User');
    }

}


export default UserController;