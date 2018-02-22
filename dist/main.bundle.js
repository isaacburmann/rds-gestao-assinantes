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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "\n    <!--The content below is only a placeholder and can be replaced.-->\n    <div style=\"text-align:center\">\n      <h1>\n        Welcome to {{title}}!\n      </h1>\n      <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    </div>\n    <h2>Here are some links to help you start: </h2>\n    <ul>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n      </li>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n      </li>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n      </li>\n    </ul>\n    \n  ",
            styles: []
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_contact_details_contact_details_component__ = __webpack_require__("./src/app/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_contact_list_contact_list_component__ = __webpack_require__("./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__contacts_contact_details_contact_details_component__["a" /* ContactDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__contacts_contact_list_contact_list_component__["a" /* ContactListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"contact\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"contact._id\">Contact Details</h2>\n    <h2 *ngIf=\"!contact._id\">New Contact</h2>\n  </div>\n</div>\n<div *ngIf=\"contact\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"contact-name\">Name</label>\n      <input class=\"form-control\" name=\"contact-name\" [(ngModel)]=\"contact.name\" placeholder=\"Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-email\">Email</label>\n      <input class=\"form-control\" name=\"contact-email\" [(ngModel)]=\"contact.email\" placeholder=\"support@mlab.com\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-phone-mobile\">Mobile</label>\n      <input class=\"form-control\" name=\"contact-phone-mobile\" [(ngModel)]=\"contact.phone.mobile\" placeholder=\"1234567890\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-phone-work\">Work</label>\n      <input class=\"form-control\" name=\"contact-phone-work\" [(ngModel)]=\"contact.phone.work\" placeholder=\"0123456789\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!contact._id\" (click)=\"createContact(contact)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"contact._id\" (click)=\"updateContact(contact)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"contact._id\" (click)=\"deleteContact(contact._id)\">Delete</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__("./src/app/contacts/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("./src/app/contacts/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */])
    ], ContactDetailsComponent.prototype, "contact", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Function)
    ], ContactDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Function)
    ], ContactDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Function)
    ], ContactDetailsComponent.prototype, "deleteHandler", void 0);
    ContactDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'contact-details',
            template: __webpack_require__("./src/app/contacts/contact-details/contact-details.component.html"),
            styles: [__webpack_require__("./src/app/contacts/contact-details/contact-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */]])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>Contacts</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n          *ngFor=\"let contact of contacts\"\n          (click)=\"selectContact(contact)\"\n          [class.active]=\"contact === selectedContact\">\n        {{contact.name}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewContact()\">New</button>\n  </div>\n  <div class=\"col-md-5 col-md-offset-2\">\n    <contact-details\n            [contact]=\"selectedContact\"\n            [createHandler]=\"addContact\"\n            [updateHandler]=\"updateContact\"\n            [deleteHandler]=\"deleteContact\">\n    </contact-details>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_service__ = __webpack_require__("./src/app/contacts/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactService) {
        var _this = this;
        this.contactService = contactService;
        this.getIndexOfContact = function (contactId) {
            return _this.contacts.findIndex(function (contact) {
                return contact._id === contactId;
            });
        };
        this.deleteContact = function (contactId) {
            var idx = _this.getIndexOfContact(contactId);
            if (idx !== -1) {
                _this.contacts.splice(idx, 1);
                _this.selectContact(null);
            }
            return _this.contacts;
        };
        this.addContact = function (contact) {
            _this.contacts.push(contact);
            _this.selectContact(contact);
            return _this.contacts;
        };
        this.updateContact = function (contact) {
            var idx = _this.getIndexOfContact(contact._id);
            if (idx !== -1) {
                _this.contacts[idx] = contact;
                _this.selectContact(contact);
            }
            return _this.contacts;
        };
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService
            .getContacts()
            .then(function (contacts) {
            _this.contacts = contacts.map(function (contact) {
                if (!contact.phone) {
                    contact.phone = {
                        mobile: '',
                        work: ''
                    };
                }
                return contact;
            });
        });
    };
    ContactListComponent.prototype.selectContact = function (contact) {
        this.selectedContact = contact;
    };
    ContactListComponent.prototype.createNewContact = function () {
        var contact = {
            name: '',
            email: '',
            phone: {
                work: '',
                mobile: ''
            }
        };
        // By default, a newly-created contact will have the selected state.
        this.selectContact(contact);
    };
    ContactListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'contact-list',
            template: __webpack_require__("./src/app/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("./src/app/contacts/contact-list/contact-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
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



var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.contactsUrl = '/api/contacts';
    }
    // get("/api/contacts")
    ContactService.prototype.getContacts = function () {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/contacts")
    ContactService.prototype.createContact = function (newContact) {
        return this.http.post(this.contactsUrl, newContact)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/contacts/:id") endpoint not used by Angular app
    // delete("/api/contacts/:id")
    ContactService.prototype.deleteContact = function (delContactId) {
        return this.http.delete(this.contactsUrl + '/' + delContactId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/contacts/:id")
    ContactService.prototype.updateContact = function (putContact) {
        var putUrl = this.contactsUrl + '/' + putContact._id;
        return this.http.put(putUrl, putContact)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/contacts/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_7" /* enableProdMode */])();
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