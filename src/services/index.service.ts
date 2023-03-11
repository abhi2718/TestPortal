import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}