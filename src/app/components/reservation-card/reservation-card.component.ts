import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MyreservationService } from 'src/app/services/myreservation.service';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss'],
})
export class ReservationCardComponent implements OnInit {
  @Input() loginUser: any;
  public authUser: any;
  reservationData: any;
  loanData: any;

  constructor(
    private auth: AuthService,
    private toastService: ToastService,
    private myreservationService: MyreservationService,
    private http: HttpClient) { }


  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.myreservationService.reservationData$.subscribe((res: any) => {
      this.reservationData = res;
    });

    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log('Inside get user token' + this.auth);
    });


  }
  cancelReserve(rs, index){
    console.log('index is' + index);
    console.log('Cancel Data' +  JSON.stringify(rs));
    console.log(this.authUser);
    const url = environment.apiUrl + 'api/Reservation/CancelReservation';

    const apiHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authUser
    };
    this.http.post(url, JSON.stringify(rs), { headers: apiHeaders })
    .subscribe((data: string) => {
      this.toastService.presentToast('Successful cancel 1 reservation');
      location.reload();
     }, error => {
      console.log(error);
    });
}



}
