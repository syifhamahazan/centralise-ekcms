import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class LoanhistService {
  loanhistData$ = new BehaviorSubject<any>([]);

  constructor(private httpService: HttpService,
              private toastService: ToastService) { }


  changeloanhistData(data: any) {
    this.loanhistData$.next(data);
  }

  loanhistData(postData: any): Observable<any> {
    console.log('Get Loan History');
    this.toastService.presentToast('Gathering data. Please wait!');
    return this.httpService.getLoanhist('api/loanhistory/GetAllLoansHistory', postData);
  }

}
