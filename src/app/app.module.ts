import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent },
      { path: '/experience', component: ExperienceComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    NavMenuComponent,
    ExperienceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
