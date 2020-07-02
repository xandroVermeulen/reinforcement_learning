import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MazeComponent } from './maze/maze.component';
import { OverviewComponent } from './overview/overview.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'maze', component: MazeComponent},
  {path: '', component: OverviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [MazeComponent, AppComponent, OverviewComponent]; // By doing this I no longer have to import it a second time in app.module.ts