import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { MyloanService } from 'src/app/services/myloan.service';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.scss'],
})
export class LoanCardComponent implements OnInit {
  @Input() loginUser: any;
  public authUser: any;
  loanData: any;
  constructor(private myloanService: MyloanService,
              private auth: AuthService,
              public alertCtrl: AlertController,
              private toastService: ToastService,
              private http: HttpClient) { }


  ngOnInit() {
        // tslint:disable-next-line: deprecation
        this.myloanService.loanData$.subscribe((res: any) => {
          this.loanData = res;
          console.log('inside components');
          console.log(this.loanData);
        });

        // this.auth.userData$.subscribe((res: any) => {
        //   this.authUser = res;
        //   console.log('Inside get user token' + this.auth);
        // });
      }


    renewAction(loan, index){
      console.log('index is' + index);
      console.log('Post Data' +  JSON.stringify(loan));
      console.log(this.authUser);
      const url = environment.apiUrl + 'api/Loan/RenewLoan';

      // const apiHeaders = {
      //   'Access-Control-Allow-Origin': '*',
      //   // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      //   'Access-Control-Allow-Headers': 'Authorization',
      //   'Content-Length': 0,
      //       Authorization: 'Bearer ' + this.authUser
      // };
      // const body = new HttpParams()
      // .set(`circulationActivityId`, id);
      // this.http.post( url + `?${body}`, { headers: apiHeaders })
      //     .subscribe((data: string) => {
      //       this.toastService.presentToast(data);
      //       location.reload();
      //      }, error => {
      //       if (error.status === 401) {
      //         // auto logout if 401 response returned from api
      //         this.toastService.presentToast(error);

      //     }

      //       console.log(error);
      //     });

      const apiHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authUser
      };

      this.http.post(url, JSON.stringify(loan), { headers: apiHeaders })
          .subscribe((data: string) => {
            this.toastService.presentToast(data);
            console.log('data is' + data);
            if ( data === 'The renewal limit for this material has reached.' || 'Circulation activity does not exist'){
              console.log('No action');

            }
            else {  location.reload(); }
           }, error => {
            console.log(error);
          });
    }


    async renewAlert(loan, index){
      console.log('aaaaaaa');
      const confirm = await this.alertCtrl.create({
        message: 'Press renew to confirm your renewal',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'RENEW',
            handler: () => {
              console.log('Confirm Okay.');
              this.renewAction(loan, index);
            }
          }
        ]
      });
      await confirm.present();
    }

}
