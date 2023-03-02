import { Component } from '@angular/core';
import { RepositoryService } from '../event-repository.service';
import { Router } from '@angular/router';
import { IEvent } from 'src/app/interfaces/events';

@Component({
  selector: 'app-upcoming-events-list',
  templateUrl: './upcoming-events-list.component.html',
  styleUrls: ['./upcoming-events-list.component.css']
})
export class UpcomingEventsListComponent {

  constructor(private repositoryService: RepositoryService, private router: Router) { }

  events:any;
  showDetails:boolean=false;

  ngOnInit(): void{
    this.getEvents();
  }

  getEvents(){
    this.repositoryService.getEvents().subscribe(
      (response) => { this.events = response; });
  }
}
