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
var task_1 = require("./task");
var tasklist_1 = require("./tasklist");
var task_service_1 = require("./task.service");
var app_component_1 = require("./app.component");
var CardListComponent = (function () {
    function CardListComponent(taskService, appComponent) {
        this.taskService = taskService;
        this.appComponent = appComponent;
        this.notify = new core_1.EventEmitter();
        this.selectedTask = new task_1.Task();
    }
    CardListComponent.prototype.moveToDone = function () {
        var _this = this;
        this.selectedTask.taskListId = 1;
        this.taskService.modify(this.selectedTask).then(function (newTask) {
            _this.notify.emit("refresh");
        });
    };
    CardListComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    return CardListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", tasklist_1.TaskList)
], CardListComponent.prototype, "tasks", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CardListComponent.prototype, "notify", void 0);
CardListComponent = __decorate([
    core_1.Component({
        selector: 'card-list',
        templateUrl: './html/card-list.component.html',
        styleUrls: ['./css/card-list.component.css'],
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService, app_component_1.AppComponent])
], CardListComponent);
exports.CardListComponent = CardListComponent;
//# sourceMappingURL=card-list.component.js.map