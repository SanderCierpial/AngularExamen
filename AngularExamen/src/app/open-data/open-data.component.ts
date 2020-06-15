import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpenDataApiService } from './open-data-api.service';
import { IOpenData } from './open-data'


@Component({
  selector: 'app-open-data',
  templateUrl: './open-data.component.html',
  styleUrls: ['./open-data.component.css']
})
export class OpenDataComponent implements OnInit {

  gemeentes: any;
  constructor(private http: HttpClient, private _openDataApiService : OpenDataApiService) { }

  ngOnInit(): void {
     }

}
