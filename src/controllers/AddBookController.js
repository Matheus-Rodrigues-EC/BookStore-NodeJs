import db from "../database/database.connection.js";

const addBook = async (req, res) => {
    const titulo = "Frenesi: Histórias de duplo terror";
    const autor = "Heloísa Seixas";
    const genero = "Suspense";
    const resumo = "É uma atraente e assustadora incursão na literatura de mistério da escritora e cronista carioca Heloísa Seixas. O livro reúne seis contos que têm em comum personagens que gostam de ler histórias de terror e acabam atormentados pelo medo na vida real, quando o que está nas páginas de seus livros começa a acontecer de verdade.";
    const capa = "Brochura";
    const paginas = "108";
    const valor = 19.50;

    const userId = "06021998";

    try{

        await db.collection("books").insertOne({
            userId: userId,
            titulo: titulo,
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