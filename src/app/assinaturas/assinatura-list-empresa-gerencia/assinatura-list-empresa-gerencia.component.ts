import {Component, Input, OnInit} from '@angular/core';
import {Empresa} from "../../empresas/empresa";
import {EmpresaService} from "../../empresas/empresa.service";

@Component({
    selector: 'app-assinatura-list-empresa-gerencia',
    templateUrl: './assinatura-list-empresa-gerencia.component.html',
    styleUrls: ['./assinatura-list-empresa-gerencia.component.css'],
    providers: [EmpresaService]
})
export class AssinaturaListEmpresaGerenciaComponent implements OnInit {

    empresasAssinantes: Empresa[];

    constructor(private empresaService: EmpresaService) { }

    ngOnInit() {

        this.empresaService
            .getEmpresasAssinantes()
            .then((empresas: Empresa[]) => {
                this.empresasAssinantes = empresas.map((empresa) => {
                    return empresa;
                });
            });
    }

}