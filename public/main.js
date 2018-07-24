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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_temples_temples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/temples/temples.component */ "./src/app/components/temples/temples.component.ts");
/* harmony import */ var _components_one_temple_one_temple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/one-temple/one-temple.component */ "./src/app/components/one-temple/one-temple.component.ts");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_booking_check_booking_check_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/booking-check/booking-check.component */ "./src/app/components/booking-check/booking-check.component.ts");
/* harmony import */ var _components_finished_finished_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/finished/finished.component */ "./src/app/components/finished/finished.component.ts");
/* harmony import */ var _components_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/booking-history/booking-history.component */ "./src/app/components/booking-history/booking-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// set up the routing module
var routes = [
    { path: "", component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: "temples", component: _components_temples_temples_component__WEBPACK_IMPORTED_MODULE_4__["TemplesComponent"] },
    { path: "templeId", component: _components_one_temple_one_temple_component__WEBPACK_IMPORTED_MODULE_5__["OneTempleComponent"] },
    { path: "authentication", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: "register", component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
    { path: "reservation/:userID", component: _components_booking_check_booking_check_component__WEBPACK_IMPORTED_MODULE_9__["BookingCheckComponent"] },
    { path: "confirmation", component: _components_finished_finished_component__WEBPACK_IMPORTED_MODULE_10__["FinishedComponent"] },
    { path: "history", component: _components_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_11__["BookingHistoryComponent"] },
    { path: "**", component: _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n<footer>\n  <h2>Made with zen at Ironhack</h2>\n</footer>\n\n\n<link href=\"https://fonts.googleapis.com/css?family=Dosis\" rel=\"stylesheet\">"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/splash/splash.component */ "./src/app/components/splash/splash.component.ts");
/* harmony import */ var _components_concept_concept_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/concept/concept.component */ "./src/app/components/concept/concept.component.ts");
/* harmony import */ var _components_suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/suggestion/suggestion.component */ "./src/app/components/suggestion/suggestion.component.ts");
/* harmony import */ var _components_see_all_div_see_all_div_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/see-all-div/see-all-div.component */ "./src/app/components/see-all-div/see-all-div.component.ts");
/* harmony import */ var _components_yuzu_intro_yuzu_intro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/yuzu-intro/yuzu-intro.component */ "./src/app/components/yuzu-intro/yuzu-intro.component.ts");
/* harmony import */ var _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact-info/contact-info.component */ "./src/app/components/contact-info/contact-info.component.ts");
/* harmony import */ var _components_temples_temples_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/temples/temples.component */ "./src/app/components/temples/temples.component.ts");
/* harmony import */ var _components_one_temple_one_temple_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/one-temple/one-temple.component */ "./src/app/components/one-temple/one-temple.component.ts");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_temple_splash_temple_splash_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/temple-splash/temple-splash.component */ "./src/app/components/temple-splash/temple-splash.component.ts");
/* harmony import */ var _components_temple_info_temple_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/temple-info/temple-info.component */ "./src/app/components/temple-info/temple-info.component.ts");
/* harmony import */ var _components_temple_reserve_temple_reserve_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/temple-reserve/temple-reserve.component */ "./src/app/components/temple-reserve/temple-reserve.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_booking_check_booking_check_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/booking-check/booking-check.component */ "./src/app/components/booking-check/booking-check.component.ts");
/* harmony import */ var _components_finished_finished_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/finished/finished.component */ "./src/app/components/finished/finished.component.ts");
/* harmony import */ var _components_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/booking-history/booking-history.component */ "./src/app/components/booking-history/booking-history.component.ts");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _components_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/booking-details/booking-details.component */ "./src/app/components/booking-details/booking-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components

// Routing setup





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
                _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_7__["SplashComponent"],
                _components_concept_concept_component__WEBPACK_IMPORTED_MODULE_8__["ConceptComponent"],
                _components_suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_9__["SuggestionComponent"],
                _components_see_all_div_see_all_div_component__WEBPACK_IMPORTED_MODULE_10__["SeeAllDivComponent"],
                _components_yuzu_intro_yuzu_intro_component__WEBPACK_IMPORTED_MODULE_11__["YuzuIntroComponent"],
                _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_12__["ContactInfoComponent"],
                _components_temples_temples_component__WEBPACK_IMPORTED_MODULE_13__["TemplesComponent"],
                _components_one_temple_one_temple_component__WEBPACK_IMPORTED_MODULE_14__["OneTempleComponent"],
                _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundPageComponent"],
                _components_temple_splash_temple_splash_component__WEBPACK_IMPORTED_MODULE_16__["TempleSplashComponent"],
                _components_temple_info_temple_info_component__WEBPACK_IMPORTED_MODULE_17__["TempleInfoComponent"],
                _components_temple_reserve_temple_reserve_component__WEBPACK_IMPORTED_MODULE_18__["TempleReserveComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"],
                _components_booking_check_booking_check_component__WEBPACK_IMPORTED_MODULE_21__["BookingCheckComponent"],
                _components_finished_finished_component__WEBPACK_IMPORTED_MODULE_22__["FinishedComponent"],
                _components_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_23__["BookingHistoryComponent"],
                _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_24__["UserInfoComponent"],
                _components_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_25__["BookingDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService, User, LoginSubmission, SignupSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSubmission", function() { return LoginSubmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupSubmission", function() { return SignupSubmission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var backendUrl = "http://localhost:3000";
var AuthService = /** @class */ (function () {
    function AuthService(myHttpServ) {
        this.myHttpServ = myHttpServ;
    }
    // GET checkLogin
    AuthService.prototype.check = function () {
        var _this = this;
        return this.myHttpServ
            .get(backendUrl + "/api/checklogin", { withCredentials: true } // send cookies across domains
        )
            .toPromise()
            .then(function (response) {
            // update "currentUser" to match what the backend reports
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    // POST LogIn connect backend to frontend
    AuthService.prototype.postLogin = function (loginInfo) {
        var _this = this;
        return this.myHttpServ
            .post(backendUrl + "/api/authentication", loginInfo, { withCredentials: true } // send cookies across domains
        )
            .toPromise()
            .then(function (response) {
            // update "currentUser" if we log in successfully
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    // POST Signup connect backend to frontend
    AuthService.prototype.postSignup = function (signupInfo) {
        var _this = this;
        return this.myHttpServ
            .post(backendUrl + "/api/register", signupInfo, { withCredentials: true } // send cookies across domains
        )
            .toPromise()
            .then(function (response) {
            // update "currentUser" if we sign up successfully
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    // DELETE Logout
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.myHttpServ
            .delete(backendUrl + "/api/logout", { withCredentials: true } // send cookies across domains
        )
            .toPromise()
            .then(function (response) {
            // update "currentUser" if we log out successfully
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var LoginSubmission = /** @class */ (function () {
    function LoginSubmission() {
    }
    return LoginSubmission;
}());

var SignupSubmission = /** @class */ (function () {
    function SignupSubmission() {
    }
    return SignupSubmission;
}());



/***/ }),

/***/ "./src/app/components/booking-check/booking-check.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/booking-check/booking-check.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/booking-check/booking-check.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/booking-check/booking-check.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  booking-check works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/booking-check/booking-check.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/booking-check/booking-check.component.ts ***!
  \*********************************************************************/
/*! exports provided: BookingCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCheckComponent", function() { return BookingCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingCheckComponent = /** @class */ (function () {
    function BookingCheckComponent() {
    }
    BookingCheckComponent.prototype.ngOnInit = function () {
    };
    BookingCheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-check',
            template: __webpack_require__(/*! ./booking-check.component.html */ "./src/app/components/booking-check/booking-check.component.html"),
            styles: [__webpack_require__(/*! ./booking-check.component.css */ "./src/app/components/booking-check/booking-check.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingCheckComponent);
    return BookingCheckComponent;
}());



/***/ }),

/***/ "./src/app/components/booking-details/booking-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/booking-details/booking-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/booking-details/booking-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/booking-details/booking-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  booking-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/booking-details/booking-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/booking-details/booking-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: BookingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailsComponent", function() { return BookingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingDetailsComponent = /** @class */ (function () {
    function BookingDetailsComponent() {
    }
    BookingDetailsComponent.prototype.ngOnInit = function () {
    };
    BookingDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'section-booking-details ',
            template: __webpack_require__(/*! ./booking-details.component.html */ "./src/app/components/booking-details/booking-details.component.html"),
            styles: [__webpack_require__(/*! ./booking-details.component.css */ "./src/app/components/booking-details/booking-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingDetailsComponent);
    return BookingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/booking-history/booking-history.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/booking-history/booking-history.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/booking-history/booking-history.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/booking-history/booking-history.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>This is the User Booking History Summary</h2>\n\n\n<!-- Include children components -->\n<section-booking-details></section-booking-details>\n\n<section-user-info></section-user-info>\n"

/***/ }),

/***/ "./src/app/components/booking-history/booking-history.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/booking-history/booking-history.component.ts ***!
  \*************************************************************************/
/*! exports provided: BookingHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryComponent", function() { return BookingHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-details/booking-details.component */ "./src/app/components/booking-details/booking-details.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookingHistoryComponent = /** @class */ (function () {
    function BookingHistoryComponent() {
    }
    BookingHistoryComponent_1 = BookingHistoryComponent;
    BookingHistoryComponent.prototype.ngOnInit = function () {
    };
    BookingHistoryComponent = BookingHistoryComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-history',
            template: __webpack_require__(/*! ./booking-history.component.html */ "./src/app/components/booking-history/booking-history.component.html"),
            styles: [__webpack_require__(/*! ./booking-history.component.css */ "./src/app/components/booking-history/booking-history.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                BookingHistoryComponent_1,
                // children components
                _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_1__["UserInfoComponent"],
                _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_2__["BookingDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [BookingHistoryComponent_1]
        }),
        __metadata("design:paramtypes", [])
    ], BookingHistoryComponent);
    return BookingHistoryComponent;
    var BookingHistoryComponent_1;
}());



/***/ }),

/***/ "./src/app/components/concept/concept.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/concept/concept.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill {\r\n    min-height: 100%;\r\n    height:100%;\r\n    /* border:1px orange solid; */\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.title {\r\n    /* background-color:lightblue; */\r\n    flex-grow:1;\r\n}\r\n\r\n.content {\r\n    /* background-color: lightgoldenrodyellow; */\r\n    flex-grow: 4;\r\n    display: flex;\r\n}\r\n\r\n#carouselSlidesOnly {\r\n    /* border: 1px grey dashed; */\r\n    flex-grow: 1;\r\n}\r\n\r\n.carousel-item {\r\n    /* border: 1px pink dashed; */\r\n    max-width: 95vh;\r\n    margin: auto;\r\n    margin-top: 25vh;\r\n}\r\n\r\nimg {\r\n    border-radius: 8px;\r\n}\r\n\r\n#caption {\r\n    background: #161925;\r\n    color: #f3efe0\r\n}\r\n\r\nh1  {\r\n    position: absolute;\r\n    z-index: 2;\r\n    padding: 5vh 15vh;\r\n    margin:  5vh 15vh;\r\n    font-size: 9vh;\r\n    font-family: 'Dosis';\r\n    font-weight: 900;\r\n    text-shadow: 2px 2px #e3e7af\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/concept/concept.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/concept/concept.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid fill\" id=\"outer-wrapper\">\n  <div class=\"container-fluid title\" id=\"title-wrapper\">\n    <h1 class=\"d-sm-flex\">WHAT IS TEMPLE STAY ? </h1>\n  </div>\n\n  <div class=\"container-fluid content\" id=\"content-wrapper\">\n    <!-- Carousel -->\n\n    <div class=\"carousel slide\" data-ride=\"carousel\" id=\"carouselSlidesOnly\">\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">    <!--current image-->\n              <img class=\"d-block w-100\" src=\"https://res.cloudinary.com/dzblxtdk3/image/upload/v1532192888/Shukubo_Koya-san_Eko-in2.jpg\" alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\" id=\"caption\">  <!--Caption-->\n                <h5>This is the first picture</h5>\n                <p>Awesomne placeholder</p>\n              </div>\n            </div>\n\n            <div class=\"carousel-item\"> <!--second image-->\n              <img class=\"d-block w-100\" src=\"https://res.cloudinary.com/dzblxtdk3/image/upload/v1532192884/koyasan1.jpg\" alt=\"Second slide\">\n              <div class=\"carousel-caption d-none d-md-block\" id=\"caption\">\n                <h5>This is second item</h5>\n                <p>great place holder</p>\n              </div>\n            </div>\n\n\n            <div class=\"carousel-item\"> <!--second image-->\n              <img class=\"d-block w-100\" src=\"https://res.cloudinary.com/dzblxtdk3/image/upload/v1532192887/Shukubo_Koya-san_Eko-in1.jpg\" alt=\"Third slide\">\n              <div class=\"carousel-caption d-none d-md-block\" id=\"caption\">\n                <h5>This is third item</h5>\n                <p>The last place holder</p>\n              </div>\n            </div>\n        </div>\n    </div> <!-- Carousel -->\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/concept/concept.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/concept/concept.component.ts ***!
  \*********************************************************/
/*! exports provided: ConceptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptComponent", function() { return ConceptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConceptComponent = /** @class */ (function () {
    function ConceptComponent() {
    }
    ConceptComponent.prototype.ngOnInit = function () {
    };
    ConceptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'concept-div',
            template: __webpack_require__(/*! ./concept.component.html */ "./src/app/components/concept/concept.component.html"),
            styles: [__webpack_require__(/*! ./concept.component.css */ "./src/app/components/concept/concept.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConceptComponent);
    return ConceptComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-info/contact-info.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/contact-info/contact-info.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact-info/contact-info.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/contact-info/contact-info.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/contact-info/contact-info.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-info/contact-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoComponent", function() { return ContactInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactInfoComponent = /** @class */ (function () {
    function ContactInfoComponent() {
    }
    ContactInfoComponent.prototype.ngOnInit = function () {
    };
    ContactInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-info',
            template: __webpack_require__(/*! ./contact-info.component.html */ "./src/app/components/contact-info/contact-info.component.html"),
            styles: [__webpack_require__(/*! ./contact-info.component.css */ "./src/app/components/contact-info/contact-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactInfoComponent);
    return ContactInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/finished/finished.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/finished/finished.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/finished/finished.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/finished/finished.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  finished works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/finished/finished.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/finished/finished.component.ts ***!
  \***********************************************************/
/*! exports provided: FinishedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishedComponent", function() { return FinishedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinishedComponent = /** @class */ (function () {
    function FinishedComponent() {
    }
    FinishedComponent.prototype.ngOnInit = function () {
    };
    FinishedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finished',
            template: __webpack_require__(/*! ./finished.component.html */ "./src/app/components/finished/finished.component.html"),
            styles: [__webpack_require__(/*! ./finished.component.css */ "./src/app/components/finished/finished.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FinishedComponent);
    return FinishedComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lotus {\r\n    width:8em;\r\n    position: fixed;\r\n    left: 5vh;\r\n    top: 5vh;\r\n}"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Yuzu</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/temples\">All Temples</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Concept</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Contact</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/authentication\">My profile</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n\n\n\n<!-- ALL CHILDREN COMPONENTS -->\n<splash-div></splash-div>\n\n<concept-div></concept-div>\n\n<suggestion-div></suggestion-div>\n\n<see-all-div></see-all-div>\n\n<yuzu-intro></yuzu-intro>\n\n<contact-info></contact-info>\n\n<link href=\"https://fonts.googleapis.com/css?family=Dosis\" rel=\"stylesheet\">\n<!-- FONT -->\n\n\n\n<div id=\"lotus\">\n    <svg id=\"svg\" style=\"height:8%; width: 80%;\" viewBox=\"0 0 468 468\">\n        <g>\n          <animateTransform attributeName=\"transform\" type=\"rotate\" from=\"0 234 234\" to=\"360 234 234\" begin=\"0s\" dur=\"40s\" repeatCount=\"indefinite\"/>\n          <animate attributeName=\"fill\" attributeType=\"CSS\" dur=\"20s\" values=\"royalblue;deepskyblue;loivedrab;gold;orange;orangered;crimson;purple;royalblue;\" repeatCount=\"indefinite\"/>\n\n        <path d=\"M233.7 2.7c-0.5 0.8-1.3 2.5-2.2 4.5 -5.3 12.5-9.6 17.7-25.6 29.9 -16.1 12.4-19.8 15.5-22.9 19.4 -3.4 4.2-6.5 11.1-7.6 16.2 -0.4 2.2-1 3.9-1.2 3.9 -0.2 0-2.2-1.8-4.5-4.1 -2.3-2.3-4.3-4.1-4.5-4.1 -0.2 0-0.6 3-0.8 6.7 -0.2 3.7-0.5 6.9-0.8 7.1 -0.2 0.2-0.9 0.1-1.5-0.4 -11.3-8-18.4-9-44.4-6.2 -23.8 2.6-28.9 2.2-41.8-2.9 -3.4-1.4-6.4-2.4-6.5-2.3 -0.1 0.1 0.7 2.8 1.9 5.9 1.2 3.1 2.6 7.6 3.2 9.9 1.4 5.4 1.4 15.7 0.1 24.4 -2.7 18.2-3.7 29.7-3 34.7 0.8 5.7 3 11.5 6.1 16.2 2.6 4 2.5 4.1-5.1 4.1 -2.9 0-5.3 0.2-5.3 0.4 0 0.2 2 2.5 4.5 5.2 2.5 2.7 4.4 5.1 4.3 5.4 -0.1 0.3-1.9 1-4 1.4 -5.5 1.1-9.7 2.9-14.1 5.9 -4.6 3.1-6.6 5.3-19.8 21.6 -5.5 6.9-11.9 14.2-14.1 16.2 -4.3 4-10.4 7.6-18 10.7 -2.7 1.1-5 2.2-5 2.5 0 0.3 2.2 1.4 5 2.6 10.9 4.6 17.6 9.7 24.8 19 13.7 17.7 20.3 25.8 23.3 28.5 4.1 3.6 12.1 7.6 17.4 8.6 2.2 0.4 4 1 4 1.2 0 0.1-0.5 0.7-1.2 1.5l-5.8 6c-0.7 0.8-1.2 1.4-1.2 1.5 0 0.2 3 0.6 6.6 0.8 3.6 0.2 6.9 0.5 7.3 0.8 0.5 0.3 0.2 1-0.9 2.4 -2.4 2.9-5.3 8.8-6.4 13.4 -1.3 5-0.9 16.7 1 33.8 2.2 19.3 1.6 26-3.8 39.4 -1.1 2.7-1.9 5.1-1.8 5.2 0.1 0.1 2.9-0.8 6.2-2 3.3-1.2 7.8-2.7 10-3.2 5.2-1.2 15.8-1.2 23.9 0 17.9 2.6 29.6 3.7 34.7 3 5.7-0.8 11.5-2.9 16.3-6.1 4-2.6 4.1-2.5 4.1 5.1 0 2.9 0.2 5.3 0.4 5.3 0.2 0 2.5-2 5.2-4.5 2.7-2.5 5.1-4.4 5.4-4.3 0.3 0.1 1 1.9 1.4 4 1.1 5.5 2.9 9.7 5.9 14.1 3.2 4.7 5.7 7 21.8 19.9 6.8 5.5 14 11.8 16.1 13.9 4 4.3 7.6 10.4 10.7 18 1.1 2.7 2.2 5 2.5 5 0.3 0 1.4-2.2 2.5-4.9 5.3-12.5 9.6-17.7 25.6-29.9 16.1-12.4 19.8-15.5 22.9-19.4 3.4-4.2 6.5-11.1 7.6-16.2 0.4-2.2 1-3.9 1.2-3.9 0.2 0 2.2 1.8 4.5 4.1 2.3 2.3 4.3 4.1 4.5 4.1 0.2 0 0.6-3 0.8-6.7 0.2-3.7 0.5-6.9 0.8-7.1 0.2-0.2 0.9-0.1 1.5 0.4 11.3 8 18.4 9 44.4 6.2 23.8-2.6 28.9-2.2 41.8 2.9 3.4 1.4 6.4 2.4 6.6 2.2 0.2-0.2-0.7-2.8-1.9-5.9 -1.2-3.1-2.6-7.6-3.2-10 -1.3-5.4-1.4-15.7-0.1-24.3 2.7-17.9 3.7-29.6 3-34.7 -0.8-5.7-2.7-10.9-6-16 -2.7-4.3-2.6-4.3 5-4.3 2.9 0 5.3-0.2 5.3-0.4 0-0.2-1.6-2.1-3.7-4.3 -4.3-4.5-5.7-6.6-4.4-7 0.5-0.1 2.8-0.7 5.3-1.3 10.5-2.5 15.2-6.3 28.9-23.3 16.9-21 21.6-25.1 35.2-30.6 2.7-1.1 5-2.2 5-2.5 0-0.3-2.2-1.4-5-2.6 -10.9-4.6-17.6-9.7-24.7-19 -13.7-17.7-20.3-25.8-23.3-28.5 -4.1-3.6-12.1-7.6-17.4-8.6 -2.2-0.4-4-1-4-1.2 0-0.2 1.8-2.2 4.1-4.5 2.3-2.3 4.1-4.3 4.1-4.5 0-0.2-3-0.6-6.6-0.8 -3.6-0.2-6.9-0.5-7.3-0.8 -0.5-0.3-0.2-1 0.9-2.4 2.4-2.9 5.3-8.8 6.4-13.4 1.3-5 0.9-16.7-1-33.8 -2.2-19.3-1.6-26 3.8-39.4 1.1-2.7 1.9-5.1 1.8-5.2 -0.1-0.1-2.8 0.7-5.9 1.9 -3.1 1.2-7.6 2.6-9.9 3.2 -5.4 1.4-15.8 1.4-24.4 0.1 -17.9-2.7-29.6-3.7-34.7-3 -5.7 0.8-11.5 2.9-16.3 6.1 -4 2.6-4.1 2.5-4.1-5.1 0-2.9-0.2-5.3-0.4-5.3 -0.2 0-2.5 2-5.2 4.5 -2.7 2.5-5.1 4.4-5.4 4.3 -0.3-0.1-1-1.9-1.4-4 -1.1-5.5-2.9-9.7-5.9-14.1 -3.2-4.7-5.7-7-21.8-19.9 -6.8-5.5-14-11.8-16.1-13.9 -4-4.3-7.6-10.4-10.7-18 -1.1-2.7-2.2-5-2.5-5l-0.3 0.4 0 0Z\" id=\"0\" /><path d=\"M252.5 145.9c32.9 6.5 59.6 30 69.8 61.5 3.7 11.4 4.2 14.9 4.2 29.2 0 10-0.2 13.9-1.2 18.1 -11.5 52.5-62.6 84.1-114 70.6 -29.4-7.7-53.1-29.5-63.2-58.1 -4-11.4-4.7-15.9-4.8-30.3 0-10.3 0.2-14.2 1.1-18.4 6.1-28.7 23.7-51.6 49.3-64.5 9.6-4.8 20.9-8 33.1-9.5 4.6-0.6 19.6 0.3 25.5 1.5l0 0Z\" onclick=\"this.style.fill='Gold'\" fill=\"white\" id=\"1\"/><path d=\"M300 310.8c2.4 7.6 1.6 11.1-5.7 23.8 -6.2 10.8-8.4 15.5-9.1 19.7l-0.5 2.7 -3.6-2.4c-2-1.3-6-3.1-9-4 -3-0.9-9.2-2.9-13.7-4.3 -9.5-2.9-12.4-4.8-15.5-9.6 -2.5-4-2.4-4.2 4.1-4.8 5.6-0.5 15.6-2.9 21.5-5.1 9.3-3.5 21.5-10.5 27.5-15.8 1.4-1.2 2.7-2.3 3-2.3 0.2 0 0.7 0.9 1.1 2l0 0ZM174.4 311.4c12.9 10.8 32.4 19.1 48.2 20.6 2.6 0.2 4.9 0.6 5.2 0.7 0.7 0.4-1.7 4.8-3.9 7.4 -2.9 3.3-7.1 5.1-18.9 8.3 -12.2 3.3-14.6 4.2-18.5 6.8 -1.5 1-2.9 1.8-2.9 1.7 -0.1-0.1-0.5-1.9-0.9-4 -0.7-3.8-2.4-7.4-10.3-22.4 -3.4-6.4-4.1-8.4-4.3-11.5 -0.2-3.4 1.3-10.9 2.2-10.9 0.2 0 2.1 1.5 4.3 3.3l0 0ZM139.1 247.9c1.9 16.4 8.4 32.4 18.6 46.2 2.2 2.9 3.6 5.5 3.3 5.8 -0.3 0.3-2.5 1-4.8 1.6 -6.3 1.6-9.5 0.7-20.1-5.3 -12.3-7-16.4-9-20.5-9.8l-3.6-0.7 2.4-3.9c2.4-3.8 3.2-6 8-21.7 2.7-8.7 4.5-12.3 7.6-14.6 2.5-1.9 6.6-4.1 7.7-4.1 0.4 0 1 2.6 1.5 6.5l0 0ZM335.5 242.6c6.3 3.6 7.8 6.4 12 21.9 3.3 12 4.1 14.2 6.7 18.1 1 1.5 1.8 2.9 1.7 2.9 -0.1 0.1-1.9 0.5-4 0.9 -3.8 0.7-7.4 2.4-22.3 10.3 -6 3.2-8.5 4.1-11.3 4.4 -3.3 0.3-10-0.8-10-1.6 0-0.2 0.9-1.5 2.1-3 11-13.4 19.1-33.4 20.5-50.9 0.2-2.6 0.6-4.8 0.8-4.8 0.2 0 1.8 0.8 3.6 1.9l0 0ZM158.1 171l3.9 1.8 -4.3 5.7c-8.9 11.7-15.5 27.3-17.9 42.6 -0.8 4.6-1.5 8.6-1.6 8.7 -0.6 0.8-8.7-4.1-10.7-6.4 -2.7-3.2-3.9-6.3-7.3-18.8 -2.9-10.8-3.9-13.4-6.5-17.2 -1-1.5-1.8-2.9-1.8-3 0-0.2 0.7-0.3 1.5-0.3 3.3 0 9.6-2.6 19.4-7.9 5.6-3 11.3-5.9 12.6-6.4 3.4-1.3 8.1-0.9 12.7 1.2ZM320.9 168.4c1.8 0.5 7.8 3.4 13.4 6.6 10.8 6.2 14.8 8 19.1 8.7l2.7 0.5 -2.2 3.4c-2.6 4-3.7 6.9-7.5 19.9 -3.2 10.8-4.9 14.3-8.5 17.1 -2.8 2.2-5.7 3.7-6.2 3.2 -0.2-0.2-0.7-2.5-1-5 -1.6-11.2-5.8-23.7-11.5-33.8 -3.3-5.9-9.5-14.6-11.9-16.6 -0.8-0.7-1.4-1.4-1.4-1.7 0-0.3 1.3-0.9 3-1.4 5.9-1.9 7.6-2 12-0.9l0 0ZM196.2 119.5c2.8 0.9 8.5 2.7 12.7 3.9 9.1 2.8 12.4 4.6 15.1 8.1 1.5 2.1 4.3 7.5 4.3 8.3 0 0.1-1.8 0.4-3.9 0.6 -17.3 1.6-36.1 9.5-50.3 21 -2 1.6-3.7 2.9-3.9 2.9 -0.5 0-2.8-6.5-3.2-9.3 -0.8-4.8 0.6-9 6.8-19.7 6.2-10.8 8.4-15.5 9-19.6l0.4-2.7 3.9 2.4c2.2 1.3 6.2 3.1 9 4l0 0ZM285.3 116.9c0.7 3.9 2.2 7.1 10.4 22.6 4.1 7.8 4.1 7.8 4.1 13 0 3.5-0.4 6-1.1 7.7l-1.1 2.4 -1.8-1.4c-3.8-3-13.4-9.2-17-11 -9.9-5-23.6-9-33.3-9.8l-5.3-0.4 0.4-1.7c0.2-0.9 1.3-3.5 2.4-5.7 2.9-5.7 5.2-7 19.7-11 11.1-3 18.7-6 20.3-7.9 1.2-1.5 1.5-1.1 2.3 3.1l0 0Z\" fill=\"white\" id=\"2\"/><path d=\"M237.7 336.7c2.3 4.5 6.6 9 10.5 10.8 1.6 0.7 3.2 1.4 3.6 1.4 1.4 0 0.5 1-3 3.5 -5.1 3.7-10.9 9.1-12.9 12.2l-1.7 2.7 -2.5-3.6c-1.4-2-5.2-5.9-8.6-8.7l-6.1-5.1 3.1-1.4c4.2-2 8.9-6.8 11.1-11.5 2.5-5.3 3.9-5.4 6.5-0.2ZM165.8 303.9c0.4 0.5 0.2 2-0.9 5.2 -1.9 5.5-1.9 10.5-0.2 15.6 0.7 2.2 1.2 3.9 1.1 4 -0.1 0.1-3.9-0.3-8.3-0.8 -6.5-0.8-9-0.8-12.4-0.3 -2.4 0.4-4.3 0.7-4.4 0.6 -0.1-0.1 0.1-1.1 0.4-2.3 0.7-2.5 0.8-13.4 0.1-18.3 -0.3-1.8-0.3-3.3 0-3.3 0.2 0 1.6 0.5 2.9 1.1 4 1.7 11.7 1.4 16.4-0.6 4.6-2 4.5-1.9 5.3-1l0 0ZM308.9 304.3c5.2 1.6 10 1.6 14.8 0 2.2-0.7 4-1.2 4.1-1.1 0.1 0.1-0.3 3.8-0.8 8.3 -0.8 6.5-0.9 8.9-0.3 12.4 0.4 2.4 0.7 4.4 0.6 4.5 -0.1 0.1-1.1-0.1-2.3-0.4 -2.5-0.7-13.4-0.8-18.3-0.1 -1.8 0.3-3.3 0.3-3.3 0 0-0.2 0.5-1.6 1.1-2.9 1.5-3.6 1.4-11-0.3-15.8 -1.2-3.5-1.3-3.9-0.3-4.9 0.6-0.6 1-1.1 1.1-1.1 0 0 1.8 0.6 4.1 1.3l0 0ZM123.4 225.5c2.4 3.1 6.6 6 11.3 7.9 2 0.8 3.6 1.7 3.8 2 0.1 0.3-1.7 1.3-3.9 2.3 -6.9 3-12 7.9-13.9 13.5l-0.8 2.4 -3.1-4.1c-4.6-6-9.1-10.8-12.2-12.7l-2.7-1.8 3.1-2c3.4-2.2 7-5.8 11.5-11.6l2.9-3.7 1.1 2.6c0.6 1.5 2 3.7 3.1 5.1l0 0ZM352.8 222.2c4.2 5.5 8.3 9.6 11.4 11.4l2.1 1.2 -3.2 2c-3.4 2.2-7 5.8-11.5 11.6l-2.9 3.7 -1.4-3.2c-1.9-4.3-6.7-8.9-11.8-11.4 -5.3-2.5-5.5-3.7-1-5.8 6.2-2.9 12-8.9 13-13.4 0.2-1 0.7-1.7 1-1.5 0.3 0.2 2.3 2.6 4.3 5.2l0 0ZM149.4 142.6c3.7 0.2 8.6 0 11-0.3 2.4-0.3 4.3-0.4 4.3-0.1 0 0.3-0.4 1.4-0.9 2.6 -2.3 5.5-1.8 12 1.4 19.1 1.3 2.9 1.5 3.8 0.8 4.5 -0.7 0.8-1.2 0.7-3.8-0.6 -3.8-1.9-9.2-3.5-12-3.5 -1.2 0-3.9 0.6-6 1.3 -2.1 0.7-3.9 1.2-4.1 1.1 -0.1-0.1 0.2-3.2 0.7-6.9 0.9-6.4 0.9-13.6-0.1-17.1 -0.4-1.3-0.3-1.5 0.8-1 0.7 0.3 4.2 0.6 7.9 0.8ZM311.4 142.2c6 0.7 8.6 0.7 11.7 0.1 2.2-0.4 4.1-0.7 4.2-0.6 0.1 0.1-0.1 1.1-0.4 2.3 -0.7 2.5-0.8 13.4-0.1 18.3 0.3 1.8 0.3 3.3 0 3.3 -0.2 0-1.6-0.5-2.9-1.1 -4-1.7-11.6-1.4-17 0.6 -2.5 1-4.7 1.5-5 1.2 -0.3-0.3 0.2-2.6 1.1-5.4 2-5.8 2.1-10.8 0.4-15.7 -1.5-4.2-1.5-4.7-0.5-4.3 0.4 0.2 4.3 0.7 8.5 1.2l0 0ZM237 107.4c1.1 1.6 4.7 5.1 8 7.8l6 4.9 -2.9 1.4c-5.3 2.4-9.1 7.3-11.3 14.4 -0.9 3-1.4 3.7-2.5 3.7 -1 0-1.7-0.8-2.8-3.4 -3-7.3-8-12.6-13.8-14.6l-2.4-0.8 4.1-3.1c5.9-4.5 11.7-10.1 13.1-12.7 0.9-1.8 1.3-2 1.8-1.3 0.3 0.5 1.6 2.2 2.7 3.8l0 0Z\" fill=\"white\" id=\"3\"/><path d=\"M319.8 336c1.3 7.8 0.1 11.4-9.7 28.5 -2.7 4.6-5.5 9.8-6.4 11.4 -2 3.9-4.2 11.2-4.2 13.6 0 1-0.1 1.8-0.3 1.8 -0.2 0-2.5-1.4-5.2-3.2 -3.7-2.4-6.9-3.8-12.9-5.7 -4.4-1.4-12.1-3.8-17.2-5.4 -10.6-3.3-14.9-5.9-18.4-11.1 -2.6-3.9-2.8-3.6 6.3-10.5l6.1-4.7 7.3 2.1c9.7 2.8 14.1 5.1 19.1 9.8l4.1 3.9 0.2-2.1c0.9-11.4 1.7-14 7.9-24.9l3.9-6.8 4.2-0.4c2.3-0.2 4.5-0.5 4.8-0.6 0.3-0.1 2.7-0.3 5.2-0.3l4.5-0.1 0.8 4.4ZM160.2 332.7l8.6 1 3.5 6.4c5.1 9.2 6.4 13.1 6.9 20.3l0.4 6.2 4.5-3.9c5.8-5 8.5-6.3 18.9-9.2l8.7-2.4 6 4.8c8.6 7 8.5 6.8 6.6 9.7 -2 3.1-6.6 7.4-9.8 9 -1.4 0.7-8.9 3-16.6 5.1 -7.8 2.1-15.4 4.4-16.8 5 -3.1 1.3-8.6 4.3-10.2 5.8 -1 0.9-1.2 0.9-1.7 0.1 -0.3-0.5-0.6-1.7-0.6-2.6 0-3.6-3.3-12-8.3-20.9 -10.9-19.6-12.2-23.2-10.8-31.2 0.4-2.5 1.1-4.4 1.5-4.4 0.4 0 4.6 0.5 9.3 1l0 0ZM109.5 247.9c1.6 1.8 4.1 5.1 5.7 7.2l2.9 3.8 -2.1 7.3c-2.8 9.5-5.1 14-9.7 19.1l-3.8 4.1 2 0.2c11.4 0.9 13.9 1.7 24.7 7.9 7.8 4.4 7.2 3.3 8 15.9l0.4 6.7 -4.5 0.7c-8 1.3-11.1 0.2-30.3-10.7 -11.1-6.3-15.1-8.1-21-9.2 -2.1-0.4-3.9-0.8-4-0.8 -0.1-0.1 1-1.9 2.5-4.1 3.7-5.4 4.5-7.6 9.2-23.1 4.7-15.7 5.3-17.3 8.1-21.1 1.8-2.5 7.6-7.3 8.9-7.3 0.2 0 1.7 1.5 3.3 3.3ZM364.8 244.8c3.6 2.3 7.7 7 9.4 10.8 0.8 1.8 3 8.9 4.8 15.7 1.8 6.8 4 14 4.7 15.9 1.5 4 5 10.3 6.5 11.5 0.9 0.8 0.9 0.9-0.2 1.3 -0.7 0.3-1.9 0.5-2.9 0.5 -3.7 0.1-12.1 3.4-20.9 8.3 -19.6 10.9-23.2 12.1-31.2 10.8 -2.5-0.4-4.4-1.1-4.4-1.5 0-0.4 0.5-4.6 1-9.3l1-8.6 6.4-3.5c9.2-5.1 13.1-6.4 20.3-6.9l6.2-0.4 -3.9-4.5c-5-5.8-6.3-8.5-9.2-18.9l-2.4-8.7 2.4-3.1c3.6-4.5 9.3-11 9.6-11 0.1 0 1.3 0.7 2.6 1.5l0 0ZM133.3 150.5c2.2 0.4 4 1 4 1.4 0 0.4-0.5 4.6-1 9.3l-1 8.6 -6.4 3.5c-9.2 5-12.9 6.3-20.2 6.8l-6.3 0.5 3.9 4.5c5 5.8 6.3 8.5 9.2 18.9l2.4 8.7 -4.8 5.9c-7 8.6-6.9 8.5-9.8 6.7 -3.6-2.3-7.7-7.1-9.4-10.8 -0.8-1.8-3-8.9-4.8-15.7 -1.8-6.8-3.9-14-4.7-15.9 -1.5-4-5-10.3-6.5-11.5 -0.9-0.8-0.9-0.9 0.2-1.3 0.7-0.3 1.9-0.5 2.9-0.5 3.7-0.1 12.1-3.4 20.9-8.3 20.3-11.3 23.1-12.2 31.6-10.7l0 0ZM343.5 149.2c4 0.9 8.2 2.9 21.8 10.7 11.1 6.3 15.1 8.1 21 9.2 2.1 0.4 3.9 0.8 4 0.8 0.1 0.1-1 1.9-2.5 4.1 -3.7 5.4-4.5 7.6-9.2 23.1 -2.2 7.5-4.5 14.7-5.1 16 -1.7 3.9-4.9 7.9-8.5 10.3 -3.3 2.3-3.4 2.3-4.7 1.1 -0.7-0.7-3.4-3.9-5.9-7.2l-4.6-6.1 2.1-7.3c2.8-9.5 5.1-14 9.7-19.1l3.8-4.1 -2-0.2c-11.4-0.9-13.9-1.7-24.7-7.9 -7.8-4.4-7.2-3.3-8-15.9l-0.4-6.8 3.4-0.6c4.8-0.9 5.8-0.9 9.6-0.1ZM174 81.8c3.7 2.4 6.9 3.8 12.9 5.7 4.4 1.4 12.1 3.8 17.2 5.4 10.6 3.3 14.9 5.9 18.4 11.1 2.6 3.9 2.8 3.6-6.3 10.5l-6.1 4.7 -7.3-2.1c-9.7-2.8-14.1-5.1-19.1-9.8l-4.1-3.9 -0.2 2.1c-0.9 11.4-1.7 14-7.9 24.8 -4.5 7.8-3.3 7.2-15.9 8l-6.7 0.4 -0.8-4.5c-1.3-7.9-0.1-11.4 9.7-28.5 2.7-4.6 5.5-9.8 6.4-11.4 2-3.9 4.2-11.2 4.2-13.6 0-1 0.1-1.8 0.3-1.8 0.2 0 2.5 1.4 5.2 3.2l0 0ZM299.1 79.6c0.2 0.6 0.4 1.7 0.4 2.5 0 3.3 3.5 11.9 8.3 20.6 10.9 19.6 12.1 23.2 10.8 31.2 -0.4 2.5-1.1 4.4-1.5 4.4 -0.4 0-4.6-0.5-9.3-1l-8.6-1 -3.5-6.4c-5.1-9.3-6.4-13-6.9-20.4l-0.4-6.4 -4.5 4c-5.6 5.1-8.3 6.4-18.9 9.3l-8.6 2.4 -6-4.8c-8.6-7-8.5-6.8-6.6-9.7 2-3.1 6.6-7.4 9.8-9 1.4-0.7 8.9-3 16.6-5.1 7.8-2.1 15.4-4.4 16.8-4.9 3.2-1.3 9.8-5.1 10.4-5.9 0.6-0.9 1.4-0.8 1.8 0.4l0 0Z\" fill=\"white\" id=\"4\"/><path d=\"M241 367.2c0 1.4 7.2 8.3 10.6 10.1 3.5 1.9 14.1 5.4 25.2 8.4 2.7 0.7 6.3 1.9 7.7 2.5l2.7 1.1 -0.5 4.1c-0.8 5.6-2.1 9.3-4.9 13.7 -2.8 4.4-6.9 8-23.1 20.4 -12.7 9.7-17.6 14.5-21.8 20.9 -1.4 2.2-2.7 3.9-2.9 3.9 -0.2 0-1.3-1.7-2.5-3.9 -3.5-6-9.3-11.9-23.2-23 -15.5-12.5-19.3-16.2-21.9-21.4 -1.9-3.8-3.8-10.6-3.8-13.8 0-1.6 0.8-1.9 20-7.1 14.4-4 18.7-6.3 23.9-12.9l2.4-3.1 2.4 5.2c1.3 2.9 2.5 5.2 2.7 5.2 0.2 0 1-1.5 1.8-3.4 1.8-4.3 3.7-7.4 4.6-7.4 0.4 0 0.6 0.2 0.6 0.6l0 0ZM102.2 314.9c6.4 3.7 13.2 7.4 15.1 8.2 5 2.2 10.7 3.1 15.3 2.3 2.1-0.3 3.9-0.5 4.1-0.4 0.1 0.1-0.6 2.6-1.7 5.5 -1.1 2.9-1.9 5.3-1.8 5.4 0.1 0.1 1.9-0.5 3.9-1.3 2-0.8 4.9-1.7 6.2-2 2.2-0.4 2.4-0.4 2.1 0.7 -0.9 3.2-1.1 7.4-0.5 11.1 0.7 4.3 3.4 10.2 12.4 27 2.6 4.9 4.8 9.3 4.8 9.9 0 1.1-4.2 4.4-8.6 6.6 -1.8 0.9-5.4 2.1-8.2 2.7 -4.7 1-5.7 1-14.6-0.1 -5.3-0.6-13.4-1.6-18.2-2.3 -10.6-1.5-21.4-1.6-27.4-0.2 -2.5 0.6-4.6 0.9-4.7 0.8 -0.1-0.1 0.2-1.8 0.7-3.8 1.7-6 1.8-16.7 0.3-30.1 -2.7-24.2-2.7-29 0-36.2 1.8-4.8 6.7-11.4 8.1-10.9 0.6 0.2 6.2 3.4 12.7 7.1ZM383.9 310.5c3.2 4.3 5.1 9.1 6 14.8 0.7 4.2 0.1 10.7-2.7 31.1 -1.5 11.1-1.6 21.5-0.2 27.5 0.6 2.5 0.9 4.6 0.8 4.7 -0.1 0.1-1.8-0.2-3.8-0.7 -4.9-1.4-16.2-1.8-24.1-0.9 -29.2 3.2-33.7 3.4-40.2 1.4 -4-1.2-10.8-5.2-12.6-7.3 -0.6-0.8 0.4-3.1 6.3-13.4 3.9-6.9 7.8-14 8.6-15.9 2.2-4.9 3-10.6 2.3-15.2 -0.3-2.1-0.5-3.9-0.4-4.1 0.1-0.1 2.6 0.6 5.5 1.7 2.9 1.1 5.3 1.9 5.4 1.8 0.1-0.1-0.5-1.9-1.3-3.9 -0.8-2-1.7-4.9-2-6.2 -0.4-2.2-0.4-2.4 0.7-2.1 3.2 0.9 7.4 1.1 11.1 0.5 4.2-0.7 11.1-3.9 27.6-12.8 4.6-2.5 8.7-4.5 9.2-4.5 0.5 0 2.2 1.7 3.6 3.6l0 0ZM81.6 188.7c0.9 2.9 2.7 9.3 3.9 14.2 3.7 14.1 6.5 19.3 13.2 24.6l3.1 2.5 -5.2 2.4c-2.9 1.3-5.1 2.5-5.1 2.7 0 0.2 2.4 1.5 5.2 2.9 2.9 1.4 5.3 2.8 5.4 3.2 0.1 0.4-0.7 1.2-1.6 1.7 -2.6 1.5-6.4 5.5-8.3 8.7 -2.1 3.6-3.8 8.5-7.4 20.8 -1.6 5.5-3.4 11.3-4 12.8 -1 2.6-1.1 2.7-3.7 2.7 -5.7 0-13-2.8-18.1-6.9 -2.6-2.1-11-12.3-21.8-26.6 -5.7-7.5-11.4-13.1-16.8-16.5 -2.2-1.4-4-2.7-4-2.8 0-0.2 1.8-1.3 4-2.6 5.9-3.4 11.7-9.2 22.9-23.2 15.5-19.2 19.5-22.7 29.2-24.8 7.4-1.6 7.2-1.7 9 4.3ZM397 183.2c4.6 1.2 8.2 3 11.8 5.9 2.6 2.1 11 12.3 21.8 26.6 5.7 7.5 11.4 13.1 16.8 16.5 2.2 1.4 4 2.7 4 2.8 0 0.2-1.8 1.3-4 2.6 -5.9 3.4-11.7 9.2-22.9 23.2 -15.6 19.4-19.5 22.7-29.5 24.8 -7.2 1.5-6.9 1.6-8.7-4.3 -0.9-2.9-2.3-8.1-3.2-11.6 -4.4-17-6.7-21.5-13.8-27.1l-3.1-2.5 5.2-2.4c2.9-1.3 5.2-2.5 5.2-2.7 0-0.2-2.2-1.3-4.8-2.5 -5.7-2.6-6.9-3.7-5.1-4.7 0.7-0.4 2.7-2.1 4.5-3.8 5.1-4.8 7.2-9.4 12.7-28.5 1.3-4.4 2.7-9.2 3.3-10.6 1-2.6 1.1-2.7 3.7-2.7 1.4 0 4.3 0.4 6.3 0.9l0 0ZM150.3 82.4c3.1 1.2 11.3 6.4 11.3 7.3 0 0.5-3 6-8.6 15.6 -8.7 15.1-10.5 20.6-9.3 28.3 0.3 2.1 0.5 3.9 0.3 4.1 -0.1 0.1-2.6-0.6-5.5-1.7 -2.9-1.1-5.3-1.9-5.4-1.8 -0.1 0.1 0.5 1.9 1.3 3.9 0.8 2 1.7 4.9 2 6.2 0.4 2.2 0.4 2.4-0.7 2.1 -3.1-0.9-8-1.1-11.4-0.5 -3.8 0.7-12 4.5-27.3 12.8 -4.6 2.5-8.7 4.5-9.2 4.5 -1.4 0-6.1-6.7-7.7-10.8 -3-8-3-11.8 0.7-38.7 1.5-11.1 1.6-21.5 0.2-27.5 -0.6-2.5-0.9-4.6-0.8-4.7 0.1-0.1 1.8 0.2 3.8 0.7 6.1 1.7 16.7 1.8 30.3 0.3 23.7-2.6 28.9-2.6 35.9 0l0 0ZM340.2 79.9c5.8 0.7 13.5 1.7 17.2 2.2 8.8 1.3 19.9 1.2 25.5-0.1 2.5-0.6 4.6-0.9 4.7-0.8 0.1 0.1-0.2 1.8-0.7 3.8 -1.4 4.9-1.8 16.2-0.9 24.1 3.2 29.4 3.4 33.7 1.4 40.1 -1.3 4-5.3 10.9-7.3 12.6 -0.8 0.7-3.1-0.4-13.4-6.3 -6.9-3.9-14-7.8-15.9-8.6 -4.9-2.2-10.6-3-15.2-2.3 -2.1 0.3-3.9 0.5-4.1 0.4 -0.1-0.1 0.6-2.6 1.7-5.5 1.1-2.9 1.9-5.3 1.8-5.4 -0.1-0.1-1.9 0.5-3.9 1.3 -2 0.8-4.9 1.7-6.2 2 -2.2 0.4-2.4 0.4-2.1-0.7 0.9-3.2 1.1-7.4 0.5-11.1 -0.7-4.3-3.4-10.2-12.4-27 -2.6-4.9-4.8-9.3-4.8-9.9 0-1.4 6.7-6.1 10.8-7.7 7.1-2.7 9.9-2.8 23.5-1.2l0 0ZM236.6 21.5c3.4 5.9 9.2 11.7 23.2 22.9 15.5 12.5 19.3 16.2 21.9 21.4 1.9 3.8 3.8 10.6 3.8 13.8 0 1.6-0.8 1.9-20 7.1 -14.4 4-18.7 6.3-23.9 13l-2.4 3.1 -2.4-5.2c-1.3-2.9-2.5-5.1-2.7-5.1 -0.2 0-1.5 2.4-2.9 5.2 -1.4 2.9-2.8 5.3-3.2 5.4 -0.4 0.1-1.2-0.7-1.7-1.6 -1.7-2.9-6.2-7-10-8.9 -3.4-1.8-14.1-5.4-25.1-8.4 -2.7-0.7-6.3-1.9-7.7-2.5l-2.7-1.1 0.6-4.1c0.8-5.6 2.1-9.3 4.9-13.7 2.8-4.4 6.9-8 23.1-20.4 12.7-9.7 17.6-14.5 21.8-20.9 1.4-2.2 2.7-3.9 2.9-3.9 0.2 0 1.3 1.8 2.6 4l0 0Z\" fill=\"white\" id=\"5\"/>\n        </g>\n        </svg>\n</div>\n"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../splash/splash.component */ "./src/app/components/splash/splash.component.ts");
/* harmony import */ var _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../suggestion/suggestion.component */ "./src/app/components/suggestion/suggestion.component.ts");
/* harmony import */ var _see_all_div_see_all_div_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../see-all-div/see-all-div.component */ "./src/app/components/see-all-div/see-all-div.component.ts");
/* harmony import */ var _concept_concept_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../concept/concept.component */ "./src/app/components/concept/concept.component.ts");
/* harmony import */ var _yuzu_intro_yuzu_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../yuzu-intro/yuzu-intro.component */ "./src/app/components/yuzu-intro/yuzu-intro.component.ts");
/* harmony import */ var _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contact-info/contact-info.component */ "./src/app/components/contact-info/contact-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import modules





// import children components






var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent_1 = LandingPageComponent;
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = LandingPageComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/components/landing-page/landing-page.component.css")]
        })
        // Add in NgModule to include children components
        ,
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                //children components
                LandingPageComponent_1,
                _splash_splash_component__WEBPACK_IMPORTED_MODULE_4__["SplashComponent"],
                _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_5__["SuggestionComponent"],
                _see_all_div_see_all_div_component__WEBPACK_IMPORTED_MODULE_6__["SeeAllDivComponent"],
                _concept_concept_component__WEBPACK_IMPORTED_MODULE_7__["ConceptComponent"],
                _yuzu_intro_yuzu_intro_component__WEBPACK_IMPORTED_MODULE_8__["YuzuIntroComponent"],
                _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_9__["ContactInfoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [LandingPageComponent_1]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
    var LandingPageComponent_1;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Log In</h2>\n\n<form (ngSubmit)=\"loginSubmit()\">\n  <label>\n    Email:\n    <input [(ngModel)]=\"loginForm.email\" name=\"email\" type=\"email\" placeholder=\"jessica@jones.com\" />\n  </label>\n  <br />\n\n  <label>\n    Password:\n    <input [(ngModel)]=\"loginForm.loginPassword\" name=\"loginPassword\" type=\"password\" placeholder=\"We won't tell\" />\n  </label>\n  <br />\n\n  <button>Log In</button>\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(myAuthServ, myRouterServ) {
        this.myAuthServ = myAuthServ;
        this.myRouterServ = myRouterServ;
        this.loginForm = new _auth_service__WEBPACK_IMPORTED_MODULE_1__["LoginSubmission"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        // pass the form inputs to the service
        this.myAuthServ.postLogin(this.loginForm)
            .then(function (response) {
            // redirect away to the home page
            _this.myRouterServ.navigateByUrl("/");
        })
            .catch(function (err) {
            alert("Sorry! There was a problem with your login. 😓");
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/components/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/components/not-found-page/not-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/components/one-temple/one-temple.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/one-temple/one-temple.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/one-temple/one-temple.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/one-temple/one-temple.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  This is the page to display info of one temple\n</p>\n\n\n\n<!-- Children components -->\n<section-temple-splash></section-temple-splash>\n\n<section-temple-info></section-temple-info>\n\n<section-temple-reserve></section-temple-reserve>"

/***/ }),

/***/ "./src/app/components/one-temple/one-temple.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/one-temple/one-temple.component.ts ***!
  \***************************************************************/
/*! exports provided: OneTempleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneTempleComponent", function() { return OneTempleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _temple_splash_temple_splash_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../temple-splash/temple-splash.component */ "./src/app/components/temple-splash/temple-splash.component.ts");
/* harmony import */ var _temple_info_temple_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../temple-info/temple-info.component */ "./src/app/components/temple-info/temple-info.component.ts");
/* harmony import */ var _temple_reserve_temple_reserve_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../temple-reserve/temple-reserve.component */ "./src/app/components/temple-reserve/temple-reserve.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OneTempleComponent = /** @class */ (function () {
    function OneTempleComponent() {
    }
    OneTempleComponent_1 = OneTempleComponent;
    OneTempleComponent.prototype.ngOnInit = function () {
    };
    OneTempleComponent = OneTempleComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-one-temple',
            template: __webpack_require__(/*! ./one-temple.component.html */ "./src/app/components/one-temple/one-temple.component.html"),
            styles: [__webpack_require__(/*! ./one-temple.component.css */ "./src/app/components/one-temple/one-temple.component.css")]
        })
        // connect to children components
        ,
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                OneTempleComponent_1,
                _temple_splash_temple_splash_component__WEBPACK_IMPORTED_MODULE_1__["TempleSplashComponent"],
                _temple_info_temple_info_component__WEBPACK_IMPORTED_MODULE_2__["TempleInfoComponent"],
                _temple_reserve_temple_reserve_component__WEBPACK_IMPORTED_MODULE_3__["TempleReserveComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [OneTempleComponent_1]
        }),
        __metadata("design:paramtypes", [])
    ], OneTempleComponent);
    return OneTempleComponent;
    var OneTempleComponent_1;
}());



/***/ }),

/***/ "./src/app/components/see-all-div/see-all-div.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/see-all-div/see-all-div.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill {\r\n    min-height: 100%;\r\n    height:100%;\r\n    /* border:1px orange solid; */\r\n    /* background-image: url(\"https://res.cloudinary.com/dzblxtdk3/image/upload/v1532281322/half-noodle_2x.png\"); */\r\n    background-repeat: no-repeat;\r\n\r\n}\r\n\r\n#content-wrapper {\r\n    height:100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#content {\r\n        /* border:1px red dashed;\r\n        background: lightgrey; */\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column\r\n}\r\n\r\n#placeholder {\r\n    flex-grow: 1\r\n}\r\n\r\n#content-wrapper {\r\n    flex-grow: 1;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\nh1 {\r\n    font-size: 15vh;\r\n    font-family: 'Dosis';\r\n    font-weight: 900;\r\n    text-shadow: 2px 2px #e3e7af;\r\n}\r\n\r\na {\r\n    display:inline-block;\r\n    padding: 0vh 5vw\r\n}"

/***/ }),

/***/ "./src/app/components/see-all-div/see-all-div.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/see-all-div/see-all-div.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid fill\">\n\n  <div class=\"container\" id=\"content-wrapper\">\n    <div id=\"placeholder\"></div>\n    <div id=\"content\">\n      <div id=\"content-wrapper\">\n          <h1>SEE ALL TEMPLES</h1>\n      </div>\n      <div>\n        <a routerLink=\"/temples\" class=\"btn btn-primary btn-lg\" role=\"button\">Pick a temple to stay</a>\n    </div>\n    </div>\n    <div id=\"placeholder\"></div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/see-all-div/see-all-div.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/see-all-div/see-all-div.component.ts ***!
  \*****************************************************************/
/*! exports provided: SeeAllDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllDivComponent", function() { return SeeAllDivComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeeAllDivComponent = /** @class */ (function () {
    function SeeAllDivComponent() {
    }
    SeeAllDivComponent.prototype.ngOnInit = function () {
    };
    SeeAllDivComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'see-all-div',
            template: __webpack_require__(/*! ./see-all-div.component.html */ "./src/app/components/see-all-div/see-all-div.component.html"),
            styles: [__webpack_require__(/*! ./see-all-div.component.css */ "./src/app/components/see-all-div/see-all-div.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SeeAllDivComponent);
    return SeeAllDivComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Sign Up</h2>\n\n<form (ngSubmit)=\"signupSubmit()\">\n  <label>\n    First Name:\n    <input [(ngModel)]=\"signupForm.firstName\" name=\"firstName\" type=\"text\" placeholder=\"Jessica\" />\n  </label>\n  <br />\n\n  <label>\n    Last Name:\n    <input [(ngModel)]=\"signupForm.lastName\" name=\"lastName\" type=\"text\" placeholder=\"Jones\" />\n  </label>\n  <br />\n\n  <label>\n    Email:\n    <input [(ngModel)]=\"signupForm.email\" name=\"email\" type=\"email\" placeholder=\"jessica@jones.com\" />\n  </label>\n  <br />\n\n  <label>\n    Password:\n    <input [(ngModel)]=\"signupForm.originalPassword\" name=\"originalPassword\" type=\"password\" placeholder=\"Your secret is safe with us\" />\n  </label>\n  <br />\n\n  <button>Sign Up</button>\n</form>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(myAuthServ, myRouterServ) {
        this.myAuthServ = myAuthServ;
        this.myRouterServ = myRouterServ;
        this.signupForm = new _auth_service__WEBPACK_IMPORTED_MODULE_2__["SignupSubmission"]();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signupSubmit = function () {
        var _this = this;
        // pass the form inputs to the service
        this.myAuthServ.postSignup(this.signupForm)
            .then(function (response) {
            // redirect away to the home page
            _this.myRouterServ.navigateByUrl("/");
        })
            .catch(function (err) {
            alert("Sorry! We couldn't sign you up. 🧐");
            console.log(err);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/splash/splash.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/splash/splash.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  color: #f3efe0\r\n}\r\n\r\n.fill {\r\n    min-height: 100%;\r\n    height: 100%;\r\n    background-color: #759eb8;\r\n}\r\n\r\n#video-background {\r\n  /*  making the video fullscreen  */\r\n    position: relative;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    width: auto;\r\n    height: auto;\r\n    z-index: -100;\r\n  }\r\n\r\n#content-wrapper {\r\n  height:100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#content {\r\n      /* border:1px red dashed;\r\n      background: lightgrey; */\r\n  flex-grow: 1;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column\r\n}\r\n\r\n#placeholder {\r\n  flex-grow: 1\r\n}\r\n\r\n#content-wrapper {\r\n  flex-grow: 1;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  /* position: relative; */\r\n  z-index: 100;\r\n  font-size: 9vh;\r\n  font-family: 'Dosis';\r\n  font-weight: 900;\r\n}\r\n\r\n/* scroller */\r\n\r\n*, *:before, *:after { box-sizing: border-box;\r\n }\r\n\r\n.mouse_scroll {\r\n  display: block;\r\n  position: absolute;\r\n  top: 90%;\r\n  left: 50%;\r\n}\r\n\r\n.m_scroll_arrows\r\n{\r\n  display: block;\r\n  width: 3px;\r\n  height: 3px; /* IE 9 */\r\n  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */\r\n  transform: rotate(45deg);\r\n\r\n  border-right: 2px solid white;\r\n  border-bottom: 2px solid white;\r\n  margin: 0 0 3px 4px;\r\n\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.unu\r\n{\r\n  margin-top: 1px;\r\n}\r\n\r\n.unu, .doi, .trei\r\n{\r\n    -webkit-animation: mouse-scroll 1s infinite;\r\n    -moz-animation: mouse-scroll 1s infinite;\r\n}\r\n\r\n.unu\r\n{\r\n  -webkit-animation-delay: .1s;\r\n  -moz-animation-delay: .1s;\r\n  -webkit-animation-direction: alternate;\r\n}\r\n\r\n.doi\r\n{\r\n  -webkit-animation-delay: .2s;\r\n  -moz-animation-delay: .2s;\r\n  -webkit-animation-direction: alternate;\r\n  margin-top: -6px;\r\n}\r\n\r\n.trei\r\n{\r\n  -webkit-animation-delay: .3s;\r\n  -moz-animation-delay: .3s;\r\n  -webkit-animation-direction: alternate;\r\n  margin-top: -6px;\r\n}\r\n\r\n.wheel\r\n{\r\n  -webkit-animation: mouse-wheel 0.6s linear infinite;\r\n  -moz-animation: mouse-wheel 0.6s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes mouse-wheel\r\n{\r\n   0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes mouse-scroll {\r\n\r\n  0%   { opacity: 0;}\r\n  50%  { opacity: .5;}\r\n  100% { opacity: 1;}\r\n}\r\n\r\n@keyframes mouse-scroll {\r\n\r\n  0%   { opacity: 0; }\r\n  50%  { opacity: .5; }\r\n  100% { opacity: 1; }\r\n}"

/***/ }),

/***/ "./src/app/components/splash/splash.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/splash/splash.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid px-0 fill\">\n\n    <!-- The video -->\n  <!-- <video autoplay loop id=\"video-background\" muted plays-inline>\n    <source src=\"https://res.cloudinary.com/dzblxtdk3/video/upload/v1532437075/Yuzu%20project/sakura.mp4\" type=\"video/mp4\">\n  </video> -->\n\n  <div class=\"container\" id=\"content-wrapper\">\n    <div id=\"placeholder\"></div>\n    <div id=\"content\">\n      <div id=\"content-wrapper\">\n          <h2>Discover A Beautiful Temple</h2>\n          <h2>For Body and Mind</h2>\n      </div>\n    </div>\n    <div id=\"placeholder\"></div>\n  </div>\n\n  <div class=\"mouse_scroll\">\n      <div class=\"mouse\">\n        <div class=\"wheel\"></div>\n      </div>\n      <div>\n        <span class=\"m_scroll_arrows unu\"></span>\n        <span class=\"m_scroll_arrows doi\"></span>\n        <span class=\"m_scroll_arrows trei\"></span>\n      </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/splash/splash.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/splash/splash.component.ts ***!
  \*******************************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplashComponent = /** @class */ (function () {
    function SplashComponent() {
    }
    SplashComponent.prototype.ngOnInit = function () {
    };
    SplashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'splash-div',
            template: __webpack_require__(/*! ./splash.component.html */ "./src/app/components/splash/splash.component.html"),
            styles: [__webpack_require__(/*! ./splash.component.css */ "./src/app/components/splash/splash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SplashComponent);
    return SplashComponent;
}());



/***/ }),

/***/ "./src/app/components/suggestion/suggestion.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/suggestion/suggestion.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n.fill {\r\n    min-height: 100%;\r\n    height:100%;\r\n    /* border: 1px orange dashed; */\r\n    /* for z index */\r\n    position: relative;\r\n}\r\n\r\nh1{\r\n    font-size: 10vh;\r\n    font-weight: 800;\r\n    font-family: \"Dosis\";\r\n    text-shadow: 2px 2px gold;\r\n    padding-left: 5vw\r\n}\r\n\r\n.name-wrapper {\r\n    background-image: url(\"https://res.cloudinary.com/dzblxtdk3/image/upload/v1532281322/half-noodle_2x.png\");\r\n    background-size: 60%;\r\n    background-position: 0% 45%;\r\n    background-repeat: no-repeat;\r\n    width: 100vh;\r\n    height: auto;\r\n    position: absolute;\r\n    z-index: 2;\r\n    left: 70vh;\r\n    top: 15vh;\r\n    text-align: center;\r\n}\r\n\r\n.text-wrapper {\r\n    width:100vh;\r\n    height: 20vh;\r\n    position:absolute;\r\n    z-index: 2;\r\n    left: 42vh;\r\n    top: 90vh;\r\n\r\n    font-weight: 400;\r\n    font-size: 1.5vw\r\n}\r\n\r\n/* Imgae wrapper happens below */\r\n\r\n.outer-wrapper {\r\n    height: 100%;\r\n}\r\n\r\n.placeholder {\r\n    /* background:orange; */\r\n    height: 100%;\r\n}\r\n\r\n.content-wrapper {\r\n    /* background:grey; */\r\n    height: 100%;\r\n}\r\n\r\n.inner-wrapper {\r\n    height: 100%\r\n}\r\n\r\n.pic-wrapper {\r\n    /* background:lightblue; */\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.map-wrapper {\r\n    /* background:lightcoral; */\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.picture {\r\n    background: purple;\r\n    height: 80%;\r\n    width: 80%;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    background-image: url(\"https://res.cloudinary.com/dzblxtdk3/image/upload/v1532192891/koyasan5.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n}\r\n\r\n/* REPLACE WITH GOOGLE MAP */\r\n\r\n.map {\r\n    background: purple;\r\n    height: 50%;\r\n    width: 100%;\r\n    align-self: flex-end;\r\n    margin-bottom: 10vh;\r\n    background-image: url(\"https://res.cloudinary.com/dzblxtdk3/image/upload/v1532215424/samplemap.png\");\r\n    background-size: cover;\r\n    -webkit-filter: grayscale(1);\r\n            filter: grayscale(1)\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/suggestion/suggestion.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/suggestion/suggestion.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section  class=\"container-fluid fill\">\n    <div class=\"name-wrapper\">\n        <h1>KOYASAN</h1>\n    </div>\n\n    <div class=\"text-wrapper\">\n        <p>TOP PICK FOR AUGUST</p>\n    </div>\n\n    <div class=\"container-fluid row outer-wrapper\">\n        <div class=\"col-lg-2 placeholder\"></div>\n\n        <div class=\"col-lg-8 content-wrapper\">\n            <div class=\"container-fluid row inner-wrapper\">   <!-- Inned wrapper -->\n                <div class=\"col-lg-7 pic-wrapper\">\n                    <div class=\"picture\"></div>\n                </div>        <!-- picture wrapper -->\n\n                <div class=\"col-lg-5 map-wrapper\">\n                    <div class=\"map\">\n                    </div>\n                </div>        <!-- map wrapper -->\n            </div>\n        </div>\n\n        <div class=\"col-lg-2 placeholder\"></div>\n    </div>\n\n</section>\n\n\n<link href=\"https://fonts.googleapis.com/css?family=Dosis\" rel=\"stylesheet\">"

/***/ }),

/***/ "./src/app/components/suggestion/suggestion.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/suggestion/suggestion.component.ts ***!
  \***************************************************************/
/*! exports provided: SuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionComponent", function() { return SuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuggestionComponent = /** @class */ (function () {
    function SuggestionComponent() {
    }
    SuggestionComponent.prototype.ngOnInit = function () {
    };
    SuggestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'suggestion-div',
            template: __webpack_require__(/*! ./suggestion.component.html */ "./src/app/components/suggestion/suggestion.component.html"),
            styles: [__webpack_require__(/*! ./suggestion.component.css */ "./src/app/components/suggestion/suggestion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuggestionComponent);
    return SuggestionComponent;
}());



/***/ }),

/***/ "./src/app/components/temple-info/temple-info.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/temple-info/temple-info.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill {\r\n    min-height: 100%;\r\n    height:100%;\r\n    border: 1px orange dashed;\r\n}\r\n\r\n.carousel {\r\n    /* background: orange; */\r\n\r\n}\r\n\r\n.content {\r\n    /* background:palegreen; */\r\n\r\n}\r\n\r\n.content-wrapper {\r\n    background: white;\r\n    margin: 25% 0%;\r\n}\r\n\r\n.slide {\r\n    margin: 10% 0%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/temple-info/temple-info.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/temple-info/temple-info.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid row fill\">\n\n    <div class=\"col-7 carousel\">\n      <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"http://www.ekoin.jp/en/stay/img/img1.jpg\" alt=\"First slide\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"http://www.ekoin.jp/en/stay/img/img2.jpg\" alt=\"Second slide\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"http://www.ekoin.jp/en/stay/img/img3.jpg\" alt=\"Third slide\">\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div> <!--Carousel-->\n\n    <div class=\"col-5 content\">\n      <div *ngFor = \"let oneTemple of temples\" class=\"container content-wrapper\" >\n        <h3 class=\"nameENG\">{{ oneTemple.nameENG }} </h3>\n        <p class=\"nameJPG\">Japanese name: {{ oneTemple.nameJPG }} </p>\n        <p class=\"address\">Address: {{  oneTemple. address }}</p>\n        <p class=\"telephon\">Telephoe: {{  oneTemple. address}}</p>\n        <p class=\"mealType\">Meal type: {{ oneTemple.mealType }}</p>\n        <p class=\"description\">Description: {{  oneTemple.description }}</p>\n        <div class=\"specialties\"> Activities:\n          <p>{{ oneTemple.specialties[0] }}</p>\n          <p>{{ oneTemple.specialties[1] }}</p>\n          <p>{{ oneTemple.specialties[2] }}</p>\n        </div>\n      </div>\n    </div>  <!--Temple content info-->\n\n</section>\n"

/***/ }),

/***/ "./src/app/components/temple-info/temple-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/temple-info/temple-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: TempleInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempleInfoComponent", function() { return TempleInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _temple_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../temple.service */ "./src/app/temple.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TempleInfoComponent = /** @class */ (function () {
    function TempleInfoComponent(yuzuTempleService) {
        this.yuzuTempleService = yuzuTempleService;
        // import Temple service here
        this.temples = [];
    }
    TempleInfoComponent.prototype.ngOnInit = function () {
        this.fetchTemples();
    };
    TempleInfoComponent.prototype.fetchTemples = function () {
        var _this = this;
        this.yuzuTempleService.getList()
            .then(function (response) {
            _this.temples = response;
        })
            .catch(function (err) {
            alert("There is so;ething wrong we cant get the list of our temples");
            console.log(err);
        });
    };
    TempleInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'section-temple-info',
            template: __webpack_require__(/*! ./temple-info.component.html */ "./src/app/components/temple-info/temple-info.component.html"),
            styles: [__webpack_require__(/*! ./temple-info.component.css */ "./src/app/components/temple-info/temple-info.component.css")]
        }),
        __metadata("design:paramtypes", [_temple_service__WEBPACK_IMPORTED_MODULE_1__["TempleService"]])
    ], TempleInfoComponent);
    return TempleInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/temple-reserve/temple-reserve.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/temple-reserve/temple-reserve.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill {\r\n    min-height: 100%;\r\n    height:100%;\r\n    border: 1px orange dashed;\r\n    display: flex;\r\n    flex-direction: column\r\n}\r\n\r\n.form-wrapper {\r\n    background: lightblue;\r\n    padding-top: 10%;\r\n    /* flex-grow: 1; */\r\n}\r\n\r\n.form {\r\n    padding-top: 10%;\r\n}"

/***/ }),

/***/ "./src/app/components/temple-reserve/temple-reserve.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/temple-reserve/temple-reserve.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid row fill\">\n  <div class=\"container form-wrapper\">\n\n      <div class=\"hotel_reserve_box\">\n          <h3> Reservation Form </h3><br>\n          <form>\n              <div class=\"form-group\">\n                  <label>Room Type</label>\n                  <select class=\"form-control\" id=\"room_type\" onchange=\"finalCost()\">\n                      <option value=\"0\" selected>Select Room/Suite </option>\n                      <option value=\"1\"> Standard </option>\n                      <option value=\"2\"> Deluxe </option>\n                  </select>\n              </div>\n              <div class=\"form-group\">\n                  <label>Number of room/suite</label>\n                  <select class=\"form-control\" id=\"room_number\" onchange=\"finalCost()\">\n                      <option value=\"0\"> 0 </option>\n                      <option value=\"1\"> 1 </option>\n                      <option value=\"2\"> 2 </option>\n                      <option value=\"3\"> 3 </option>\n                      <option value=\"4\"> 4 </option>\n                      <option value=\"5\"> 5 </option>\n                      <option value=\"6\"> 6 </option>\n                      <option value=\"7\"> 7 </option>\n                  </select>\n              </div>\n              <div class=\"form-group\">\n                  <label>Number of persons</label>\n                  <select class=\"form-control\" id=\"person_number\" onchange=\"finalCost()\">\n                      <option value=\"0\"> 0 </option>\n                      <option value=\"1\"> 1 </option>\n                      <option value=\"2\"> 2 </option>\n                      <option value=\"3\"> 3 </option>\n                      <option value=\"4\"> 4 </option>\n                  </select>\n              </div>\n              <div class=\"form-group\">\n                  <label>Number of children</label>\n                  <select class=\"form-control\" id=\"child_number\" onchange=\"finalCost()\">\n                      <option value=\"0\"> 0 </option>\n                      <option value=\"1\"> 1 </option>\n                      <option value=\"2\"> 2 </option>\n                      <option value=\"3\"> 3 </option>\n                      <option value=\"4\"> 4 </option>\n                      <option value=\"5\"> 5 </option>\n                      <option value=\"6\"> 6 </option>\n                      <option value=\"7\"> 7 </option>\n                  </select>\n              </div>\n              <div class=\"form-group\">\n                  <label>Breakfast?</label>\n                  <select class=\"form-control\" id=\"res_facilities\" onchange=\"finalCost()\">\n                      <option value=\"0\" selected> Do you want restaurant facilities? </option>\n                      <option value=\"2\"> Yes </option>\n                      <option value=\"0\"> No </option>\n                  </select>\n              </div><br>\n              <div class=\"form-group\">\n                  <label>Total Cost (euro) : 95 </label>\n                  <span id=\"result\" style=\"background-color: #7527b0;color: #fff;padding: 6px 70px;font-weight: 600;font-size: 18px; margin-left: 10px;border-radius: 5px;\">0</span>\n              </div>\n          </form>\n      </div>\n  </div> <!--Form-->\n\n</section>"

/***/ }),

/***/ "./src/app/components/temple-reserve/temple-reserve.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/temple-reserve/temple-reserve.component.ts ***!
  \***********************************************************************/
/*! exports provided: TempleReserveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempleReserveComponent", function() { return TempleReserveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TempleReserveComponent = /** @class */ (function () {
    function TempleReserveComponent() {
    }
    TempleReserveComponent.prototype.ngOnInit = function () {
    };
    TempleReserveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'section-temple-reserve',
            template: __webpack_require__(/*! ./temple-reserve.component.html */ "./src/app/components/temple-reserve/temple-reserve.component.html"),
            styles: [__webpack_require__(/*! ./temple-reserve.component.css */ "./src/app/components/temple-reserve/temple-reserve.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TempleReserveComponent);
    return TempleReserveComponent;
}());



/***/ }),

/***/ "./src/app/components/temple-splash/temple-splash.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/temple-splash/temple-splash.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {font-size: 3vh}\r\n\r\n.fill {\r\n    min-height: 100%;\r\n    height:100%;\r\n    background: url(\"https://res.cloudinary.com/dzblxtdk3/image/upload/v1532295611/Yuzu%20project/koyasanNEW1.jpg\");\r\n    background-size:cover;\r\n    background-position: 35%;\r\n    background-repeat: no-repeat;\r\n    -webkit-filter:opacity(80%);\r\n            filter:opacity(80%);\r\n    -webkit-filter:grayscale(40%);\r\n            filter:grayscale(40%);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.jumbotron {\r\n    margin-top: 16vh;\r\n    height:80%;\r\n    background:none;\r\n    color: white\r\n}\r\n\r\nh1 {\r\n    font-size: 15vh;\r\n    font-family: 'Dosis';\r\n    font-weight: 900;\r\n}\r\n\r\n.location-icon {\r\n    display: inline-block;\r\n    width: 3vh;\r\n    height:3vh;\r\n    background: url(\"https://res.cloudinary.com/dzblxtdk3/image/upload/v1532294858/Yuzu%20project/_ionicons_svg_md-locate.svg\")\r\n;   padding-right: 3vh\r\n}\r\n\r\n/* scroller */\r\n\r\n*, *:before, *:after { box-sizing: border-box;\r\n   }\r\n\r\n.mouse_scroll {\r\n    display: block;\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n  }\r\n\r\n.m_scroll_arrows\r\n  {\r\n    display: block;\r\n    width: 3px;\r\n    height: 3px; /* IE 9 */\r\n    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */\r\n    transform: rotate(45deg);\r\n\r\n    border-right: 2px solid white;\r\n    border-bottom: 2px solid white;\r\n    margin: 0 0 3px 4px;\r\n\r\n    width: 16px;\r\n    height: 16px;\r\n  }\r\n\r\n.unu\r\n  {\r\n    margin-top: 1px;\r\n  }\r\n\r\n.unu, .doi, .trei\r\n  {\r\n      -webkit-animation: mouse-scroll 1s infinite;\r\n      -moz-animation: mouse-scroll 1s infinite;\r\n  }\r\n\r\n.unu\r\n  {\r\n    -webkit-animation-delay: .1s;\r\n    -moz-animation-delay: .1s;\r\n    -webkit-animation-direction: alternate;\r\n  }\r\n\r\n.doi\r\n  {\r\n    -webkit-animation-delay: .2s;\r\n    -moz-animation-delay: .2s;\r\n    -webkit-animation-direction: alternate;\r\n    margin-top: -6px;\r\n  }\r\n\r\n.trei\r\n  {\r\n    -webkit-animation-delay: .3s;\r\n    -moz-animation-delay: .3s;\r\n    -webkit-animation-direction: alternate;\r\n    margin-top: -6px;\r\n  }\r\n\r\n.wheel\r\n  {\r\n    -webkit-animation: mouse-wheel 0.6s linear infinite;\r\n    -moz-animation: mouse-wheel 0.6s linear infinite;\r\n  }\r\n\r\n@-webkit-keyframes mouse-wheel\r\n  {\r\n     0% {\r\n      opacity: 1;\r\n      -webkit-transform: translateY(0);\r\n      transform: translateY(0);\r\n    }\r\n\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translateY(6px);\r\n      transform: translateY(6px);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes mouse-scroll {\r\n\r\n    0%   { opacity: 0;}\r\n    50%  { opacity: .5;}\r\n    100% { opacity: 1;}\r\n  }\r\n\r\n@keyframes mouse-scroll {\r\n\r\n    0%   { opacity: 0; }\r\n    50%  { opacity: .5; }\r\n    100% { opacity: 1; }\r\n  }"

/***/ }),

/***/ "./src/app/components/temple-splash/temple-splash.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/temple-splash/temple-splash.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid fill\">\n  <div class=\"jumbotron jumbotron-fluid\">\n      <div class=\"container\">\n        <h1 class=\"display-4\">KOYASAN</h1>\n        <p class=\"lead\">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>\n        <hr class=\"my-4\">\n        <div class=\"location\">\n          <span class=\"location-icon\"></span>\n          <p>Koyasan, Japan</p>\n        </div>\n    </div><!-- JUMBOTRON -->\n  </div>\n</section>\n\n<!-- scroller -->\n<div class=\"mouse_scroll\">\n    <div class=\"mouse\">\n      <div class=\"wheel\"></div>\n    </div>\n    <div>\n      <span class=\"m_scroll_arrows unu\"></span>\n      <span class=\"m_scroll_arrows doi\"></span>\n      <span class=\"m_scroll_arrows trei\"></span>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/temple-splash/temple-splash.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/temple-splash/temple-splash.component.ts ***!
  \*********************************************************************/
/*! exports provided: TempleSplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempleSplashComponent", function() { return TempleSplashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TempleSplashComponent = /** @class */ (function () {
    function TempleSplashComponent() {
    }
    TempleSplashComponent.prototype.ngOnInit = function () {
    };
    TempleSplashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'section-temple-splash',
            template: __webpack_require__(/*! ./temple-splash.component.html */ "./src/app/components/temple-splash/temple-splash.component.html"),
            styles: [__webpack_require__(/*! ./temple-splash.component.css */ "./src/app/components/temple-splash/temple-splash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TempleSplashComponent);
    return TempleSplashComponent;
}());



/***/ }),

/***/ "./src/app/components/temples/temples.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/temples/temples.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n.fill {\r\n    min-height: 100%;\r\n    height:100%;\r\n}\r\n\r\n.text-outter-wrapper {\r\n    /* background: green; */\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.text-inner-wrapper {\r\n    background-color: white;\r\n    padding: 5vh 5vh 5vh 20vh\r\n}\r\n\r\n#title {\r\n    font-size: 3vw;\r\n    font-family: \"Dosis\";\r\n    font-weight: 600;\r\n}\r\n\r\n/* -----                CARDS GAELLERAY */\r\n\r\n.image-outter-wrapper {\r\n    background: gold;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.image-inner-wrapper{\r\n    background-color: pink;\r\n    flex-grow: 1;\r\n}\r\n\r\n/*                                            Temporary */\r\n\r\n.image {\r\n    background-image: url(\"https://res.cloudinary.com/dzblxtdk3/image/upload/v1532361641/Yuzu%20project/177414827-612x612.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border: 3px white solid;\r\n}\r\n\r\n#lotus {\r\n    width:8em;\r\n    position: fixed;\r\n    left: 5vh;\r\n    top: 5vh;\r\n}"

/***/ }),

/***/ "./src/app/components/temples/temples.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/temples/temples.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section  class=\"container-fluid row fill\">\n\n  <div class=\"col-md-4 text-outter-wrapper\">\n    <div class=\"container-fluid row text-container\">\n          <div class=\"container text-inner-wrapper\" id=\"title\">All the temples that we have</div>\n          <div class=\"container text-inner-wrapper\">All temple rooms are planned for a comfortable stay, but if you are not sure about your choice, we will gladly help you find the most suitable</div>\n          <div class=\"container text-inner-wrapper\">1914 translation by H. Rackham</div>\n    </div>\n  </div>    <!--TEXT-->\n\n\n  <div class=\"col-md-8 image-outter-wrapper\">\n    <div class=\"container-fluid row image-inner-wrapper\">\n      <div class=\"col-sm-4 image\" id=\"imageOne\"></div>\n      <div class=\"col-sm-4 image\" id=\"imageTwo\"></div>\n      <div class=\"col-sm-4 image\" id=\"imageThree\"></div>\n    </div>\n    <div class=\"container-fluid row image-inner-wrapper\">\n        <div class=\"col-sm-8 image\" id=\"imageFour\"></div>\n        <div class=\"col-sm-4 image\" id=\"imageFive\"></div>\n    </div>\n\n  </div>   <!--CARDS GALLERAY-->\n\n</section>\n\n\n<div id=\"lotus\">\n    <svg id=\"svg\" style=\"height:8%; width: 80%;\" viewBox=\"0 0 468 468\">\n        <g>\n          <animateTransform attributeName=\"transform\" type=\"rotate\" from=\"0 234 234\" to=\"360 234 234\" begin=\"0s\" dur=\"40s\" repeatCount=\"indefinite\"/>\n          <animate attributeName=\"fill\" attributeType=\"CSS\" dur=\"20s\" values=\"royalblue;deepskyblue;loivedrab;gold;orange;orangered;crimson;purple;royalblue;\" repeatCount=\"indefinite\"/>\n\n        <path d=\"M233.7 2.7c-0.5 0.8-1.3 2.5-2.2 4.5 -5.3 12.5-9.6 17.7-25.6 29.9 -16.1 12.4-19.8 15.5-22.9 19.4 -3.4 4.2-6.5 11.1-7.6 16.2 -0.4 2.2-1 3.9-1.2 3.9 -0.2 0-2.2-1.8-4.5-4.1 -2.3-2.3-4.3-4.1-4.5-4.1 -0.2 0-0.6 3-0.8 6.7 -0.2 3.7-0.5 6.9-0.8 7.1 -0.2 0.2-0.9 0.1-1.5-0.4 -11.3-8-18.4-9-44.4-6.2 -23.8 2.6-28.9 2.2-41.8-2.9 -3.4-1.4-6.4-2.4-6.5-2.3 -0.1 0.1 0.7 2.8 1.9 5.9 1.2 3.1 2.6 7.6 3.2 9.9 1.4 5.4 1.4 15.7 0.1 24.4 -2.7 18.2-3.7 29.7-3 34.7 0.8 5.7 3 11.5 6.1 16.2 2.6 4 2.5 4.1-5.1 4.1 -2.9 0-5.3 0.2-5.3 0.4 0 0.2 2 2.5 4.5 5.2 2.5 2.7 4.4 5.1 4.3 5.4 -0.1 0.3-1.9 1-4 1.4 -5.5 1.1-9.7 2.9-14.1 5.9 -4.6 3.1-6.6 5.3-19.8 21.6 -5.5 6.9-11.9 14.2-14.1 16.2 -4.3 4-10.4 7.6-18 10.7 -2.7 1.1-5 2.2-5 2.5 0 0.3 2.2 1.4 5 2.6 10.9 4.6 17.6 9.7 24.8 19 13.7 17.7 20.3 25.8 23.3 28.5 4.1 3.6 12.1 7.6 17.4 8.6 2.2 0.4 4 1 4 1.2 0 0.1-0.5 0.7-1.2 1.5l-5.8 6c-0.7 0.8-1.2 1.4-1.2 1.5 0 0.2 3 0.6 6.6 0.8 3.6 0.2 6.9 0.5 7.3 0.8 0.5 0.3 0.2 1-0.9 2.4 -2.4 2.9-5.3 8.8-6.4 13.4 -1.3 5-0.9 16.7 1 33.8 2.2 19.3 1.6 26-3.8 39.4 -1.1 2.7-1.9 5.1-1.8 5.2 0.1 0.1 2.9-0.8 6.2-2 3.3-1.2 7.8-2.7 10-3.2 5.2-1.2 15.8-1.2 23.9 0 17.9 2.6 29.6 3.7 34.7 3 5.7-0.8 11.5-2.9 16.3-6.1 4-2.6 4.1-2.5 4.1 5.1 0 2.9 0.2 5.3 0.4 5.3 0.2 0 2.5-2 5.2-4.5 2.7-2.5 5.1-4.4 5.4-4.3 0.3 0.1 1 1.9 1.4 4 1.1 5.5 2.9 9.7 5.9 14.1 3.2 4.7 5.7 7 21.8 19.9 6.8 5.5 14 11.8 16.1 13.9 4 4.3 7.6 10.4 10.7 18 1.1 2.7 2.2 5 2.5 5 0.3 0 1.4-2.2 2.5-4.9 5.3-12.5 9.6-17.7 25.6-29.9 16.1-12.4 19.8-15.5 22.9-19.4 3.4-4.2 6.5-11.1 7.6-16.2 0.4-2.2 1-3.9 1.2-3.9 0.2 0 2.2 1.8 4.5 4.1 2.3 2.3 4.3 4.1 4.5 4.1 0.2 0 0.6-3 0.8-6.7 0.2-3.7 0.5-6.9 0.8-7.1 0.2-0.2 0.9-0.1 1.5 0.4 11.3 8 18.4 9 44.4 6.2 23.8-2.6 28.9-2.2 41.8 2.9 3.4 1.4 6.4 2.4 6.6 2.2 0.2-0.2-0.7-2.8-1.9-5.9 -1.2-3.1-2.6-7.6-3.2-10 -1.3-5.4-1.4-15.7-0.1-24.3 2.7-17.9 3.7-29.6 3-34.7 -0.8-5.7-2.7-10.9-6-16 -2.7-4.3-2.6-4.3 5-4.3 2.9 0 5.3-0.2 5.3-0.4 0-0.2-1.6-2.1-3.7-4.3 -4.3-4.5-5.7-6.6-4.4-7 0.5-0.1 2.8-0.7 5.3-1.3 10.5-2.5 15.2-6.3 28.9-23.3 16.9-21 21.6-25.1 35.2-30.6 2.7-1.1 5-2.2 5-2.5 0-0.3-2.2-1.4-5-2.6 -10.9-4.6-17.6-9.7-24.7-19 -13.7-17.7-20.3-25.8-23.3-28.5 -4.1-3.6-12.1-7.6-17.4-8.6 -2.2-0.4-4-1-4-1.2 0-0.2 1.8-2.2 4.1-4.5 2.3-2.3 4.1-4.3 4.1-4.5 0-0.2-3-0.6-6.6-0.8 -3.6-0.2-6.9-0.5-7.3-0.8 -0.5-0.3-0.2-1 0.9-2.4 2.4-2.9 5.3-8.8 6.4-13.4 1.3-5 0.9-16.7-1-33.8 -2.2-19.3-1.6-26 3.8-39.4 1.1-2.7 1.9-5.1 1.8-5.2 -0.1-0.1-2.8 0.7-5.9 1.9 -3.1 1.2-7.6 2.6-9.9 3.2 -5.4 1.4-15.8 1.4-24.4 0.1 -17.9-2.7-29.6-3.7-34.7-3 -5.7 0.8-11.5 2.9-16.3 6.1 -4 2.6-4.1 2.5-4.1-5.1 0-2.9-0.2-5.3-0.4-5.3 -0.2 0-2.5 2-5.2 4.5 -2.7 2.5-5.1 4.4-5.4 4.3 -0.3-0.1-1-1.9-1.4-4 -1.1-5.5-2.9-9.7-5.9-14.1 -3.2-4.7-5.7-7-21.8-19.9 -6.8-5.5-14-11.8-16.1-13.9 -4-4.3-7.6-10.4-10.7-18 -1.1-2.7-2.2-5-2.5-5l-0.3 0.4 0 0Z\" id=\"0\" /><path d=\"M252.5 145.9c32.9 6.5 59.6 30 69.8 61.5 3.7 11.4 4.2 14.9 4.2 29.2 0 10-0.2 13.9-1.2 18.1 -11.5 52.5-62.6 84.1-114 70.6 -29.4-7.7-53.1-29.5-63.2-58.1 -4-11.4-4.7-15.9-4.8-30.3 0-10.3 0.2-14.2 1.1-18.4 6.1-28.7 23.7-51.6 49.3-64.5 9.6-4.8 20.9-8 33.1-9.5 4.6-0.6 19.6 0.3 25.5 1.5l0 0Z\" onclick=\"this.style.fill='Gold'\" fill=\"white\" id=\"1\"/><path d=\"M300 310.8c2.4 7.6 1.6 11.1-5.7 23.8 -6.2 10.8-8.4 15.5-9.1 19.7l-0.5 2.7 -3.6-2.4c-2-1.3-6-3.1-9-4 -3-0.9-9.2-2.9-13.7-4.3 -9.5-2.9-12.4-4.8-15.5-9.6 -2.5-4-2.4-4.2 4.1-4.8 5.6-0.5 15.6-2.9 21.5-5.1 9.3-3.5 21.5-10.5 27.5-15.8 1.4-1.2 2.7-2.3 3-2.3 0.2 0 0.7 0.9 1.1 2l0 0ZM174.4 311.4c12.9 10.8 32.4 19.1 48.2 20.6 2.6 0.2 4.9 0.6 5.2 0.7 0.7 0.4-1.7 4.8-3.9 7.4 -2.9 3.3-7.1 5.1-18.9 8.3 -12.2 3.3-14.6 4.2-18.5 6.8 -1.5 1-2.9 1.8-2.9 1.7 -0.1-0.1-0.5-1.9-0.9-4 -0.7-3.8-2.4-7.4-10.3-22.4 -3.4-6.4-4.1-8.4-4.3-11.5 -0.2-3.4 1.3-10.9 2.2-10.9 0.2 0 2.1 1.5 4.3 3.3l0 0ZM139.1 247.9c1.9 16.4 8.4 32.4 18.6 46.2 2.2 2.9 3.6 5.5 3.3 5.8 -0.3 0.3-2.5 1-4.8 1.6 -6.3 1.6-9.5 0.7-20.1-5.3 -12.3-7-16.4-9-20.5-9.8l-3.6-0.7 2.4-3.9c2.4-3.8 3.2-6 8-21.7 2.7-8.7 4.5-12.3 7.6-14.6 2.5-1.9 6.6-4.1 7.7-4.1 0.4 0 1 2.6 1.5 6.5l0 0ZM335.5 242.6c6.3 3.6 7.8 6.4 12 21.9 3.3 12 4.1 14.2 6.7 18.1 1 1.5 1.8 2.9 1.7 2.9 -0.1 0.1-1.9 0.5-4 0.9 -3.8 0.7-7.4 2.4-22.3 10.3 -6 3.2-8.5 4.1-11.3 4.4 -3.3 0.3-10-0.8-10-1.6 0-0.2 0.9-1.5 2.1-3 11-13.4 19.1-33.4 20.5-50.9 0.2-2.6 0.6-4.8 0.8-4.8 0.2 0 1.8 0.8 3.6 1.9l0 0ZM158.1 171l3.9 1.8 -4.3 5.7c-8.9 11.7-15.5 27.3-17.9 42.6 -0.8 4.6-1.5 8.6-1.6 8.7 -0.6 0.8-8.7-4.1-10.7-6.4 -2.7-3.2-3.9-6.3-7.3-18.8 -2.9-10.8-3.9-13.4-6.5-17.2 -1-1.5-1.8-2.9-1.8-3 0-0.2 0.7-0.3 1.5-0.3 3.3 0 9.6-2.6 19.4-7.9 5.6-3 11.3-5.9 12.6-6.4 3.4-1.3 8.1-0.9 12.7 1.2ZM320.9 168.4c1.8 0.5 7.8 3.4 13.4 6.6 10.8 6.2 14.8 8 19.1 8.7l2.7 0.5 -2.2 3.4c-2.6 4-3.7 6.9-7.5 19.9 -3.2 10.8-4.9 14.3-8.5 17.1 -2.8 2.2-5.7 3.7-6.2 3.2 -0.2-0.2-0.7-2.5-1-5 -1.6-11.2-5.8-23.7-11.5-33.8 -3.3-5.9-9.5-14.6-11.9-16.6 -0.8-0.7-1.4-1.4-1.4-1.7 0-0.3 1.3-0.9 3-1.4 5.9-1.9 7.6-2 12-0.9l0 0ZM196.2 119.5c2.8 0.9 8.5 2.7 12.7 3.9 9.1 2.8 12.4 4.6 15.1 8.1 1.5 2.1 4.3 7.5 4.3 8.3 0 0.1-1.8 0.4-3.9 0.6 -17.3 1.6-36.1 9.5-50.3 21 -2 1.6-3.7 2.9-3.9 2.9 -0.5 0-2.8-6.5-3.2-9.3 -0.8-4.8 0.6-9 6.8-19.7 6.2-10.8 8.4-15.5 9-19.6l0.4-2.7 3.9 2.4c2.2 1.3 6.2 3.1 9 4l0 0ZM285.3 116.9c0.7 3.9 2.2 7.1 10.4 22.6 4.1 7.8 4.1 7.8 4.1 13 0 3.5-0.4 6-1.1 7.7l-1.1 2.4 -1.8-1.4c-3.8-3-13.4-9.2-17-11 -9.9-5-23.6-9-33.3-9.8l-5.3-0.4 0.4-1.7c0.2-0.9 1.3-3.5 2.4-5.7 2.9-5.7 5.2-7 19.7-11 11.1-3 18.7-6 20.3-7.9 1.2-1.5 1.5-1.1 2.3 3.1l0 0Z\" fill=\"white\" id=\"2\"/><path d=\"M237.7 336.7c2.3 4.5 6.6 9 10.5 10.8 1.6 0.7 3.2 1.4 3.6 1.4 1.4 0 0.5 1-3 3.5 -5.1 3.7-10.9 9.1-12.9 12.2l-1.7 2.7 -2.5-3.6c-1.4-2-5.2-5.9-8.6-8.7l-6.1-5.1 3.1-1.4c4.2-2 8.9-6.8 11.1-11.5 2.5-5.3 3.9-5.4 6.5-0.2ZM165.8 303.9c0.4 0.5 0.2 2-0.9 5.2 -1.9 5.5-1.9 10.5-0.2 15.6 0.7 2.2 1.2 3.9 1.1 4 -0.1 0.1-3.9-0.3-8.3-0.8 -6.5-0.8-9-0.8-12.4-0.3 -2.4 0.4-4.3 0.7-4.4 0.6 -0.1-0.1 0.1-1.1 0.4-2.3 0.7-2.5 0.8-13.4 0.1-18.3 -0.3-1.8-0.3-3.3 0-3.3 0.2 0 1.6 0.5 2.9 1.1 4 1.7 11.7 1.4 16.4-0.6 4.6-2 4.5-1.9 5.3-1l0 0ZM308.9 304.3c5.2 1.6 10 1.6 14.8 0 2.2-0.7 4-1.2 4.1-1.1 0.1 0.1-0.3 3.8-0.8 8.3 -0.8 6.5-0.9 8.9-0.3 12.4 0.4 2.4 0.7 4.4 0.6 4.5 -0.1 0.1-1.1-0.1-2.3-0.4 -2.5-0.7-13.4-0.8-18.3-0.1 -1.8 0.3-3.3 0.3-3.3 0 0-0.2 0.5-1.6 1.1-2.9 1.5-3.6 1.4-11-0.3-15.8 -1.2-3.5-1.3-3.9-0.3-4.9 0.6-0.6 1-1.1 1.1-1.1 0 0 1.8 0.6 4.1 1.3l0 0ZM123.4 225.5c2.4 3.1 6.6 6 11.3 7.9 2 0.8 3.6 1.7 3.8 2 0.1 0.3-1.7 1.3-3.9 2.3 -6.9 3-12 7.9-13.9 13.5l-0.8 2.4 -3.1-4.1c-4.6-6-9.1-10.8-12.2-12.7l-2.7-1.8 3.1-2c3.4-2.2 7-5.8 11.5-11.6l2.9-3.7 1.1 2.6c0.6 1.5 2 3.7 3.1 5.1l0 0ZM352.8 222.2c4.2 5.5 8.3 9.6 11.4 11.4l2.1 1.2 -3.2 2c-3.4 2.2-7 5.8-11.5 11.6l-2.9 3.7 -1.4-3.2c-1.9-4.3-6.7-8.9-11.8-11.4 -5.3-2.5-5.5-3.7-1-5.8 6.2-2.9 12-8.9 13-13.4 0.2-1 0.7-1.7 1-1.5 0.3 0.2 2.3 2.6 4.3 5.2l0 0ZM149.4 142.6c3.7 0.2 8.6 0 11-0.3 2.4-0.3 4.3-0.4 4.3-0.1 0 0.3-0.4 1.4-0.9 2.6 -2.3 5.5-1.8 12 1.4 19.1 1.3 2.9 1.5 3.8 0.8 4.5 -0.7 0.8-1.2 0.7-3.8-0.6 -3.8-1.9-9.2-3.5-12-3.5 -1.2 0-3.9 0.6-6 1.3 -2.1 0.7-3.9 1.2-4.1 1.1 -0.1-0.1 0.2-3.2 0.7-6.9 0.9-6.4 0.9-13.6-0.1-17.1 -0.4-1.3-0.3-1.5 0.8-1 0.7 0.3 4.2 0.6 7.9 0.8ZM311.4 142.2c6 0.7 8.6 0.7 11.7 0.1 2.2-0.4 4.1-0.7 4.2-0.6 0.1 0.1-0.1 1.1-0.4 2.3 -0.7 2.5-0.8 13.4-0.1 18.3 0.3 1.8 0.3 3.3 0 3.3 -0.2 0-1.6-0.5-2.9-1.1 -4-1.7-11.6-1.4-17 0.6 -2.5 1-4.7 1.5-5 1.2 -0.3-0.3 0.2-2.6 1.1-5.4 2-5.8 2.1-10.8 0.4-15.7 -1.5-4.2-1.5-4.7-0.5-4.3 0.4 0.2 4.3 0.7 8.5 1.2l0 0ZM237 107.4c1.1 1.6 4.7 5.1 8 7.8l6 4.9 -2.9 1.4c-5.3 2.4-9.1 7.3-11.3 14.4 -0.9 3-1.4 3.7-2.5 3.7 -1 0-1.7-0.8-2.8-3.4 -3-7.3-8-12.6-13.8-14.6l-2.4-0.8 4.1-3.1c5.9-4.5 11.7-10.1 13.1-12.7 0.9-1.8 1.3-2 1.8-1.3 0.3 0.5 1.6 2.2 2.7 3.8l0 0Z\" fill=\"white\" id=\"3\"/><path d=\"M319.8 336c1.3 7.8 0.1 11.4-9.7 28.5 -2.7 4.6-5.5 9.8-6.4 11.4 -2 3.9-4.2 11.2-4.2 13.6 0 1-0.1 1.8-0.3 1.8 -0.2 0-2.5-1.4-5.2-3.2 -3.7-2.4-6.9-3.8-12.9-5.7 -4.4-1.4-12.1-3.8-17.2-5.4 -10.6-3.3-14.9-5.9-18.4-11.1 -2.6-3.9-2.8-3.6 6.3-10.5l6.1-4.7 7.3 2.1c9.7 2.8 14.1 5.1 19.1 9.8l4.1 3.9 0.2-2.1c0.9-11.4 1.7-14 7.9-24.9l3.9-6.8 4.2-0.4c2.3-0.2 4.5-0.5 4.8-0.6 0.3-0.1 2.7-0.3 5.2-0.3l4.5-0.1 0.8 4.4ZM160.2 332.7l8.6 1 3.5 6.4c5.1 9.2 6.4 13.1 6.9 20.3l0.4 6.2 4.5-3.9c5.8-5 8.5-6.3 18.9-9.2l8.7-2.4 6 4.8c8.6 7 8.5 6.8 6.6 9.7 -2 3.1-6.6 7.4-9.8 9 -1.4 0.7-8.9 3-16.6 5.1 -7.8 2.1-15.4 4.4-16.8 5 -3.1 1.3-8.6 4.3-10.2 5.8 -1 0.9-1.2 0.9-1.7 0.1 -0.3-0.5-0.6-1.7-0.6-2.6 0-3.6-3.3-12-8.3-20.9 -10.9-19.6-12.2-23.2-10.8-31.2 0.4-2.5 1.1-4.4 1.5-4.4 0.4 0 4.6 0.5 9.3 1l0 0ZM109.5 247.9c1.6 1.8 4.1 5.1 5.7 7.2l2.9 3.8 -2.1 7.3c-2.8 9.5-5.1 14-9.7 19.1l-3.8 4.1 2 0.2c11.4 0.9 13.9 1.7 24.7 7.9 7.8 4.4 7.2 3.3 8 15.9l0.4 6.7 -4.5 0.7c-8 1.3-11.1 0.2-30.3-10.7 -11.1-6.3-15.1-8.1-21-9.2 -2.1-0.4-3.9-0.8-4-0.8 -0.1-0.1 1-1.9 2.5-4.1 3.7-5.4 4.5-7.6 9.2-23.1 4.7-15.7 5.3-17.3 8.1-21.1 1.8-2.5 7.6-7.3 8.9-7.3 0.2 0 1.7 1.5 3.3 3.3ZM364.8 244.8c3.6 2.3 7.7 7 9.4 10.8 0.8 1.8 3 8.9 4.8 15.7 1.8 6.8 4 14 4.7 15.9 1.5 4 5 10.3 6.5 11.5 0.9 0.8 0.9 0.9-0.2 1.3 -0.7 0.3-1.9 0.5-2.9 0.5 -3.7 0.1-12.1 3.4-20.9 8.3 -19.6 10.9-23.2 12.1-31.2 10.8 -2.5-0.4-4.4-1.1-4.4-1.5 0-0.4 0.5-4.6 1-9.3l1-8.6 6.4-3.5c9.2-5.1 13.1-6.4 20.3-6.9l6.2-0.4 -3.9-4.5c-5-5.8-6.3-8.5-9.2-18.9l-2.4-8.7 2.4-3.1c3.6-4.5 9.3-11 9.6-11 0.1 0 1.3 0.7 2.6 1.5l0 0ZM133.3 150.5c2.2 0.4 4 1 4 1.4 0 0.4-0.5 4.6-1 9.3l-1 8.6 -6.4 3.5c-9.2 5-12.9 6.3-20.2 6.8l-6.3 0.5 3.9 4.5c5 5.8 6.3 8.5 9.2 18.9l2.4 8.7 -4.8 5.9c-7 8.6-6.9 8.5-9.8 6.7 -3.6-2.3-7.7-7.1-9.4-10.8 -0.8-1.8-3-8.9-4.8-15.7 -1.8-6.8-3.9-14-4.7-15.9 -1.5-4-5-10.3-6.5-11.5 -0.9-0.8-0.9-0.9 0.2-1.3 0.7-0.3 1.9-0.5 2.9-0.5 3.7-0.1 12.1-3.4 20.9-8.3 20.3-11.3 23.1-12.2 31.6-10.7l0 0ZM343.5 149.2c4 0.9 8.2 2.9 21.8 10.7 11.1 6.3 15.1 8.1 21 9.2 2.1 0.4 3.9 0.8 4 0.8 0.1 0.1-1 1.9-2.5 4.1 -3.7 5.4-4.5 7.6-9.2 23.1 -2.2 7.5-4.5 14.7-5.1 16 -1.7 3.9-4.9 7.9-8.5 10.3 -3.3 2.3-3.4 2.3-4.7 1.1 -0.7-0.7-3.4-3.9-5.9-7.2l-4.6-6.1 2.1-7.3c2.8-9.5 5.1-14 9.7-19.1l3.8-4.1 -2-0.2c-11.4-0.9-13.9-1.7-24.7-7.9 -7.8-4.4-7.2-3.3-8-15.9l-0.4-6.8 3.4-0.6c4.8-0.9 5.8-0.9 9.6-0.1ZM174 81.8c3.7 2.4 6.9 3.8 12.9 5.7 4.4 1.4 12.1 3.8 17.2 5.4 10.6 3.3 14.9 5.9 18.4 11.1 2.6 3.9 2.8 3.6-6.3 10.5l-6.1 4.7 -7.3-2.1c-9.7-2.8-14.1-5.1-19.1-9.8l-4.1-3.9 -0.2 2.1c-0.9 11.4-1.7 14-7.9 24.8 -4.5 7.8-3.3 7.2-15.9 8l-6.7 0.4 -0.8-4.5c-1.3-7.9-0.1-11.4 9.7-28.5 2.7-4.6 5.5-9.8 6.4-11.4 2-3.9 4.2-11.2 4.2-13.6 0-1 0.1-1.8 0.3-1.8 0.2 0 2.5 1.4 5.2 3.2l0 0ZM299.1 79.6c0.2 0.6 0.4 1.7 0.4 2.5 0 3.3 3.5 11.9 8.3 20.6 10.9 19.6 12.1 23.2 10.8 31.2 -0.4 2.5-1.1 4.4-1.5 4.4 -0.4 0-4.6-0.5-9.3-1l-8.6-1 -3.5-6.4c-5.1-9.3-6.4-13-6.9-20.4l-0.4-6.4 -4.5 4c-5.6 5.1-8.3 6.4-18.9 9.3l-8.6 2.4 -6-4.8c-8.6-7-8.5-6.8-6.6-9.7 2-3.1 6.6-7.4 9.8-9 1.4-0.7 8.9-3 16.6-5.1 7.8-2.1 15.4-4.4 16.8-4.9 3.2-1.3 9.8-5.1 10.4-5.9 0.6-0.9 1.4-0.8 1.8 0.4l0 0Z\" fill=\"white\" id=\"4\"/><path d=\"M241 367.2c0 1.4 7.2 8.3 10.6 10.1 3.5 1.9 14.1 5.4 25.2 8.4 2.7 0.7 6.3 1.9 7.7 2.5l2.7 1.1 -0.5 4.1c-0.8 5.6-2.1 9.3-4.9 13.7 -2.8 4.4-6.9 8-23.1 20.4 -12.7 9.7-17.6 14.5-21.8 20.9 -1.4 2.2-2.7 3.9-2.9 3.9 -0.2 0-1.3-1.7-2.5-3.9 -3.5-6-9.3-11.9-23.2-23 -15.5-12.5-19.3-16.2-21.9-21.4 -1.9-3.8-3.8-10.6-3.8-13.8 0-1.6 0.8-1.9 20-7.1 14.4-4 18.7-6.3 23.9-12.9l2.4-3.1 2.4 5.2c1.3 2.9 2.5 5.2 2.7 5.2 0.2 0 1-1.5 1.8-3.4 1.8-4.3 3.7-7.4 4.6-7.4 0.4 0 0.6 0.2 0.6 0.6l0 0ZM102.2 314.9c6.4 3.7 13.2 7.4 15.1 8.2 5 2.2 10.7 3.1 15.3 2.3 2.1-0.3 3.9-0.5 4.1-0.4 0.1 0.1-0.6 2.6-1.7 5.5 -1.1 2.9-1.9 5.3-1.8 5.4 0.1 0.1 1.9-0.5 3.9-1.3 2-0.8 4.9-1.7 6.2-2 2.2-0.4 2.4-0.4 2.1 0.7 -0.9 3.2-1.1 7.4-0.5 11.1 0.7 4.3 3.4 10.2 12.4 27 2.6 4.9 4.8 9.3 4.8 9.9 0 1.1-4.2 4.4-8.6 6.6 -1.8 0.9-5.4 2.1-8.2 2.7 -4.7 1-5.7 1-14.6-0.1 -5.3-0.6-13.4-1.6-18.2-2.3 -10.6-1.5-21.4-1.6-27.4-0.2 -2.5 0.6-4.6 0.9-4.7 0.8 -0.1-0.1 0.2-1.8 0.7-3.8 1.7-6 1.8-16.7 0.3-30.1 -2.7-24.2-2.7-29 0-36.2 1.8-4.8 6.7-11.4 8.1-10.9 0.6 0.2 6.2 3.4 12.7 7.1ZM383.9 310.5c3.2 4.3 5.1 9.1 6 14.8 0.7 4.2 0.1 10.7-2.7 31.1 -1.5 11.1-1.6 21.5-0.2 27.5 0.6 2.5 0.9 4.6 0.8 4.7 -0.1 0.1-1.8-0.2-3.8-0.7 -4.9-1.4-16.2-1.8-24.1-0.9 -29.2 3.2-33.7 3.4-40.2 1.4 -4-1.2-10.8-5.2-12.6-7.3 -0.6-0.8 0.4-3.1 6.3-13.4 3.9-6.9 7.8-14 8.6-15.9 2.2-4.9 3-10.6 2.3-15.2 -0.3-2.1-0.5-3.9-0.4-4.1 0.1-0.1 2.6 0.6 5.5 1.7 2.9 1.1 5.3 1.9 5.4 1.8 0.1-0.1-0.5-1.9-1.3-3.9 -0.8-2-1.7-4.9-2-6.2 -0.4-2.2-0.4-2.4 0.7-2.1 3.2 0.9 7.4 1.1 11.1 0.5 4.2-0.7 11.1-3.9 27.6-12.8 4.6-2.5 8.7-4.5 9.2-4.5 0.5 0 2.2 1.7 3.6 3.6l0 0ZM81.6 188.7c0.9 2.9 2.7 9.3 3.9 14.2 3.7 14.1 6.5 19.3 13.2 24.6l3.1 2.5 -5.2 2.4c-2.9 1.3-5.1 2.5-5.1 2.7 0 0.2 2.4 1.5 5.2 2.9 2.9 1.4 5.3 2.8 5.4 3.2 0.1 0.4-0.7 1.2-1.6 1.7 -2.6 1.5-6.4 5.5-8.3 8.7 -2.1 3.6-3.8 8.5-7.4 20.8 -1.6 5.5-3.4 11.3-4 12.8 -1 2.6-1.1 2.7-3.7 2.7 -5.7 0-13-2.8-18.1-6.9 -2.6-2.1-11-12.3-21.8-26.6 -5.7-7.5-11.4-13.1-16.8-16.5 -2.2-1.4-4-2.7-4-2.8 0-0.2 1.8-1.3 4-2.6 5.9-3.4 11.7-9.2 22.9-23.2 15.5-19.2 19.5-22.7 29.2-24.8 7.4-1.6 7.2-1.7 9 4.3ZM397 183.2c4.6 1.2 8.2 3 11.8 5.9 2.6 2.1 11 12.3 21.8 26.6 5.7 7.5 11.4 13.1 16.8 16.5 2.2 1.4 4 2.7 4 2.8 0 0.2-1.8 1.3-4 2.6 -5.9 3.4-11.7 9.2-22.9 23.2 -15.6 19.4-19.5 22.7-29.5 24.8 -7.2 1.5-6.9 1.6-8.7-4.3 -0.9-2.9-2.3-8.1-3.2-11.6 -4.4-17-6.7-21.5-13.8-27.1l-3.1-2.5 5.2-2.4c2.9-1.3 5.2-2.5 5.2-2.7 0-0.2-2.2-1.3-4.8-2.5 -5.7-2.6-6.9-3.7-5.1-4.7 0.7-0.4 2.7-2.1 4.5-3.8 5.1-4.8 7.2-9.4 12.7-28.5 1.3-4.4 2.7-9.2 3.3-10.6 1-2.6 1.1-2.7 3.7-2.7 1.4 0 4.3 0.4 6.3 0.9l0 0ZM150.3 82.4c3.1 1.2 11.3 6.4 11.3 7.3 0 0.5-3 6-8.6 15.6 -8.7 15.1-10.5 20.6-9.3 28.3 0.3 2.1 0.5 3.9 0.3 4.1 -0.1 0.1-2.6-0.6-5.5-1.7 -2.9-1.1-5.3-1.9-5.4-1.8 -0.1 0.1 0.5 1.9 1.3 3.9 0.8 2 1.7 4.9 2 6.2 0.4 2.2 0.4 2.4-0.7 2.1 -3.1-0.9-8-1.1-11.4-0.5 -3.8 0.7-12 4.5-27.3 12.8 -4.6 2.5-8.7 4.5-9.2 4.5 -1.4 0-6.1-6.7-7.7-10.8 -3-8-3-11.8 0.7-38.7 1.5-11.1 1.6-21.5 0.2-27.5 -0.6-2.5-0.9-4.6-0.8-4.7 0.1-0.1 1.8 0.2 3.8 0.7 6.1 1.7 16.7 1.8 30.3 0.3 23.7-2.6 28.9-2.6 35.9 0l0 0ZM340.2 79.9c5.8 0.7 13.5 1.7 17.2 2.2 8.8 1.3 19.9 1.2 25.5-0.1 2.5-0.6 4.6-0.9 4.7-0.8 0.1 0.1-0.2 1.8-0.7 3.8 -1.4 4.9-1.8 16.2-0.9 24.1 3.2 29.4 3.4 33.7 1.4 40.1 -1.3 4-5.3 10.9-7.3 12.6 -0.8 0.7-3.1-0.4-13.4-6.3 -6.9-3.9-14-7.8-15.9-8.6 -4.9-2.2-10.6-3-15.2-2.3 -2.1 0.3-3.9 0.5-4.1 0.4 -0.1-0.1 0.6-2.6 1.7-5.5 1.1-2.9 1.9-5.3 1.8-5.4 -0.1-0.1-1.9 0.5-3.9 1.3 -2 0.8-4.9 1.7-6.2 2 -2.2 0.4-2.4 0.4-2.1-0.7 0.9-3.2 1.1-7.4 0.5-11.1 -0.7-4.3-3.4-10.2-12.4-27 -2.6-4.9-4.8-9.3-4.8-9.9 0-1.4 6.7-6.1 10.8-7.7 7.1-2.7 9.9-2.8 23.5-1.2l0 0ZM236.6 21.5c3.4 5.9 9.2 11.7 23.2 22.9 15.5 12.5 19.3 16.2 21.9 21.4 1.9 3.8 3.8 10.6 3.8 13.8 0 1.6-0.8 1.9-20 7.1 -14.4 4-18.7 6.3-23.9 13l-2.4 3.1 -2.4-5.2c-1.3-2.9-2.5-5.1-2.7-5.1 -0.2 0-1.5 2.4-2.9 5.2 -1.4 2.9-2.8 5.3-3.2 5.4 -0.4 0.1-1.2-0.7-1.7-1.6 -1.7-2.9-6.2-7-10-8.9 -3.4-1.8-14.1-5.4-25.1-8.4 -2.7-0.7-6.3-1.9-7.7-2.5l-2.7-1.1 0.6-4.1c0.8-5.6 2.1-9.3 4.9-13.7 2.8-4.4 6.9-8 23.1-20.4 12.7-9.7 17.6-14.5 21.8-20.9 1.4-2.2 2.7-3.9 2.9-3.9 0.2 0 1.3 1.8 2.6 4l0 0Z\" fill=\"white\" id=\"5\"/>\n        </g>\n        </svg>\n        <a routerLink=\"/\" class=\"btn btn-primary btn-lg\" role=\"button\">Back</a>\n</div>\n\n<link href=\"https://fonts.googleapis.com/css?family=Dosis\" rel=\"stylesheet\">"

/***/ }),

/***/ "./src/app/components/temples/temples.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/temples/temples.component.ts ***!
  \*********************************************************/
/*! exports provided: TemplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplesComponent", function() { return TemplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplesComponent = /** @class */ (function () {
    function TemplesComponent() {
    }
    TemplesComponent.prototype.ngOnInit = function () {
    };
    TemplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-temples',
            template: __webpack_require__(/*! ./temples.component.html */ "./src/app/components/temples/temples.component.html"),
            styles: [__webpack_require__(/*! ./temples.component.css */ "./src/app/components/temples/temples.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplesComponent);
    return TemplesComponent;
}());



/***/ }),

/***/ "./src/app/components/user-info/user-info.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.ts ***!
  \*************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'section-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/components/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/components/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/yuzu-intro/yuzu-intro.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/yuzu-intro/yuzu-intro.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/yuzu-intro/yuzu-intro.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/yuzu-intro/yuzu-intro.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  yuzu-intro works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/yuzu-intro/yuzu-intro.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/yuzu-intro/yuzu-intro.component.ts ***!
  \***************************************************************/
/*! exports provided: YuzuIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YuzuIntroComponent", function() { return YuzuIntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YuzuIntroComponent = /** @class */ (function () {
    function YuzuIntroComponent() {
    }
    YuzuIntroComponent.prototype.ngOnInit = function () {
    };
    YuzuIntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'yuzu-intro',
            template: __webpack_require__(/*! ./yuzu-intro.component.html */ "./src/app/components/yuzu-intro/yuzu-intro.component.html"),
            styles: [__webpack_require__(/*! ./yuzu-intro.component.css */ "./src/app/components/yuzu-intro/yuzu-intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YuzuIntroComponent);
    return YuzuIntroComponent;
}());



/***/ }),

/***/ "./src/app/temple.service.ts":
/*!***********************************!*\
  !*** ./src/app/temple.service.ts ***!
  \***********************************/
/*! exports provided: TempleService, Temple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempleService", function() { return TempleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temple", function() { return Temple; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl;
// const backendUrl = "http://localhost:3000"
var TempleService = /** @class */ (function () {
    function TempleService(myHttpServ) {
        this.myHttpServ = myHttpServ;
    }
    TempleService.prototype.getList = function () {
        return this.myHttpServ
            .get(backendUrl + "/api/temples")
            .toPromise();
    };
    TempleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TempleService);
    return TempleService;
}());

var Temple = /** @class */ (function () {
    function Temple() {
    }
    return Temple;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // development backendURL is our local Express server
    backendUrl: "http://localhost:3000"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Documents\6_Ironhack\lessons\module3\Project Yuzu\yuzu-front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map