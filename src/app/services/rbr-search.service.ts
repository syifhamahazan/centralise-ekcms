import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  lecturer_name = 'Lecturer Name',
  course_name = 'Course Name'
}

@Injectable({
  providedIn: 'root'
})
export class RbrSearchService {
  url = 'http://pustaka.upsi.edu.my:5003/api/rbrsearch';


  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: variable-name
  searchData(lecturer_name: string, type: SearchType, token): Observable<any> {

    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get(`${this.url}?searchfield=${encodeURI(lecturer_name)}&searchtype=${type}`, requestOptions).pipe(
      map(results => results)
    );
  }
}
