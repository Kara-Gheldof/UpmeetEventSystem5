import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetTeamComponent } from './meet-team/meet-team.component';



@NgModule({
  declarations: [
    MeetTeamComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MeetTeamComponent
  ]
})
export class TeamInfoModule { }
