import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { PictureComponent } from './picture/picture.component';
import { UsefulInfoComponent } from './useful-info/useful-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CEstPasFauxComponent } from './c-est-pas-faux/c-est-pas-faux.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'event', component: EventComponent },
  { path: 'home', component: HomeComponent },
  { path: 'picture', component: PictureComponent },
  { path: 'info', component: UsefulInfoComponent },
  { path: '42', component: CEstPasFauxComponent },
  { path: '#', redirectTo: '/42' },
  { path: '**', redirectTo: '/42' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],

})
export class AppRoutingModule { }
