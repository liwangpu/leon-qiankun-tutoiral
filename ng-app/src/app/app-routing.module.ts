import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
    // { path: 'home', component: HomeComponent },
    // { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    // @ts-ignore
    providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/ng-app' : '/' }]
})
export class AppRoutingModule { }
