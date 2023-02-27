import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingEventsListComponent } from './upcoming-events/upcoming-events-list/upcoming-events-list.component';

const routes: Routes = [
  {path: 'upcoming-events', component : UpcomingEventsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
