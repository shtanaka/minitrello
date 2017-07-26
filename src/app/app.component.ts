import { Component, Input, OnInit, Injectable } from '@angular/core';
import { Task } from "./task";
import { TaskList } from "./tasklist";
import { TaskListService } from "./task-list.service";
import { TaskService } from "./task.service";

@Component({
    selector: 'my-app',
    templateUrl: './html/app.component.html',
    // styleUrls: ['./css/app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {

    name = 'Mini Trello';
    taskLists: TaskList[];

    @Input() taskToAdd: Task;

    constructor(private taskListService: TaskListService, private taskService: TaskService) {
        this.taskToAdd = new Task();
        this.taskToAdd.taskListId = 0;
    }

    getTaskLists(): void {
        this.taskLists = [];
        this.taskListService.getAll().then((taskLists) => {
            for (let taskList of taskLists) {
                this.taskService.getByTaskList(taskList.id)
                    .then((response) => {
                        let final = new TaskList();
                        final.id = taskList.id;
                        final.name = taskList.name;
                        console.log(response);
                        final.tasks = response;
                        this.taskLists.push(final);
                    });
            }

        });
    }

    addToDo(): void {
        this.taskService.create(this.taskToAdd)
            .then(response => this.taskLists[0].tasks.push(response));
    }

    ngOnInit(): void {
        this.getTaskLists();
    }

    onNotify(message: string) {
        this.getTaskLists();
    }


}
