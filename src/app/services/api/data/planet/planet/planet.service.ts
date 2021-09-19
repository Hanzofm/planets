import { PlanetDataSrcService } from './../planet-data-src/planet-data-src.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(
    private http: HttpClient,
    private dataSRC: PlanetDataSrcService
  ) {}

  getPlanets(quantity?: number): Observable<any> {
    let params = new HttpParams();
    params = params.set('number', quantity ?? 10);
    return this.http.get(this.dataSRC.planets.list, { params });
  }
}
