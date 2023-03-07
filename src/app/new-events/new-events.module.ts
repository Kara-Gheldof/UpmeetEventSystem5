import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from './add-event/add-event.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddEventComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddEventComponent
  ]
})
export class NewEventsModule { }
