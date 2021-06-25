import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MyotherchargesService } from 'src/app/services/myothercharges.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-myothercharges',
  templateUrl: './myothercharges.page.html',
  styleUrls: ['./myothercharges.page.scss'],
})
export class MyotherchargesPage implements OnInit {
  @Input() loginUser: any;
  badRequest = false;
  public authUser: any;
  postData = {
    token: ''
  };

  constructor(
    private auth: AuthService,
    private myotherchargesService: MyotherchargesService,
    private toastService: ToastService) { }


  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(res);
      this.getOtherCharges(res);
  });

    this.auth.userData$.subscribe((res: any) => {
    this.authUser = res;
    console.log('Inside get user token' + this.authUser);
  });

  }



getOtherCharges(token: any){
  console.log('This is token');
  console.log(token);
  // tslint:disable-next-line: deprecation
  this.myotherchargesService.otherChargesData(token).subscribe(
      (res: any) => {
        console.log('Other Charges response');
        console.log(res);
        this.myotherchargesService.changeOtherChargesdata(res);
      },
      (error: any) => {
        this.badRequest = true;
      }
    );

}
}
