import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MyreservationService } from 'src/app/services/myreservation.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-myreservation',
  templateUrl: './myreservation.page.html',
  styleUrls: ['./myreservation.page.scss'],
})
export class MyreservationPage implements OnInit {
  @Input() loginUser: any;
  badRequest = false;
  public authUser: any;
  postData = {
    token: ''
  };
  constructor(
    private auth: AuthService,
    private reservationService: MyreservationService,
    private toastService: ToastService) { }


  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(res);
      this.getReservation(res);
    });

  }

  getReservation(token: any){
    // this.postData.token = this.authUser;
    console.log('This is token');
    console.log(token);
    // tslint:disable-next-line: deprecation
    this.reservationService.reservationData(token).subscribe(
        (res: any) => {
          console.log('Reservation response');
          console.log(res);
          this.reservationService.changeReservationData(res);
        },
        (error: any) => {
          this.badRequest = true;
          // this.toastService.presentToast('Please wait...');
        }
      );

  }


}
