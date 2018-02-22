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
var contact_1 = require("../contact");
var contact_service_1 = require("../contact.service");
var ContactDetailsComponent = /** @class */ (function () {
    function ContactDetailsComponent(contactService) {
        this.contactService = contactService;
    }
    ContactDetailsComponent.prototype.createContact = function (contact) {
        var _this = this;
        this.contactService.createContact(contact).then(function (newContact) {
            _this.createHandler(newContact);
        });
    };
    ContactDetailsComponent.prototype.updateContact = function (contact) {
        var _this = this;
        this.contactService.updateContact(contact).then(function (updatedContact) {
            _this.updateHandler(updatedContact);
        });
    };
    ContactDetailsComponent.prototype.deleteContact = function (contactId) {
        var _this = this;
        this.contactService.deleteContact(contactId).then(function (deletedContactId) {
            _this.deleteHandler(deletedContactId);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", contact_1.Contact)
    ], ContactDetailsComponent.prototype, "contact", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ContactDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ContactDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ContactDetailsComponent.prototype, "deleteHandler", void 0);
    ContactDetailsComponent = __decorate([
        core_1.Component({
            selector: 'contact-details',
            templateUrl: './contact-details.component.html',
            styleUrls: ['./contact-details.component.css']
        }),
        __metadata("design:paramtypes", [contact_service_1.ContactService])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());
exports.ContactDetailsComponent = ContactDetailsComponent;
//# sourceMappingURL=contact-details.component.js.map