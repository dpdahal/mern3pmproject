import UserTableSeeder from "./UserTableSeeder.js";
import CategoryTableSeeder from "./CategoryTableSeeder.js";
class DatabaseTableSeeder{

    static run(){
        UserTableSeeder.run();
        CategoryTableSeeder.run();
    }

}

export default DatabaseTableSeeder;