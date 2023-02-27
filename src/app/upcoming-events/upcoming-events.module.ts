import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingEventsListComponent } from './upcoming-events-list/upcoming-events-list.component';
import { UpcomingEventsDetailsComponent } from './upcoming-events-details/upcoming-events-details.component';
import { FavoriteEventsListComponent } from './favorite-events-list/favorite-events-list.component';



@NgModule({
  declarations: [
    UpcomingEventsListComponent,
    UpcomingEventsDetailsComponent,
    FavoriteEventsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UpcomingEventsListComponent,
    FavoriteEventsListComponent
  ]
})
export class UpcomingEventsModule { }

