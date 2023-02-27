import { Component } from '@angular/core';
import { IFavorite } from 'src/app/interfaces/favorites';
import { RepositoryService } from '../event-repository.service';

@Component({
  selector: 'app-upcoming-events-list',
  templateUrl: './upcoming-events-list.component.html',
  styleUrls: ['./upcoming-events-list.component.css']
})
export class UpcomingEventsListComponent {

  constructor(private repositoryService: RepositoryService) { }

  events: any;
  favorites: any;

  ngOnInit(): void{
    this.getEvents();
  }

  getEvents(){
    this.repositoryService.getEvents().subscribe(
      (response) => { this.events = response; });
  }

  getFavorites(){
    this.repositoryService.getFavorites().subscribe(
      (response) => { this.favorites = response; });
  }

  addFavorite(favoriteEventId: number) {
    let newFavoriteEvent: IFavorite = {
      favoriteEventId: favoriteEventId
    };

    this.repositoryService.addFavorite(newFavoriteEvent).subscribe(
      () => {
        this.getFavorites();
      }
    );
  }
  
}
