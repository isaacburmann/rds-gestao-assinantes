import {Component, Input, OnInit} from '@angular/core';
import {Assinatura} from "../assinatura";
import {AssinaturaService} from "../assinatura.service";
import {Empresa} from "../../empresas/empresa";
import {Produto} from "../../produtos/produto";
import {ProdutoService} from "../../produtos/produto.service";
import {EmpresaService} from "../../empresas/empresa.service";

@Component({
    selector: 'app-assinatura-list',
    templateUrl: './assinatura-list.component.html',
    styleUrls: ['./assinatura-list.component.css'],
    providers: [AssinaturaService, EmpresaService, ProdutoService]
})
export class AssinaturaListComponent implements OnInit {

    assinaturas: Assinatura[]
    selectedAssinatura: Assinatura

    empresas: Empresa[];
    produtos: Produto[];
    data: string;

    constructor(private assinaturaService: AssinaturaService, private empresaService: EmpresaService, private produtoService: ProdutoService) { }

    ngOnInit() {
        this.data = new Date().toLocaleDateString('pt-BR')

        console.log('data')
        console.log(this.data)

        this.assinaturaService.getAssinaturas()
            .then((assinaturas: Assinatura[]) => {
                this.assinaturas = assinaturas.map((assinatura) => {
                    return assinatura;
                });
            });

        this.empresaService
            .getEmpresas()
            .then((empresas: Empresa[]) => {
                this.empresas = empresas.map((empresa) => {
                    return empresa;
                });
            });

        this.produtoService
            .getProdutos()
            .then((produtos: Produto[]) => {
                this.produtos = produtos.map((produto) => {
                    return produto;
                });
            });
    }

    private getIndexOfAssinatura = (assinaturaId: String) => {
        return this.assinaturas.findIndex((assinatura) => {
            return assinatura._id === assinaturaId;
        });
    }

    selectAssinatura(assinatura: Assinatura) {
        this.selectedAssinatura = assinatura
    }

    createNewAssinatura() {
        var assinatura: Assinatura = {
            moeda: '',
            valor: '',
            data: '',
            produto: {
                _id: '',
                nome: '',
                valor: {
                    brl: '',
                    usd: '',
                    eur: '',
                }
            },
            empresa_gerencia: {
                _id: '',
                nome: '',
                cnpj: '',
            },
            empresa_paga: {
                _id: '',
                nome: '',
                cnpj: '',
            },
        };

        // By default, a newly-created assinatura will have the selected state.
        this.selectAssinatura(assinatura);
    }

    deleteAssinatura = (assinaturaId: String) => {
        var idx = this.getIndexOfAssinatura(assinaturaId);
        if (idx !== -1) {
            this.assinaturas.splice(idx, 1);
            this.selectAssinatura(null);
        }
        return this.assinaturas;
    }

    addAssinatura = (assinatura: Assinatura) => {
        this.assinaturas.push(assinatura);
        this.selectAssinatura(assinatura);
        return this.assinaturas;
    }

    updateAssinatura = (assinatura: Assinatura) => {
        var idx = this.getIndexOfAssinatura(assinatura._id);
        if (idx !== -1) {
            this.assinaturas[idx] = assinatura;
            this.selectAssinatura(assinatura);
        }
        return this.assinaturas;
    }

}