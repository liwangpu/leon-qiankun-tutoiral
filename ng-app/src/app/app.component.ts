import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    public constructor() {
    }

    public ngOnInit(): void {

    }

}
