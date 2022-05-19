import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroes } from '../models/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  apiUrl = environment.apiUrl + '/heroes'

  constructor(private HttpClient : HttpClient) { }
  
  findAllHeroes() :Observable<Heroes[]> {
    return this.HttpClient.get<Heroes[]>(this.apiUrl)
  }

  addHeroe(heroe: Heroes) :Observable<Heroes> {
    return this.HttpClient.post<Heroes>(this.apiUrl, heroe);
  }

  deleteHeroe(id ?: number) :Observable<Heroes> {
    return this.HttpClient.delete<Heroes>(this.apiUrl + '/' + id);
  }

  findById(id : number) :Observable<Heroes> {
    return this.HttpClient.get<Heroes>(this.apiUrl + '/' + id);
   }

  updateheroe(heroe: Heroes): Observable<Heroes>{
    return this.HttpClient.put<Heroes>(this.apiUrl + '/' + heroe.id, heroe)
  }
}
