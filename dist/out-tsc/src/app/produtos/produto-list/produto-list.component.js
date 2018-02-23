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
var produto_service_1 = require("../produto.service");
var ProdutoListComponent = /** @class */ (function () {
    function ProdutoListComponent(produtoService) {
        var _this = this;
        this.produtoService = produtoService;
        this.getIndexOfProduto = function (produtoId) {
            return _this.produtos.findIndex(function (produto) {
                return produto._id === produtoId;
            });
        };
        this.deleteProduto = function (produtoId) {
            var idx = _this.getIndexOfProduto(produtoId);
            if (idx !== -1) {
                _this.produtos.splice(idx, 1);
                _this.selectProduto(null);
            }
            return _this.produtos;
        };
        this.addProduto = function (produto) {
            _this.produtos.push(produto);
            _this.selectProduto(produto);
            return _this.produtos;
        };
        this.updateProduto = function (produto) {
            var idx = _this.getIndexOfProduto(produto._id);
            if (idx !== -1) {
                _this.produtos[idx] = produto;
                _this.selectProduto(produto);
            }
            return _this.produtos;
        };
    }
    ProdutoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.produtoService
            .getProdutos()
            .then(function (produtos) {
            _this.produtos = produtos.map(function (produto) {
                if (!produto.valor) {
                    produto.valor = {
                        brl: '',
                        usd: '',
                        eur: ''
                    };
                }
                return produto;
            });
        });
    };
    ProdutoListComponent.prototype.selectProduto = function (produto) {
        this.selectedProduto = produto;
    };
    ProdutoListComponent.prototype.createNewProduto = function () {
        var produto = {
            nome: '',
            valor: {
                brl: '',
                usd: '',
                eur: ''
            }
        };
        // By default, a newly-created produto will have the selected state.
        this.selectProduto(produto);
    };
    ProdutoListComponent = __decorate([
        core_1.Component({
            selector: 'app-produto-list',
            templateUrl: './produto-list.component.html',
            styleUrls: ['./produto-list.component.css'],
            providers: [produto_service_1.ProdutoService]
        }),
        __metadata("design:paramtypes", [produto_service_1.ProdutoService])
    ], ProdutoListComponent);
    return ProdutoListComponent;
}());
exports.ProdutoListComponent = ProdutoListComponent;
//# sourceMappingURL=produto-list.component.js.map