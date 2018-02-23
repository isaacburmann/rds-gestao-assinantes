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
var assinatura_service_1 = require("../assinatura.service");
var produto_service_1 = require("../../produtos/produto.service");
var empresa_service_1 = require("../../empresas/empresa.service");
var AssinaturaListComponent = /** @class */ (function () {
    function AssinaturaListComponent(assinaturaService, empresaService, produtoService) {
        var _this = this;
        this.assinaturaService = assinaturaService;
        this.empresaService = empresaService;
        this.produtoService = produtoService;
        this.getIndexOfAssinatura = function (assinaturaId) {
            return _this.assinaturas.findIndex(function (assinatura) {
                return assinatura._id === assinaturaId;
            });
        };
        this.deleteAssinatura = function (assinaturaId) {
            var idx = _this.getIndexOfAssinatura(assinaturaId);
            if (idx !== -1) {
                _this.assinaturas.splice(idx, 1);
                _this.selectAssinatura(null);
            }
            return _this.assinaturas;
        };
        this.addAssinatura = function (assinatura) {
            _this.assinaturas.push(assinatura);
            _this.selectAssinatura(assinatura);
            return _this.assinaturas;
        };
        this.updateAssinatura = function (assinatura) {
            var idx = _this.getIndexOfAssinatura(assinatura._id);
            if (idx !== -1) {
                _this.assinaturas[idx] = assinatura;
                _this.selectAssinatura(assinatura);
            }
            return _this.assinaturas;
        };
    }
    AssinaturaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = new Date().toLocaleDateString('pt-BR');
        console.log('data');
        console.log(this.data);
        this.assinaturaService.getAssinaturas()
            .then(function (assinaturas) {
            _this.assinaturas = assinaturas.map(function (assinatura) {
                return assinatura;
            });
        });
        this.empresaService
            .getEmpresas()
            .then(function (empresas) {
            _this.empresas = empresas.map(function (empresa) {
                return empresa;
            });
        });
        this.produtoService
            .getProdutos()
            .then(function (produtos) {
            _this.produtos = produtos.map(function (produto) {
                return produto;
            });
        });
    };
    AssinaturaListComponent.prototype.selectAssinatura = function (assinatura) {
        this.selectedAssinatura = assinatura;
    };
    AssinaturaListComponent.prototype.createNewAssinatura = function () {
        var assinatura = {
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
    };
    AssinaturaListComponent = __decorate([
        core_1.Component({
            selector: 'app-assinatura-list',
            templateUrl: './assinatura-list.component.html',
            styleUrls: ['./assinatura-list.component.css'],
            providers: [assinatura_service_1.AssinaturaService, empresa_service_1.EmpresaService, produto_service_1.ProdutoService]
        }),
        __metadata("design:paramtypes", [assinatura_service_1.AssinaturaService, empresa_service_1.EmpresaService, produto_service_1.ProdutoService])
    ], AssinaturaListComponent);
    return AssinaturaListComponent;
}());
exports.AssinaturaListComponent = AssinaturaListComponent;
//# sourceMappingURL=assinatura-list.component.js.map