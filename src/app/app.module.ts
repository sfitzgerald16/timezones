import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MomentTimezoneModule} from 'angular-moment-timezone';
import {MomentModule} from 'angular2-moment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    MomentTimezoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
