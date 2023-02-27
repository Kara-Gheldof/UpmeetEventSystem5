import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  apiUri: string = 'https://localhost:7011/api/Event'

  getEvents() {
    return this.http.get(`${this.apiUri}/ViewEvents`)
  }

  getFavorites() {
    return this.http.get(`${this.apiUri}/ViewFavorites`)
  }
}
