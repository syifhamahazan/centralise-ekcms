import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class MyotherchargesService {
  otherChargesData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService,
              private toastService: ToastService) { }

changeOtherChargesdata(data: any) {
  this.otherChargesData$.next(data);
}
otherChargesData(postData: any): Observable<any> {
  console.log('Get Other Charges');
  this.toastService.presentToast('Gathering data. Please wait!');
  return this.httpService.getOtherCharges('api/OtherCharges/MyOtherCharges', postData);
}
}
