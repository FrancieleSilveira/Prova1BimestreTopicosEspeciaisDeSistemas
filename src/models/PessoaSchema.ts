import { model, Schema } from "mongoose";


const pessoaSchema = new Schema(
    {
        nome: {
            type: String,
            required: [true, "Ocampo NOME é obrigatório!"],
        },
        cpf: {
            type: String,
            required: [true, "Ocampo CPF é obrigatório!"],
        },
        idade: {
            type: Number,
            required: [true, "Ocampo IDADE é obrigatório!"],
        },
    },
    {
        timestamps: true,
    }
);

export default model("pessoas", pessoaSchema);