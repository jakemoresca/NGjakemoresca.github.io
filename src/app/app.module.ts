import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([{ path: '', component: AboutComponent }])
  ],
  declarations: [AppComponent, HelloComponent, AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
