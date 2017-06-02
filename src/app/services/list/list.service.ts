import { Injectable } from '@angular/core';
import { Project } from '../../shared/project';
import { Task } from '../../shared/task';

const initialProjects: Project[] = [
  new Project(
    'My Tasks',
    [
      { text: 'Work on framing', completed: false, createdAt: Date.now() },
      { text: 'Work on the things', completed: false, createdAt: Date.now() },
      { text: 'YEAH BRO', completed: false, createdAt: Date.now() },
      { text: 'Follow your heart', completed: false, createdAt: Date.now() },
      { text: 'Cut the code', completed: false, createdAt: Date.now() },
    ],
  ),
  new Project(
    'My Other Project',
    [
      { text: 'Get Lunch', completed: false, createdAt: Date.now() },
      { text: 'Get Dinner', completed: false, createdAt: Date.now() },
      { text: 'Eat', completed: false, createdAt: Date.now() },
      { text: 'Sleep', completed: false, createdAt: Date.now() },
      { text: 'Repeat', completed: false, createdAt: Date.now() },
    ],
  )
];

@Injectable()
export class ListService {
  public projects: Project[] = initialProjects;
  public deleteProject(project): void {
    this.projects.splice(project.id, 1);
  }
}
