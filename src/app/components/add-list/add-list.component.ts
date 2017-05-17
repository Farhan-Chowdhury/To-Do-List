import { Component } from '@angular/core';

@Component({
  selector: 'add-list',
  templateUrl: './add-list.component.html',
  // styleUrls: [ './add-list.component.css' ],
})
export class AddlistComponent {
  title: string = 'Tuseday Todo List ';
  date: string  = '12/03/2017';
  list: string[] = ['Work on framing', 'New Task'];

  add(l: string): void {
    this.list.push(l);
  }

  deleteL(i: number): void {
    this.list.splice(i, 1);
  }
}

