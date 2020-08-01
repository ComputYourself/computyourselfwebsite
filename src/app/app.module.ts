import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { PictureComponent } from './picture/picture.component';
import { UsefulInfoComponent } from './useful-info/useful-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CEstPasFauxComponent } from './c-est-pas-faux/c-est-pas-faux.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EventComponent,
    HomeComponent,
    PictureComponent,
    UsefulInfoComponent,
    NavBarComponent,
    FooterComponent,
    CEstPasFauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
