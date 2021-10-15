import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgAppComponent } from './components/ng-app/ng-app.component';

const routes: Routes = [
    // { path: 'home', component: HomeComponent },
    { path: 'ng-app', component: NgAppComponent },
    // { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
