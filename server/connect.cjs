const { MongoClient } = require("mongodb");
require("dotenv").config({path: "./config.env"});

async function main() {

    const Db = process.env.ATLAS_URI;
    const client = new MongoClient(Db);

    // Test
    try {
        await client.connect();
        const collections = await client.db("fitness-app-database").collections();
        collections.forEach((collection) => console.log(collection.s.namespace.collection));
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

// test main function call
main();