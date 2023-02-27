import { Component } from '@angular/core';
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
}

