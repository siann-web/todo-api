import { Task } from "../models/task-model";
import { TasksRepository } from "../repositories/tasks-repository";

export class UpdateTaskService {
    private tasksRepository: TasksRepository

    constructor() {
        this.tasksRepository = new TasksRepository()
    }

    public async exec(id: number, name: string): Promise<Task> {
        const task = await this.tasksRepository.update(id, name)
        return task
    }
}