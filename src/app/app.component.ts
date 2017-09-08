import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import {MomentModule} from 'angular2-moment';
import {MomentTimezoneModule} from 'angular-moment-timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = Date.now();
  timeZone = null;
  
}
