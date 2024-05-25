import { Router } from 'express'

import { TasksController } from '../controllers/tasks-controller'

const routes = Router()
const tasksController = new TasksController()

routes.get('/tasks', tasksController.list)
routes.get('/tasks/:id', tasksController.detail)
routes.post('/tasks', tasksController.create)
routes.post('/tasks/:id', tasksController.update)
routes.delete('/tasks/:id', tasksController.delete)

export { routes }