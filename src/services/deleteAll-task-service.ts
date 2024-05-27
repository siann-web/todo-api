import { Task } from "../models/task-model";
import { TasksRepository } from "../repositories/tasks-repository";

export class DeleteAllTaskService {
    private tasksRepository: TasksRepository

    constructor() {
        this.tasksRepository = new TasksRepository()
    }

    public async exec(): Promise<Task> {
       const task = await this.tasksRepository.deleteAll()
       return task
    }
}