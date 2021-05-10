import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MyemailsService } from 'src/app/services/myemails.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-myemail',
  templateUrl: './myemail.page.html',
  styleUrls: ['./myemail.page.scss'],
})
export class MyemailPage implements OnInit {
  public authUser: any;
  badRequest = false;
  postData = {
    token: ''
  };


  constructor(
    private auth: AuthService,
    private myemailsService: MyemailsService,
    private toastService: ToastService) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(res);
      this.getEmails(res);
    });

  }

  getEmails(token: any){
    // this.postData.token = this.authUser;
    console.log('This is token');
    console.log(token);
    // tslint:disable-next-line: deprecation
    this.myemailsService.emailsData(token).subscribe(
        (res: any) => {
          console.log('Emails response');
          console.log(res);
          this.myemailsService.changeEmailsdata(res);
        },
        (error: any) => {
          this.badRequest = true;
          // this.toastService.presentToast('Please wait...');
        }
      );

  }

}
