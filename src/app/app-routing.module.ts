import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { PictureComponent } from './picture/picture.component';
import { UsefulInfoComponent } from './useful-info/useful-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'event', component: EventComponent},
  { path: 'home', component: HomeComponent},
  { path: 'picture', component: PictureComponent},
  { path: 'info', component: UsefulInfoComponent},
  { path: 'navbar', component: NavBarComponent},
  { path: 'footer', component: FooterComponent},
  { path: '', component: HomeComponent, outlet: "hometest"},
  //{ path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
