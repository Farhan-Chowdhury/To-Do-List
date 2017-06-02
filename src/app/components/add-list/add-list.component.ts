import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../../shared/task';
import { Project } from '../../shared/project';
import { ListService } from '../../services/list/list.service';

@Component({
  selector: 'add-list',
  templateUrl: './add-list.component.html',
})
export class AddListComponent implements OnInit {
  public name: string = 'Please select a list';

  constructor (
    public listService: ListService,
    public router: Router,
  ) {}

  public ngOnInit(): void {
  }

  public projectOnClick(project: Project): void {
    this.router.navigate([ 'list', project.id ]);
  }

  public newProjectOnClick(): void {
    const newProject = new Project('New project');
    this.listService.projects.push(newProject);
    this.router.navigate([ 'list', newProject.id ]);
  }
  public deleteProjectOnClick(project: Project): void {
    this.listService.deleteProject(project.id);
  }
}

