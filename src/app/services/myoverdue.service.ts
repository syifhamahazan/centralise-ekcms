import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class MyoverdueService {
  overdueData$ = new BehaviorSubject<any>([]);


  constructor(private httpService: HttpService,
              private toastService: ToastService) { }

  changeoverdueData(data: any) {
    this.overdueData$.next(data);
  }

  changeWishlistData(data: any) {
    this.overdueData$.next(data);
  }

  overdueData(postData: any): Observable<any> {
    console.log('Get Overdue');
    this.toastService.presentToast('Gathering data. Please wait!');
    return this.httpService.getOverdue('api/OverDue/GetAllOverDue', postData);
  }

}
