import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Citys } from '../models/citys';


@Injectable({
  providedIn: 'root'
})
export class CitysService {
  apiUrl = environment.apiUrl + '/citys'

  constructor(private HttpClient : HttpClient) { }

  findAllCitys() :Observable<Citys[]> {
    return this.HttpClient.get<Citys[]>(this.apiUrl)
  }

  addCitys(city: Citys) :Observable<Citys>{
    return this.HttpClient.post(this.apiUrl, city);
  }

  findById(id: number) :Observable<Citys> {
   return this.HttpClient.get<Citys>(this.apiUrl + '/' + id);
  }

  deleteCity(id ?: number): Observable<Citys>{
    return this.HttpClient.delete(this.apiUrl + '/' + id);
  }

  updateCity(city: Citys): Observable<Citys>{
    return this.HttpClient.put<Citys>(this.apiUrl + '/' + city.id, city)
  }
}
