import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { PictureComponent } from './picture/picture.component';
import { UsefulInfoComponent } from './useful-info/useful-info.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'event', component: EventComponent},
  { path: 'home', component: HomeComponent},
  { path: 'picture', component: PictureComponent},
  { path: 'info', component: UsefulInfoComponent},
  { path: '', component: HomeComponent, outlet: "hometest"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
