import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list/list.service';
import { Project } from './shared/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})

export class AppComponent implements OnInit {
  public name: string = 'Please select a list';
  public currentProject: Project;
  public projects: Project[];

  constructor(
    private _listService: ListService
  ) {}

  ngOnInit(): void {
    this.projects = this._listService.projects;
    // this.name = this._listService.currentProject.name || 'Please select a list';
  }

  public projectOnClick(index: number): void {
    this._listService.setCurrentProject(index);
    this.currentProject = this._listService.currentProject;
  }
}
