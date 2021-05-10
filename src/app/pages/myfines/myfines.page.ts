import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { MyfinesService } from 'src/app/services/myfines.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-myfines',
  templateUrl: './myfines.page.html',
  styleUrls: ['./myfines.page.scss'],
})
export class MyfinesPage implements OnInit {
  public authUser: any;
  badRequest = false;
  postData = {
    token: ''
  };

  constructor(
    private auth: AuthService,
    private myfinesService: MyfinesService,
    private toastService: ToastService) { }


    ngOnInit() {
      // tslint:disable-next-line: deprecation
      this.auth.userData$.subscribe((res: any) => {
        this.authUser = res;
        console.log(res);
        this.getFines(res);
      });
}

  getFines(token: any){
    // this.postData.token = this.authUser;
    console.log('This is token');
    console.log(token);
    // tslint:disable-next-line: deprecation
    this.myfinesService.finesData(token).subscribe(
        (res: any) => {
          console.log('Wishlist response');
          console.log(res);
          this.myfinesService.changeFinesData(res);
        },
        (error: any) => {
          this.badRequest = true;
          // this.toastService.presentToast('Please wait...');
        }
      );

  }

}
