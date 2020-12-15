import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl = environment.baseurl;


  constructor(private http: HttpClient) { }

  public POST(url: any, data: any, token): any {
    return this.http.post(this.baseurl + url, data, token);
  }
  public PUT(url: any, data: any, token): any {
    return this.http.put(this.baseurl + url, data, token);
  }
  public DELETE(url: any, token): any {
    return this.http.delete(this.baseurl + url, token);
  }
  public GET(url: any, token): any {
    return this.http.get(this.baseurl + url, token);
  }
}
