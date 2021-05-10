import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { LoanhistService } from 'src/app/services/loanhist.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-myloanhistory',
  templateUrl: './myloanhistory.page.html',
  styleUrls: ['./myloanhistory.page.scss'],
})
export class MyloanhistoryPage implements OnInit {
  badRequest = false;
  public authUser: any;
  postData = {
    token: ''
  };
  constructor(
    private auth: AuthService,
    private loanhistService: LoanhistService,
    private toastService: ToastService) { }



  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(res);
      this.getLoanhist(res);
    });

  }

  getLoanhist(token: any){
    // this.postData.token = this.authUser;
    console.log('This is token');
    console.log(token);
    // tslint:disable-next-line: deprecation
    this.loanhistService.loanhistData(token).subscribe(
        (res: any) => {
          console.log('Loan History response');
          console.log(res);
          this.loanhistService.changeloanhistData(res);
        },
        (error: any) => {
          this.badRequest = true;
          // this.toastService.presentToast('Please wait...');
        }
      );

  }

}
