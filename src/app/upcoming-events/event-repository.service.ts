import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFavorite } from '../interfaces/favorites';
import { IEvent } from '../interfaces/events';
import { IContact } from '../interfaces/contacts';

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
    return this.http.get<IFavorite>(`${this.apiUri}/ViewFavorites`)
  }

  addFavorite(favoriteEvent:IFavorite) {
    return this.http.post(`${this.apiUri}/AddFavorite`,favoriteEvent);
  }

  removeFavorite(favoriteEventId:IFavorite) {
    return this.http.post(`${this.apiUri}/RemoveFavoriteEventId/${favoriteEventId.favoriteEventId}`,{});
  }

  addContact(newContact:IContact) {
    return this.http.post(`${this.apiUri}/AddContact`,newContact);
  }
}
