import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class MyloanService {
  loanData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService,
              private toastService: ToastService) { }

  changeLoanData(data: any) {
    this.loanData$.next(data);
  }

  loanData(postData: any): Observable<any> {
    console.log('Get Loan');
    this.toastService.presentToast('Gathering data. Please wait!');
    return this.httpService.getLoan('api/loan/GetAllLoans', postData);
  }



}
