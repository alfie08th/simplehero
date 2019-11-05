(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _customhero_customhero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customhero/customhero.component */ "./src/app/customhero/customhero.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _inflation_inflation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inflation/inflation.component */ "./src/app/inflation/inflation.component.ts");







var routes = [
    { path: 'home', component: _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__["HeroComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'hero', component: _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__["HeroComponent"] },
    { path: 'custom-hero', component: _customhero_customhero_component__WEBPACK_IMPORTED_MODULE_4__["CustomheroComponent"] },
    { path: 'inflation', component: _inflation_inflation_component__WEBPACK_IMPORTED_MODULE_6__["InflationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _customhero_customhero_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customhero/customhero.component */ "./src/app/customhero/customhero.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _inflation_inflation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inflation/inflation.component */ "./src/app/inflation/inflation.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _customhero_customhero_component__WEBPACK_IMPORTED_MODULE_9__["CustomheroComponent"],
                _hero_hero_component__WEBPACK_IMPORTED_MODULE_10__["HeroComponent"],
                _inflation_inflation_component__WEBPACK_IMPORTED_MODULE_11__["InflationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customhero/customhero.component.css":
/*!*****************************************************!*\
  !*** ./src/app/customhero/customhero.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-hero-main{\n  width: 60%;\n  height: 500px;\n  margin: 0 auto;\n  display: block;\n}\n#custom-hero-left{\n  width: 40%;\n  height: 500px;\n  float: left;\n}\n#custom-hero-right{\n  width: 55%;\n  height: 400px;\n  margin-left: 5%;\n  float: left;\n  border-radius: 5px;\n  background: darkcyan;\n}\n.loading-spinner{\n  width: 60%;\n  height:  80px;\n  margin: 0 auto !important;\n  text-align: center;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9taGVyby9jdXN0b21oZXJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21oZXJvL2N1c3RvbWhlcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20taGVyby1tYWlue1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jY3VzdG9tLWhlcm8tbGVmdHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4jY3VzdG9tLWhlcm8tcmlnaHR7XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogZGFya2N5YW47XG59XG4ubG9hZGluZy1zcGlubmVye1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6ICA4MHB4O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/customhero/customhero.component.html":
/*!******************************************************!*\
  !*** ./src/app/customhero/customhero.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-hero-main\">\n  <div id=\"custom-hero-left\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Superman\" [(ngModel)]=\"hero.name\" name=\"name\" value=\"{{heroAmend.name}}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"power\">Power</label>\n        <input type=\"text\" class=\"form-control\" id=\"power\" placeholder=\"Flight\" [(ngModel)]=\"hero.power\" name=\"power\" value=\"{{heroAmend.power}}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"weakness\">Weakness</label>\n        <input type=\"text\" class=\"form-control\" id=\"weakness\" placeholder=\"Kryptonite\" [(ngModel)]=\"hero.weakness\" name=\"weakness\" value=\"{{heroAmend.weakness}}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"info\">More Info</label>\n        <input type=\"text\" class=\"form-control\" id=\"info\" placeholder=\"url\" [(ngModel)]=\"hero.info\" name=\"info\" value=\"{{heroAmend.info}}\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"editHero()\" *ngIf=\"editMode\">Edit</button>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"createHero()\" *ngIf=\"addMode\">Create</button>\n    </form>\n  </div>\n  <div id=\"custom-hero-right\"></div>\n</div>\n<div class=\"loading-spinner\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customhero/customhero.component.ts":
/*!****************************************************!*\
  !*** ./src/app/customhero/customhero.component.ts ***!
  \****************************************************/
/*! exports provided: CustomheroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomheroComponent", function() { return CustomheroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CustomheroComponent = /** @class */ (function () {
    function CustomheroComponent(elem, httpClient, route) {
        this.elem = elem;
        this.httpClient = httpClient;
        this.route = route;
        this.hero = new _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["Heroes"](0, "", "", "", "");
        this.heroAmend = new _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["Heroes"](0, "", "", "", "");
    }
    CustomheroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setInputValue();
        this.addMode = true;
        this.count = 0;
        this.objectId = Number(localStorage.getItem('count'));
        if (this.objectId === null) {
            this.hero.id = this.count;
        }
        else {
            this.httpClient.getAllHeroes().subscribe(function (data) {
                _this.count = data.length;
                localStorage.setItem('count', (_this.count).toString());
            }, function (e) { e; });
        }
        var editOption = localStorage.getItem('editMode');
        if (editOption === 'true') {
            this.editMode = true;
            this.addMode = false;
        }
    };
    CustomheroComponent.prototype.ngAfterViewInit = function () {
        this.setInputValue();
        var heroName = this.elem.nativeElement.querySelector('#name');
        heroName.placeholder = heroName.value;
        var heroPower = this.elem.nativeElement.querySelector('#power');
        heroPower.placeholder = heroPower.value;
        var heroWeakness = this.elem.nativeElement.querySelector('#weakness');
        heroWeakness.placeholder = heroWeakness.value;
        var heroInfo = this.elem.nativeElement.querySelector('#info');
        heroInfo.placeholder = heroInfo.value;
    };
    CustomheroComponent.prototype.editHero = function () {
        this.hero.id = Number(localStorage.getItem('id')) + 1;
        this.httpClient.editHero(this.hero, this.hero.id).subscribe(function (data) { }, function (e) { e; });
        this.displayLoad();
    };
    CustomheroComponent.prototype.createHero = function () {
        this.count++;
        localStorage.setItem('id', (this.count).toString());
        this.hero.id = this.count;
        this.httpClient.createHeroes(this.hero).subscribe(function (data) { }, function (e) { });
        this.displayLoad();
    };
    CustomheroComponent.prototype.setInputValue = function () {
        this.heroAmend.id = Number(localStorage.getItem('id'));
        this.heroAmend.name = localStorage.getItem('name');
        this.heroAmend.power = localStorage.getItem('power');
        this.heroAmend.weakness = localStorage.getItem('weakness');
        this.heroAmend.info = localStorage.getItem('info');
    };
    CustomheroComponent.prototype.displayLoad = function () {
        var _this = this;
        var heroMainDiv = this.elem.nativeElement.getElementsByClassName('custom-hero-main');
        heroMainDiv[0].style.display = 'none';
        var loadingSpinner = this.elem.nativeElement.getElementsByClassName('loading-spinner');
        loadingSpinner[0].style.display = 'block';
        setTimeout(function () {
            _this.route.navigateByUrl('hero').then(function (r) { });
        }, 1000);
    };
    CustomheroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customhero',
            template: __webpack_require__(/*! ./customhero.component.html */ "./src/app/customhero/customhero.component.html"),
            styles: [__webpack_require__(/*! ./customhero.component.css */ "./src/app/customhero/customhero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomheroComponent);
    return CustomheroComponent;
}());



/***/ }),

/***/ "./src/app/hero/hero.component.css":
/*!*****************************************!*\
  !*** ./src/app/hero/hero.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#hero-main{\n    width: 80%;\n    margin: auto;\n}\n.hero-main-heading{\n    background: #343a40;\n    font-weight: bold;\n    color: white;\n}\n.hero-heading-row{\n    /*padding: 15px 10px 10px;*/\n    padding-top: 15px;\n}\n.hero-col, .hero-info-col{\n    padding: 0!important;\n}\n.hero-head{\n    font-size: 90% !important;\n    text-align: center;\n}\n.hero-each-row{\n    position: relative !important;\n    top: 0 !important;\n}\n.hero-info-col{\n    padding: 0!important;\n    margin-right: 5px !important;\n    font-size: 90% !important;\n    text-align: center;\n}\n.hero-info{\n\n}\n.hero-main-overlay{\n    position: absolute !important;\n    display: block !important;\n    top: 0;\n    opacity: 0;\n}\n.hero-main-overlay:hover{\n    opacity: 1;\n    background: rgba(0,0,0,0.5);\n}\n.hero-edit{\n    float: right;\n    right: 0;\n    text-align: center;\n}\n.btn-1, .btn-2{\n    height: 20% !important;\n    font-size: 80% !important;\n}\n.btn-info, .btn-danger, .btn-success{\n    height: 20% !important;\n    /*border: 0.5px solid rgba(255,255,255,0.5) !important;*/\n    padding: 2px 10px !important;\n    /*margin-top: 50%;*/\n}\n.hero-edit-anchor{\n    text-decoration: none;\n    color: white;\n    font-size: 80% !important;\n}\n.add-hero{\n    width: 50px;\n    margin: 0 auto;\n    margin-top: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby9oZXJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBOztBQUVBO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLE1BQU07SUFDTixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDViwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsd0RBQXdEO0lBQ3hELDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlcm8tbWFpbntcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5oZXJvLW1haW4taGVhZGluZ3tcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZXJvLWhlYWRpbmctcm93e1xuICAgIC8qcGFkZGluZzogMTVweCAxMHB4IDEwcHg7Ki9cbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5oZXJvLWNvbCwgLmhlcm8taW5mby1jb2x7XG4gICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG59XG4uaGVyby1oZWFke1xuICAgIGZvbnQtc2l6ZTogOTAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVyby1lYWNoLXJvd3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcbn1cbi5oZXJvLWluZm8tY29se1xuICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA5MCUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVyby1pbmZve1xuXG59XG5cbi5oZXJvLW1haW4tb3ZlcmxheXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAwO1xufVxuLmhlcm8tbWFpbi1vdmVybGF5OmhvdmVye1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xufVxuXG4uaGVyby1lZGl0e1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tMSwgLmJ0bi0ye1xuICAgIGhlaWdodDogMjAlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA4MCUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1pbmZvLCAuYnRuLWRhbmdlciwgLmJ0bi1zdWNjZXNze1xuICAgIGhlaWdodDogMjAlICFpbXBvcnRhbnQ7XG4gICAgLypib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KSAhaW1wb3J0YW50OyovXG4gICAgcGFkZGluZzogMnB4IDEwcHggIWltcG9ydGFudDtcbiAgICAvKm1hcmdpbi10b3A6IDUwJTsqL1xufVxuXG4uaGVyby1lZGl0LWFuY2hvcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogODAlICFpbXBvcnRhbnQ7XG59XG4uYWRkLWhlcm97XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/hero/hero.component.html":
/*!******************************************!*\
  !*** ./src/app/hero/hero.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hero-main\">\n    <div class=\"container hero-main-heading\">\n        <div class=\"row hero-heading-row\">\n            <div class=\"col-1 hero-col\">\n                <h6 class=\"hero-head\">#</h6>\n            </div>\n            <div class=\"col hero-col\">\n                <h6 class=\"hero-head\">Name</h6>\n            </div>\n            <div class=\"col hero-col\">\n                <h6 class=\"hero-head\">Power</h6>\n            </div>\n            <div class=\"col hero-col\">\n                <h6 class=\"hero-head\">weakness</h6>\n            </div>\n            <div class=\"col hero-col\">\n                <h6 class=\"hero-head\">info</h6>\n            </div>\n        </div>\n    </div>\n    <div class=\"container hero-main-body\">\n        <div class=\"hero-each-row\" *ngFor=\"let hero of this.heroes\">\n            <div class=\"row hero-main-row\">\n                <div class=\"col-1 hero-info-col\"><p class=\"hero-info\">{{hero.id}}</p></div>\n                <div class=\"col hero-info-col\"><p class=\"hero-info\">{{hero.name}}</p></div>\n                <div class=\"col hero-info-col\"><p class=\"hero-info\">{{hero.power}}</p></div>\n                <div class=\"col hero-info-col\"><p class=\"hero-info\">{{hero.weakness}}</p></div>\n                <div class=\"col hero-info-col\"><p class=\"hero-info\">{{hero.info}}</p></div>\n            </div>\n\n            <div class=\"row hero-main-overlay\">\n                <div class=\"container\">\n                    <div class=\"row hero-edit\">\n                        <div class=\"col btn-1\">\n                            <button class=\"btn btn-info\"><a class =\"hero-edit-anchor\" (click)=\"editHeroDetail()\">Edit</a></button>\n                        </div>\n                        <div class=\"col btn-2\">\n                            <button class=\"btn btn-danger\"><a class =\"hero-edit-anchor\" (click)=\"deleteHeroes(hero)\">Delete</a></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"add-hero\">\n        <button class=\"btn btn-success\"><a class =\"hero-edit-anchor\" (click)=\"addHeroes()\">Add</a></button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeroComponent = /** @class */ (function () {
    function HeroComponent(httpClient, elem, route) {
        this.httpClient = httpClient;
        this.elem = elem;
        this.route = route;
    }
    HeroComponent.prototype.ngOnInit = function () {
        this.cell = 0;
        this.displayAllHeroes();
    };
    HeroComponent.prototype.displayAllHeroes = function () {
        var _this = this;
        this.httpClient.getAllHeroes().subscribe(function (data) {
            _this.heroes = data;
        }, function (e) { });
    };
    HeroComponent.prototype.editHeroDetail = function () {
        localStorage.setItem('id', ('' + this.row));
        localStorage.setItem('name', this.heroes[this.row].name);
        localStorage.setItem('power', this.heroes[this.row].power);
        localStorage.setItem('weakness', this.heroes[this.row].weakness);
        localStorage.setItem('info', this.heroes[this.row].info);
        localStorage.setItem('editMode', true.toString());
        this.route.navigateByUrl('custom-hero').then(function (r) { });
    };
    HeroComponent.prototype.addHeroes = function () {
        localStorage.setItem('editMode', false.toString());
        this.route.navigateByUrl("custom-hero").then(function (r) { });
    };
    HeroComponent.prototype.deleteHeroes = function (hero) {
        var _this = this;
        var heroLength = this.heroes.length;
        this.httpClient.deleteHero(hero, heroLength).subscribe(function (data) {
            _this.heroes = _this.heroes.filter(function (u) { return u !== hero; });
        }, function (e) { });
        this.route.navigateByUrl('hero').then(function (r) { });
        localStorage.setItem('count', ('' + heroLength));
    };
    HeroComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.showDisplay();
        }, 50);
    };
    HeroComponent.prototype.showDisplay = function () {
        var _this = this;
        var heroMainRow = this.elem.nativeElement.getElementsByClassName('hero-main-row');
        var heroMainOverlay = this.elem.nativeElement.getElementsByClassName('hero-main-overlay');
        var heroEachRow = this.elem.nativeElement.getElementsByClassName('hero-each-row');
        var heroEdit = this.elem.nativeElement.getElementsByClassName('hero-edit');
        var heroHeading = this.elem.nativeElement.getElementsByClassName('hero-head');
        var heroInfo = this.elem.nativeElement.getElementsByClassName('hero-info');
        var screenHeight = window.innerHeight * 0.07 + "px";
        var screenWidth = '';
        var infoMarginTop = (window.innerHeight * 0.07) * 0.15 + 'px';
        var _loop_1 = function (row) {
            heroEachRow[row].style.height = screenHeight;
            heroMainOverlay[row].style.height = screenHeight;
            heroMainRow[row].style.height = screenHeight;
            heroEdit[row].style.marginTop = infoMarginTop;
            heroEdit[row].addEventListener('mousedown', function () {
                _this.row = row;
            });
            var heroMainRowWidth = heroMainRow[row].getBoundingClientRect().width;
            heroMainOverlay[row].style.width = heroMainRowWidth + 'px';
            screenWidth = heroMainRowWidth;
            for (var col = 0; col < heroHeading.length; col++) {
                var headSize = heroHeading[col].getBoundingClientRect().width;
                heroInfo[this_1.cell].style.width = headSize + "px !important";
                heroInfo[this_1.cell].style.marginTop = infoMarginTop;
                heroInfo[this_1.cell].style.paddingTop = infoMarginTop;
                var infoWordCount = heroInfo[this_1.cell].innerHTML.length;
                var headingWordCount = heroHeading[col].innerHTML.length;
                if (infoWordCount > headingWordCount) {
                    var infoColString = heroInfo[this_1.cell].innerHTML.toString();
                    heroInfo[this_1.cell].innerHTML = '' + infoColString.substring(0, headingWordCount) + '...';
                }
                this_1.cell++;
                var limit = heroHeading.length * heroEachRow.length;
                if (this_1.cell === limit)
                    this_1.cell = 0;
            }
        };
        var this_1 = this;
        for (var row = 0; row < heroEachRow.length; row++) {
            _loop_1(row);
        }
    };
    HeroComponent.prototype.onResize = function (event) {
        window.location.reload();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeroComponent.prototype, "onResize", null);
    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/hero/hero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/inflation/inflation.component.css":
/*!***************************************************!*\
  !*** ./src/app/inflation/inflation.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#inflation-main{\n    width: 60%;\n    height: 500px;\n    margin: 0 auto;\n}\n#convert-loop-img{\n    width: 20px !important;\n    height: 20px !important;\n}\n#convert-btn{\n    background: none;\n    border: none;\n}\n.scrollable-menu{\n    height: auto;\n    max-height: 100px;\n    width: auto;\n    max-width: 100px;\n    overflow-x: hidden;\n    background: mediumpurple;\n    list-style-type:none;\n    text-align: left;\n    padding-left: 10px!important;\n}\na{\n    text-decoration: none\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mbGF0aW9uL2luZmxhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvaW5mbGF0aW9uL2luZmxhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2luZmxhdGlvbi1tYWlue1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbiNjb252ZXJ0LWxvb3AtaW1ne1xuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4jY29udmVydC1idG57XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uc2Nyb2xsYWJsZS1tZW51e1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiBtZWRpdW1wdXJwbGU7XG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHghaW1wb3J0YW50O1xufVxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/inflation/inflation.component.html":
/*!****************************************************!*\
  !*** ./src/app/inflation/inflation.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"inflation-main\">\n  <h4>Calculate $Dollar worth</h4>\n  <ul class=\"scrollable-menu\">\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n  </ul>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"yearThen\" for=\"yearThen\">Year</label>\n\n            <input type=\"text\" oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\"  class=\"form-control\" id=\"yearThen\" placeholder=\"$$$$\" name=\"yearThen\" [(ngModel)]=\"yearThen\">\n          </div>\n        </form>\n      </div>\n      <div class=\"col-1\">\n        <button type=\"submit\" id=\"convert-btn\" (click)=\"showResult()\"><img id=\"convert-loop-img\" src=\"assets/img/exchange.svg\"></button>\n      </div>\n      <div class=\"col\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"yearNow\" for=\"yearNow\">Year</label>\n            <input type=\"text\" oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\"  class=\"form-control\" id=\"yearNow\" placeholder=\"$$$$\" name=\"yearNow\" [(ngModel)]=\"yearNow\">\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/inflation/inflation.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inflation/inflation.component.ts ***!
  \**************************************************/
/*! exports provided: InflationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InflationComponent", function() { return InflationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InflationComponent = /** @class */ (function () {
    function InflationComponent(elem) {
        this.elem = elem;
    }
    InflationComponent.prototype.ngOnInit = function () {
        this.count = 0;
    };
    InflationComponent.prototype.convertResult = function () {
        console.log('reprimind');
    };
    InflationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var yearNow = this.elem.nativeElement.getElementsByClassName('yearNow');
        var yearThen = this.elem.nativeElement.getElementsByClassName('yearThen');
        var thisYear = new Date();
        // console.log(yearThen)
        yearNow[0].innerHTML = '' + thisYear.getFullYear();
        var convertLogoImg = this.elem.nativeElement.querySelector('#convert-loop-img');
        var covertLoop = convertLogoImg;
        covertLoop.addEventListener('mousedown', function () {
            _this.convertResult();
            _this.count++;
            console.log(_this.count, 'mouse is down');
            covertLoop.style.transform = "scale(0.5)";
            // covertLoop.style.background = "red";
            covertLoop.style.transition = ".5s";
            setTimeout(function () {
                covertLoop.style.transform = "scale(1)";
                // covertLoop.style.background = "blue";
                covertLoop.style.transition = ".5s";
            }, 300);
        });
        // covertLoop.addEventListener('mouseup', ()=>{
        //   this.convertResult();
        //   console.log(this.count, 'mouse is up')
        //   covertLoop.style.transform = "scale(1)";
        //   // covertLoop.style.background = "blue";
        //   covertLoop.style.transition = ".5s";
        // });
    };
    InflationComponent.prototype.showResult = function () {
        console.log('yearThen', this.yearThen);
        console.log('yearNow', this.yearNow);
    };
    InflationComponent.prototype.convert = function (covertLoop) {
    };
    InflationComponent.prototype.convertBack = function (covertLoop) {
    };
    InflationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inflation',
            template: __webpack_require__(/*! ./inflation.component.html */ "./src/app/inflation/inflation.component.html"),
            styles: [__webpack_require__(/*! ./inflation.component.css */ "./src/app/inflation/inflation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], InflationComponent);
    return InflationComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-div{\n  width: 80%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n}\n\n#login-welcome{\n  padding-top: 50px;\n  width: 250px;\n  margin: 0 auto;\n}\n\n#message-head{\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.login-value, .boot-login{\n  margin-top: 50px;\n}\n\n#password{\n  margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luLWRpdntcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbiNsb2dpbi13ZWxjb21le1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiNtZXNzYWdlLWhlYWR7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi12YWx1ZSwgLmJvb3QtbG9naW57XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4jcGFzc3dvcmR7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login-div\">\n  <h4 id=\"message-head\">{{message}}</h4>\n  <div id=\"login-welcome\">\n    <h1>Welcome To Login</h1>\n    <form id=\"login-form\">\n      <div class=\"form-group boot-login\">\n        <label id=\"uname\" >Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"User Name\" [(ngModel)]=\"username\">\n\n        <label id=\"password\">Password</label>\n        <input type=\"text\" class=\"form-control\"  name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n\n        <input type=\"submit\" (click) = \"checkLogin()\" class ='btn btn-success login-value' value=\"Submit\">\n      </div>\n    </form>\n    <div id=\"data-send-stat\">\n      <label id=\"sending-id\" *ngIf=\"dataSending\">\n        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n        sending data to the server\n      </label>\n\n      <small *ngIf=\"dataSent\">\n        server just received the data, and sends this response 'Yah!'\n      </small>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http-client.service */ "./src/app/services/http-client.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, elem) {
        this.loginService = loginService;
        this.elem = elem;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.checkLogin = function () {
        this.loginService.sendLoginInfo(this.username, this.password).subscribe(function (data) { }, function (e) { console.log('error: ', e); });
        var num = Math.floor(Math.random() * 100);
        this.message = 'Data: [' + num + '] sent to Java';
        this.loginService.responseToJava(num).subscribe(function (data) { console.log('data: ', data); }, function (e) { e; });
        this.dataSending = true;
        this.dataSent = false;
        this.showDataStatus();
    };
    LoginComponent.prototype.showDataStatus = function () {
        var _this = this;
        var t;
        var msgFromJava = '';
        t = setInterval(function () {
            _this.loginService.responseFromJava().subscribe(function (data) {
                if (data != null) {
                    msgFromJava = data;
                    setTimeout(function () {
                        _this.dataSending = false;
                        _this.dataSent = true;
                        _this.message = 'Response: [' + msgFromJava + '] from Java';
                    }, 1500);
                }
            }, function (e) { e; });
        }, 500);
        setTimeout(function () {
            if (msgFromJava != null) {
                clearInterval(t);
            }
        }, 1500);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav-bar-div{\n  width: 60%;\n  margin: 0 auto;\n}\n\n.hero-container-nav {\n  height: 45px;\n  width: 100%;\n  margin: 5% 0% !important;\n  background: rgb(0,51,102)!important;\n}\n\n.hero-head{\n  text-align: center;\n}\n\n#hero-link, #home-link, #login-link{\n  color: white;\n  font-size: 90% !important;\n}\n\n#hero-link:hover, #home-link:hover, #login-link:hover{\n  color: rgba(255,255,255,0.95);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHdCQUF3QjtFQUN4QixtQ0FBbUM7QUFDckM7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdi1iYXItZGl2e1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmhlcm8tY29udGFpbmVyLW5hdiB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNSUgMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiKDAsNTEsMTAyKSFpbXBvcnRhbnQ7XG59XG4uaGVyby1oZWFke1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNoZXJvLWxpbmssICNob21lLWxpbmssICNsb2dpbi1saW5re1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogOTAlICFpbXBvcnRhbnQ7XG59XG4jaGVyby1saW5rOmhvdmVyLCAjaG9tZS1saW5rOmhvdmVyLCAjbG9naW4tbGluazpob3ZlcntcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45NSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"nav-bar-div\">\n  <div class=\"container hero-container-nav\">\n    <div class=\"row hero-row-nav\">\n      <div class=\"col hero-col\">\n        <h6 class=\"hero-head\"><a class=\"nav-item nav-link active\" id=\"home-link\" href=\"\">Home <span class=\"sr-only\">(current)</span></a></h6>\n      </div>\n      <div class=\"col hero-col\">\n      <h6 class=\"hero-head\"><a class=\"nav-item nav-link\" id=\"hero-link\" href=\"hero\">Heroes</a></h6>\n    </div>\n      <div class=\"col hero-col\">\n      <h6 class=\"hero-head\"><a class=\"nav-item nav-link\" id=\"login-link\" href=\"login\">Log In</a></h6>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/http-client.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/http-client.service.ts ***!
  \*************************************************/
/*! exports provided: Heroes, HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heroes", function() { return Heroes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Heroes = /** @class */ (function () {
    function Heroes(id, name, power, weakness, info) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.weakness = weakness;
        this.info = info;
    }
    return Heroes;
}());

var HttpClientService = /** @class */ (function () {
    function HttpClientService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "https://alheroapp.herokuapp.com/";
    }
    HttpClientService.prototype.sendLoginInfo = function (username, password) {
        var cred = [];
        cred[0] = window.btoa(username);
        cred[1] = window.btoa(password);
        return this.httpClient.put(this.baseUrl + 'hero/pass-cred', cred);
    };
    HttpClientService.prototype.responseToJava = function (data) {
        return this.httpClient.post(this.baseUrl + 'send-to-java/', data.toString());
    };
    HttpClientService.prototype.responseFromJava = function () {
        var requestOptions = { responseType: 'text' };
        return this.httpClient.get(this.baseUrl + 'send-to-ang', requestOptions);
    };
    HttpClientService.prototype.createHeroes = function (hero) {
        return this.httpClient.post(this.baseUrl + 'add-hero', hero);
    };
    HttpClientService.prototype.getAllHeroes = function () {
        return this.httpClient.get(this.baseUrl + 'hero');
    };
    HttpClientService.prototype.editHero = function (hero, id) {
        return this.httpClient.put(this.baseUrl + ("edit-hero/" + id), hero);
    };
    HttpClientService.prototype.deleteHero = function (hero, id) {
        return this.httpClient.delete(this.baseUrl + 'delete-hero/' + id, {});
    };
    HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpClientService);
    return HttpClientService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.assets`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alfie/Desktop/JPMorgan/Maven Project/HeroApplication/ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map