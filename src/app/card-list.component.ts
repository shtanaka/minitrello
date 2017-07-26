import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Task } from "./task";
import { TaskList } from "./tasklist";
import { TaskService } from "./task.service";
import { AppComponent } from "./app.component";

@Component({
    selector: 'card-list',
    templateUrl: './html/card-list.component.html',
    styleUrls: ['./css/card-list.component.css'],
})

export class CardListComponent {
    @Input() tasks: TaskList;
    selectedTask: Task;
    @Output() notify: EventEmitter<any> = new EventEmitter();

    constructor(private taskService: TaskService, private appComponent: AppComponent) {
        this.selectedTask = new Task();
    }

    moveToDone(): void {

        this.selectedTask.taskListId = 1;
        this.taskService.modify(this.selectedTask).then((newTask) => {
            this.notify.emit("refresh");
        });
    }

    onSelect(task: Task): void {
        this.selectedTask = task;
    }

}
