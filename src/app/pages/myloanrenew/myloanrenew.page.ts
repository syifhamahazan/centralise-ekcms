import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MyloanService } from 'src/app/services/myloan.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-myloanrenew',
  templateUrl: './myloanrenew.page.html',
  styleUrls: ['./myloanrenew.page.scss'],
})
export class MyloanrenewPage implements OnInit {
  badRequest = false;
  public authUser: any;
  postData = {
    token: ''
  };

  constructor(
    private auth: AuthService,
    private loanService: MyloanService,
    private toastService: ToastService) { }



  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(res);
      this.getLoan(res);
  });

  }

  getLoan(token: any){
    console.log('This is token');
    console.log(token);
    // tslint:disable-next-line: deprecation
    this.loanService.loanData(token).subscribe(
        (res: any) => {
          console.log('Loan response');
          console.log(res);
          this.loanService.changeLoanData(res);
        },
        (error: any) => {
          this.badRequest = true;
        }
      );

  }

}
