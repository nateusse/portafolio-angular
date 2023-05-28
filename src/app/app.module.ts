import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
