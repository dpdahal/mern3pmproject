import News from "../models/News.js";
import dotenv from "dotenv";

dotenv.config();

class NewsController {

    async index(req, res) {
        try {
            const newsData = await News.find({}).populate("categoryId");
            newsData.forEach(news => {
                if(news.image){
                news.image = `${process.env.APP_URL}/news/${news.image}`;
                }else{
                    news.image = `${process.env.APP_URL}/icons/news-image-not-found.png`;
                }
            });
            
            res.json(newsData);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async store(req, res) {
        try{
            let image = "";
            if(req.file){
                image = req.file.filename;
            }
            await News.create({...req.body, image: image});
            res.json({message: "News created successfully"});
        
        }catch(err){
            console.log(err);
            res.status(500).json({error: "Internal Server Error"});
        }
    }

    async show(req, res) {
        try {
            const news = await News.findById(req.params.id);
            res.json(news);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }

    }

    async update(req, res) {
        try {
            let image = req.body.oldImage;
            if(req.file){
                image = req.file.filename;
            }
            await News.findByIdAndUpdate(req.params.id, {...req.body, image: image});
            res.json({message: "News updated successfully"});
        }catch(err){
            console.log(err);
            res.status(500).json({error: "Internal Server Error"});
        }
    }

    async destroy(req, res) {
        try {
            await News.findByIdAndDelete(req.params.id);
            res.json({message: "News deleted successfully"});
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async showBySlug(req, res) {
        try {
            const news = await News.findOne({slug: req.params.slug}).populate("categoryId");
            console.log(news);
            if(news.image){
                news.image = `${process.env.APP_URL}/news/${news.image}`;
            }else{
                news.image = `${process.env.APP_URL}/icons/news-image-not-found.png`;
            }
            res.json(news);
        }catch(err){
            console.log(err);
            res.status(500).json({error: "Internal Server Error"});
        }
    }

}


export default NewsController;