import { Component } from '@angular/core';
import { RepositoryService } from '../event-repository.service';

@Component({
  selector: 'app-upcoming-events-list',
  templateUrl: './upcoming-events-list.component.html',
  styleUrls: ['./upcoming-events-list.component.css']
})
export class UpcomingEventsListComponent {

  constructor(private repositoryService: RepositoryService) { }

  events: any;

  ngOnInit(): void{
    this.getEvents();
  }

  getEvents(){
    this.repositoryService.getEvents().subscribe(
      (response) => { this.events = response; });
  }
}
