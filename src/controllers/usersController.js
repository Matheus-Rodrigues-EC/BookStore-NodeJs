import db from "../database/database.connection.js"
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { userSchema } from "../schemas/users.schemas.js";


// Endpoints
export async function signup (req, res) {
    const {name, email, password, confirm_password } = req.body

    try{
        // verificar se esse e-mail já foi cadastrado
        const user = await db.collection("accounts").findOne({email})
        if (!user) return res.status(409).send("E-mail já cadastrado")

         // verificar se as senhas correspondem
         if (password !== confirm_password) return res.status(422).send("As senhas não correspondem")

        // Criptografia
        const hash = bcrypt.hashSync(password, 10)

        // Criar conta e guardar senha criptada
        await db.collection("accounts").insertOne({name, email, password: hash})
        res.status(201).send("conta criada com sucesso")

    }catch(err){
        res.status(422).send(err.message)
    }
}

export async function signin (req, res) {
    const {email, password } = req.body

    try{
         // verificar se esse e-mail existe
         const user = await db.collection("accounts").findOne({email})
         if (!user) return res.status(404).send("E-mail não cadastrado")

         // Conferir senha
         const passwordRight = bcrypt.compareSync(password, user.password)
         if (!passwordRight) return res.status(401).send("Senha incorreta")

        // se correto, cria token
        const token = uuid() 
        
        // Agora guarda o token e o Id do user
        await db.collection("sessions").insertOne({userId: user._id, token})

        // Finalizar com status 201 sucesso
        res.status(200).send(token)        

    }catch(err){
        res.status(422).send(err.message)
    }

}

export async function userlogin (req, res){
    const {authorization} = req.headers
    const token = authorization?.replace("Bearer", "")
    if (!token) return res.status(401).send("Token inexistente")

    try{
        const session = await db.collection("sessions").findOne({token})
        if (!session) return res.status(401).send("Token inválido")

        const user = await db.collection("accounts").findOne({_id: new ObjectId(session.userId)})

        // delete password
        delete user.password

        // Enviar resposta ao cliente
        res.send(user)
    }catch{err}{
        res.status(422).send(err.message)
    }


}