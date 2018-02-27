import {Produto} from "../produtos/produto";
import {Empresa} from "../empresas/empresa";

export class Assinatura {
    _id?: string;
    moeda: string;
    valor: string;
    data: string;
    produto: Produto;
    empresa_gerencia: {
        _id: string;
        nome: string;
    };
    empresa_paga: {
        _id: string;
        nome: string;
    };
}