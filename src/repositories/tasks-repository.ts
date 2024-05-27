import { v4 as uuidv4 } from 'uuid'

import { Task } from '../models/task-model';
import { PrismaClient } from '@prisma/client';

export class TasksRepository {
    private prisma: PrismaClient = new PrismaClient()

    public async listAll(): Promise<Task[]> {
        const tasks = await this.prisma.task.findMany()
        return tasks
    }

    public async getById(id: number): Promise<Task> {
        const task = await this.prisma.task.findUnique({
            where: { id: id }
        })
        return task
    }

    public async create(name: string): Promise<Task> {
        const task = await this.prisma.task.create({
            data: {
                name
            }
        })

        return task
    }

    public async findByName(name: string): Promise<Task[]> {
        const tasks = await this.prisma.task.findMany({
            where: { name: name }
        })

        return tasks
    }

    public async update(id: number, name: string): Promise<Task> {
        const task = await this.prisma.task.update({
            where: { id: id },
            data: { name },
        })
        return task
    }

    public async delete(id: number): Promise<Task> {
        const task = await this.prisma.task.delete({
            where: { id: id }
        })

        return task
    }

    public async deleteAll(): Promise<Task[]> {
        const task = await this.prisma.task.deleteMany()
        return task
    }
}