import {Component, Input, OnInit} from '@angular/core';
import {Empresa} from "../../empresas/empresa";
import {EmpresaService} from "../../empresas/empresa.service";

@Component({
    selector: 'app-assinatura-list-empresa-paga',
    templateUrl: './assinatura-list-empresa-paga.component.html',
    styleUrls: ['./assinatura-list-empresa-paga.component.css'],
    providers: [EmpresaService]
})
export class AssinaturaListEmpresaPagaComponent implements OnInit {

    empresasPagantes: Empresa[];

    constructor(private empresaService: EmpresaService) { }

    ngOnInit() {

        this.empresaService
            .getEmpresasPagantes()
            .then((empresas: Empresa[]) => {
                this.empresasPagantes = empresas.map((empresa) => {
                    return empresa;
                });
            });
    }

}