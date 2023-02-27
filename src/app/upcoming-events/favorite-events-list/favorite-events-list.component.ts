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
    let newFavoriteEvent: IFavorite = {
      favoriteEventId: favoriteEventId
    };

    this.repositoryService.removeFavorite(newFavoriteEvent).subscribe(
      () => {
        this.getFavorites();
      }
    );
  }
  
}

