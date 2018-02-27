import {Component, Input, OnInit} from '@angular/core';
import {Empresa} from "../empresa";
import {EmpresaService} from "../empresa.service";

@Component({
  selector: 'app-empresa-details',
  templateUrl: './empresa-details.component.html',
  styleUrls: ['./empresa-details.component.css']
})
export class EmpresaDetailsComponent {

    @Input()
    empresa: Empresa;

    @Input()
    createHandler: Function;
    @Input()
    updateHandler: Function;
    @Input()
    deleteHandler: Function;

    success: boolean;

    constructor (private empresaService: EmpresaService) {}

    createEmpresa(empresa: Empresa) {
        this.empresaService.createEmpresa(empresa).then((newEmpresa: Empresa) => {
            this.createHandler(newEmpresa);
            this.success = true;
            setTimeout(() => {
                this.success = false;
            },3000);
        });
    }

    updateEmpresa(empresa: Empresa): void {
        this.empresaService.updateEmpresa(empresa).then((updatedEmpresa: Empresa) => {
            this.updateHandler(updatedEmpresa);
        });
    }

    deleteEmpresa(empresaId: String): void {
        this.empresaService.deleteEmpresa(empresaId).then((deletedEmpresaId: String) => {
            this.deleteHandler(deletedEmpresaId);
        });
    }

}
