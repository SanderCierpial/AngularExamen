import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpenDataApiService } from './open-data-api.service';
import { OpenData } from './open-data'


@Component({
  selector: 'app-open-data',
  templateUrl: './open-data.component.html',
  styleUrls: ['./open-data.component.css']
})
export class OpenDataComponent implements OnInit {

  gemeentes: any;
  test: any;
  constructor(private http: HttpClient, private _openDataApiService : OpenDataApiService) { }

  ngOnInit(): void {
    this.test= this._openDataApiService.getGeoData();
    console.log('jsonparse',this.test);
    this.gemeentes=this.test[6].attributes;
    console.log('opendata',this._openDataApiService.getGeoData())
     }

}
