import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class SearchhistService {
  searchhistData$ = new BehaviorSubject<any>([]);

  constructor(private httpService: HttpService,
              private toastService: ToastService) { }

  changeSearchhistData(data: any){
    this.searchhistData$.next(data);
  }

  searchhistData(postData: any): Observable<any>{
    this.toastService.presentToast('Gathering data. Please wait!');
    console.log(postData);
    return this.httpService.getSearchhist('api/searchhistory/GetAllHistory', postData);
  }

}

