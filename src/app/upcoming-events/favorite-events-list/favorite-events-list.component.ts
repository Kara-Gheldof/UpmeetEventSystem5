import { Component } from '@angular/core';
import { IFavorite } from 'src/app/interfaces/favorites';
import { RepositoryService } from '../event-repository.service';

@Component({
  selector: 'app-favorite-events-list',
  templateUrl: './favorite-events-list.component.html',
  styleUrls: ['./favorite-events-list.component.css']
})
export class FavoriteEventsListComponent {

  constructor(private repositoryService: RepositoryService) { }

  favorites: any;
  

  ngOnInit(): void{
    this.getFavorites();
  }

  getFavorites(){
    this.repositoryService.getFavorites().subscribe(
      (response) => { this.favorites = response; });
  }


  removeFavorite(favoriteEventId: number) {



    // this.repositoryService.addFavorite(newFavoriteEvent).subscribe(
    //   () => {
    //     this.getEvents();
    //   }
    this.repositoryService.removeFavorite(favoriteEventId).subscribe(
      () => {
        this.getFavorites();
      }
    // this.repositoryService.addFavorite(newFavoriteEvent).subscribe(
    //   () => {
    //     this.fav.getFavorites();
    //   }
    );
  }
}

