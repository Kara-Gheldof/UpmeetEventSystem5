import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFavorite } from '../interfaces/favorites';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  // favorites:any;
  constructor(private http: HttpClient) { }

  apiUri: string = 'https://localhost:7011/api/Event'

  getEvents() {
    return this.http.get(`${this.apiUri}/ViewEvents`)
  }

  getFavorites() {
    return this.http.get(`${this.apiUri}/ViewFavorites`)
  }

  addFavorite(favoriteEvent:IFavorite) {
    return this.http.post(`${this.apiUri}/AddFavorite`,favoriteEvent);
  }

  removeFavorite(favoriteEventId:number) {
    return this.http.post(`${this.apiUri}/RemoveFavoriteEventId/${favoriteEventId}`,{});
  }

  // listFavorites(){
  //   this.getFavorites().subscribe(
  //     (response) => { this.favorites = response; });
  // }
}
