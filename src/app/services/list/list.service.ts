import { Injectable } from '@angular/core';
import { Project } from '../../shared/project';

const initialProjects: Project[] = [
  {
    name: 'My Tasks',
    tasks: [
      { text: 'Work on framing', completed: false, createdAt: Date.now() },
      { text: 'Work on the things', completed: false, createdAt: Date.now() },
      { text: 'YEAH BRO', completed: false, createdAt: Date.now() },
      { text: 'Follow your heart', completed: false, createdAt: Date.now() },
      { text: 'Cut the code', completed: false, createdAt: Date.now() },
    ],
  },
  {
    name: 'My Other Project',
    tasks: [
      { text: 'Get Lunch', completed: false, createdAt: Date.now() },
      { text: 'Get Dinner', completed: false, createdAt: Date.now() },
      { text: 'Eat', completed: false, createdAt: Date.now() },
      { text: 'Sleep', completed: false, createdAt: Date.now() },
      { text: 'Repeat', completed: false, createdAt: Date.now() },
    ],
  }
];

@Injectable()
export class ListService {
  public projects: Project[] = initialProjects;
  public _currentProject: Project;

  set currentProject(value: any) {
    this._currentProject = value;
  }

  get currentProject() {
    return this._currentProject;
  }

  public setCurrentProject(projectIndex: number): void {
    this.currentProject = this.projects[projectIndex];
  }

  public createTask(text: string): void {
    const tasks Project = {
      text: text,
      completed: false,
      createdAt: Date.now(),
    }
    this.currentProject.tasks.push(task);
  }

  public deleteTask(index: number): void {
    this.currentProject.tasks.splice(index, 1);
  }

  public toggleTask(index: number): void {
    const task = this.currentProject.tasks[index];
    task.completed = !task.completed;
    this.currentProject.tasks[index] = task;
  }
}
