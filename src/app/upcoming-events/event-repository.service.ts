import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/events';

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
}
