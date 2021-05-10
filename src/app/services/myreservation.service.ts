import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class MyreservationService {
  reservationData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService,
              private toastService: ToastService) { }

  changeReservationData(data: any){
    this.reservationData$.next(data);
  }

  reservationData(postData: any): Observable<any>{
    console.log('Postdata is');
    this.toastService.presentToast('Gathering data. Please wait!');
    console.log(postData);
    return this.httpService.getReservation('api/Reservation/GetAllReservation', postData);
  }
}
