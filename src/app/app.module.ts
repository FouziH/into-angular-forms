import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NameEditorComponent} from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-edit.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   NameEditorComponent, 
   ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
