"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var empresa_details_component_1 = require("./empresas/empresa-details/empresa-details.component");
var empresa_list_component_1 = require("./empresas/empresa-list/empresa-list.component");
var produto_list_component_1 = require("./produtos/produto-list/produto-list.component");
var produto_details_component_1 = require("./produtos/produto-details/produto-details.component");
var home_component_1 = require("./home/home.component");
var assinatura_list_component_1 = require("./assinaturas/assinatura-list/assinatura-list.component");
var assinatura_details_component_1 = require("./assinaturas/assinatura-details/assinatura-details.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                empresa_details_component_1.EmpresaDetailsComponent,
                empresa_list_component_1.EmpresaListComponent,
                produto_list_component_1.ProdutoListComponent,
                produto_details_component_1.ProdutoDetailsComponent,
                assinatura_list_component_1.AssinaturaListComponent,
                assinatura_details_component_1.AssinaturaDetailsComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map