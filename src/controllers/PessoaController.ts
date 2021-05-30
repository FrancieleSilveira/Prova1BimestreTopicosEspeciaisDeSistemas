import { Request, Response } from "express";
import PessoaSchema from "../models/PessoaSchema";

class PessoaController{
    async listar(request: Request, response: Response) {
        response.status(200).json({msg: "Rota da listagem" });
    }

    async buscarPorId(request: Request, response: Response) {
        response.status(200).json({msg: "Rota da busca" });
    }

    async cadastrar(request: Request, response: Response) {
        response.status(200).json({msg: "Rota do cadastro" });
    }

    async deletar(request: Request, response: Response) {
        response.status(200).json({msg: "Rota para deletar" });
    }

    async alterar(request: Request, response: Response) {
        response.status(200).json({msg: "Rota da alteração" });
    }
}

export { PessoaController }