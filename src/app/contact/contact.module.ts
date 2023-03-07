import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ContactInfoComponent
  ]
})
export class ContactModule { }
