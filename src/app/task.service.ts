import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Task } from "./task";

@Injectable()
export class TaskService {

    url: string;

    constructor(private http: Http) {
        this.url = 'http://localhost:3004/tasks/';
    }

    getAll(): Promise<Task[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    get(id: number): Promise<Task> {
        return this.http.get(this.url + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    create(task: Task): Promise<Task> {
        return this.http.post(this.url, task)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    modify(task: Task) {
        return this.http.put(this.url + task.id, task)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    delete(task: Task) {
        return this.http.delete(this.url + task.id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getByTaskList(id: number): Promise<Task[]> {
        return this.http.get(this.url + "?taskListId=" + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}