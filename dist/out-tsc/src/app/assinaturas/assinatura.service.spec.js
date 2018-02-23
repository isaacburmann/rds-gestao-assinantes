"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var assinatura_service_1 = require("./assinatura.service");
describe('AssinaturaService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [assinatura_service_1.AssinaturaService]
        });
    });
    it('should be created', testing_1.inject([assinatura_service_1.AssinaturaService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=assinatura.service.spec.js.map