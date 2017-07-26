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
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var http_1 = require("@angular/http");
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.url = 'http://localhost:3004/tasks/';
    }
    TaskService.prototype.getAll = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.get = function (id) {
        return this.http.get(this.url + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.create = function (task) {
        return this.http.post(this.url, task)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.modify = function (task) {
        return this.http.put(this.url + task.id, task)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.delete = function (task) {
        return this.http.delete(this.url + task.id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.getByTaskList = function (id) {
        return this.http.get(this.url + "?taskListId=" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map