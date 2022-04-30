import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plant } from '../classes/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  private _apiURL: string = environment.apiURL;
  constructor(private _http: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this._http.get<Plant[]>(this._apiURL).pipe(delay(1000)); //Force delay to show loading process
  }
}
