import { Component, Input, OnInit } from '@angular/core';

import { Task } from '../../shared/task';
import { Project } from '../../shared/project';
import { ListService } from '../../services/list/list.service';


@Component({
  selector: 'add-list',
  templateUrl: './add-list.component.html',
})
export class AddlistComponent implements OnInit {
  public project: Project;

  constructor (
    private _listService: ListService,
  ) {}

  public ngOnInit(): void {
    this.project = this._listService.currentProject;
  }

  public toggleTask(index: number): void {
    this._listService.toggleTask(index);
  }
}

