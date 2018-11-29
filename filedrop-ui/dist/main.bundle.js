webpackJsonp([0,3],{

/***/ 1169:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(544);


/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ScreenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenService = (function () {
    function ScreenService() {
        var _this = this;
        this.resizeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.resize$ = this.resizeSource.asObservable();
        this.largeBreakpoint = 800;
        this.screenWidth = 1000;
        this.screenHeight = 800;
        try {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
            window.addEventListener('resize', function (event) { return _this.onResize(event); });
        }
        catch (e) {
            // we're going with default screen dimensions
        }
    }
    ScreenService.prototype.isLarge = function () {
        return this.screenWidth >= this.largeBreakpoint;
    };
    ScreenService.prototype.onResize = function ($event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.resizeSource.next();
    };
    return ScreenService;
}());
ScreenService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ScreenService);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/screen.service.js.map

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppDataService = (function () {
    // private countries : Array<Country> = [
    //   { id: 1, name:"Switzerland",  epiIndex: 87.67 },
    //   { id: 2, name:"Luxembourg",   epiIndex: 83.29 },
    //   { id: 3, name:"Australia", epiIndex: 82.4 },
    //   { id: 4, name:"Singapore", epiIndex: 81.78 },
    //   { id: 5, name:"Czech Republic", epiIndex: 81.47 },
    //   { id: 6, name:"Germany", epiIndex: 80.47 },
    //   { id: 7, name:"Spain", epiIndex: 79.09 },
    //   { id: 8, name:"Austria", epiIndex: 78.32 },
    //   { id: 9, name:"Sweden", epiIndex: 78.09 },
    //   { id: 10, name:"Norway", epiIndex: 78.04 }
    // ];
    function AppDataService(userService, http) {
        this.userService = userService;
        this.http = http;
    }
    AppDataService.prototype.createCountry = function (vm) {
        //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable to create country'));
        var id = 0;
        this.countries.forEach(function (c) { if (c.id >= id)
            id = c.id + 1; });
        vm.id = id;
        this.countries.push(vm);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(vm);
    };
    AppDataService.prototype.deleteCountry = function (id) {
        var _this = this;
        //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of({}).delay(2000)
            .do(function (e) { return _this.countries.splice(_this.countries.findIndex(function (c) { return c.id == id; }), 1); });
    };
    AppDataService.prototype.getCountries = function () {
        return this.http
            .get('/pics');
    };
    AppDataService.prototype.getCountry = function (id) {
        var country = this.countries.find(function (c) { return c.id == id; });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(country);
    };
    AppDataService.prototype.updateCountry = function (updatedCountry) {
        var country = this.countries.find(function (c) { return c.id == updatedCountry.id; });
        Object.assign(country, updatedCountry);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(country).delay(2000);
        //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw(''));
    };
    return AppDataService;
}());
AppDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object])
], AppDataService);

var _a, _b;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/app-data.service.js.map

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__ = __webpack_require__(181);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CountryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Country } from '../view-models/Country';
var CountryListComponent = (function () {
    function CountryListComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.count = 0;
    }
    CountryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshList();
        // this.dataService.getCountries().subscribe(
        //   countries => {
        //     this.allCountries = countries;
        //     this.count = this.route.snapshot.params['count'];
        //     this.updateList();
        //   }
        // );
        this.route.params.subscribe(function (params) {
            _this.count = params['count'];
            _this.updateList();
        });
    };
    CountryListComponent.prototype.refreshList = function () {
        var _this = this;
        this.dataService.getCountries().subscribe(function (res) {
            // If request fails, throw an Error that will be caught
            if (res.status < 200 || res.status >= 300) {
                throw new Error('This request has failed ' + res.status);
            }
            else {
                _this.countries = res.json();
                _this.allCountries = res.json();
                _this.count = _this.route.snapshot.params['count'];
                _this.updateList();
            }
        });
    };
    CountryListComponent.prototype.updateList = function () {
        var _this = this;
        if (!this.allCountries) {
            this.dataService.getCountries().subscribe(function (res) {
                // If request fails, throw an Error that will be caught
                if (res.status < 200 || res.status >= 300) {
                    throw new Error('This request has failed ' + res.status);
                }
                else {
                    _this.countries = res.json();
                    _this.allCountries = res.json();
                    _this.count = _this.route.snapshot.params['count'];
                    _this.countries = _this.count > 0 ? _this.allCountries.sort(function (a, b) { return b.epiIndex > a.epiIndex; }).slice(0, _this.count) : _this.allCountries;
                    // this.updateList();
                }
            });
        }
        else {
            this.countries = this.count > 0 ? this.allCountries.sort(function (a, b) { return b.epiIndex > a.epiIndex; }).slice(0, this.count) : this.allCountries;
        }
    };
    return CountryListComponent;
}());
CountryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-country-list',
        template: __webpack_require__(863),
        styles: [__webpack_require__(841)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], CountryListComponent);

var _a, _b;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/country-list.component.js.map

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(router) {
        this.router = router;
        this.isAuthenticated = true;
    }
    UserService.prototype.signIn = function (username, password, rememberMe) {
        console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
        this.isAuthenticated = true;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of({}).delay(2000);
        // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalid User Name and/or Password'));
    };
    UserService.prototype.signOut = function () {
        this.isAuthenticated = false;
        this.router.navigate(['/signin']);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of({});
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/user.service.js.map

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FrameworkConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FrameworkConfigService = (function () {
    function FrameworkConfigService() {
        this.showLanguageSelector = true;
        this.showUserControls = true;
        this.showStatusBar = true;
        this.showStatusBarBreakpoint = 0;
        this.socialIcons = new Array();
    }
    FrameworkConfigService.prototype.configure = function (settings) {
        Object.assign(this, settings);
    };
    return FrameworkConfigService;
}());
FrameworkConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FrameworkConfigService);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/framework-config.service.js.map

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserApi; });
var UserApi = (function () {
    function UserApi() {
    }
    return UserApi;
}());

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/user-api.js.map

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthenticatedUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticatedUserComponent = (function () {
    function AuthenticatedUserComponent() {
    }
    AuthenticatedUserComponent.prototype.ngOnInit = function () {
    };
    return AuthenticatedUserComponent;
}());
AuthenticatedUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-authenticated-user',
        template: __webpack_require__(861),
        styles: [__webpack_require__(839)]
    }),
    __metadata("design:paramtypes", [])
], AuthenticatedUserComponent);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/authenticated-user.component.js.map

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__ = __webpack_require__(181);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CountryDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryDetailComponent = (function () {
    function CountryDetailComponent(route, router, dataService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.countryDefinition = [
            {
                key: 'id',
                type: 'number',
                isId: true,
                label: 'Id',
                required: true
            },
            { key: 'name',
                type: 'string',
                isId: false,
                label: 'Country Name',
                required: true
            },
            {
                key: 'epiIndex',
                type: 'number',
                isId: false,
                label: 'EPI Index',
                required: true
            }
        ];
    }
    CountryDetailComponent.prototype.createCountry = function (country) {
        var _this = this;
        country.id = 0;
        this.errorMessage = null;
        this.dataService.createCountry(country).subscribe(function (c) { return _this.router.navigate(['/authenticated/country-maint']); }, function (err) { return _this.errorMessage = 'Error creating country'; });
    };
    CountryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operation = this.route.snapshot.params['operation'];
        if (this.operation === 'create') {
            this.country = { id: 0, name: "", epiIndex: null };
        }
        else
            this.dataService.getCountry(this.route.snapshot.params['id'])
                .subscribe(function (country) { return _this.country = country; });
    };
    CountryDetailComponent.prototype.updateCountry = function (country) {
        var _this = this;
        this.errorMessage = null;
        this.dataService.updateCountry(country).subscribe(function (c) { return _this.router.navigate(['/authenticated/country-maint']); }, function (err) { return _this.errorMessage = 'Error updating country'; });
    };
    return CountryDetailComponent;
}());
CountryDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-country-detail',
        template: __webpack_require__(862),
        styles: [__webpack_require__(840)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__["a" /* AppDataService */]) === "function" && _c || Object])
], CountryDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/country-detail.component.js.map

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__ = __webpack_require__(181);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CountryMaintComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryMaintComponent = (function () {
    function CountryMaintComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.isDeleting = false;
        dataService.getCountries().subscribe(function (data) { return _this.countries = data; });
    }
    CountryMaintComponent.prototype.cancelDelete = function () {
        this.isDeleting = false;
        this.deleteId = null;
    };
    CountryMaintComponent.prototype.createCountry = function () {
        this.router.navigate(['/authenticated/country-detail', 0, 'create']);
    };
    CountryMaintComponent.prototype.deleteCountry = function (id) {
        var _this = this;
        this.isDeleting = true;
        this.dataService.deleteCountry(id).subscribe(function (c) { return _this.cancelDelete(); }, function (err) { _this.deleteError = err; _this.isDeleting = false; });
    };
    CountryMaintComponent.prototype.deleteCountryQuestion = function (id) {
        this.deleteError = null;
        this.deleteId = id;
    };
    CountryMaintComponent.prototype.editCountry = function (id) {
        this.router.navigate(['/authenticated/country-detail', id, 'edit']);
    };
    CountryMaintComponent.prototype.showCountryDetail = function (id) {
        this.router.navigate(['/authenticated/country-detail', id, 'details']);
    };
    return CountryMaintComponent;
}());
CountryMaintComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-country-maint',
        template: __webpack_require__(864),
        styles: [__webpack_require__(842)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CountryMaintComponent);

var _a, _b;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/country-maint.component.js.map

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_list_country_list_component__ = __webpack_require__(260);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(http) {
        this.http = http;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: '/file-upload' });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            console.log("onSuccessItem " + status, response, item);
            _this.child.refreshList();
            if (response) {
            }
        };
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__country_list_country_list_component__["a" /* CountryListComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__country_list_country_list_component__["a" /* CountryListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__country_list_country_list_component__["a" /* CountryListComponent */]) === "function" && _a || Object)
], DashboardComponent.prototype, "child", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(865),
        styles: [__webpack_require__(843)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/dashboard.component.js.map

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('AuthGuard#canActivate called ' + this.userService.isAuthenticated);
        if (!this.userService.isAuthenticated) {
            console.log('not auth');
            this.router.navigate(['/signin']);
        }
        return this.userService.isAuthenticated;
    };
    AuthGuard.prototype.canActivateChild = function () {
        return this.canActivate();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/auth-guard.service.js.map

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(868),
        styles: [__webpack_require__(846)]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/settings.component.js.map

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterUserComponent = (function () {
    function RegisterUserComponent() {
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
    };
    return RegisterUserComponent;
}());
RegisterUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-register-user',
        template: __webpack_require__(880),
        styles: [__webpack_require__(858)]
    }),
    __metadata("design:paramtypes", [])
], RegisterUserComponent);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/register-user.component.js.map

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_api__ = __webpack_require__(263);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = (function () {
    function SignInComponent(userApi, router) {
        this.userApi = userApi;
        this.router = router;
        this.submitting = false;
    }
    SignInComponent.prototype.onSubmit = function (signInForm) {
        var _this = this;
        if (signInForm.valid) {
            console.log('submitting...', signInForm);
            this.submitting = true;
            this.formError = null;
            this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
                .subscribe(function (data) {
                console.log('got valid: ', data);
                _this.router.navigate(['/authenticated']);
            }, function (err) {
                _this.submitting = false;
                console.log('got error: ', err);
                _this.formError = err;
            });
        }
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-sign-in',
        template: __webpack_require__(881),
        styles: [__webpack_require__(859)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_api__["a" /* UserApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_api__["a" /* UserApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignInComponent);

var _a, _b;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/sign-in.component.js.map

/***/ },

/***/ 543:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 543;


/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(662);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/main.js.map

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fw_services_framework_config_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fw_services_menu_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_menu__ = __webpack_require__(661);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(frameworkConfigService, menuService) {
        this.frameworkConfigService = frameworkConfigService;
        this.menuService = menuService;
        var config = {
            socialIcons: [
                { imageFile: 'assets/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
                { imageFile: 'assets/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com' },
                { imageFile: 'assets/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
            ],
            showLanguageSelector: true,
            showUserControls: true,
            showStatusBar: true,
            showStatusBarBreakpoint: 800
        };
        frameworkConfigService.configure(config);
        menuService.items = __WEBPACK_IMPORTED_MODULE_3__app_menu__["a" /* initialMenuItems */];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(860),
        styles: [__webpack_require__(838)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fw_services_framework_config_service__["a" /* FrameworkConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fw_services_framework_config_service__["a" /* FrameworkConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__fw_services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fw_services_menu_service__["a" /* MenuService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/app.component.js.map

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return initialMenuItems; });
var initialMenuItems = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: 'authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Beaches',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
            {
                text: 'Top 3',
                icon: 'glyphicon-flag',
                route: 'authenticated/country-list/3',
                submenu: null
            },
            {
                text: 'Top 5',
                icon: 'glyphicon-flag',
                route: 'authenticated/country-list/5',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-flag',
                route: 'authenticated/country-list/0',
                submenu: null
            }
        ],
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'Beach Maint',
                icon: 'glyphicon-th-list',
                route: 'authenticated/country-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: 'authenticated/settings',
                submenu: null
            }
        ]
    }
];
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/app.menu.js.map

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fw_fw_module__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__country_detail_country_detail_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__country_list_country_list_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__country_maint_country_maint_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authenticated_user_authenticated_user_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fw_users_user_api__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_app_data_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__panels_country_panel_country_panel_component__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__panels_image_panel_image_panel_component__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { FileDropModule } from 'ngx-file-drop';

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__country_detail_country_detail_component__["a" /* CountryDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__country_list_country_list_component__["a" /* CountryListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__country_maint_country_maint_component__["a" /* CountryMaintComponent */],
            __WEBPACK_IMPORTED_MODULE_13__authenticated_user_authenticated_user_component__["a" /* AuthenticatedUserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__panels_country_panel_country_panel_component__["a" /* CountryPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_19__panels_image_panel_image_panel_component__["a" /* ImagePanelComponent */],
            __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__["FileSelectDirective"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__fw_fw_module__["a" /* FwModule */],
            // FileDropModule,
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* appRoutes */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
            { provide: __WEBPACK_IMPORTED_MODULE_15__fw_users_user_api__["a" /* UserApi */], useExisting: __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */] },
            __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_17__services_app_data_service__["a" /* AppDataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/app.module.js.map

/***/ },

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authenticated_user_authenticated_user_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__country_list_country_list_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_detail_country_detail_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__country_maint_country_maint_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fw_users_sign_in_sign_in_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fw_users_register_user_register_user_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__ = __webpack_require__(395);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return appRoutes; });









var appRoutes = [
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_6__fw_users_sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__fw_users_register_user_register_user_component__["a" /* RegisterUserComponent */] },
    { path: 'authenticated', component: __WEBPACK_IMPORTED_MODULE_0__authenticated_user_authenticated_user_component__["a" /* AuthenticatedUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            { path: '', canActivateChild: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuard */]],
                children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */] },
                    { path: 'country-list/:count', component: __WEBPACK_IMPORTED_MODULE_2__country_list_country_list_component__["a" /* CountryListComponent */] },
                    { path: 'country-detail/:id/:operation', component: __WEBPACK_IMPORTED_MODULE_3__country_detail_country_detail_component__["a" /* CountryDetailComponent */] },
                    { path: 'country-maint', component: __WEBPACK_IMPORTED_MODULE_4__country_maint_country_maint_component__["a" /* CountryMaintComponent */] },
                    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */] },
                ] }
        ] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__fw_users_sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__fw_users_sign_in_sign_in_component__["a" /* SignInComponent */] }
];
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/app.routing.js.map

/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CountryPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Country } from '../../view-models/Country';
var CountryPanelComponent = (function () {
    function CountryPanelComponent() {
        this.index = 1;
    }
    CountryPanelComponent.prototype.ngOnInit = function () {
    };
    return CountryPanelComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CountryPanelComponent.prototype, "country", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CountryPanelComponent.prototype, "index", void 0);
CountryPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-country-panel',
        template: __webpack_require__(866),
        styles: [__webpack_require__(844)]
    }),
    __metadata("design:paramtypes", [])
], CountryPanelComponent);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/country-panel.component.js.map

/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ImagePanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagePanelComponent = (function () {
    function ImagePanelComponent() {
    }
    ImagePanelComponent.prototype.ngOnInit = function () {
    };
    return ImagePanelComponent;
}());
ImagePanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-image-panel',
        template: __webpack_require__(867),
        styles: [__webpack_require__(845)]
    }),
    __metadata("design:paramtypes", [])
], ImagePanelComponent);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/image-panel.component.js.map

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/environment.js.map

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_screen_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentComponent = (function () {
    function ContentComponent(menuService, screenService) {
        this.menuService = menuService;
        this.screenService = screenService;
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-content',
        template: __webpack_require__(869),
        styles: [__webpack_require__(847)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_screen_service__["a" /* ScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_screen_service__["a" /* ScreenService */]) === "function" && _b || Object])
], ContentComponent);

var _a, _b;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/content.component.js.map

/***/ },

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_screen_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ScreenBelowLarge; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenBelowLarge = (function () {
    function ScreenBelowLarge(viewContainer, template, screenService) {
        var _this = this;
        this.viewContainer = viewContainer;
        this.template = template;
        this.screenService = screenService;
        this.hasView = false;
        this.screenSubscription = screenService.resize$.subscribe(function () { return _this.onResize(); });
    }
    Object.defineProperty(ScreenBelowLarge.prototype, "screenBelowLarge", {
        set: function (condition) {
            // ignore the passed condition and set it based on screen size
            condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;
            if (condition && !this.hasView) {
                this.hasView = true;
                this.viewContainer.createEmbeddedView(this.template);
            }
            else if (!condition && this.hasView) {
                this.hasView = false;
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    ScreenBelowLarge.prototype.ngOnDestroy = function () {
        this.screenSubscription.unsubscribe();
    };
    ScreenBelowLarge.prototype.onResize = function () {
        // trigger the setter
        this.screenBelowLarge = false;
    };
    return ScreenBelowLarge;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ScreenBelowLarge.prototype, "screenBelowLarge", null);
ScreenBelowLarge = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[screenBelowLarge]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_screen_service__["a" /* ScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_screen_service__["a" /* ScreenService */]) === "function" && _c || Object])
], ScreenBelowLarge);

var _a, _b, _c;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/screen-below-large.directive.js.map

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_screen_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ScreenLarge; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenLarge = (function () {
    function ScreenLarge(viewContainer, template, screenService) {
        var _this = this;
        this.viewContainer = viewContainer;
        this.template = template;
        this.screenService = screenService;
        this.hasView = false;
        this.screenSubscription = screenService.resize$.subscribe(function () { return _this.onResize(); });
    }
    Object.defineProperty(ScreenLarge.prototype, "screenLarge", {
        set: function (condition) {
            // ignore the passed condition and set it based on screen size
            condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;
            if (condition && !this.hasView) {
                this.hasView = true;
                this.viewContainer.createEmbeddedView(this.template);
            }
            else if (!condition && this.hasView) {
                this.hasView = false;
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    ScreenLarge.prototype.ngOnDestroy = function () {
        this.screenSubscription.unsubscribe();
    };
    ScreenLarge.prototype.onResize = function () {
        // trigger the setter
        this.screenLarge = false;
    };
    return ScreenLarge;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ScreenLarge.prototype, "screenLarge", null);
ScreenLarge = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[screenLarge]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_screen_service__["a" /* ScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_screen_service__["a" /* ScreenService */]) === "function" && _c || Object])
], ScreenLarge);

var _a, _b, _c;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/screen-large.directive.js.map

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__field_definition__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__field_definition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__field_definition__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DynamicFieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicFieldComponent = (function () {
    function DynamicFieldComponent() {
    }
    Object.defineProperty(DynamicFieldComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.field.key].valid; },
        enumerable: true,
        configurable: true
    });
    return DynamicFieldComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__field_definition__["FieldDefinition"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__field_definition__["FieldDefinition"]) === "function" && _a || Object)
], DynamicFieldComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]) === "function" && _b || Object)
], DynamicFieldComponent.prototype, "form", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DynamicFieldComponent.prototype, "operation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DynamicFieldComponent.prototype, "submitted", void 0);
DynamicFieldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-dynamic-field',
        template: __webpack_require__(870),
        styles: [__webpack_require__(848)]
    }),
    __metadata("design:paramtypes", [])
], DynamicFieldComponent);

var _a, _b;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/dynamic-field.component.js.map

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DynamicFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicFormComponent = (function () {
    function DynamicFormComponent(router, route, location) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.create = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.submitted = false;
    }
    DynamicFormComponent.prototype.clearForm = function () {
        var _this = this;
        var group = {};
        this.vmCopy = Object.assign({}, this.vm);
        this.vmDefinition.forEach(function (field) {
            group[field.key] = field.required ? new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](_this.vmCopy[field.key], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required)
                : new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](_this.vmCopy[field.key]);
        });
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */](group);
    };
    DynamicFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes['errorMessage'].currentValue && this.status === 'waiting') {
            this.status = "";
        }
    };
    DynamicFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clearForm();
        this.route.params.subscribe(function (params) {
            _this.operation = params['operation'];
            _this.clearForm();
        });
    };
    DynamicFormComponent.prototype.onBack = function () {
        this.errorMessage = null;
        this.location.back();
    };
    DynamicFormComponent.prototype.onCancel = function () {
        this.onBack();
    };
    DynamicFormComponent.prototype.onCreate = function () {
        this.submitted = true;
        if (this.form.valid) {
            this.status = 'waiting';
            this.create.emit(this.form.value);
        }
    };
    DynamicFormComponent.prototype.onEdit = function () {
        this.router.navigate(['../', 'edit'], { relativeTo: this.route });
    };
    DynamicFormComponent.prototype.onSave = function () {
        this.submitted = true;
        if (this.form.valid) {
            this.status = 'waiting';
            this.update.emit(this.form.value);
        }
    };
    return DynamicFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DynamicFormComponent.prototype, "vm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DynamicFormComponent.prototype, "vmDefinition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DynamicFormComponent.prototype, "operation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DynamicFormComponent.prototype, "errorMessage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DynamicFormComponent.prototype, "update", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], DynamicFormComponent.prototype, "create", void 0);
DynamicFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-dynamic-form',
        template: __webpack_require__(871),
        styles: [__webpack_require__(849)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _e || Object])
], DynamicFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/dynamic-form.component.js.map

/***/ },

/***/ 672:
/***/ function(module, exports) {

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/field-definition.js.map

/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FrameworkBodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrameworkBodyComponent = (function () {
    function FrameworkBodyComponent() {
    }
    FrameworkBodyComponent.prototype.ngOnInit = function () {
    };
    return FrameworkBodyComponent;
}());
FrameworkBodyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-framework-body',
        template: __webpack_require__(872),
        styles: [__webpack_require__(850)]
    }),
    __metadata("design:paramtypes", [])
], FrameworkBodyComponent);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/framework-body.component.js.map

/***/ },

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_body_framework_body_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_content_component__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__title_bar_title_bar_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_framework_config_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__top_bar_top_bar_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__status_bar_status_bar_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_screen_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_screen_large_directive__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_screen_below_large_directive__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_menu_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menus_menu_menu_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__menus_menu_item_menu_item_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__menus_popup_menu_popup_menu_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__users_sign_in_sign_in_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__users_register_user_register_user_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dynamic_forms_dynamic_form_dynamic_form_component__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dynamic_forms_dynamic_field_dynamic_field_component__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__panels_panel_panel_component__ = __webpack_require__(678);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FwModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var FwModule = (function () {
    function FwModule() {
    }
    return FwModule;
}());
FwModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__framework_body_framework_body_component__["a" /* FrameworkBodyComponent */],
            __WEBPACK_IMPORTED_MODULE_5__content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_6__title_bar_title_bar_component__["a" /* TitleBarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__top_bar_top_bar_component__["a" /* TopBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__status_bar_status_bar_component__["a" /* StatusBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__directives_screen_large_directive__["a" /* ScreenLarge */],
            __WEBPACK_IMPORTED_MODULE_12__directives_screen_below_large_directive__["a" /* ScreenBelowLarge */],
            __WEBPACK_IMPORTED_MODULE_14__menus_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_15__menus_menu_item_menu_item_component__["a" /* MenuItemComponent */],
            __WEBPACK_IMPORTED_MODULE_16__menus_popup_menu_popup_menu_component__["a" /* PopupMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_17__users_sign_in_sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_18__users_register_user_register_user_component__["a" /* RegisterUserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__dynamic_forms_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
            __WEBPACK_IMPORTED_MODULE_20__dynamic_forms_dynamic_field_dynamic_field_component__["a" /* DynamicFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_21__panels_panel_panel_component__["a" /* PanelComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_framework_config_service__["a" /* FrameworkConfigService */],
            __WEBPACK_IMPORTED_MODULE_10__services_screen_service__["a" /* ScreenService */],
            __WEBPACK_IMPORTED_MODULE_13__services_menu_service__["a" /* MenuService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__framework_body_framework_body_component__["a" /* FrameworkBodyComponent */],
            __WEBPACK_IMPORTED_MODULE_19__dynamic_forms_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
            __WEBPACK_IMPORTED_MODULE_21__panels_panel_panel_component__["a" /* PanelComponent */],
            __WEBPACK_IMPORTED_MODULE_11__directives_screen_large_directive__["a" /* ScreenLarge */],
            __WEBPACK_IMPORTED_MODULE_12__directives_screen_below_large_directive__["a" /* ScreenBelowLarge */]
        ]
    })
], FwModule);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/fw.module.js.map

/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MenuItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuItemComponent = (function () {
    function MenuItemComponent(router, menuService, el, renderer) {
        this.router = router;
        this.menuService = menuService;
        this.el = el;
        this.renderer = renderer;
        this.item = null; // see angular-cli issue #2034
        this.parentIsPopup = true;
        this.isActiveRoute = false;
        this.mouseInItem = false;
        this.mouseInPopup = false;
        this.popupLeft = 0;
        this.popupTop = 34;
    }
    MenuItemComponent.prototype.checkActiveRoute = function (route) {
        this.isActiveRoute = (route == '/' + this.item.route);
    };
    MenuItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkActiveRoute(this.router.url);
        this.router.events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                _this.checkActiveRoute(event.url);
                //console.log(event.url + ' ' + this.item.route + ' ' + this.isActiveRoute);
            }
        });
    };
    MenuItemComponent.prototype.onClick = function (event) {
        event.stopPropagation();
        if (this.item.submenu) {
            if (this.menuService.isVertical) {
                this.mouseInPopup = !this.mouseInPopup;
            }
        }
        else if (this.item.route) {
            // force horizontal menus to close by sending a mouseleave event
            var newEvent = new MouseEvent('mouseleave', { bubbles: true });
            this.renderer.invokeElementMethod(this.el.nativeElement, 'dispatchEvent', [newEvent]);
            this.router.navigate(['/' + this.item.route]);
        }
    };
    MenuItemComponent.prototype.onPopupMouseEnter = function (event) {
        if (!this.menuService.isVertical) {
            this.mouseInPopup = true;
        }
    };
    MenuItemComponent.prototype.onPopupMouseLeave = function (event) {
        if (!this.menuService.isVertical) {
            this.mouseInPopup = false;
        }
    };
    MenuItemComponent.prototype.onMouseLeave = function (event) {
        if (!this.menuService.isVertical) {
            this.mouseInItem = false;
        }
    };
    MenuItemComponent.prototype.onMouseEnter = function () {
        if (!this.menuService.isVertical) {
            if (this.item.submenu) {
                this.mouseInItem = true;
                if (this.parentIsPopup) {
                    this.popupLeft = 160;
                    this.popupTop = 0;
                }
            }
        }
    };
    return MenuItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MenuItemComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.parent-is-popup'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MenuItemComponent.prototype, "parentIsPopup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MenuItemComponent.prototype, "onClick", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MenuItemComponent.prototype, "onMouseLeave", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuItemComponent.prototype, "onMouseEnter", null);
MenuItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-menu-item',
        template: __webpack_require__(873),
        styles: [__webpack_require__(851)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('visibilityChanged', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(250, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object])
], MenuItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/menu-item.component.js.map

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(menuService) {
        this.menuService = menuService;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-menu',
        template: __webpack_require__(874),
        styles: [__webpack_require__(852)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/menu.component.js.map

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PopupMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupMenuComponent = (function () {
    function PopupMenuComponent(menuService) {
        this.menuService = menuService;
    }
    PopupMenuComponent.prototype.ngOnInit = function () {
    };
    return PopupMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PopupMenuComponent.prototype, "menu", void 0);
PopupMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-popup-menu',
        template: __webpack_require__(875),
        styles: [__webpack_require__(853)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], PopupMenuComponent);

var _a;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/popup-menu.component.js.map

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    return PanelComponent;
}());
PanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-panel',
        template: __webpack_require__(876),
        styles: [__webpack_require__(854)]
    }),
    __metadata("design:paramtypes", [])
], PanelComponent);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/panel.component.js.map

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatusBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusBarComponent = (function () {
    function StatusBarComponent() {
    }
    StatusBarComponent.prototype.ngOnInit = function () {
    };
    return StatusBarComponent;
}());
StatusBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-status-bar',
        template: __webpack_require__(877),
        styles: [__webpack_require__(855)]
    }),
    __metadata("design:paramtypes", [])
], StatusBarComponent);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/status-bar.component.js.map

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_screen_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TitleBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TitleBarComponent = (function () {
    function TitleBarComponent(screenService, menuService) {
        this.screenService = screenService;
        this.menuService = menuService;
    }
    TitleBarComponent.prototype.ngOnInit = function () {
    };
    return TitleBarComponent;
}());
TitleBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-title-bar',
        template: __webpack_require__(878),
        styles: [__webpack_require__(856)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_screen_service__["a" /* ScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_screen_service__["a" /* ScreenService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object])
], TitleBarComponent);

var _a, _b;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/title-bar.component.js.map

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_framework_config_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_api__ = __webpack_require__(263);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TopBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopBarComponent = (function () {
    function TopBarComponent(frameworkConfigService, userApi) {
        this.frameworkConfigService = frameworkConfigService;
        this.userApi = userApi;
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent.prototype.signOut = function () {
        this.userApi.signOut();
    };
    return TopBarComponent;
}());
TopBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fw-top-bar',
        template: __webpack_require__(879),
        styles: [__webpack_require__(857)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_framework_config_service__["a" /* FrameworkConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_framework_config_service__["a" /* FrameworkConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__users_user_api__["a" /* UserApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users_user_api__["a" /* UserApi */]) === "function" && _b || Object])
], TopBarComponent);

var _a, _b;
//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/top-bar.component.js.map

/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/polyfills.js.map

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuService = (function () {
    function MenuService() {
        this.isVertical = true;
        this.showingLeftSideMenu = false;
    }
    MenuService.prototype.toggleLeftSideMenu = function () {
        this.isVertical = true;
        this.showingLeftSideMenu = !this.showingLeftSideMenu;
    };
    MenuService.prototype.toggleMenuOrientation = function () {
        this.isVertical = !this.isVertical;
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MenuService);

//# sourceMappingURL=/Users/pvavhad/SF/Book/EinsteinVision/filedrop-ui/src/menu.service.js.map

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    padding: 20px;\r\n}"

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = "\r\n.projected-title {\r\n    background-color: #555;\r\n    color: white;\r\n}"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n}\r\n\r\ntable { \r\n  border-collapse: collapse; \r\n  margin: 10px;\r\n  margin-top: 20px;\r\n}\r\n\r\ntr:nth-of-type(odd) { \r\n  background: #eee; \r\n}\r\n\r\nth { \r\n  background: #333; \r\n  color: white; \r\n  font-weight: bold; \r\n}\r\n\r\ntd, th { \r\n  padding: 6px; \r\n  border: 1px solid #ccc; \r\n  text-align: left; \r\n}\r\n\r\n.btn.btn-sm {\r\n    width: 80px;\r\n}"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = ":host {\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n}\r\n\r\n.group {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.group-small {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n}\r\n\r\n.title-group-small {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.index {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 80px;\r\n    background-color: #555;\r\n    color: white;\r\n    font-size: 32px;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n}\r\n\r\n.index-small {\r\n    width: 50px;\r\n    text-align: center;\r\n    background-color: #555;\r\n    color: white;\r\n    font-size: 32px;\r\n}\r\n\r\n.country-image {\r\n    width: 240px;\r\n    margin: 14px;\r\n}\r\n\r\n.country-image-small {\r\n    width: 100%;\r\n}\r\n\r\n.country-name {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n    font-size: 34px;\r\n    color: #555;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n}\r\n\r\n.country-name-small {\r\n    font-size: 34px;\r\n    color: #555;\r\n    margin-left: 15px;\r\n}\r\n\r\n.epi-index {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-size: 44px;\r\n    width: 180px;\r\n    color: white;\r\n    background-color: green;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n}\r\n\r\n.epi-index-small {\r\n    font-size: 44px;\r\n    color: white;\r\n    background-color: green;\r\n    text-align: center;\r\n}"

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = "\r\n.image-holder {\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n    background-image: url(/assets/Germany.jpg);\r\n    background-position:  center center;\r\n    background-size: cover;\r\n    height: 150px;\r\n}\r\n\r\nspan {\r\n    color: white;\r\n    font-size: 36px;\r\n}\r\n\r\n.title {\r\n    background-color: rgba(50,50,50,0.5);\r\n    text-align: center;\r\n}"

/***/ },

/***/ 846:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 847:
/***/ function(module, exports) {

module.exports = ":host {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    background-color: #f0fff0; \r\n    -ms-flex-positive: 1; \r\n        flex-grow: 1;\r\n}\r\n\r\n.body-style {\r\n    padding: 20px;\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n    overflow: auto;\r\n}\r\n"

/***/ },

/***/ 848:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 849:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 850:
/***/ function(module, exports) {

module.exports = ":host {\r\n    display: -ms-flexbox;\r\n    display: flex; \r\n    -ms-flex-direction: column; \r\n        flex-direction: column; \r\n    position:absolute; \r\n    top: 0; \r\n    bottom: 0; \r\n    left: 0; \r\n    right: 0;\r\n}"

/***/ },

/***/ 851:
/***/ function(module, exports) {

module.exports = ":host {\r\n    display: inline-block;\r\n    position: relative;\r\n    margin-left: 0;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    padding: 0;\r\n    font-size: 15px;\r\n    line-height: 15px;\r\n    color: #666;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n}\r\n\r\n:host:not(.parent-is-popup) {\r\n    margin-left: 16px;\r\n    width: auto;\r\n}\r\n\r\n:host(.vertical-menu) {\r\n    display: block;\r\n    margin-left: 0;\r\n    margin-top: 6px;\r\n    margin-bottom: 6px;\r\n    color: white;\r\n}\r\n\r\n:host(.vertical-menu.in-popup) {\r\n    padding-left: 16px;\r\n}\r\n\r\nspan {\r\n    pointer-events: none;\r\n}\r\n\r\n.glyphicon {\r\n    top: 1px;\r\n    font-size: 14px;\r\n    margin-right: 4px;\r\n    margin-left: 8px;\r\n}\r\n\r\n.glyphicon-menu-left, .glyphicon-menu-right, .glyphicon-menu-down {\r\n    float: right;\r\n}\r\n\r\n\r\n.menu-item {\r\n    padding: 10px 10px 10px 0;\r\n}\r\n\r\n.menu-item.vertical-menu {\r\n    padding: 6px 6px 6px 0;\r\n}\r\n\r\n.menu-item:hover {\r\n    background-color: #dfd;\r\n}\r\n\r\n.menu-item.vertical-menu:hover {\r\n    background-color: green;\r\n}\r\n\r\n.router-link-active {\r\n    background-color: #dfd;\r\n}\r\n\r\n.router-link-active.vertical-menu {\r\n    background-color: green;\r\n}\r\n"

/***/ },

/***/ 852:
/***/ function(module, exports) {

module.exports = ":host {\r\n    display: -ms-flexbox;\r\n    display: flex; \r\n    -ms-flex-align: end; \r\n        align-items: flex-end; \r\n    -ms-flex-pack: end; \r\n        justify-content: flex-end;\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n}\r\n\r\n:host(.vertical-menu) {\r\n    display: inline-block;\r\n    max-width: 200px;\r\n    min-width: 200px;\r\n    padding-left: 4px;\r\n    -ms-flex-positive: 0;\r\n        flex-grow: 0;\r\n    background-color: #555;\r\n    overflow: auto;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n}\r\n\r\nbutton {\r\n    margin-top: 20px;\r\n}\r\nbutton.horizontal {\r\n    margin-left: 20px;\r\n    margin-bottom: 2px;\r\n}"

/***/ },

/***/ 853:
/***/ function(module, exports) {

module.exports = ":host {\r\n    position: absolute;\r\n    display: inline-block;\r\n    width: 162px;\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    box-shadow: 1px 1px 5px #aaa;\r\n}\r\n\r\n:host(.vertical-menu) {\r\n    position: static;\r\n    display: block;\r\n    width: 100%;\r\n    background-color: transparent;\r\n    border: none;\r\n    box-shadow: none;\r\n    padding: 2px 0 0 0;\r\n}\r\n"

/***/ },

/***/ 854:
/***/ function(module, exports) {

module.exports = ":host {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    margin: 10px;\r\n    margin-bottom: 20px;\r\n    background-color: #eee;\r\n    border: 1px solid #ccc;\r\n}"

/***/ },

/***/ 855:
/***/ function(module, exports) {

module.exports = ":host {\r\n    background-color: green; \r\n    min-height: 26px;\r\n}"

/***/ },

/***/ 856:
/***/ function(module, exports) {

module.exports = "\r\n:host {\r\n    display: block;\r\n}\r\n\r\n.title-bar {\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    min-height: 80px;\r\n}\r\n\r\n.menu-area {\r\n    display: -ms-flexbox;\r\n    display: flex; \r\n    -ms-flex-direction: column; \r\n        flex-direction: column; \r\n    -ms-flex-positive: 1; \r\n        flex-grow: 1;\r\n    padding-right: 20px;\r\n}\r\n\r\n.title-bar-small {\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    min-height: 56px;\r\n}\r\n\r\n.small-image-holder {\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n}\r\n\r\n.small-image {\r\n    height: 50px;\r\n}\r\n\r\nspan {\r\n    margin-left: 10px;\r\n    margin-right: 20px;\r\n    font-size: 25px;\r\n    line-height: 50px;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ },

/***/ 857:
/***/ function(module, exports) {

module.exports = ":host {\r\n    height: 30px; \r\n    text-align: right; \r\n    padding-top: 4px;\r\n    color: #888;\r\n}\r\n\r\ndiv {\r\n    display: inline;\r\n    margin-left: 34px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.top-image {\r\n    width: 18px;\r\n    height: 18px;\r\n    margin-left: 8px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.flag-image {\r\n    width: 22px;\r\n    height: 16px;\r\n    vertical-align: middle;\r\n    /*margin-right: -16px;*/\r\n}\r\n\r\nspan.glyphicon {\r\n    margin-left: 4px;\r\n    font-size: 11px;\r\n}\r\n\r\n.sign-out {\r\n    margin-left: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n"

/***/ },

/***/ 858:
/***/ function(module, exports) {

module.exports = ":host {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('./assets/mountains.jpg');  \r\n    background-position:  center center;\r\n    background-size: cover;\r\n}\r\n\r\n.register-form {\r\n    min-width: 300px;\r\n    background-color: white;\r\n    opacity: .93;\r\n    padding: 20px;\r\n}\r\n\r\nh4 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\nbutton.btn-primary {\r\n    float: right;\r\n}\r\n"

/***/ },

/***/ 859:
/***/ function(module, exports) {

module.exports = ":host {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('./assets/mountains.jpg');  \r\n    background-position:  center center;\r\n    background-size: cover;\r\n}\r\n\r\n.sign-in-form {\r\n    min-width: 300px;\r\n    background-color: white;\r\n    opacity: .93;\r\n    padding: 20px;\r\n}\r\n\r\na {\r\n    line-height: 32px;\r\n}\r\nbutton {\r\n    float: right;\r\n}\r\n\r\n.message {\r\n    float: right;\r\n}"

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = "<fw-framework-body>\n</fw-framework-body>\n"

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = "<h3>Beaches</h3>\n\n<fw-dynamic-form\n  [vm]=\"country\"\n  [vmDefinition]=\"countryDefinition\"\n  [operation]=\"operation\"\n  [errorMessage]=\"errorMessage\"\n  (update)=\"updateCountry($event)\"\n  (create)=\"createCountry($event)\"\n>\n</fw-dynamic-form>\n"

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = "\n<fw-panel *ngFor=\"let country of countries; let i=index\">\n  <div class=\"projected-title\">Beaches</div>\n  <app-country-panel [country]=\"country\" [index]=\"i+1\">\n  </app-country-panel>\n</fw-panel>"

/***/ },

/***/ 864:
/***/ function(module, exports) {

module.exports = "<h3>Beach Maintenance</h3>\n<button class=\"btn btn-primary\" (click)=\"createCountry()\">Add New Beach</button>\n<table>\n  <thead>\n  <tr>\n    <th style=\"width: 25px\">Id</th>\n    <th style=\"width: 200px\">Beach</th>\n    <th style=\"width: 70px\">EPI Index</th>\n    <th style=\"min-width: 100px\"></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let row of countries\">\n    <td>{{ row.id }}</td>\n    <td>{{ row.name }}</td>\n    <td>{{ row.epiIndex }}</td>\n    <td *ngIf=\"row.id != deleteId\">\n      <button class=\"btn btn-sm btn-primary\"\n        (click)=\"showCountryDetail(row.id)\">\n          Details\n      </button>\n      <button class=\"btn btn-sm btn-warning\"\n        (click)=\"editCountry(row.id)\">\n          Edit\n      </button>\n      <button class=\"btn btn-sm btn-danger\"\n        (click)=\"deleteCountryQuestion(row.id)\">\n          Delete\n      </button>\n    </td>\n    <td *ngIf=\"row.id === deleteId && !isDeleting\">\n      Delete this country?\n      <button class=\"btn btn-sm\" (click)=\"cancelDelete()\">Cancel</button>\n      <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCountry(row.id)\">Delete</button>\n      <p *ngIf=\"deleteError\">{{ deleteError }}</p>\n    </td>\n    <td *ngIf=\"row.id === deleteId && isDeleting\">\n      Deleting...\n    </td>\n  </tr>\n  </tbody>\n</table>"

/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = "<app-image-panel>\n</app-image-panel>\n\n\n<div class=\"form-group\">\n    <label for=\"single\">single</label>\n    <input type=\"file\" class=\"form-control\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" />                                  \n </div>\n\n <button type=\"button\" class=\"btn btn-success btn-s\"\n   (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n    <span class=\"glyphicon glyphicon-upload\"></span> Upload \n</button><br />\n\n<app-country-list>\n</app-country-list>"

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = "<div *screenLarge class=\"group\">\n  <div class=\"index\">\n    <span>{{ index }}</span>\n  </div>\n  <div>\n    <img class=\"country-image\" [src]=\"'/assets/' + country.name\" [alt]=\"country.name\">\n  </div>\n  <div class=\"country-name\">\n    <span>{{ country.name }}</span>\n  </div>\n  <div class=\"epi-index\">\n    <span>{{ country.epiIndex }}</span>\n  </div>\n</div>\n<div *screenBelowLarge class=\"group-small\">\n  <div class=\"title-group-small\">\n    <div class=\"index-small\">\n      <span>{{ index }}</span>\n    </div>\n    <div class=\"country-name-small\">\n      <span>{{ country.name }}</span>\n    </div>\n  </div>\n  <div>\n    <img class=\"country-image-small\" [src]=\"'/assets/' + country.name\" [alt]=\"country.name\">\n  </div>\n  \n  <div class=\"epi-index-small\">\n    <span>{{ country.epiIndex }}</span>\n  </div>\n</div>"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = "<fw-panel>\n  <div class=\"image-holder\">\n    <div class=\"title\">\n      <span>Welcome to Beach Predications!</span>\n    </div>\n  </div>\n</fw-panel>"

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = "\r\n<fw-menu \r\n    *ngIf=\"menuService.isVertical && screenService.isLarge() || menuService.showingLeftSideMenu && !screenService.isLarge()\"\r\n    class=\"vertical-menu\">\r\n</fw-menu>\r\n\r\n<div class=\"body-style\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = "<div [hidden]=\"operation === 'create' && field.isId\" [formGroup]=\"form\">\n\n  <div [ngSwitch]=\"field.type\">\n\n    <div *ngSwitchCase=\"'string'\" class=\"form-group\">\n      <label [htmlFor]=\"field.key\">{{ field.label }}</label>\n      <input class=\"form-control\" [formControlName]=\"field.key\" [id]=\"field.key\"\n              [readonly]=\"operation == 'details' || field.isId\">\n    </div>\n\n    <div *ngSwitchCase=\"'number'\" class=\"form-group\">\n      <label [htmlFor]=\"field.key\">{{ field.label }}</label>\n      <input class=\"form-control\" [formControlName]=\"field.key\" [id]=\"field.key\" \n              [readonly]=\"operation == 'details' || field.isId\"\n              type=\"number\">\n    </div>\n\n    <div *ngIf=\"form.get(field.key).hasError('required') && (submitted || form.get(field.key).touched)\"\n          class=\"alert alert-danger\">\n      {{ field.label }} is required.\n    </div>\n\n  </div>\n</div>"

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = "<div>\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n\n    <div *ngFor=\"let field of vmDefinition\">\n      <fw-dynamic-field [field]=\"field\" \n                        [form]=\"form\" \n                        [operation]=\"operation\" \n                        [submitted]=\"submitted\">\n      </fw-dynamic-field>\n    </div>\n\n    <div *ngIf=\"errorMessage \" class=\"alert alert-danger\">\n      {{ errorMessage }}\n    </div>\n\n    <div *ngIf=\"status != 'waiting'\">\n      <div *ngIf=\"operation === 'details'\">\n        <button type=\"button\" class=\"btn\" (click)=\"onBack()\" >Back</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onEdit()\" >Edit</button>\n      </div>\n      <div *ngIf=\"operation === 'edit'\">\n        <button type=\"button\" class=\"btn\" (click)=\"onCancel()\" >Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSave()\" >Save</button>\n      </div>\n      <div *ngIf=\"operation === 'create'\">\n        <button type=\"button\" class=\"btn\" (click)=\"onBack()\" >Back</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCreate()\" >Create</button>\n      </div>\n    </div>\n\n    <div *ngIf=\"status === 'waiting'\">\n      Waiting...\n    </div>\n\n  </form>\n</div>"

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = "\n<fw-title-bar></fw-title-bar>\n\n<fw-content></fw-content>\n\n<fw-status-bar></fw-status-bar>"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = "<div class=\"menu-item\"\n     [ngClass]=\"{'vertical-menu': menuService.isVertical, 'router-link-active': isActiveRoute }\"\n     >\n  <span class=\"glyphicon {{ item.icon }}\"></span>\n  <span>{{ item.text.toUpperCase() }}</span>\n\n  <span *ngIf=\"item.submenu && !parentIsPopup && !menuService.isVertical\" \n        class=\"glyphicon glyphicon-menu-down\"></span>\n  <span *ngIf=\"item.submenu && parentIsPopup && !menuService.isVertical\" \n        class=\"glyphicon glyphicon-menu-right\"></span>\n  <span *ngIf=\"item.submenu && menuService.isVertical && !(mouseInPopup || mouseInItem)\" \n        class=\"glyphicon glyphicon-menu-left\"></span> \n  <span *ngIf=\"item.submenu && menuService.isVertical && (mouseInPopup || mouseInItem)\" \n        class=\"glyphicon glyphicon-menu-down\"></span> \n\n</div>\n<fw-popup-menu\n    *ngIf=\"mouseInPopup || mouseInItem\" \n    [menu]='item.submenu'\n    [ngClass]=\"{'vertical-menu': menuService.isVertical}\"\n    (mouseleave)=\"onPopupMouseLeave($event)\" \n    (mouseenter)=\"onPopupMouseEnter($event)\"\n    [style.left.px]=\"popupLeft\"\n    [style.top.px]=\"popupTop\"\n    @visibilityChanged>\n</fw-popup-menu>\n"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li *ngFor=\"let item of menuService.items\">\n      <fw-menu-item [item]=\"item\"\n                    [ngClass]=\"{'vertical-menu': menuService.isVertical }\"\n                    [parentIsPopup]=\"false\">\n      </fw-menu-item>\n    </li>\n  </ul>\n</nav>\n\n<button \n      *ngIf=\"!menuService.showingLeftSideMenu\"\n      class=\"btn btn-sm\"\n      [ngClass]=\"{'horizontal': !menuService.isVertical }\"\n      (click)=\"menuService.toggleMenuOrientation()\">\n  <span *ngIf=\"menuService.isVertical\" class=\"glyphicon glyphicon-menu-up\"></span>\n  <span *ngIf=\"!menuService.isVertical\" class=\"glyphicon glyphicon-menu-left\"></span>\n</button>"

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = "\n<li *ngFor=\"let item of menu\">\n  <fw-menu-item \n      [ngClass]=\"{'vertical-menu': menuService.isVertical }\"\n      [item]=\"item\" \n      class=\"in-popup\" \n      >\n  </fw-menu-item>\n</li>"

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = "\n<ng-content select=\".projected-title\"></ng-content>\n\n<ng-content select=\":not(.projected-title)\"></ng-content>"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = "\n"

/***/ },

/***/ 878:
/***/ function(module, exports) {

module.exports = "\n<div *screenBelowLarge class=\"title-bar-small\">\n    <span class=\"glyphicon glyphicon-menu-hamburger\"\n          (click)=\"menuService.toggleLeftSideMenu()\">\n    </span>\n    <div class=\"small-image-holder\">\n        <img class=\"small-image\" src=\"assets/logo.png\">\n    </div>\n    <span class=\"glyphicon glyphicon-option-vertical\"></span>\n</div>\n\n<div *screenLarge class=\"title-bar user-title-bar\">\n    <img src=\"assets/logo.png\" alt=\"Beach Predications Logo\">\n    <div class=\"menu-area\" >\n        <fw-top-bar>\n        </fw-top-bar>\n        <fw-menu *ngIf=\"!menuService.isVertical\">\n        </fw-menu>\n    </div>\n</div>\n"

/***/ },

/***/ 879:
/***/ function(module, exports) {

module.exports = "\n<a *ngFor=\"let icon of frameworkConfigService.socialIcons\" \n    [href]=\"icon.link\"\n    [title]=\"icon.alt\">\n    <img \n        class=\"top-image\"\n        [src]=\"icon.imageFile\"\n        [alt]=\"icon.alt\">\n</a>\n\n<div *ngIf=\"frameworkConfigService.showUserControls\">\n    <span>Pankaj A</span>\n    <span class=\"sign-out\" (click)=\"signOut()\">SIGN OUT</span>\n</div>"

/***/ },

/***/ 880:
/***/ function(module, exports) {

module.exports = "<div class=\"register-form\">\n  <!-- <img src=\"./assets/logo.png\" width=\"320\" /> -->\n  <h4>Register for New Account</h4>\n  <form>\n    <div class=\"form-group\">\n      <input class=\"form-control\" name=\"username\" placeholder=\"Requested User Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\" name=\"email\" placeholder=\"Email\"/>\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\" name=\"password\" type=\"password\"  placeholder=\"Password\"/>\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\" name=\"password-again\" type=\"password\"  placeholder=\"Password Again\"/>\n    </div>\n    <button class=\"btn btn-default\" routerLink=\"/sign-in\" routerLinkActive=\"active\">Cancel</button>\n    <button class=\"btn btn-primary\">Register</button>\n  </form>\n</div>\n"

/***/ },

/***/ 881:
/***/ function(module, exports) {

module.exports = "<div class=\"sign-in-form\">\n  <!-- <img src=\"./assets/logo.png\" width=\"320\" /> -->\n  <h4>Sign In</h4>\n  <form #signInForm=\"ngForm\" (ngSubmit)=\"onSubmit(signInForm)\" novalidate>\n    <div class=\"form-group\">\n      <input class=\"form-control\" name=\"username\" required placeholder=\"User Name\" ngModel #username=\"ngModel\" />\n      <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">\n        User Name is required.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\" name=\"password\" required type=\"password\"  placeholder=\"Password\" ngModel #password=\"ngModel\"/>\n      <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n        Password is required.\n      </div>\n    </div>\n    <div class=\"checkbox\">\n      <label>\n      <input type=\"checkbox\" name=\"rememberMe\" ngModel /> Remember Me\n      </label>\n    </div>\n    <div *ngIf=\"formError\" class=\"alert alert-danger\">\n      {{ formError }}\n    </div>\n    <div *ngIf=\"!submitting\">\n      <a routerLink=\"/register\">Register</a>\n      <button type=\"submit\" class=\"btn btn-primary\">Sign In</button>\n    </div>\n    <div *ngIf=\"submitting\">\n      <p class=\"message\">Signing In...</p>\n    </div>\n  </form>\n</div>\n"

/***/ }

},[1169]);
//# sourceMappingURL=main.bundle.map