import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class MyfinesService {
  finesData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService,
              private toastService: ToastService) { }

  changeFinesData(data: any) {
    this.finesData$.next(data);
  }

  finesData(postData: any): Observable<any> {
    console.log('Get Loan');
    this.toastService.presentToast('Gathering data. Please wait!');
    return this.httpService.getFines('api/fines/GetAllFines', postData);
  }

}
