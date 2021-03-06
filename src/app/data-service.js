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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var logger_service_1 = require('./logger.service');
var DataService = (function () {
    function DataService(loggerService, http) {
        this.loggerService = loggerService;
        this.http = http;
        this.customersUrl = 'api/customers';
    }
    DataService.prototype.getCustomersP = function () {
        var _this = this;
        this.loggerService.log("getting customers as promise via Http....");
        return this.http.get(this.customersUrl).toPromise().then(function (response) {
            var custs = response.json().data;
            _this.loggerService.log("Got " + custs.length + " customers");
            return custs;
        }, function (error) {
            _this.loggerService.log("An error occured " + error);
            return Promise.reject("Error happened check the console.");
        });
    };
    DataService.prototype.getCustomersO = function () {
        this.loggerService.log("getting customers as an observable via http ....");
        return this.http.get(this.customersUrl)
            .map(function (response) { return response.json().data; });
        ;
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService, http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data-service.js.map