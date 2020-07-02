import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { OverviewComponent } from './overview/overview.component';
import { ControlsComponent } from './controls/controls.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainBlockComponent } from './main-block/main-block.component';
import { InjectElementDirective } from './inject-element.directive';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OverviewComponent,
    ControlsComponent,
    NavbarComponent,
    MainBlockComponent,
    InjectElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
