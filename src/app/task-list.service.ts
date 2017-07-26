import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { TaskList } from './tasklist';
import { Headers, Http } from '@angular/http';
import { Task } from "./task";

@Injectable()
export class TaskListService {

    url: string;

    constructor(private http: Http) {
        this.url = 'http://localhost:3004/taskLists/';
    }

    getAll(): Promise<TaskList[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    get(id: number): Promise<TaskList> {
        return this.http.get(this.url + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}