import db from "../database/database.connection.js";

const addBook = async (req, res) => {
    const {titulo, imagem, autor, genero, resumo, capa, paginas, valor} = req.body;

    const userId = "06021998";

    try{

        await db.collection("books").insertOne({
            userId: userId,
            titulo: titulo,
            imagem: imagem,
            autor: autor,
            genero: genero,
            resumo:  resumo,
            capa: capa,
            paginas: paginas,
            valor: valor
        })
        return res.status(201).send("Livro Adicionado com sucesso.");
    }catch(error){
        return res.status(422).send(error);
    }
}

export default addBook;