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
var task_list_service_1 = require("./task-list.service");
var task_service_1 = require("./task.service");
var AppComponent = (function () {
    function AppComponent(taskListService, taskService) {
        this.taskListService = taskListService;
        this.taskService = taskService;
        this.name = 'Mini Trello';
        this.taskToAdd = new task_1.Task();
        this.taskToAdd.taskListId = 0;
    }
    AppComponent.prototype.getTaskLists = function () {
        var _this = this;
        this.taskLists = [];
        this.taskListService.getAll().then(function (taskLists) {
            var _loop_1 = function (taskList) {
                _this.taskService.getByTaskList(taskList.id)
                    .then(function (response) {
                    var final = new tasklist_1.TaskList();
                    final.id = taskList.id;
                    final.name = taskList.name;
                    console.log(response);
                    final.tasks = response;
                    _this.taskLists.push(final);
                });
            };
            for (var _i = 0, taskLists_1 = taskLists; _i < taskLists_1.length; _i++) {
                var taskList = taskLists_1[_i];
                _loop_1(taskList);
            }
        });
    };
    AppComponent.prototype.addToDo = function () {
        var _this = this;
        this.taskService.create(this.taskToAdd)
            .then(function (response) { return _this.taskLists[0].tasks.push(response); });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getTaskLists();
    };
    AppComponent.prototype.onNotify = function (message) {
        this.getTaskLists();
    };
    return AppComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", task_1.Task)
], AppComponent.prototype, "taskToAdd", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './html/app.component.html',
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [task_list_service_1.TaskListService, task_service_1.TaskService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map