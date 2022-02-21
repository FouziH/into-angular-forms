import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule, 
    FormControl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
