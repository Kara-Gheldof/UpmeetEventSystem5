import { Component } from '@angular/core';
import { RepositoryService } from '../event-repository.service';
import { Router } from '@angular/router';
import { IFavorite } from '../../interfaces/favorites';

@Component({
  selector: 'app-upcoming-events-list',
  templateUrl: './upcoming-events-list.component.html',
  styleUrls: ['./upcoming-events-list.component.css']
})
export class UpcomingEventsListComponent {

  constructor(private repositoryService: RepositoryService, private router: Router) { }

  events: any;
  favorites: any;
  showDetails:boolean=false;

  ngOnInit(): void{
    this.getEvents();
    this.getFavorites();
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

  removeFavorite(favoriteEventId: number) {
    let newFavoriteEvent: IFavorite = {
      favoriteEventId: favoriteEventId
    };

    this.repositoryService.removeFavorite(newFavoriteEvent).subscribe(
      () => {
        this.getFavorites();
      }
    );
  }

  checkFavorite(incomingId: any): Boolean{
    if(this.favorites){
      for (let i = 0; i < this.favorites.length; i++){
        if(this.favorites[i].eventId===incomingId){
          return true;
        }
      }
    }
    return false;
  }

}
