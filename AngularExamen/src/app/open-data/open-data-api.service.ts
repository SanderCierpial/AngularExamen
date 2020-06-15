import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpenData } from './open-data';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OpenDataApiService {
  constructor(private http: HttpClient) { }



  private dataUrl = 'https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/606/query?where=1%3D1&outFields=Diepte,Datum&outSR=4326&f=json';
  
  getGeoData(){
    return this.http.get(this.dataUrl);
  }
}
