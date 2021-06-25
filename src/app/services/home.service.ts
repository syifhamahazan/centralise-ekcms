import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePage } from '../home/home.page';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpService: HttpService, private home: HomePage) { }

  homeData(postData: any): Observable<any>{
    return this.httpService.post('api', postData);
  }

  profileData(postData: any): Observable<any>{
    console.log('Postdata is');
    console.log(postData);
    return this.httpService.getProfile('api/patron/GetAllPatrons', postData, this.home.homecode);
  }
}
