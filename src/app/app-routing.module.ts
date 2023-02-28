import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingEventsDetailsComponent } from './upcoming-events/upcoming-events-details/upcoming-events-details.component';
import { UpcomingEventsListComponent } from './upcoming-events/upcoming-events-list/upcoming-events-list.component';

const routes: Routes = [
  {path: 'upcoming-events-list', component : UpcomingEventsListComponent},
  {path: 'upcoming-events-details/:', component: UpcomingEventsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
