import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './create.task.dto';
import { UpdateTaskDto } from './update.task.dto';

@Controller('task')
export class TaskController {
  constructor(private task: TaskService){}
  @Get('')
  public getTasks() {
    return this.task.getAll();
  }

  @Get('get/:id')
  public getTask(@Param('id') id:number) {
    return this.task.getOne(id);
  }

  @Post()
  public addTask(@Body() data: CreateTaskDto){
    return this.task.add(data);
  }

  @Patch()
  public updateTask(@Body() task: UpdateTaskDto){
    return this.task.update(task);
  }

  @Delete()
  public deleteTask(@Body('id') id:number){
    return this.task.delete(id);
  }

}
