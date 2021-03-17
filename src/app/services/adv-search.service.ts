import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType1 {
  title = 'title',
  author = 'author',
  isbn = 'isbn',
  issn = 'issn',
  subject = 'subject',
  call_number = 'call number',
  series = 'series'
}

export enum SearchType2 {
  title = 'title',
  author = 'author',
  isbn = 'isbn',
  issn = 'issn',
  subject = 'subject',
  call_number = 'call number',
  series = 'series'
}

export enum Operators1 {
  and = 'AND',
  or = 'OR',
  not = 'NOT'
}

export enum Operators2 {
  and = 'AND',
  or = 'OR',
  not = 'NOT'
}

@Injectable({
  providedIn: 'root'
})
export class AdvSearchService {

  url = 'http://192.168.100.101:8081/api/AdvanceSearch';



  constructor(private http: HttpClient) { }

  searchData(title1: string, type1: SearchType1, operators1: string,
             title2: string, type2: SearchType2, operators2: string, token ): Observable<any> {

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
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${this.url}/${type1},${encodeURI(title1)},${operators1};${type2},${encodeURI(title2)},${operators2};`, requestOptions).pipe(
      map(results => results)
    );
  }
  getAdvDetails(cwId, token) {
    this.url = 'http://192.168.100.101:8081/api/material';
    console.log('Get Adv Details');
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
