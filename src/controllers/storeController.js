import db from "../database/database.connection.js";
import dayjs from "dayjs";


const loadStore = async (req, res) => {

    const name = "Matt Rodrigues"
    let user;
    let sales;
    try{
        user = await db.collection("accounts").findOne({name: name});
        if(!user) return res.status(404).send("Usuário não encontrado");
        // return res.status(200).send(user.name);
    }catch(error){
        return res.status(422).send(error);
    }
    
    try{   
        sales = await db.collection("historic").find().toArray();
        if(!sales) return res.status().send();
        const DATA = {user, sales};
        return res.status(200).send(DATA);
    }catch(error){
        return res.status(500).send(error)
    }
}

export default loadStore;