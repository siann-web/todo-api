import { Task } from "../models/task-model";
import { TasksRepository } from "../repositories/tasks-repository";

export class DeleteTaskService {
    private tasksRepository: TasksRepository

    constructor() {
        this.tasksRepository = new TasksRepository()
    }

    public async exec(id: number): Promise<Task> {
        if (!id) {
            return undefined
        }
        
        const task = await this.tasksRepository.delete(id)
        return task
    }
}