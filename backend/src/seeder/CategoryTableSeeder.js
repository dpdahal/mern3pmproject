import Categroy from "../models/Categroy.js";

class CategoryTableSeeder{

    static async run(){

        let categoryData =[
            {
                "name":"Technology",
                "slug":"technology"
            },
            {
                "name":"Science",
                "slug":"science"
            },
            {
                "name":"Sports",
                "slug":"sports"
            },
            {
                "name":"Health",
                "slug":"health"
            },
            {
                "name":"Politics",
                "slug":"politics"
            },
        ]

        try{
            categoryData.map(async (cat) => {
                let findData = await Categroy.findOne({slug: cat.slug});
                if(!findData){
                    await Categroy.create(cat);
                    console.log('Category table seeded successfully');
                }
            })
           
        }catch(err){
            console.log(err);
        }
       

    }



}

export default CategoryTableSeeder;