import db from "../database/database.connection.js";
import { ObjectId } from "mongodb";

const loadDashBoard = async (req, res) => {
    const name = "Matt Rodrigues";
    let user;
    let allBooks;
    try{
        user = await db.collection("accounts").findOne({name: name});
        if(!user) return res.status(404).send("Usuário não encontrado");
        // return res.status(200).send(user.name);
    }catch(error){
        return res.status(422).send(error);
    }

    try{
        allBooks = await db.collection("books").find().toArray();
        if(!allBooks) return res.status().send("Nenhum livro encontrado");
        const DATA = {user, allBooks};
        return res.status(200).send(DATA);
    }catch(error){
        return res.status(500).send(error)
    }

}

const deleteBook = async (req, res) => {
    const id = req.headers.id;
    try{
        const book = await db.collection("books").deleteOne({_id: new ObjectId(id)});
        return res.status(200).send(book);
    }catch(error){
        return res.status(500).send("erro no delete");
    }
}

export  {
            loadDashBoard,
            deleteBook
        };