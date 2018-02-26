import {Assinatura} from "../assinaturas/assinatura";
import {Produto} from "../produtos/produto";

export class Empresa {
    _id?: string;
    nome: string;
    cnpj: string;
    assinante: boolean;
    pagadora: boolean;
    assinaturasGerencia: {
        moeda: string;
        valor: string;
        data: string;
        produto: string;
    }[];
    assinaturasPaga: {
        moeda: string;
        valor: string;
        data: string;
        produto: string;
    }[];
}
