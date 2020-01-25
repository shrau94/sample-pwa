import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import {AppRoutingModule} from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { IgxGridModule } from 'igniteui-angular';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    ErrorComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
