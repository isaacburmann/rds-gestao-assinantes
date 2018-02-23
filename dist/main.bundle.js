webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empresas_empresa_list_empresa_list_component__ = __webpack_require__("./src/app/empresas/empresa-list/empresa-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__produtos_produto_list_produto_list_component__ = __webpack_require__("./src/app/produtos/produto-list/produto-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assinaturas_assinatura_list_assinatura_list_component__ = __webpack_require__("./src/app/assinaturas/assinatura-list/assinatura-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'empresas', component: __WEBPACK_IMPORTED_MODULE_3__empresas_empresa_list_empresa_list_component__["a" /* EmpresaListComponent */] },
    { path: 'produtos', component: __WEBPACK_IMPORTED_MODULE_4__produtos_produto_list_produto_list_component__["a" /* ProdutoListComponent */] },
    { path: 'assinaturas', component: __WEBPACK_IMPORTED_MODULE_5__assinaturas_assinatura_list_assinatura_list_component__["a" /* AssinaturaListComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav style=\"background-color: #415b9b!important\" class=\"navbar navbar-light\">\n    <form class=\"form-inline\">\n        <a class=\"navbar-brand\" routerLink=\"/\">\n            <img src=\"../assets/rd_station_logo.png\" width=\"120\" class=\"d-inline-block align-top\" alt=\"\">\n            <!--<span style=\"color: #FFFFFF\"> - Gestão de Assinantes e Pagadores</span>-->\n        </a>\n        <button routerLinkActive=\"active\" routerLink=\"/\" style=\"margin-right: 10px; min-width: 120px\" class=\"btn btn-outline-light\" type=\"button\" [routerLinkActiveOptions]=\"{exact:true}\">Home</button>\n        <button routerLinkActive=\"active\" routerLink=\"/empresas\" style=\"margin-right: 10px; min-width: 120px\" class=\"btn btn-outline-light\" type=\"button\">Empresas</button>\n        <button routerLinkActive=\"active\" routerLink=\"/produtos\" style=\"margin-right: 10px; min-width: 120px\" class=\"btn btn-outline-light\" type=\"button\">Produtos</button>\n        <button routerLinkActive=\"active\" routerLink=\"/assinaturas\" style=\"margin-right: 10px; min-width: 120px\" class=\"btn btn-outline-light\" type=\"button\">Assinaturas</button>\n    </form>\n</nav>\n\n<div class=\"container\">\n    <br><br>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__empresas_empresa_details_empresa_details_component__ = __webpack_require__("./src/app/empresas/empresa-details/empresa-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__empresas_empresa_list_empresa_list_component__ = __webpack_require__("./src/app/empresas/empresa-list/empresa-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__produtos_produto_list_produto_list_component__ = __webpack_require__("./src/app/produtos/produto-list/produto-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__produtos_produto_details_produto_details_component__ = __webpack_require__("./src/app/produtos/produto-details/produto-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assinaturas_assinatura_list_assinatura_list_component__ = __webpack_require__("./src/app/assinaturas/assinatura-list/assinatura-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assinaturas_assinatura_details_assinatura_details_component__ = __webpack_require__("./src/app/assinaturas/assinatura-details/assinatura-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__empresas_empresa_details_empresa_details_component__["a" /* EmpresaDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__empresas_empresa_list_empresa_list_component__["a" /* EmpresaListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__produtos_produto_list_produto_list_component__["a" /* ProdutoListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__produtos_produto_details_produto_details_component__["a" /* ProdutoDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__assinaturas_assinatura_list_assinatura_list_component__["a" /* AssinaturaListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__assinaturas_assinatura_details_assinatura_details_component__["a" /* AssinaturaDetailsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assinaturas/assinatura-details/assinatura-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/assinaturas/assinatura-details/assinatura-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"assinatura\" class=\"row\">\n    <div class=\"col-md-12\">\n        <h2 *ngIf=\"assinatura._id\">Detalhes da Assinatura</h2>\n        <h2 *ngIf=\"!assinatura._id\">Nova Assinatura</h2>\n    </div>\n</div>\n<div *ngIf=\"assinatura\" class=\"row\">\n    <form class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label for=\"assinatura-data\">Data</label>\n            <input disabled class=\"form-control\" id=\"assinatura-data\" name=\"assinatura-data\" [value]=\"data\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"assinatura-produto\">Produto</label>\n            <select class=\"custom-select\" id=\"assinatura-produto\" name=\"assinatura-produto\" [(ngModel)]=\"assinatura.produto\">\n                <option *ngFor=\"let produto of produtos\" [value]=\"produto\">{{produto.nome}} </option>\n            </select>\n        </div>\n        <div *ngIf=\"assinatura.produto != null && assinatura.produto.nome != ''\" class=\"form-group\">\n            <label for=\"assinatura-moeda\">Moeda - Valor</label>\n            <select class=\"custom-select\" id=\"assinatura-moeda\" name=\"assinatura-moeda\" [(ngModel)]=\"assinatura.moeda\" (change)=\"setAssinaturaValor()\">\n                <option value=\"brl\"> BRL - {{assinatura.produto.valor.brl}}</option>\n                <option value=\"usd\"> USD - {{assinatura.produto.valor.usd}}</option>\n                <option value=\"eur\"> EUR - {{assinatura.produto.valor.eur}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"assinatura-empresa-gerencia\">Empresa responsável</label>\n            <select class=\"custom-select\" id=\"assinatura-empresa-gerencia\" name=\"assinatura-empresa-gerencia\" [(ngModel)]=\"assinatura.empresa_gerencia\">\n                <option *ngFor=\"let empresa of empresas\" [value]=\"empresa\">CNPJ: {{empresa.cnpj}} Nome: {{empresa.nome}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"assinatura-empresa-paga\">Empresa que paga</label>\n            <select class=\"custom-select\" id=\"assinatura-empresa-paga\" name=\"assinatura-empresa-paga\" [(ngModel)]=\"assinatura.empresa_paga\">\n                <option *ngFor=\"let empresa of empresas\" [value]=\"empresa\">CNPJ: {{empresa.cnpj}} Nome: {{empresa.nome}}</option>\n            </select>\n        </div>\n\n        <button class=\"btn btn-success\" *ngIf=\"!assinatura._id\" (click)=\"createAssinatura(assinatura)\">Salvar</button>\n        <button class=\"btn btn-warning\" *ngIf=\"assinatura._id\" (click)=\"updateAssinatura(assinatura)\">Editar</button>\n        <button class=\"btn btn-danger\" *ngIf=\"assinatura._id\" (click)=\"deleteAssinatura(assinatura._id)\">Deletar</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/assinaturas/assinatura-details/assinatura-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssinaturaDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assinatura__ = __webpack_require__("./src/app/assinaturas/assinatura.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assinatura_service__ = __webpack_require__("./src/app/assinaturas/assinatura.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssinaturaDetailsComponent = /** @class */ (function () {
    function AssinaturaDetailsComponent(assinaturaService) {
        this.assinaturaService = assinaturaService;
        console.log('assinatura');
        console.log(this.assinatura);
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
    AssinaturaDetailsComponent.prototype.setAssinaturaValor = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__assinatura__["a" /* Assinatura */])
    ], AssinaturaDetailsComponent.prototype, "assinatura", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], AssinaturaDetailsComponent.prototype, "empresas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], AssinaturaDetailsComponent.prototype, "produtos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AssinaturaDetailsComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], AssinaturaDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], AssinaturaDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], AssinaturaDetailsComponent.prototype, "deleteHandler", void 0);
    AssinaturaDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-assinatura-details',
            template: __webpack_require__("./src/app/assinaturas/assinatura-details/assinatura-details.component.html"),
            styles: [__webpack_require__("./src/app/assinaturas/assinatura-details/assinatura-details.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__assinatura_service__["a" /* AssinaturaService */]])
    ], AssinaturaDetailsComponent);
    return AssinaturaDetailsComponent;
}());



/***/ }),

/***/ "./src/app/assinaturas/assinatura-list/assinatura-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/assinaturas/assinatura-list/assinatura-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n\n        <button class=\"btn btn-primary\" (click)=\"createNewAssinatura()\">Nova Assinatura</button>\n\n        <h2 style=\"margin-top: 20px\">Assinaturas</h2>\n\n        <div class=\"list-group\">\n            <h5>Clique na assinatura que deseja editar ou deletar</h5>\n            <a type=\"button\" class=\"list-group-item list-group-item-action\"\n               *ngFor=\"let assinatura of assinaturas\"\n               (click)=\"selectAssinatura(assinatura)\"\n               [class.active]=\"assinatura === selectedAssinatura\">\n                <b>Data: {{assinatura.data}}</b>\n                <p>Produto: {{assinatura.produto.nome}} Moeda: {{assinatura.moeda}} Valor: {{assinatura.valor}}</p>\n                <p>Empresa responsável: {{assinatura.empresa_gerencia.nome}}}</p>\n                <p>Empresa que paga: {{assinatura.empresa_paga.nome}</p>\n            </a>\n        </div>\n    </div>\n    <div class=\"col-md-6 col-md-offset-2\">\n        <app-assinatura-details\n                [assinatura]=\"selectedAssinatura\"\n                [produtos]=\"produtos\"\n                [empresas]=\"empresas\"\n                [data]=\"data\"\n                [createHandler]=\"addAssinatura\"\n                [updateHandler]=\"updateAssinatura\"\n                [deleteHandler]=\"deleteAssinatura\">\n        </app-assinatura-details>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/assinaturas/assinatura-list/assinatura-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssinaturaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assinatura_service__ = __webpack_require__("./src/app/assinaturas/assinatura.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produtos_produto_service__ = __webpack_require__("./src/app/produtos/produto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empresas_empresa_service__ = __webpack_require__("./src/app/empresas/empresa.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-assinatura-list',
            template: __webpack_require__("./src/app/assinaturas/assinatura-list/assinatura-list.component.html"),
            styles: [__webpack_require__("./src/app/assinaturas/assinatura-list/assinatura-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__assinatura_service__["a" /* AssinaturaService */], __WEBPACK_IMPORTED_MODULE_3__empresas_empresa_service__["a" /* EmpresaService */], __WEBPACK_IMPORTED_MODULE_2__produtos_produto_service__["a" /* ProdutoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__assinatura_service__["a" /* AssinaturaService */], __WEBPACK_IMPORTED_MODULE_3__empresas_empresa_service__["a" /* EmpresaService */], __WEBPACK_IMPORTED_MODULE_2__produtos_produto_service__["a" /* ProdutoService */]])
    ], AssinaturaListComponent);
    return AssinaturaListComponent;
}());



/***/ }),

/***/ "./src/app/assinaturas/assinatura.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssinaturaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssinaturaService = /** @class */ (function () {
    function AssinaturaService(http) {
        this.http = http;
        this.assinaturasUrl = '/api/assinaturas';
    }
    // get("/api/assinaturas")
    AssinaturaService.prototype.getAssinaturas = function () {
        return this.http.get(this.assinaturasUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/assinaturas")
    AssinaturaService.prototype.createAssinatura = function (newAssinatura) {
        return this.http.post(this.assinaturasUrl, newAssinatura)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/assinaturas/:id") endpoint not used by Angular app
    // delete("/api/assinaturas/:id")
    AssinaturaService.prototype.deleteAssinatura = function (delAssinaturaId) {
        return this.http.delete(this.assinaturasUrl + '/' + delAssinaturaId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/assinaturas/:id")
    AssinaturaService.prototype.updateAssinatura = function (putAssinatura) {
        var putUrl = this.assinaturasUrl + '/' + putAssinatura._id;
        return this.http.put(putUrl, putAssinatura)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AssinaturaService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    AssinaturaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AssinaturaService);
    return AssinaturaService;
}());



/***/ }),

/***/ "./src/app/assinaturas/assinatura.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Assinatura; });
var Assinatura = /** @class */ (function () {
    function Assinatura() {
    }
    return Assinatura;
}());



/***/ }),

/***/ "./src/app/empresas/empresa-details/empresa-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/empresas/empresa-details/empresa-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"empresa\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"empresa._id\">Detalhes da Empresa</h2>\n    <h2 *ngIf=\"!empresa._id\">Nova Empresa</h2>\n  </div>\n</div>\n<div *ngIf=\"empresa\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"empresa-nome\">Nome</label>\n      <input class=\"form-control\" name=\"empresa-nome\" [(ngModel)]=\"empresa.nome\" placeholder=\"Nome da empresa\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"empresa-cnpj\">CNPJ</label>\n      <input class=\"form-control\" name=\"empresa-cnpj\" [(ngModel)]=\"empresa.cnpj\" placeholder=\"CNPJ da empresa\"/>\n    </div>\n    <button class=\"btn btn-success\" *ngIf=\"!empresa._id\" (click)=\"createEmpresa(empresa)\">Salvar</button>\n    <button class=\"btn btn-warning\" *ngIf=\"empresa._id\" (click)=\"updateEmpresa(empresa)\">Editar</button>\n    <button class=\"btn btn-danger\" *ngIf=\"empresa._id\" (click)=\"deleteEmpresa(empresa._id)\">Deletar</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/empresas/empresa-details/empresa-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresaDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empresa__ = __webpack_require__("./src/app/empresas/empresa.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empresa_service__ = __webpack_require__("./src/app/empresas/empresa.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmpresaDetailsComponent = /** @class */ (function () {
    function EmpresaDetailsComponent(empresaService) {
        this.empresaService = empresaService;
    }
    EmpresaDetailsComponent.prototype.createEmpresa = function (empresa) {
        var _this = this;
        this.empresaService.createEmpresa(empresa).then(function (newEmpresa) {
            _this.createHandler(newEmpresa);
        });
    };
    EmpresaDetailsComponent.prototype.updateEmpresa = function (empresa) {
        var _this = this;
        this.empresaService.updateEmpresa(empresa).then(function (updatedEmpresa) {
            _this.updateHandler(updatedEmpresa);
        });
    };
    EmpresaDetailsComponent.prototype.deleteEmpresa = function (empresaId) {
        var _this = this;
        this.empresaService.deleteEmpresa(empresaId).then(function (deletedEmpresaId) {
            _this.deleteHandler(deletedEmpresaId);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__empresa__["a" /* Empresa */])
    ], EmpresaDetailsComponent.prototype, "empresa", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], EmpresaDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], EmpresaDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], EmpresaDetailsComponent.prototype, "deleteHandler", void 0);
    EmpresaDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-empresa-details',
            template: __webpack_require__("./src/app/empresas/empresa-details/empresa-details.component.html"),
            styles: [__webpack_require__("./src/app/empresas/empresa-details/empresa-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__empresa_service__["a" /* EmpresaService */]])
    ], EmpresaDetailsComponent);
    return EmpresaDetailsComponent;
}());



/***/ }),

/***/ "./src/app/empresas/empresa-list/empresa-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/empresas/empresa-list/empresa-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n\n        <button class=\"btn btn-primary\" (click)=\"createNewEmpresa()\">Nova Empresa</button>\n\n        <h2 style=\"margin-top: 20px\">Empresas</h2>\n\n        <div class=\"list-group\">\n            <h5>Clique na empresa que deseja editar ou deletar</h5>\n            <a type=\"button\" class=\"list-group-item list-group-item-action\"\n                    *ngFor=\"let empresa of empresas\"\n                    (click)=\"selectEmpresa(empresa)\"\n                    [class.active]=\"empresa === selectedEmpresa\">\n                 Nome: {{empresa.nome}}\n            </a>\n        </div>\n    </div>\n    <div class=\"col-md-6 col-md-offset-2\">\n        <app-empresa-details\n                [empresa]=\"selectedEmpresa\"\n                [createHandler]=\"addEmpresa\"\n                [updateHandler]=\"updateEmpresa\"\n                [deleteHandler]=\"deleteEmpresa\">\n        </app-empresa-details>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/empresas/empresa-list/empresa-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empresa_service__ = __webpack_require__("./src/app/empresas/empresa.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-empresa-list',
            template: __webpack_require__("./src/app/empresas/empresa-list/empresa-list.component.html"),
            styles: [__webpack_require__("./src/app/empresas/empresa-list/empresa-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__empresa_service__["a" /* EmpresaService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__empresa_service__["a" /* EmpresaService */]])
    ], EmpresaListComponent);
    return EmpresaListComponent;
}());



/***/ }),

/***/ "./src/app/empresas/empresa.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmpresaService = /** @class */ (function () {
    function EmpresaService(http) {
        this.http = http;
        this.empresasUrl = '/api/empresas';
    }
    // get("/api/empresas")
    EmpresaService.prototype.getEmpresas = function () {
        return this.http.get(this.empresasUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/empresas")
    EmpresaService.prototype.createEmpresa = function (newEmpresa) {
        return this.http.post(this.empresasUrl, newEmpresa)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/empresas/:id") endpoint not used by Angular app
    // delete("/api/empresas/:id")
    EmpresaService.prototype.deleteEmpresa = function (delEmpresaId) {
        return this.http.delete(this.empresasUrl + '/' + delEmpresaId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/empresas/:id")
    EmpresaService.prototype.updateEmpresa = function (putEmpresa) {
        var putUrl = this.empresasUrl + '/' + putEmpresa._id;
        return this.http.put(putUrl, putEmpresa)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmpresaService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    EmpresaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], EmpresaService);
    return EmpresaService;
}());



/***/ }),

/***/ "./src/app/empresas/empresa.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Empresa; });
var Empresa = /** @class */ (function () {
    function Empresa() {
    }
    return Empresa;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2><strong>Gestão de assinantes e pagadores</strong></h2>\n<h5>Seja bem vindo ao sistema de gestão de assinantes e pagadores da RD Station.</h5>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/produtos/produto-details/produto-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/produtos/produto-details/produto-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"produto\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"produto._id\">Detalhes do Produto</h2>\n    <h2 *ngIf=\"!produto._id\">Novo Produto</h2>\n  </div>\n</div>\n<div *ngIf=\"produto\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"produto-nome\">Nome</label>\n      <input class=\"form-control\" id=\"produto-nome\" name=\"produto-nome\" [(ngModel)]=\"produto.nome\" placeholder=\"Nome do produto\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"produto-valor-brl\">Valor (BRL)</label>\n      <input class=\"form-control\" id=\"produto-valor-brl\" name=\"produto-valor-brl\" [(ngModel)]=\"produto.valor.brl\" placeholder=\"Valor do produto em BRL\"/>\n      <label for=\"produto-valor-usd\">Valor (USD)</label>\n      <input class=\"form-control\" id=\"produto-valor-usd\" name=\"produto-valor-usd\" [(ngModel)]=\"produto.valor.usd\" placeholder=\"Valor do produto em USD\"/>\n      <label for=\"produto-valor-eur\">Valor (EUR)</label>\n      <input class=\"form-control\" id=\"produto-valor-eur\" name=\"produto-valor-eur\" [(ngModel)]=\"produto.valor.eur\" placeholder=\"Valor do produto em EUR\"/>\n    </div>\n    <button class=\"btn btn-success\" *ngIf=\"!produto._id\" (click)=\"createProduto(produto)\">Salvar</button>\n    <button class=\"btn btn-warning\" *ngIf=\"produto._id\" (click)=\"updateProduto(produto)\">Editar</button>\n    <button class=\"btn btn-danger\" *ngIf=\"produto._id\" (click)=\"deleteProduto(produto._id)\">Deletar</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/produtos/produto-details/produto-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__produto__ = __webpack_require__("./src/app/produtos/produto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_service__ = __webpack_require__("./src/app/produtos/produto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__produto__["a" /* Produto */])
    ], ProdutoDetailsComponent.prototype, "produto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], ProdutoDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], ProdutoDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], ProdutoDetailsComponent.prototype, "deleteHandler", void 0);
    ProdutoDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-produto-details',
            template: __webpack_require__("./src/app/produtos/produto-details/produto-details.component.html"),
            styles: [__webpack_require__("./src/app/produtos/produto-details/produto-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__produto_service__["a" /* ProdutoService */]])
    ], ProdutoDetailsComponent);
    return ProdutoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/produtos/produto-list/produto-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/produtos/produto-list/produto-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n\n        <button class=\"btn btn-primary\" (click)=\"createNewProduto()\">Novo Produto</button>\n\n        <h2 style=\"margin-top: 20px\">Produtos</h2>\n\n        <div class=\"list-group\">\n            <h5>Clique no produto que deseja editar ou deletar</h5>\n            <a type=\"button\" class=\"list-group-item list-group-item-action\"\n                    *ngFor=\"let produto of produtos\"\n                    (click)=\"selectProduto(produto)\"\n                    [class.active]=\"produto === selectedProduto\">\n                Nome: {{produto.nome}}\n            </a>\n        </div>\n    </div>\n    <div class=\"col-md-6 col-md-offset-2\">\n        <app-produto-details\n                [produto]=\"selectedProduto\"\n                [createHandler]=\"addProduto\"\n                [updateHandler]=\"updateProduto\"\n                [deleteHandler]=\"deleteProduto\">\n        </app-produto-details>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/produtos/produto-list/produto-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__produto_service__ = __webpack_require__("./src/app/produtos/produto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-produto-list',
            template: __webpack_require__("./src/app/produtos/produto-list/produto-list.component.html"),
            styles: [__webpack_require__("./src/app/produtos/produto-list/produto-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__produto_service__["a" /* ProdutoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__produto_service__["a" /* ProdutoService */]])
    ], ProdutoListComponent);
    return ProdutoListComponent;
}());



/***/ }),

/***/ "./src/app/produtos/produto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProdutoService = /** @class */ (function () {
    function ProdutoService(http) {
        this.http = http;
        this.produtosUrl = '/api/produtos';
    }
    // get("/api/produtos")
    ProdutoService.prototype.getProdutos = function () {
        return this.http.get(this.produtosUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/produtos")
    ProdutoService.prototype.createProduto = function (newProduto) {
        return this.http.post(this.produtosUrl, newProduto)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/produtos/:id") endpoint not used by Angular app
    // delete("/api/produtos/:id")
    ProdutoService.prototype.deleteProduto = function (delProdutoId) {
        return this.http.delete(this.produtosUrl + '/' + delProdutoId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/produtos/:id")
    ProdutoService.prototype.updateProduto = function (putProduto) {
        var putUrl = this.produtosUrl + '/' + putProduto._id;
        return this.http.put(putUrl, putProduto)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProdutoService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    ProdutoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProdutoService);
    return ProdutoService;
}());



/***/ }),

/***/ "./src/app/produtos/produto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map