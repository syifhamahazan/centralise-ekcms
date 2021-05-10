import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MyoverdueService } from 'src/app/services/myoverdue.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-myoverdues',
  templateUrl: './myoverdues.page.html',
  styleUrls: ['./myoverdues.page.scss'],
})
export class MyoverduesPage implements OnInit {

  badRequest = false;
  public authUser: any;
  postData = {
    token: ''
  };


  constructor(
    private auth: AuthService,
    private myoverdueService: MyoverdueService,
    private toastService: ToastService) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(res);
      this.getOverdue(res);
    });
  }

  getOverdue(token: any){
    // this.postData.token = this.authUser;
    console.log('This is token');
    console.log(token);
    // tslint:disable-next-line: deprecation
    this.myoverdueService.overdueData(token).subscribe(
        (res: any) => {
          console.log('Overdue response');
          console.log(res);
          this.myoverdueService.changeoverdueData(res);
        },
        (error: any) => {
          this.badRequest = true;
          // this.toastService.presentToast('Please wait...');
        }
      );

  }

}
