import { Task } from "./task";

export class TaskList {
    tasks: Task[];
    name: string;
    id: number;

    constructor() {
        this.tasks = [];
    }
}