import {Component, Input, OnInit} from '@angular/core';
import {Assinatura} from "../assinatura";
import {AssinaturaService} from "../assinatura.service";
import {Empresa} from "../../empresas/empresa";
import {Produto} from "../../produtos/produto";
import {EmpresaService} from "../../empresas/empresa.service";

@Component({
    selector: 'app-assinatura-details',
    templateUrl: './assinatura-details.component.html',
    styleUrls: ['./assinatura-details.component.css'],
    providers: [EmpresaService]
})
export class AssinaturaDetailsComponent {

    @Input()
    assinatura: Assinatura;
    @Input()
    empresasAssinantes: Empresa[];
    @Input()
    empresasPagantes: Empresa[];
    @Input()
    produtos: Produto[];
    @Input()
    data: string;

    @Input()
    createHandler: Function;
    @Input()
    updateHandler: Function;
    @Input()
    deleteHandler: Function;

    empresaPagaSelected: Empresa;
    empresaGerenciaSelected: Empresa;

    constructor (private assinaturaService: AssinaturaService, private empresaService: EmpresaService) {}

    createAssinatura(assinatura: Assinatura) {
        assinatura.empresa_gerencia._id = this.empresaGerenciaSelected._id;
        assinatura.empresa_gerencia.nome = this.empresaGerenciaSelected.nome;
        assinatura.empresa_paga._id = this.empresaPagaSelected._id;
        assinatura.empresa_paga.nome = this.empresaPagaSelected.nome;
        this.assinaturaService.createAssinatura(assinatura).then((newAssinatura: Assinatura) => {
            this.createHandler(newAssinatura);
            this.updateAssinaturaEmpresas(newAssinatura);
        });
    }

    updateAssinaturaEmpresas(newAssinatura: Assinatura){
        if(this.empresaPagaSelected._id == this.empresaGerenciaSelected._id){
            if(this.empresaPagaSelected.assinaturasPaga == undefined){
                this.empresaPagaSelected.assinaturasPaga = new Array();
            }
            if(this.empresaPagaSelected.assinaturasGerencia == undefined){
                this.empresaPagaSelected.assinaturasGerencia = new Array();
            }
            this.empresaPagaSelected.assinaturasGerencia.push(newAssinatura);
            this.empresaPagaSelected.assinaturasPaga.push(newAssinatura);
            switch (newAssinatura.moeda) {
                case 'BRL' : {
                    this.empresaPagaSelected.valorTotalGerencia.brl =+ newAssinatura.valor;
                    this.empresaPagaSelected.valorTotalPaga.brl =+ newAssinatura.valor;
                    break
                }
                case 'USD' : {
                    this.empresaPagaSelected.valorTotalGerencia.usd =+ newAssinatura.valor;
                    this.empresaPagaSelected.valorTotalPaga.usd =+ newAssinatura.valor;
                    break
                }
                case 'EUR' : {
                    this.empresaPagaSelected.valorTotalGerencia.eur =+ newAssinatura.valor;
                    this.empresaPagaSelected.valorTotalPaga.eur =+ newAssinatura.valor;
                    break
                }
            }
            this.updateEmpresa(this.empresaPagaSelected);
        } else {
            if(this.empresaGerenciaSelected.assinaturasGerencia == undefined){
                this.empresaGerenciaSelected.assinaturasGerencia = new Array();
            }
            this.empresaGerenciaSelected.assinaturasGerencia.push(newAssinatura);

            if(this.empresaPagaSelected.assinaturasPaga == undefined){
                this.empresaPagaSelected.assinaturasPaga = new Array();
            }
            this.empresaPagaSelected.assinaturasPaga.push(newAssinatura);

            switch (newAssinatura.moeda) {
                case 'BRL' : {
                    this.empresaGerenciaSelected.valorTotalGerencia.brl =+ newAssinatura.valor;
                    this.empresaPagaSelected.valorTotalPaga.brl =+ newAssinatura.valor;
                    break
                }
                case 'USD' : {
                    this.empresaGerenciaSelected.valorTotalGerencia.usd =+ newAssinatura.valor;
                    this.empresaPagaSelected.valorTotalPaga.usd =+ newAssinatura.valor;
                    break
                }
                case 'EUR' : {
                    this.empresaGerenciaSelected.valorTotalGerencia.eur =+ newAssinatura.valor;
                    this.empresaPagaSelected.valorTotalPaga.eur =+ newAssinatura.valor;
                    break
                }
            }

            this.updateEmpresa(this.empresaGerenciaSelected);
            this.updateEmpresa(this.empresaPagaSelected);
        }
    }

    updateEmpresa(empresa: Empresa): void {
        this.empresaService.updateEmpresa(empresa).then(()=>{
            console.log('empresa updated')
        });
    }

    updateAssinatura(assinatura: Assinatura): void {
        this.assinaturaService.updateAssinatura(assinatura).then((updatedAssinatura: Assinatura) => {
            this.updateHandler(updatedAssinatura);
        });
    }

    deleteAssinatura(assinaturaId: String): void {
        this.assinaturaService.deleteAssinatura(assinaturaId).then((deletedAssinaturaId: String) => {
            this.deleteHandler(deletedAssinaturaId);
        });
    }

    setAssinaturaValorData(value) {
        this.assinatura.data = this.data;
        if(this.assinatura.produto != null && this.assinatura.produto.valor != null) {

            switch (this.assinatura.moeda) {
                case 'BRL' : {
                    this.assinatura.valor = this.assinatura.produto.valor.brl
                    break;
                }
                case 'USD' : {
                    this.assinatura.valor = this.assinatura.produto.valor.usd
                    break;
                }
                case 'EUR' : {
                    this.assinatura.valor = this.assinatura.produto.valor.eur
                    break;
                }
            }
        }
    }

}
