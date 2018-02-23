"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var empresa_service_1 = require("../empresa.service");
var EmpresaListComponent = /** @class */ (function () {
    function EmpresaListComponent(empresaService) {
        var _this = this;
        this.empresaService = empresaService;
        this.getIndexOfEmpresa = function (empresaId) {
            return _this.empresas.findIndex(function (empresa) {
                return empresa._id === empresaId;
            });
        };
        this.deleteEmpresa = function (empresaId) {
            var idx = _this.getIndexOfEmpresa(empresaId);
            if (idx !== -1) {
                _this.empresas.splice(idx, 1);
                _this.selectEmpresa(null);
            }
            return _this.empresas;
        };
        this.addEmpresa = function (empresa) {
            _this.empresas.push(empresa);
            _this.selectEmpresa(empresa);
            return _this.empresas;
        };
        this.updateEmpresa = function (empresa) {
            var idx = _this.getIndexOfEmpresa(empresa._id);
            if (idx !== -1) {
                _this.empresas[idx] = empresa;
                _this.selectEmpresa(empresa);
            }
            return _this.empresas;
        };
    }
    EmpresaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empresaService.getEmpresas()
            .then(function (empresas) {
            _this.empresas = empresas.map(function (empresa) {
                return empresa;
            });
        });
    };
    EmpresaListComponent.prototype.selectEmpresa = function (empresa) {
        this.selectedEmpresa = empresa;
    };
    EmpresaListComponent.prototype.createNewEmpresa = function () {
        var empresa = {
            nome: '',
            cnpj: '',
        };
        // By default, a newly-created empresa will have the selected state.
        this.selectEmpresa(empresa);
    };
    EmpresaListComponent = __decorate([
        core_1.Component({
            selector: 'app-empresa-list',
            templateUrl: './empresa-list.component.html',
            styleUrls: ['./empresa-list.component.css'],
            providers: [empresa_service_1.EmpresaService]
        }),
        __metadata("design:paramtypes", [empresa_service_1.EmpresaService])
    ], EmpresaListComponent);
    return EmpresaListComponent;
}());
exports.EmpresaListComponent = EmpresaListComponent;
//# sourceMappingURL=empresa-list.component.js.map