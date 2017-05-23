import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-ribbon',
  templateUrl: './ribbon.component.html',
  // styleUrls: [ './ribbon.component.css' ],
})
export class UiRibbonComponent {
  @Input() public sidenav: any;
  @Input() public title: string;
}
