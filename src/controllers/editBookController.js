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
    const idBook = req.body.headers.id;
    const {titulo, imagem, autor, genero, resumo, capa, paginas, valor} = req.body.body
    // console.log(req.body.body);
    try{
        await db.collection("books").updateOne({_id: new ObjectId(idBook)}, {$set: {
            titulo: titulo,
            imagem: imagem,
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