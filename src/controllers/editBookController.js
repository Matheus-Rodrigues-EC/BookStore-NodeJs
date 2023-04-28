import db from "../database/database.connection.js";
import { ObjectId } from "mongodb";

const getEditBook =  async(req, res) => {
    const idBook = req.headers.id;
    try{
        const book = await db.collection("books").findOne({_id: new ObjectId(idBook)});
        if(!book) return res.status(404).send("Livro não encontrado");
        return res.status(200).send(book);
    }catch(error){
        return res.status(422).send(error)
    }

}

const putEditBook = async (req, res) => {
    const idBook = req.headers.id;
    const userId = "06021998"
    const titulo = "Frenesi: Histórias de duplo terror";
    const autor = "Heloísa Seixas";
    const genero = "Suspense";
    const resumo = "É uma atraente e assustadora incursão na literatura de mistério e de suspense";
    const capa = "Brochura";
    const paginas = "108";
    const valor = 19.50;
    
    try{
        await db.collection("books").updateOne({_id: new ObjectId(idBook)}, {$set: {
            userId: userId,
            titulo: titulo,
            autor: autor,
            genero: genero,
            resumo:  resumo,
            capa: capa,
            paginas: paginas,
            valor: valor
        }});
        return res.status(202).send("Livro atualizado com sucesso.")
    }catch(error){
        return res.status(422).send(error.message);
    }

}

export {
        getEditBook,
        putEditBook
    }