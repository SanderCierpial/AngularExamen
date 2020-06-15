import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOpenData } from './open-data';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OpenDataApiService {
  constructor(private http: HttpClient) { }



  private dataUrl = 'https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek4/MapServer/292/query?where=1%3D1&outFields=naam&outSR=4326&f=json';
  
  //getGeoData(): Observable<IOpenData[]>{
  //  return this.http.get<IOpenData[]>(this.dataUrl);
  //}
}
