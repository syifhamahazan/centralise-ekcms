import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResService {
  searchResData$ = new BehaviorSubject<any>([]);

  constructor(private httpService: HttpService) { }

  changeSearchResultData(data: any){
    this.searchResData$.next(data);
  }

  searchResData(postData: any): Observable<any>{
    console.log('Search Results is');
    return this.httpService.getSearchRes('api/material', postData);
  }
}
