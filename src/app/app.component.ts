import { Component } from '@angular/core';
import { RepositoryService } from './repository.service';
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