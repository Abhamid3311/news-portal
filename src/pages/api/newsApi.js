
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://abhamid3311:GNIceevnmjl5f43s@cluster0.pvquer9.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(req, res) {
    try {
        await client.connect();
        const newsCollections = client.db("news_portal").collection("news");
        console.log("DB Connected")


        if (req.method === "GET") {
            const news = await newsCollections.find({}).toArray();
            res.send({ message: "Success", data: news })
        }
        if (req.method === "POST") {
            const news = req.body;
            const result = await newsCollections.insertOne(news);
            res.send(result)
        }
s

    } finally {

    }
}


export default run;
