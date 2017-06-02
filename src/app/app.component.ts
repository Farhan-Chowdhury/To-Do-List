import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})

export class AppComponent {
constructor (public router: Router /*, db: AngularFireDatabase*/) {
}

public homeOnClick(projectId: number): void {
    this.router.navigate([ 'lists']);
  }
}
