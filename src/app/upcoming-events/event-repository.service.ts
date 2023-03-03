import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFavorite } from '../interfaces/favorites';
import { IEvent } from '../interfaces/events';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  apiUri: string = 'https://localhost:7011/api/Event'

  getEvents() {
    return this.http.get<IEvent>(`${this.apiUri}/ViewEvents`)
  }

  getEventById(eventId: number){
    return this.http.get<IEvent>(`${this.apiUri}/GetEvent/${eventId}`)
  }

  getFavorites() {
    return this.http.get(`${this.apiUri}/ViewFavorites`)
  }

  addFavorite(favoriteEvent:IFavorite) {
    return this.http.post(`${this.apiUri}/AddFavorite`,favoriteEvent);
  }

  removeFavorite(favoriteEventId:IFavorite) {
    return this.http.post(`${this.apiUri}/RemoveFavoriteEventId/${favoriteEventId.favoriteEventId}`,{});
  }
  
  addNewEvent(event: IEvent){
    return this.http.post(`${this.apiUri}/AddEvent`, event)
  }
}
