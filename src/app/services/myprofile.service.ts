import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {
  profileData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) { }

  changeProfileData(data: any){
    this.profileData$.next(data);
  }

  profileData(postData: any): Observable<any>{
    console.log('Get profile');
    return this.httpService.getProfile('api/patron/GetAllPatrons', postData);
  }
}
