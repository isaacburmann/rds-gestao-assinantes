import { Component, OnInit } from '@angular/core';
import {Empresa} from "../empresa";
import {EmpresaService} from "../empresa.service";

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {

  empresas: Empresa[]
  selectedEmpresa: Empresa

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.getEmpresas()
        .then((empresas: Empresa[]) => {
            this.empresas = empresas.map((empresa) => {
                return empresa;
            });
        });
  }

    private getIndexOfEmpresa = (empresaId: String) => {
        return this.empresas.findIndex((empresa) => {
            return empresa._id === empresaId;
        });
    }

    selectEmpresa(empresa: Empresa) {
        this.selectedEmpresa = empresa
    }

    createNewEmpresa() {
        var empresa: Empresa = {
            nome: '',
            cnpj: '',
        };

        // By default, a newly-created empresa will have the selected state.
        this.selectEmpresa(empresa);
    }

    deleteEmpresa = (empresaId: String) => {
        var idx = this.getIndexOfEmpresa(empresaId);
        if (idx !== -1) {
            this.empresas.splice(idx, 1);
            this.selectEmpresa(null);
        }
        return this.empresas;
    }

    addEmpresa = (empresa: Empresa) => {
        this.empresas.push(empresa);
        this.selectEmpresa(empresa);
        return this.empresas;
    }

    updateEmpresa = (empresa: Empresa) => {
        var idx = this.getIndexOfEmpresa(empresa._id);
        if (idx !== -1) {
            this.empresas[idx] = empresa;
            this.selectEmpresa(empresa);
        }
        return this.empresas;
    }

}
