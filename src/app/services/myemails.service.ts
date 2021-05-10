import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class MyemailsService {
  emailsData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService,
              private toastService: ToastService) { }

  changeEmailsdata(data: any) {
    this.emailsData$.next(data);
  }

  emailsData(postData: any): Observable<any> {
    console.log('Get Email');
    this.toastService.presentToast('Gathering data. Please wait!');
    return this.httpService.getEmails('api/email/GetAllEmail', postData);
  }

}
