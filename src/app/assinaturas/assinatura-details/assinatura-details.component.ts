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

    constructor (private assinaturaService: AssinaturaService, private empresaService: EmpresaService) {}

    createAssinatura(assinatura: Assinatura) {
        this.assinaturaService.createAssinatura(assinatura).then((newAssinatura: Assinatura) => {
            this.createHandler(newAssinatura);
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
                case 'brl' : {
                    this.assinatura.valor = this.assinatura.produto.valor.brl
                    break;
                }
                case 'usd' : {
                    this.assinatura.valor = this.assinatura.produto.valor.usd
                    break;
                }
                case 'eur' : {
                    this.assinatura.valor = this.assinatura.produto.valor.eur
                    break;
                }
            }
        }
    }

}
