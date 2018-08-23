webpackJsonp([10],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_authentication__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MapProvider = /** @class */ (function () {
    function MapProvider(http, authenticationProvider) {
        this.http = http;
        this.authenticationProvider = authenticationProvider;
        this.bars = [];
        this.restaurants = [];
        this.cafes = [];
        this.superMarkets = [];
        this.pathSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.path$ = this.pathSubject.asObservable();
        this.eventId = authenticationProvider.eventId;
        // load default location and other properties via api call
        this.fetchEntries();
    }
    MapProvider.prototype.fetchEntries = function () {
        // api call goes here
        var defaultLocation = {
            lat: 8.4036527,
            lng: 49.0068901
        };
        var markers = {
            bars: [
                { title: 'bar1',
                    lat: 0,
                    long: 1 },
                { title: 'bar2',
                    lat: 0,
                    long: 1 },
                { title: 'bar3',
                    lat: 0,
                    long: 1 }
            ],
            restaurants: [
                { title: 'food1',
                    lat: 0,
                    long: 1 },
                { title: 'food2',
                    lat: 0,
                    long: 1 },
                { title: 'food3',
                    lat: 0,
                    long: 1 }
            ],
            cafes: [
                { title: 'cafe1',
                    lat: 0,
                    long: 1 },
                { title: 'cafe2',
                    lat: 0,
                    long: 1 },
                { title: 'cafe3',
                    lat: 0,
                    long: 1 }
            ],
            superMarkets: [
                { title: 'market1',
                    lat: 0,
                    long: 1 },
                { title: 'market2',
                    lat: 0,
                    long: 1 },
                { title: 'market3',
                    lat: 0,
                    long: 1 }
            ],
        };
        this.defaultLocation = defaultLocation;
        this.bars = markers.bars;
        this.restaurants = markers.restaurants;
        this.cafes = markers.cafes;
        this.superMarkets = markers.superMarkets;
    };
    MapProvider.prototype.setPath = function () {
    };
    MapProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_authentication__["a" /* AuthenticationProvider */]])
    ], MapProvider);
    return MapProvider;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__newsfeed_newsfeed__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agenda_agenda__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(authenticationProvider) {
        this.authenticationProvider = authenticationProvider;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__newsfeed_newsfeed__["a" /* NewsfeedPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__agenda_agenda__["a" /* AgendaPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
    }
    TabsPage.prototype.ionViewCanEnter = function () {
        return this.authenticationProvider.isAuthenticated();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Agenda" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Map" tabIcon="map"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agenda_edit_agenda_edit__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_feedback__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AgendaMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaMenuPage = /** @class */ (function () {
    function AgendaMenuPage(navCtrl, navParams, authenticationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenticationProvider = authenticationProvider;
    }
    AgendaMenuPage.prototype.onAddEntry = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__agenda_edit_agenda_edit__["a" /* AgendaEditPage */]);
    };
    AgendaMenuPage.prototype.onSendFeedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__feedback_feedback__["a" /* FeedbackPage */]);
    };
    AgendaMenuPage.prototype.onLogout = function () {
    };
    AgendaMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda-menu',template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/agenda/agenda-menu/agenda-menu.html"*/'<!--\n  Generated template for the AgendaMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-list>\n    <button ion-item *ngIf="authenticationProvider.isAdministrator()" (click)="onAddEntry()">Add Entry</button>\n    <button ion-item (click)="onSendFeedback()">Send Feedback</button>\n    <button ion-item (click)="onLogout()">Logout</button>\n  </ion-list>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/agenda/agenda-menu/agenda-menu.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]) === "function" && _c || Object])
    ], AgendaMenuPage);
    return AgendaMenuPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=agenda-menu.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_agenda_agenda__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agenda_menu_agenda_menu__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agenda_edit_agenda_edit__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaPage = /** @class */ (function () {
    function AgendaPage(navCtrl, navParams, agendaProvider, altertCtrl, popoverCtrl, authenticationProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.agendaProvider = agendaProvider;
        this.altertCtrl = altertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authenticationProvider = authenticationProvider;
        this.agendaGroupings = [];
        agendaProvider.entries$.subscribe(function (entries) {
            var agendaGroupings = [];
            var currentDate = -1;
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                if (entry.date.getDate() === currentDate) {
                    agendaGroupings[agendaGroupings.length - 1].entries.push(entry);
                }
                else {
                    var newDate = '';
                    var now = new Date();
                    var tomorrow = new Date(now.valueOf() + 24 * 60 * 60 * 1000);
                    if (entry.date.getDate() === now.getDate() &&
                        entry.date.getMonth() === now.getMonth() &&
                        entry.date.getFullYear() === now.getFullYear()) {
                        newDate = 'Today';
                    }
                    else if (entry.date.getDate() === tomorrow.getDate() &&
                        entry.date.getMonth() === tomorrow.getMonth() &&
                        entry.date.getFullYear() === tomorrow.getFullYear()) {
                        newDate = 'Tomorrow';
                    }
                    else {
                        if (entry.date.getDate() < 10) {
                            newDate = '0';
                        }
                        newDate += entry.date.getDate() + '.';
                        if (entry.date.getMonth() < 10) {
                            newDate += '0';
                        }
                        newDate += entry.date.getMonth() + '.' + entry.date.getFullYear();
                    }
                    agendaGroupings.push({
                        header: newDate,
                        entries: [entry]
                    });
                    currentDate = entry.date.getDate();
                }
            }
            _this.agendaGroupings = agendaGroupings;
        });
    }
    AgendaPage.prototype.ionViewDidLoad = function () { };
    AgendaPage.prototype.onRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.agendaProvider.fetchEntries();
            refresher.complete();
        }, 2000);
    };
    AgendaPage.prototype.onShowInformation = function (entry) {
        var alert = this.altertCtrl.create({
            subTitle: entry.title,
            message: entry.description || '',
            buttons: ['Ok']
        });
        alert.present();
    };
    AgendaPage.prototype.onShowMenu = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__agenda_menu_agenda_menu__["a" /* AgendaMenuPage */]);
        popover.present({ ev: event });
    };
    AgendaPage.prototype.onEditEntry = function (entry) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__agenda_edit_agenda_edit__["a" /* AgendaEditPage */], { entry: entry });
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/agenda/agenda.html"*/'<!--\n  Generated template for the AgendaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>agenda</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="onShowMenu($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="onRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-item-group *ngFor="let agendaGroup of agendaGroupings">\n    <ion-item-divider color="light">{{agendaGroup.header}}</ion-item-divider>\n    <ion-list>\n      <ion-item-sliding *ngFor="let entry of agendaGroup.entries">\n        <ion-item>{{entry.title}}</ion-item>\n        <ion-item-options side="right">\n          <button *ngIf="authenticationProvider.isAdministrator()" ion-button color="danger" (click)="onEditEntry(entry)">\n            <ion-icon name="create"></ion-icon>\n            edit\n          </button>\n          <button ion-button color="light" (click)="onShowInformation(entry)">\n            <ion-icon name="information-circle"></ion-icon>\n            info\n          </button>\n          <button ion-button color="primary">\n            <ion-icon name="map"></ion-icon>\n            map\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/agenda/agenda.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_agenda_agenda__["a" /* AgendaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], AgendaPage);
    return AgendaPage;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authenticationProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenticationProvider = authenticationProvider;
        this.loadingCtrl = loadingCtrl;
        this.events = [];
        this.tabs = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
        authenticationProvider.events$.subscribe(function (events) {
            _this.events = events;
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Lets see..."
        });
        loader.present();
        setTimeout(function () {
            _this.authenticationProvider._isAuthenticated = true;
            loader.dismiss();
        }, 2000);
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]).catch(function () {
                // handle access denial
            });
        }, 2300);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>Event</ion-label>\n          <ion-select [(ngModel)]="selectedEvent" multiple="false" #eventType>\n            <ion-option *ngFor="let event of events">\n              {{event.title}}\n              ({{event.place}})\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-item>\n        <ion-label>Password</ion-label>\n        <ion-input type="text" #eventCode></ion-input>\n      </ion-item>\n\n      <button ion-button full (click)="onLogin()" [disabled]="!eventCode.hasValue() || !eventType.hasValue()">Login</button>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_newsfeed_newsfeed__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsfeed_menu_newsfeed_menu__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NewsfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsfeedPage = /** @class */ (function () {
    function NewsfeedPage(navCtrl, navParams, newsfeedProvider, popoverCtrl, authenticationProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newsfeedProvider = newsfeedProvider;
        this.popoverCtrl = popoverCtrl;
        this.authenticationProvider = authenticationProvider;
        this.news = [];
        newsfeedProvider.news$.subscribe(function (news) {
            _this.news = news;
        });
    }
    NewsfeedPage.prototype.ionViewDidLoad = function () { };
    NewsfeedPage.prototype.onRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.newsfeedProvider.fetchNews();
            refresher.complete();
        }, 2000);
    };
    NewsfeedPage.prototype.onShowMenu = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__newsfeed_menu_newsfeed_menu__["a" /* NewsfeedMenuPage */]);
        popover.present({ ev: event });
    };
    NewsfeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newsfeed',template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/newsfeed/newsfeed.html"*/'<!--\n  Generated template for the NewsfeedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>newsfeed</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onShowMenu($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="onRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <newsfeed-entry *ngFor="let entry of news" [entry]="entry"></newsfeed-entry>\n</ion-content>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/newsfeed/newsfeed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_newsfeed_newsfeed__["a" /* NewsfeedProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], NewsfeedPage);
    return NewsfeedPage;
}());

//# sourceMappingURL=newsfeed.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsfeed_edit_newsfeed_edit__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_feedback__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NewsfeedMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsfeedMenuPage = /** @class */ (function () {
    function NewsfeedMenuPage(navCtrl, navParams, authenticationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenticationProvider = authenticationProvider;
    }
    NewsfeedMenuPage.prototype.onAddEntry = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__newsfeed_edit_newsfeed_edit__["a" /* NewsfeedEditPage */]);
    };
    NewsfeedMenuPage.prototype.onSendFeedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__feedback_feedback__["a" /* FeedbackPage */]);
    };
    NewsfeedMenuPage.prototype.onLogout = function () { };
    NewsfeedMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newsfeed-menu',template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/newsfeed/newsfeed-menu/newsfeed-menu.html"*/'<!--\n  Generated template for the NewsfeedMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-list>\n  <button ion-item *ngIf="authenticationProvider.isAdministrator()" (click)="onAddEntry()">Add Entry</button>\n  <button ion-item (click)="onSendFeedback()">Send Feedback</button>\n  <button ion-item (click)="onLogout()">Logout</button>\n</ion-list>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/newsfeed/newsfeed-menu/newsfeed-menu.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]) === "function" && _c || Object])
    ], NewsfeedMenuPage);
    return NewsfeedMenuPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=newsfeed-menu.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_map_map__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_menu_map_menu__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, mapProvider, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mapProvider = mapProvider;
        this.popoverCtrl = popoverCtrl;
        this.lat = 8.4036527;
        this.lng = 49.0068901;
        this.markers = [
            __WEBPACK_IMPORTED_MODULE_2_leaflet__["marker"]([8.4036527, 49.0068901], {
                icon: __WEBPACK_IMPORTED_MODULE_2_leaflet__["icon"]({
                    iconUrl: './assets/images/pin.png'
                }),
                title: 'Marker1'
            }),
            __WEBPACK_IMPORTED_MODULE_2_leaflet__["marker"]([8.40366, 49.00691], {
                icon: __WEBPACK_IMPORTED_MODULE_2_leaflet__["icon"]({
                    iconUrl: './assets/images/pin.png'
                }),
                title: 'Marker2'
            })
        ];
        this.options = {
            layers: [
                __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                })
            ],
            zoom: 17,
            maxZoom: 19,
            minZoom: 11,
            center: __WEBPACK_IMPORTED_MODULE_2_leaflet__["latLng"](this.lng, this.lat)
        };
        this.lat = mapProvider.defaultLocation.lat;
        this.lng = mapProvider.defaultLocation.lng;
    }
    MapPage.prototype.onShowMenu = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__map_menu_map_menu__["a" /* MapMenuPage */]);
        popover.present({ ev: event });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>map</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="onShowMenu($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <agm-map [latitude]="lat" [longitude]="lng">\n    <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>\n  </agm-map> -->\n  <div style="height: 100%" leaflet [leafletOptions]="options" [leafletLayers]="markers">\n  </div>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light"><ion-icon name="compass"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab><ion-icon name="cart"></ion-icon></button>\n      <button ion-fab><ion-icon name="cafe"></ion-icon></button>\n      <button ion-fab><ion-icon name="beer"></ion-icon></button>\n      <button ion-fab><ion-icon name="pizza"></ion-icon></button>\n      <button ion-fab><ion-icon name="home"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_map_map__["a" /* MapProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_map_map__["a" /* MapProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]) === "function" && _d || Object])
    ], MapPage);
    return MapPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 176:
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
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationProvider = /** @class */ (function () {
    function AuthenticationProvider(http) {
        var _this = this;
        this.http = http;
        this._isAuthenticated = true;
        this.eventId = 1;
        this.events = [];
        this.eventsSubject = new __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs__["BehaviorSubject"](this.events);
        this.events$ = this.eventsSubject.asObservable();
        http.get('http://localhost:3000/api/events').subscribe(function (events) {
            _this.events = events;
            _this.eventsSubject.next(_this.events);
        });
    }
    AuthenticationProvider.prototype.isAdministrator = function () {
        return true;
    };
    AuthenticationProvider.prototype.isAuthenticated = function () {
        return this._isAuthenticated;
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agenda/agenda-edit/agenda-edit.module": [
		701,
		9
	],
	"../pages/agenda/agenda-menu/agenda-menu.module": [
		702,
		8
	],
	"../pages/agenda/agenda.module": [
		703,
		7
	],
	"../pages/feedback/feedback.module": [
		704,
		0
	],
	"../pages/login/login.module": [
		705,
		6
	],
	"../pages/map/map-menu/map-menu.module": [
		706,
		5
	],
	"../pages/map/map.module": [
		707,
		4
	],
	"../pages/newsfeed/newsfeed-edit/newsfeed-edit.module": [
		708,
		3
	],
	"../pages/newsfeed/newsfeed-menu/newsfeed-menu.module": [
		709,
		2
	],
	"../pages/newsfeed/newsfeed.module": [
		710,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 220;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AgendaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AgendaProvider = /** @class */ (function () {
    function AgendaProvider(http, mapProvider, authenticationProvider) {
        var _this = this;
        this.http = http;
        this.mapProvider = mapProvider;
        this.authenticationProvider = authenticationProvider;
        this.entries = [];
        this.entriesSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](this.entries);
        this.entries$ = this.entriesSubject.asObservable();
        this.eventId = authenticationProvider.eventId;
        this.fetchEntries();
        setInterval(function () {
            _this.fetchEntries();
        }, 1000 * 60 * 5);
    }
    AgendaProvider.prototype.fetchEntries = function () {
        var _this = this;
        this.http.get('http://localhost:3000/api/' + this.eventId + '/agenda').subscribe(function (entries) {
            // this workaround was necessary to avoid 'entry.date.getDate is not a function' error
            var newEntries = entries.map(function (e) {
                e.date = new Date(e.date.valueOf());
                return e;
            });
            if (JSON.stringify(_this.entries) !== JSON.stringify(newEntries)) {
                _this.entries = newEntries;
                _this.entriesSubject.next(_this.entries);
            }
        });
    };
    AgendaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapProvider */], __WEBPACK_IMPORTED_MODULE_4__authentication_authentication__["a" /* AuthenticationProvider */]])
    ], AgendaProvider);
    return AgendaProvider;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_authentication__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the NewsfeedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NewsfeedProvider = /** @class */ (function () {
    function NewsfeedProvider(http, authenticationProvider) {
        var _this = this;
        this.http = http;
        this.authenticationProvider = authenticationProvider;
        this.news = [];
        this.newsSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](this.news);
        this.news$ = this.newsSubject.asObservable();
        this.eventId = authenticationProvider.eventId;
        this.fetchNews();
        setInterval(function () {
            _this.fetchNews();
        }, 1000 * 60 * 5);
    }
    NewsfeedProvider.prototype.fetchNews = function () {
        var _this = this;
        // API call
        this.http.get('http://localhost:3000/api/' + this.eventId + '/newsfeed').subscribe(function (entries) {
            // this workaround was necessary to avoid 'entry.date.getDate is not a function' error
            var newNews = entries.map(function (e) {
                e.date = new Date(e.date.valueOf());
                return e;
            });
            if (JSON.stringify(_this.news) !== JSON.stringify(newNews)) {
                _this.news = newNews;
                _this.newsSubject.next(_this.news);
            }
        });
    };
    NewsfeedProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_authentication__["a" /* AuthenticationProvider */]])
    ], NewsfeedProvider);
    return NewsfeedProvider;
}());

//# sourceMappingURL=newsfeed.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_feedback__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MapMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapMenuPage = /** @class */ (function () {
    function MapMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MapMenuPage.prototype.onSendFeedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__feedback_feedback__["a" /* FeedbackPage */]);
    };
    MapMenuPage.prototype.onLogout = function () {
    };
    MapMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-menu',template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/map/map-menu/map-menu.html"*/'<!--\n  Generated template for the MapMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-list>\n    <button ion-item (click)="onSendFeedback()">Send Feedback</button>\n    <button ion-item (click)="onLogout()">Logout</button>\n  </ion-list>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/map/map-menu/map-menu.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], MapMenuPage);
    return MapMenuPage;
    var _a, _b;
}());

//# sourceMappingURL=map-menu.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedEntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authentication_authentication__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsfeed_edit_newsfeed_edit__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NewsfeedEntryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NewsfeedEntryComponent = /** @class */ (function () {
    function NewsfeedEntryComponent(authenticationProvider, navCtrl) {
        this.authenticationProvider = authenticationProvider;
        this.navCtrl = navCtrl;
    }
    NewsfeedEntryComponent.prototype.onEditEntry = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__newsfeed_edit_newsfeed_edit__["a" /* NewsfeedEditPage */], { entry: this.entry });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NewsfeedEntryComponent.prototype, "entry", void 0);
    NewsfeedEntryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'newsfeed-entry',template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/newsfeed/newsfeed-entry/newsfeed-entry.html"*/'<ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img [src]="entry.author.imgUrl">\n    </ion-avatar>\n    <h2>{{entry.author.name}}</h2>\n    <p>{{entry.date.getDate()}}.{{entry.date.getMonth()}}.{{entry.date.getFullYear()}} {{entry.date.getHours()}}:{{entry.date.getMinutes()}}:{{entry.date.getSeconds()}}</p>\n  </ion-item>\n\n  <img *ngIf="entry.imgUrl" [src]="entry.imgUrl">\n\n  <ion-card-content>\n    <h2><strong>{{entry.title}}</strong></h2>\n    <p>{{entry.content}}</p>\n  </ion-card-content>\n\n  <ion-row *ngIf="authenticationProvider.isAdministrator()">\n    <button ion-button full (click)="onEditEntry()">Edit</button>\n  </ion-row>\n\n</ion-card>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/newsfeed/newsfeed-entry/newsfeed-entry.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__["g" /* NavController */]])
    ], NewsfeedEntryComponent);
    return NewsfeedEntryComponent;
}());

//# sourceMappingURL=newsfeed-entry.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_newsfeed_newsfeed__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_agenda_agenda__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_newsfeed_newsfeed__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_agenda_agenda__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_components_module__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_map_map__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__asymmetrik_ngx_leaflet__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_authentication_authentication__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_agenda_agenda_edit_agenda_edit__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_newsfeed_newsfeed_edit_newsfeed_edit__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_newsfeed_newsfeed_menu_newsfeed_menu__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_agenda_agenda_menu_agenda_menu__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_newsfeed_newsfeed_entry_newsfeed_entry__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_map_map_menu_map_menu__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_feedback_feedback__ = __webpack_require__(711);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_newsfeed_newsfeed__["a" /* NewsfeedPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_newsfeed_newsfeed_entry_newsfeed_entry__["a" /* NewsfeedEntryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_agenda_agenda_edit_agenda_edit__["a" /* AgendaEditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_newsfeed_newsfeed_edit_newsfeed_edit__["a" /* NewsfeedEditPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_newsfeed_newsfeed_menu_newsfeed_menu__["a" /* NewsfeedMenuPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_agenda_agenda_menu_agenda_menu__["a" /* AgendaMenuPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_map_map_menu_map_menu__["a" /* MapMenuPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_feedback_feedback__["a" /* FeedbackPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__asymmetrik_ngx_leaflet__["a" /* LeafletModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agenda/agenda-edit/agenda-edit.module#AgendaEditPageModule', name: 'AgendaEditPage', segment: 'agenda-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agenda/agenda-menu/agenda-menu.module#AgendaMenuPageModule', name: 'AgendaMenuPage', segment: 'agenda-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agenda/agenda.module#AgendaPageModule', name: 'AgendaPage', segment: 'agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map-menu/map-menu.module#MapMenuPageModule', name: 'MapMenuPage', segment: 'map-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newsfeed/newsfeed-edit/newsfeed-edit.module#NewsfeedEditPageModule', name: 'NewsfeedEditPage', segment: 'newsfeed-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newsfeed/newsfeed-menu/newsfeed-menu.module#NewsfeedMenuPageModule', name: 'NewsfeedMenuPage', segment: 'newsfeed-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newsfeed/newsfeed.module#NewsfeedPageModule', name: 'NewsfeedPage', segment: 'newsfeed', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_newsfeed_newsfeed__["a" /* NewsfeedPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_agenda_agenda_edit_agenda_edit__["a" /* AgendaEditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_newsfeed_newsfeed_edit_newsfeed_edit__["a" /* NewsfeedEditPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_newsfeed_newsfeed_menu_newsfeed_menu__["a" /* NewsfeedMenuPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_agenda_agenda_menu_agenda_menu__["a" /* AgendaMenuPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_map_map_menu_map_menu__["a" /* MapMenuPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_feedback_feedback__["a" /* FeedbackPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_newsfeed_newsfeed__["a" /* NewsfeedProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_agenda_agenda__["a" /* AgendaProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_map_map__["a" /* MapProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_authentication_authentication__["a" /* AuthenticationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authenticationProvider) {
        this.authenticationProvider = authenticationProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        if (this.authenticationProvider.isAuthenticated()) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        }
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [],
            exports: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/feedback/feedback.html"*/'<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>feedback</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/feedback/feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AgendaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaEditPage = /** @class */ (function () {
    function AgendaEditPage(navCtrl, navParams, authenticationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenticationProvider = authenticationProvider;
        this.entry = navParams.data.entry || null;
    }
    AgendaEditPage.prototype.ionViewCanEnter = function () {
        return this.authenticationProvider.isAdministrator();
    };
    AgendaEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda-edit',template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/agenda/agenda-edit/agenda-edit.html"*/'<!--\n  Generated template for the AgendaEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>agenda-edit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/agenda/agenda-edit/agenda-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], AgendaEditPage);
    return AgendaEditPage;
}());

//# sourceMappingURL=agenda-edit.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewsfeedEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsfeedEditPage = /** @class */ (function () {
    function NewsfeedEditPage(navCtrl, navParams, authenticationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenticationProvider = authenticationProvider;
        this.entry = navParams.data.entry || null;
    }
    NewsfeedEditPage.prototype.ionViewCanEnter = function () {
        return this.authenticationProvider.isAdministrator();
    };
    NewsfeedEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newsfeed-edit',template:/*ion-inline-start:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/newsfeed/newsfeed-edit/newsfeed-edit.html"*/'<!--\n  Generated template for the NewsfeedEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>newsfeed-edit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/christophstein/Documents/dev/event-pwa/event-pwa/src/pages/newsfeed/newsfeed-edit/newsfeed-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], NewsfeedEditPage);
    return NewsfeedEditPage;
}());

//# sourceMappingURL=newsfeed-edit.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.js.map