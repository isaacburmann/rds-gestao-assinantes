"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var MeanContactlistAngular2Page = /** @class */ (function () {
    function MeanContactlistAngular2Page() {
    }
    MeanContactlistAngular2Page.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    MeanContactlistAngular2Page.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return MeanContactlistAngular2Page;
}());
exports.MeanContactlistAngular2Page = MeanContactlistAngular2Page;
//# sourceMappingURL=app.po.js.map