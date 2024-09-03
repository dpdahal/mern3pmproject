import Categroy from "../models/Categroy.js";


class CategoryController{

    async index(req, res){
        try {
            const categories = await Categroy.find({});
            res.json(categories);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async store(req, res){
        try {
            const category = new Categroy(req.body);
            await category.save();
            res.json(category);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async show(req, res){
        try {
            const category = await Categroy.findById(req.params.id);
            res.json(category);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async update(req, res){
        try {
            const category = await Categroy.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.json(category);

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async destroy(req, res){
        try {
            const category = await Categroy.findByIdAndDelete(req.params.id);
            res.json(category);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

}

export default CategoryController;