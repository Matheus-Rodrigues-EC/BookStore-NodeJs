import { db } from "../database/database.connection.js"

export async function getBooks (req, res){

    try{
        const books = await db
            .collection("books")
            .find()
            .sort({ date: -1 })
            .toArray()
        res.status(200).send(books);
    }
    catch(err){
        res.status(500).send(err.message)
    }

}