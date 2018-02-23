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
var produto_1 = require("../produto");
var produto_service_1 = require("../produto.service");
var ProdutoDetailsComponent = /** @class */ (function () {
    function ProdutoDetailsComponent(produtoService) {
        this.produtoService = produtoService;
    }
    ProdutoDetailsComponent.prototype.createProduto = function (produto) {
        var _this = this;
        this.produtoService.createProduto(produto).then(function (newProduto) {
            _this.createHandler(newProduto);
        });
    };
    ProdutoDetailsComponent.prototype.updateProduto = function (produto) {
        var _this = this;
        this.produtoService.updateProduto(produto).then(function (updatedProduto) {
            _this.updateHandler(updatedProduto);
        });
    };
    ProdutoDetailsComponent.prototype.deleteProduto = function (produtoId) {
        var _this = this;
        this.produtoService.deleteProduto(produtoId).then(function (deletedProdutoId) {
            _this.deleteHandler(deletedProdutoId);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", produto_1.Produto)
    ], ProdutoDetailsComponent.prototype, "produto", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ProdutoDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ProdutoDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ProdutoDetailsComponent.prototype, "deleteHandler", void 0);
    ProdutoDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-produto-details',
            templateUrl: './produto-details.component.html',
            styleUrls: ['./produto-details.component.css']
        }),
        __metadata("design:paramtypes", [produto_service_1.ProdutoService])
    ], ProdutoDetailsComponent);
    return ProdutoDetailsComponent;
}());
exports.ProdutoDetailsComponent = ProdutoDetailsComponent;
//# sourceMappingURL=produto-details.component.js.map