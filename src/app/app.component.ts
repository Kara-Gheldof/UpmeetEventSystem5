import { Component } from '@angular/core';
import { RepositoryService } from './upcoming-events/event-repository.service';
import { IEvent } from './interfaces/events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UpmeetEventSystem';

  constructor(private repositoryService: RepositoryService) { }


}