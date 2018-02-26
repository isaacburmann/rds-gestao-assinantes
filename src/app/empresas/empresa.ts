import {Assinatura} from "../assinaturas/assinatura";

export class Empresa {
    _id?: string;
    nome: string;
    cnpj: string;
    assinante: boolean;
    pagadora: boolean;
    assinaturas: Assinatura[];
}
