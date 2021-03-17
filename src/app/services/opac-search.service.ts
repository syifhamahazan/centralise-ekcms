import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';

export enum SearchType {
  title = 'title',
  author = 'author',
  isbn = 'isbn',
  issn = 'issn',
  subject = 'subject',
  call_number = 'call number',
  series = 'series'
}

@Injectable({
  providedIn: 'root'
})
export class OpacSearchService {

  url = 'http://192.168.100.101:8081/api/material';

  constructor(private http: HttpClient) { }


  searchData(title: string, type: SearchType, token): Observable<any> {

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
    return this.http.get(`${this.url}?searchfield=${encodeURI(title)}&searchtype=${type}`, requestOptions).pipe(
      map(results => results)
    );
  }


  getDetails(cwId, token) {
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
    return this.http.get(`${this.url}?CitedworkId=${encodeURI(cwId)}`, requestOptions);
  }}
