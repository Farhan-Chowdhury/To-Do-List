import { Task } from './task';

export class Project {
  private static nextId = 1;

  public id: number;

  constructor(public name: string, public tasks: Task[] = []) {
    this.id = Project.nextId++;
  }

  public createTask(text: string): void {
    const tasks: Task = {
      text: text,
      completed: false,
      createdAt: Date.now(),
    }
    this.tasks.push(tasks);
  }

  public deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  public toggleTask(index: number): void {
    const task = this.tasks[index];
    task.completed = !task.completed;
    this.tasks[index] = task;
  }
}
