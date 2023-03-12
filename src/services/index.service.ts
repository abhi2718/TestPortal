import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rootUrl:string = 'http://localhost:1020';
  constructor(private http: HttpClient) { }

  fetchResult(): Observable<any> {
    return this.http.get(`${this.rootUrl}/api/result/`);
  }

  createUser(user: any): Observable<any> { 
    return this.http.post(`${this.rootUrl}/api/user/`,user);
  }
  createResult(result: any): Observable<any> { 
    return this.http.post(`${this.rootUrl}/api/result/`,result);
  }
}