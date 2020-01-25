import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteComponent } from './route/route.component';
import {ErrorComponent} from './error/error.component';
import { GridComponent } from './grid/grid.component'

const routes: Routes = [
  { path: 'route', component: RouteComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'grid', component: GridComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}
