import {Assinatura} from "../assinaturas/assinatura";
import {Produto} from "../produtos/produto";

export class Empresa {
    _id?: string;
    nome: string;
    cnpj: string;
    assinante: boolean;
    pagadora: boolean;
    assinaturasGerencia: Assinatura[];
    valorTotalGerencia: {
        brl: number;
        usd: number;
        eur: number;
    };
    assinaturasPaga: Assinatura[];
    valorTotalPaga: {
        brl: number;
        usd: number;
        eur: number;
    };
}
