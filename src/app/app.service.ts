import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }
  
  datapath = "/assets/data/data.json";

  getAllData(): Observable<any> {
    return this.httpClient.get(this.datapath);
  }

}
