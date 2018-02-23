"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var home_component_1 = require("./home/home.component");
var empresa_list_component_1 = require("./empresas/empresa-list/empresa-list.component");
var produto_list_component_1 = require("./produtos/produto-list/produto-list.component");
var assinatura_list_component_1 = require("./assinaturas/assinatura-list/assinatura-list.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'empresas', component: empresa_list_component_1.EmpresaListComponent },
    { path: 'produtos', component: produto_list_component_1.ProdutoListComponent },
    { path: 'assinaturas', component: assinatura_list_component_1.AssinaturaListComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map