"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var produto_service_1 = require("./produto.service");
describe('ProdutoService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [produto_service_1.ProdutoService]
        });
    });
    it('should be created', testing_1.inject([produto_service_1.ProdutoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=produto.service.spec.js.map