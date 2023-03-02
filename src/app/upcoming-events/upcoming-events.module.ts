import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingEventsListComponent } from './upcoming-events-list/upcoming-events-list.component';
import { UpcomingEventsDetailsComponent } from './upcoming-events-details/upcoming-events-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UpcomingEventsListComponent,
    UpcomingEventsDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    UpcomingEventsListComponent,
  ]
})
export class UpcomingEventsModule { }

