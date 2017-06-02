import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Task } from '../../shared/task';
import { Project } from '../../shared/project';
import { ListService } from '../../services/list/list.service';

@Component({
  selector: 'list-details',
  templateUrl: './list-details.component.html',
})
export class ListDetailsComponent implements OnInit, OnDestroy {
  public listId: number;
  public project: Project;
  private sub: Subscription;

  constructor (
    public listService: ListService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      const projectId = parseInt(params.id, 10);
      const projects = this.listService.projects.filter((project) => {
        return project.id === projectId;
      });
      if (projects.length) {
        this.project = projects[0];
      } else {
        this.router.navigate([ 'lists ']);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public toggleTask(index: number): void {
    this.project.toggleTask(index);
  }

  public deleteTask(index: number): void {
    this.project.deleteTask(index);
  }

  public createTask(text: string): void {
    this.project.createTask(text);
  }
}