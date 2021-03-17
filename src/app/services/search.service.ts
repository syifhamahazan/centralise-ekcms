import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// Typescript custom enum for search types (optional)
export enum SearchType {
  title = 'title',
  author = 'author',
  isbn = 'isbn'
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'http://192.168.100.101:8081/api/Material';
  constructor(private http: HttpClient) { }


  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}`).pipe(
      // tslint:disable-next-line: no-string-literal
      map(results => results['Search'])
    );

}

getDetails(callno) {
  return this.http.get(`${this.url}?callNumber=${callno}`);
}

}
