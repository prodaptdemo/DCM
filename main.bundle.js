webpackJsonp([1,4],{

/***/ 135:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 135;


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(146);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_admin_admin_service__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(adminService) {
        this.adminService = adminService;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.createCluster = function (value, form) {
        alert("called");
        var response = this.adminService.createCluster(value).subscribe(function (data) {
            return data;
        }, function (error) {
            console.error("Error Creating cluster!");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error);
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__(204),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_admin_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_admin_admin_service__["a" /* AdminService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.login = function () {
        $('#adminComp').show();
        $('#loginScreen').hide();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(205),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_admin_admin_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//List of Routes
var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__["a" /* AdminComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_app_admin_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_header_header_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(headerComp, router) {
        this.headerComp = headerComp;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.showDashBoard = function (event) {
        console.log(event.target.id);
        if (event.target.id == 'azure') {
            this.isSelected = true;
            this.router.navigate(['./admin']);
        }
        else {
            this.isSelected = false;
        }
        this.headerComp.enableNavBars(this.isSelected);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(207),
        styles: [__webpack_require__(202)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_header_header_component__["a" /* HeaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_header_header_component__["a" /* HeaderComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard\" [hidden]=\"!showDashboard\" class=\"container\">\r\n    <div class=\"row\" style=\"margin-right:-2%\">\r\n        <div class=\" col s3 \">\r\n            <div class=\"card-nav row\" style=\"background-color:#a127b0\">\r\n                <div class=\"col s2\"><img src=\"assets/images/group.png\" class=\"icon-style\" alt=\"Group\"></div>\r\n                <div class=\"col s10\"><b><span style=\"font-size:20px\">5</span><br>Resource Group</b></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"  col s3 \">\r\n            <div class=\"card-nav\" style=\"background-color:#e91e85\">\r\n                <div class=\"col s2\"><img src=\"assets/images/storage.png\" class=\"icon-style\" alt=\"Group\"></div>\r\n                <div class=\"col s10\"><span style=\"font-size:20px\">950 GiB&nbsp;/&nbsp;2000GiB</span>\r\n                    <br><b>Data Storage</b></div>\r\n            </div>\r\n        </div>\r\n        <div class=\" col s3 \">\r\n            <div class=\"card-nav\" style=\"background-color:orange\">\r\n                <div class=\"col s2\"><img src=\"assets/images/cluster.png\" class=\"icon-style\" alt=\"Group\"></div>\r\n                <div class=\"col s10\"><b><span style=\"font-size:20px\">2</span><br>Active Clusters</b></div>\r\n            </div>\r\n        </div>\r\n        <div class=\" col s3 \">\r\n            <div class=\"card-nav\" style=\"background-color:lightblue\">\r\n                <div class=\"col s2\"><img src=\"assets/images/earth-globe.png\" class=\"icon-style\" alt=\"Group\"></div>\r\n                <div class=\"col s10\"><b><span style=\"font-size:20px\">2</span><br>Regions</b></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"row\" [hidden]=\"!showMsg\">\r\n            <div class=\"alert-msg-success\" style=\"display:none;margin-top:-2%\" id=\"successBlock\">\r\n                <div class=\"card-alert card #43a047 green darken-1\" style=\"height:35px;margin-left:1%;margin-right:1%;\">\r\n                    <div class=\"card-content white-text\">\r\n                        <p style=\"margin-top:-2%\"><span id=\"clusterMsg\"></span></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"alert-msg-error\" style=\"display:none;margin-top:-2%\" id=\"errorBlock\">\r\n                <div class=\"card-alert card red\" style=\"height:35px;margin-left:1%;margin-right:1%;\">\r\n                    <div class=\"card-content white-text\">\r\n                        <p style=\"margin-top:-2%\"><span id=\"errorMsg\"></span></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col s8\">\r\n            <div class=\"card large card-left\">\r\n                <div class=\"card-content\">\r\n                    <h6>Cluster Details</h6>\r\n                    <div class=\"divider\"></div>\r\n                    <table class=\"bordered responsive-table\">\r\n                        <thead style=\"color:#e91e69;font-size:14px\">\r\n                            <tr>\r\n                                <th>Cluster Name</th>\r\n                                <th>Description</th>\r\n                                <th>AGN</th>\r\n                                <th>Region</th>\r\n                                <th>Storage</th>\r\n                                <th>Total Nodes\r\n                                    <br>[Master/Slave]</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody style=\"font-size:12px\">\r\n                            <tr>\r\n                                <td>1TMC_HA</td>\r\n                                <td>Denver Transport Management Center's High Available Spark Cluster</td>\r\n                                <td>Denver Gov</td>\r\n                                <td>US East</td>\r\n                                <td>500 GiB</td>\r\n                                <td>4 Master/5 Worker</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>2TMC_HA</td>\r\n                                <td>Denver Transport Management Center's High Available Spark Cluster</td>\r\n                                <td>Denver Gov</td>\r\n                                <td>US East</td>\r\n                                <td>500 GiB</td>\r\n                                <td>4 Master/5 Worker</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3TMC_HA</td>\r\n                                <td>Denver Transport Management Center's High Available Spark Cluster</td>\r\n                                <td>Denver Gov</td>\r\n                                <td>US East</td>\r\n                                <td>500 GiB</td>\r\n                                <td>4 Master/5 Worker</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4TMC_HA</td>\r\n                                <td>Denver Transport Management Center's High Available Spark Cluster</td>\r\n                                <td>Denver Gov</td>\r\n                                <td>US East</td>\r\n                                <td>500 GiB</td>\r\n                                <td>4 Master/5 Worker</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col s4\">\r\n            <div class=\"card card-right\" style=\"margin-top:-24px\">\r\n                <div style=\"margin-left:15px\">\r\n                    <h6>Create Cluster</h6>\r\n                    <div class=\"divider\"></div>\r\n                    <p style=\"font-size:14px\">Enterprise Data Management portal lets you create big data clusters and underlying data stores\r\n                        <br>\r\n                        <br>Get Started with creating clusters</p>\r\n                </div>\r\n                <button class=\"btn waves-effect waves-light dashboard-button\" type=\"submit\" id=\"createCluster_btn\" (click)=\"showClusterPage()\" name=\"createCluster\">Create Cluster\r\n                </button>\r\n            </div>\r\n            <div class=\"card card-right\">\r\n                <div style=\"margin-left:15px\">\r\n                    <h6>Scale Existing Cluster</h6>\r\n                    <div class=\"divider\"></div>\r\n                    <p style=\"font-size:14px\">User friendly wizard lets you scale Big-data clusters and underlying Data Stores seamlessly\r\n                        <br>\r\n                        <br>Get Started with cluster and Storage Scaling below.</p>\r\n                </div>\r\n                <button class=\"btn waves-effect waves-light dashboard-button\" type=\"submit\" id=\"scaleCluster_btn\" name=\"scaleCluster\">Scale Cluster\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"createClusterDiv\" [hidden]=\"showDashboard\">\r\n    <div class=\"card hoverable black\" style=\"margin-top:-20px;height:112px;width:100%;\">\r\n        <!--<div class=\"row\">\r\n    <div class=\"col s6\">-->\r\n        <p class=\"white-text\" style=\"font-size:20px;margin:20px;\">Create Cluster\r\n            <br>\r\n        </p>\r\n        <!--</div>\r\n    <div class=\"col s6\"></div>\r\n  </div>-->\r\n\r\n   <!--Wizard progress starts -->\r\n            <!--creation_type options starts -->\r\n            <div class=\"row\" style=\"margin-left: 1%;margin-right: 1%;margin-top: 41px;\">\r\n                <div class=\"col s12\" style=\"margin-top: -71px;\">\r\n\r\n                    <form #dataform=\"ngForm\" (ngSubmit)=\"createCluster(dataform.value,dataform)\" novalidate>\r\n                        <div class=\"card hoverable\" id=\"creation_type\">\r\n                            <div class=\"card-content\" style=\"margin-left: 80px;\">\r\n                                <div class=\"row\">\r\n                                    <h6>Let us create cluster</h6>\r\n                                    <br>\r\n                                    <br>\r\n                                    <label for=\"op2\">Cluseter Name</label>\r\n                                    <input class=\"with-gap\" name=\"group3\" type=\"text\" id=\"op2\" style=\"width:225px;height:35px;margin-left:1%;margin-right:1%;\" />\r\n                                    <br>\r\n                                    <br>\r\n                                    <label for=\"op2\">Description </label>\r\n                                    <input class=\"with-gap\" name=\"group3\" type=\"text\" id=\"op2\" style=\"width:225px;height:35px;margin-left:1%;margin-right:1%;\" />\r\n                                    <br>\r\n                                    <br>\r\n                                    <label for=\"op2\">AGN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\r\n                                        <div class=\"input-field col s12 leftAlign\">\r\n                                            <input type=\"checkBox\"  id=\"Denver\"/>\r\n                                            <label for=\"Denver\">Denver&nbsp;&nbsp;&nbsp;&nbsp;</label>\r\n                                            <input type=\"checkBox\"  id=\"Colorado\"/>\r\n                                            <label for=\"Colorado\">Colorado</label>\r\n                                        </div>\r\n                                    <br>\r\n                                    <br>\r\n                                    <br>\r\n                                    <br>\r\n                                    <label for=\"op2\">Region&nbsp;&nbsp;&nbsp;&nbsp;</label>\r\n                                    <select class=\"browser-default\" id=\"dataSource\" name=\"inputSource\" ngModel (change)=\"showHideInput($event.target.value)\" style=\"width:225px;height:35px;margin-left:1%;margin-right:1%;\">\r\n                                        <option value=\"\" disabled selected>Central US</option>\r\n                                        <option value=\"uploadFile\" data-icon=\"assets/images/uploadFile.png\" class=\"left circle\">West US </option>\r\n                                        <option value=\"Http\" data-icon=\"assets/images/http.png\" class=\"left circle\">North US</option>\r\n                                        <option value=\"ftp\" data-icon=\"assets/images/ftp.png\" class=\"left circle\">Central Asia</option>\r\n                                        <option value=\"ftp\" data-icon=\"assets/images/ftp.png\" class=\"left circle\">North Europe</option>\r\n                                        <option value=\"ftp\" data-icon=\"assets/images/ftp.png\" class=\"left circle\">Central Europe</option>\r\n                                        <option value=\"ftp\" data-icon=\"assets/images/ftp.png\" class=\"left circle\">Central Africa</option>\r\n                                    </select>\r\n                                    <br>\r\n                                    <br>\r\n                                    <label for=\"op2\">Storage</label>\r\n                                    <input class=\"with-gap\" name=\"group3\" type=\"radio\" id=\"op1\" checked (click)=\"selectedCreateType('easyMode')\" />\r\n                                    <label for=\"op2\">1 TB</label>\r\n                                    <input class=\"with-gap\" name=\"group3\" type=\"radio\" id=\"op1\" checked (click)=\"selectedCreateType('easyMode')\" />\r\n                                    <label for=\"op2\">10 TB</label>\r\n                                    <input class=\"with-gap\" name=\"group3\" type=\"radio\" id=\"op1\" checked (click)=\"selectedCreateType('easyMode')\" />\r\n                                    <label for=\"op2\">Maximum</label>\r\n                                    <br>\r\n                                    <br>\r\n                                    <label for=\"op2\">Total Nodes</label>\r\n                                     <select class=\"browser-default\" id=\"dataSource\" name=\"inputSource\" ngModel (change)=\"showHideInput($event.target.value)\" style=\"width:225px;height:35px;margin-left:1%;margin-right:1%;\">\r\n                                        <option value=\"\" disabled selected>4 Worker / 2 Master</option>\r\n                                        <option value=\"uploadFile\" data-icon=\"assets/images/uploadFile.png\" class=\"left circle\">16 Worker / 4 Master</option>\r\n                                        <option value=\"Http\" data-icon=\"assets/images/http.png\" class=\"left circle\">64 Worker / 8 Master</option>\r\n                                        <option value=\"ftp\" data-icon=\"assets/images/ftp.png\" class=\"left circle\">256 Worker / 16 Master</option>\r\n                                    </select>\r\n                                    <div class=\"row\" style=\"margin-top: 61px;\">\r\n                                    <div class=\" col s2 right wizard_next_second\">\r\n                                        <a class=\"waves-effect waves-light btn-large defaultColor\" id='next_btn_3' (click)=\"createCluster('general_info')\" style=\"width: 100%\">Create Cluster</a>\r\n                                    </div>\r\n                                    <div class=\" col s2 right wizard_previous\">\r\n                                        <a class=\"waves-effect waves-light btn-large defaultColor\" id='previous_btn_3' (click)=\"showClusterPage('general_info')\" style=\"width: 100%\">Back</a>\r\n                                    </div>\r\n                                </div>\r\n                                </div>\r\n            <!-- main div ends-->\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<div id=\"loginScreen\">\r\n<div class=\"row\">\r\n  <div class=\"col s8 bodyContent\" style=\"background-image: url(assets/images/DataCloud.jpg); min-height:100vh;\">\r\n\r\n    <div style=\"padding:30% 0px 0px 10%\">\r\n      <b style=\"color:white;font-size:52px\">Data Cloud Management <br> Portal</b>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col s4\">\r\n    <div style=\"padding-top:40%\">\r\n  <img src=\"assets/images/Prodapt.png\" alt=\"West\" style=\"width:300px;height:50px;margin-left:10%;\">\r\n  <div class=\"row\">\r\n    <span style=\"color:darkblue;margin-left:10%;font-weight:bolder\">Enter registered DCM user account credentials</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col s12 input-field\">\r\n    <input id=\"loginEmail\" type=\"text\">\r\n    <label for=\"loginEmail\" class=\"font-attributes\"><i class=\"material-icons left\">email</i>Email</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col s12 input-field\">\r\n    <input id=\"loginPassword\" type=\"text\">\r\n    <label for=\"loginPassword\" class=\"font-attributes\"><i class=\"material-icons left\">lock_outline</i>Password</label>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <button class=\"btn waves-effect waves-light defaultColor\" style=\"border-radius:36px;text-transform:initial;margin-left:60%;margin-top:10%;\" type=\"submit\" id=\"login_btn\" (click)=\"login()\" name=\"login\">Login\r\n  </button>\r\n</div>\r\n</div>\r\n</div>\r\n<div id=\"adminComp\" style=\"display:none;\">\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<nav class=\"cyan  lighten-1\">\r\n   <div class=\"nav-wrapper\">\r\n      <a href=\"#\" class=\"brand-logo\" style=\"margin-left: 12px;font-size: 27px;\">  Data Cloud Management</a>\r\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\" style=\"font-size: 13px !important;\">\r\n         <li><a routerLink=\"/home\" routerLinkActive=\"active\"><i class=\"material-icons left\">store</i>Home</a></li>\r\n         <li id=\"clusterEnable1\" style=\"display:none\"><a routerLink=\"/admin\" routerLinkActive=\"active\"><i class=\"material-icons left\">perm_identity</i>Administration</a></li>\r\n         <li id=\"clusterEnable2\" style=\"display:none\"><a routerLink=\"/ingestion\" routerLinkActive=\"active\"><i class=\"material-icons left\">perm_identity</i>Data Management</a></li>\r\n         <li id=\"clusterEnable3\" style=\"display:none\"><a routerLink=\"/visualizations\" routerLinkActive=\"active\"><i class=\"material-icons left\">visibility</i>Visualizations</a></li>\r\n         <li><a href=\"collapsible.html\"><i style=\"font-size: 20px;\" class=\"fa fa-2x fa-bell\" aria-hidden=\"true\"></i></a></li>\r\n         <!-- <li><a href=\"collapsible.html\"><i class=\"material-icons left\">perm_identity</i>User</a></li> -->\r\n         <li><a class=\"dropdown-button\" href=\"#!\" data-activates=\"dropdown1\"><i class=\"material-icons left\">perm_identity</i>User<i class=\"material-icons right\">arrow_drop_down</i></a></li>\r\n      </ul>\r\n   </div>\r\n</nav>\r\n<!-- Dropdown Structure -->\r\n<ul id=\"dropdown1\" class=\"dropdown-content\">\r\n   <li><a href=\"#!\">one</a></li>\r\n   <li><a href=\"#!\">two</a></li>\r\n</ul>"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<div id=\"platformSelection\">\n   <div class=\"\" style=\"margin-top:-20px;height:112px;width:100%;\">\n      <p class=\"white-text\" style=\"font-size:20px;margin:20px;\">Select Platform\n      </p>\n   </div>\n   <div class=\"container\" style=\"margin-top: -80px;\">\n      <div class=\"card\" style=\"min-height: 100px;\">\n         <div class=\"row\" style=\"margin-left: 1%;margin-right: 1%;margin-top: 41px;\">\n            <div class=\"col s12\" >\n               <!--<div class=\"card \" id=\"creation_type\">-->\n               <div class=\"card-content\" style=\"margin-left: 80px;\">\n                  <span style=\"margin-left: -59px;font-size: 18px;\">Select a Cloud Platform</span>\n                  <h5 class='divider' style=\"margin-left: -8%;margin-right: 1%\"></h5>\n                  <div class=\"row\">\n                     <div class=\"col s4\"><img id=\"azure\" class=\"cursor\" src=\"assets/images/azure.png\" (click)=\"showDashBoard($event)\"></div>\n                     <div class=\"col s4\"><img id=\"amazonPlatfrom\" class=\"cursor\" src=\"assets/images/amazonPlatfrom.png\" (click)=\"showDashBoard($event)\"  style=\"margin-top: 12px;width: 206px;height: 101px;\"></div>\n                     <div class=\"col s4\"><img id=\"googleCloud\" class=\"cursor\" src=\"assets/images/googleCloud.png\" (click)=\"showDashBoard($event)\"  style=\"margin-top: 28px;width: 240px;\"></div>\n                  </div>\n                  <div class=\"row\">\n                     <div class=\"col s4\"><img id=\"IBM\" class=\"cursor\" src=\"assets/images/IBM.png\" (click)=\"showDashBoard($event)\" style=\"margin-top: 7px;width: 210px;margin-left: -9px;\" ></div>\n                     <div class=\"col s4\"><img  id=\"oracle\" class=\"cursor\" src=\"assets/images/oracle.png\" (click)=\"showDashBoard($event)\" style=\"width: 202px;height: 97px;margin-top: 12px;\"></div>\n                     <div class=\"col s4\"><img id=\"rackSpace\" class=\"cursor\" src=\"assets/images/rackSpace.png\" (click)=\"showDashBoard($event)\"  style=\"margin-top: 15px;width: 240px;\"></div>\n                  </div>\n               </div>\n               <!--</div>-->\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
        this.baseUrl = 'https://prod-16.eastus2.logic.azure.com:443/workflows/96ec406a397640909448dca576d52afa/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=piQE62maEehNP8hjPmLAEUfGCkGX1GX0zx_gvTupybs';
    }
    AdminService.prototype.createCluster = function (clusterVal) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify(clusterVal);
        console.log(body);
        return this.http.post(this.baseUrl, body, { headers: headers }).map(function (res) { return res.json(); });
    };
    AdminService.prototype.getDropDownValues = function () {
        var data = {};
        var body = JSON.stringify(data);
        var url = "https://prod-04.eastus2.logic.azure.com:443/workflows/d1279f6aa6c649a58f85d66b8216911b/triggers/request/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=8YNQVEDVE-1yA1_8DxZyCM9rZ_XZwWK0DHzfdDRbcu8";
        return this.http.post(url, { body: body }).map(function (res) { return res.json(); });
    };
    return AdminService;
}());
AdminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.enableNavBars = function (value) {
        if (value) {
            $("#clusterEnable1,#clusterEnable2,#clusterEnable3").show();
        }
        else {
            $("#clusterEnable1,#clusterEnable2,#clusterEnable3").hide();
        }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(206),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ })

},[473]);
//# sourceMappingURL=main.bundle.js.map