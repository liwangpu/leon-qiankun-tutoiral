import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ng-app',
  templateUrl: './ng-app.component.html',
  styleUrls: ['./ng-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
