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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var environment_1 = require("../../environments/environment");
var EmpresaService = /** @class */ (function () {
    function EmpresaService(http) {
        this.http = http;
        this.empresasUrl = environment_1.SERVER_URL + '/api/empresas';
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmpresaService);
    return EmpresaService;
}());
exports.EmpresaService = EmpresaService;
//# sourceMappingURL=empresa.service.js.map