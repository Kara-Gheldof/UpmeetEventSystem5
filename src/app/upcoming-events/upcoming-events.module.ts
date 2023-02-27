import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingEventsListComponent } from './upcoming-events-list/upcoming-events-list.component';
import { UpcomingEventsDetailsComponent } from './upcoming-events-details/upcoming-events-details.component';



@NgModule({
  declarations: [
    UpcomingEventsListComponent,
    UpcomingEventsDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UpcomingEventsListComponent
  ]
})
export class UpcomingEventsModule { }

