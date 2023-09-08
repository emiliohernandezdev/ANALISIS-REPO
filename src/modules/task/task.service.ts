import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { UpdateTaskDto } from './update.task.dto';
import { CreateTaskDto } from './create.task.dto';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>){}

    getAll(): Promise<Task[]>{
        return this.taskRepository.find();
    }

    async getOne(id: number): Promise<Task>{
        return await this.taskRepository.findOne({
            where: {
                id: id
            }
        });
    }

    async add(task: CreateTaskDto){
        const newTask = new Task();
        newTask.title = task.title;
        newTask.done = task.done ?? false;

        return await this.taskRepository.save(newTask);
    }

    async update(task: UpdateTaskDto){
        const tsk = await this.taskRepository.findOne({
            where: {
                id: task.id
            }
        });
        if(tsk == null){
            return null;
        }

        if(task.done.toString() == 'true'){
            task.done = true
        }else{
            task.done = false
        }
        tsk.title = task.title;
        tsk.done = task.done;
        await this.taskRepository.save(tsk);
        return tsk;
    }

    async delete(id: number): Promise<any>{
        return await this.taskRepository.delete({
            id: id
        })
    }
}
