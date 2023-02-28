import { Component, Input } from '@angular/core';
import { RepositoryService } from '../event-repository.service';
import { IEvent } from 'src/app/interfaces/events'

@Component({
  selector: 'app-upcoming-events-details',
  templateUrl: './upcoming-events-details.component.html',
  styleUrls: ['./upcoming-events-details.component.css']
})
export class UpcomingEventsDetailsComponent {

  @Input() detailId: string='-1'; 
  
  event: IEvent | undefined;
  showDetails:boolean=false;

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit(): void {
    this.repositoryService.getEventById(Number(this.detailId)).subscribe(
      (response) => { this.event = response; });
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
