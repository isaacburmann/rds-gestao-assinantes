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
var assinatura_1 = require("../assinatura");
var assinatura_service_1 = require("../assinatura.service");
var AssinaturaDetailsComponent = /** @class */ (function () {
    function AssinaturaDetailsComponent(assinaturaService) {
        this.assinaturaService = assinaturaService;
    }
    AssinaturaDetailsComponent.prototype.createAssinatura = function (assinatura) {
        var _this = this;
        this.assinaturaService.createAssinatura(assinatura).then(function (newAssinatura) {
            _this.createHandler(newAssinatura);
        });
    };
    AssinaturaDetailsComponent.prototype.updateAssinatura = function (assinatura) {
        var _this = this;
        this.assinaturaService.updateAssinatura(assinatura).then(function (updatedAssinatura) {
            _this.updateHandler(updatedAssinatura);
        });
    };
    AssinaturaDetailsComponent.prototype.deleteAssinatura = function (assinaturaId) {
        var _this = this;
        this.assinaturaService.deleteAssinatura(assinaturaId).then(function (deletedAssinaturaId) {
            _this.deleteHandler(deletedAssinaturaId);
        });
    };
    AssinaturaDetailsComponent.prototype.setAssinaturaValorData = function (value) {
        this.assinatura.data = this.data;
        if (this.assinatura.produto != null && this.assinatura.produto.valor != null) {
            switch (this.assinatura.moeda) {
                case 'brl': {
                    this.assinatura.valor = this.assinatura.produto.valor.brl;
                    break;
                }
                case 'usd': {
                    this.assinatura.valor = this.assinatura.produto.valor.usd;
                    break;
                }
                case 'eur': {
                    this.assinatura.valor = this.assinatura.produto.valor.eur;
                    break;
                }
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", assinatura_1.Assinatura)
    ], AssinaturaDetailsComponent.prototype, "assinatura", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AssinaturaDetailsComponent.prototype, "empresas", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AssinaturaDetailsComponent.prototype, "produtos", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AssinaturaDetailsComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], AssinaturaDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], AssinaturaDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], AssinaturaDetailsComponent.prototype, "deleteHandler", void 0);
    AssinaturaDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-assinatura-details',
            templateUrl: './assinatura-details.component.html',
            styleUrls: ['./assinatura-details.component.css'],
        }),
        __metadata("design:paramtypes", [assinatura_service_1.AssinaturaService])
    ], AssinaturaDetailsComponent);
    return AssinaturaDetailsComponent;
}());
exports.AssinaturaDetailsComponent = AssinaturaDetailsComponent;
//# sourceMappingURL=assinatura-details.component.js.map