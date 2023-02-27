import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteEventsListComponent } from './favorite-events-list/favorite-events-list.component';

@NgModule({
  declarations: [
    FavoriteEventsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FavoriteEventsListComponent
  ]
})
export class FavoriteEventsModule { }
