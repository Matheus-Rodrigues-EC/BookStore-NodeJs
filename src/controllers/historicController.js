import db from "../database/database.connection.js";

const getHistoric = async (req, res) => {
    // const userId = req.headers.id;
    const userId = "06021998";

    try{
        const sales = await db.collection("historic").find({userId: userId}).toArray();
        return res.status(200).send(sales.reverse());
    }catch(error){
        return res.status(422).send(error);
    }
}

export default getHistoric;