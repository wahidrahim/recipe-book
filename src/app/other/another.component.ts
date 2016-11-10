import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-another',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
