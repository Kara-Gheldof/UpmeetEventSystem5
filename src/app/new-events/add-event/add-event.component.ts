import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IEvent } from '../../interfaces/events';
import { RepositoryService } from '../../upcoming-events/event-repository.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent {
 
  nameOfEvent: string = ""
  //startDate: Date
  //endDate: Date
  description: string = ""
  venue: string = ""
  city: string = ""
  state: string = ""
  image: string = ""
  events: any

  constructor(private repositoryService: RepositoryService, private router: Router) { }
  
  ngOnInit(): void{
    this.getEvents();
  }

  getEvents(){
    this.repositoryService.getEvents().subscribe(
      (response) => { this.events = response; });
  }

  addNewEvent(form: NgForm) {
    let newEvent: IEvent = {
      name: form.form.value.nameOfEvent,
      startDate: form.form.value.startDate,
      endDate: form.form.value.endDate,
      description: form.form.value.description,
      venue: form.form.value.venue,
      city: form.form.value.city,
      state: form.form.value.state,
      image: form.form.value.image
    };

    this.repositoryService.addNewEvent(newEvent).subscribe(
      () => {
        this.ngOnInit();
      }
    );

    form.resetForm();
    location.reload();
  };
}


