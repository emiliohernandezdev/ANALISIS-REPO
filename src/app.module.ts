import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/task/task.module';
import { Task } from './modules/task/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'DESKTOP-TQFKEQ3\\DESARROLLOWEBUMG',
      port: 1433,
      username: 'dbadw',
      password: 'admin123@',
      database: 'ANALISIS2',
      entities: [Task],
      options:{
        encrypt: false,
      }
    }),
    TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
