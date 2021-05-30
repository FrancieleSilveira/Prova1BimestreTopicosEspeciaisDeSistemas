import { Request, Response } from "express";
import PessoaSchema from "../models/PessoaSchema";

class PessoaController{
    async listar(request: Request, response: Response) {
        response.status(200).json(await PessoaSchema.find({}));
    }

    async buscarPorCpf(request: Request, response: Response) {
        response.status(200).json({msg: "Rota da busca" });
    }

    async cadastrar(request: Request, response: Response) {
        try {
            const { cpf } = request.body;
            if(await PessoaSchema.exists({ cpf })){ // await para esperar a verificação
                response.status(409).json({ msg: "Essa pessoa já existe!" }); // 409 = cód. conflito
            }else {
                const pessoa = request.body; // o corpo da requisição envia o objeto para a constante pessoa
                const novaPessoa = await PessoaSchema.create(pessoa);
                response.status(201).json(novaPessoa);
            }
        } catch (error) {
            response.status(400).json({
                objeto: error,
                msg: "Falha na validação",
                erro: true
            })
        }
    }

    async alterar(request: Request, response: Response) {
        response.status(200).json({msg: "Rota da alteração" });
    }

    async deletar(request: Request, response: Response) {
        response.status(200).json({msg: "Rota para deletar" });
    }
}

export { PessoaController }