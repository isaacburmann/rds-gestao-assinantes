export class Assinatura {
    _id?: string;
    moeda: string;
    valor: string;
    data: string;
    produto: {
        _id?: string;
        nome: string;
        valor: {
            brl: string;
            usd: string;
            eur: string;
        }
    };
    empresa_gerencia: {
        _id?: string;
        nome: string;
        cnpj: string;
    };
    empresa_paga: {
        _id?: string;
        nome: string;
        cnpj: string;
    };
}