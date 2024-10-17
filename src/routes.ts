import { Express, Request, Response } from "express";

function routes(app:Express, firestore:Object){
    app.get("/healthcheck",(req:Request, res:Response) => {res.sendStatus(200)})

    //POST login loga na api da blip
    app.post("/login",(req:Request,res:Response) =>{
        
    })

    app.get("/contacts", (req:Request,res:Response) => { 
        
    })

}

export default routes