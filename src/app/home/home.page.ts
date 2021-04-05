import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { MyprofileService } from '../services/myprofile.service';
import { ToastService } from '../services/toast.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  profileData: any;
  public authUser: any;
  postData = {
    token: ''
  };


  constructor(
    private profileService: MyprofileService,
    private auth: AuthService,
    private router: Router,
    public alertController: AlertController,
    private authService: AuthService,
    private toastService: ToastService) { }


  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.authService.userData$.subscribe((res: any) => {
      this.profileData = res;
      console.log('Get Profile');
    });

   }

  searchAction(){
    this.router.navigate(['./home/search-result']);
    //  alert('hello');
   }
  mywishlist(){
    this.router.navigate(['./home/mywishlist']);
  }
  myemails(){
    this.router.navigate(['./home/myemails']);
  }
  myloanhist(){
    this.router.navigate(['./home/myloanhistory']);
  }
  myfines(){
    this.router.navigate(['./home/myfines']);
  }
  myoverdues(){
    this.router.navigate(['./home/myoverdues']);
  }
  mysearchhist(){
    this.router.navigate(['./home/mysearchhistory']);
  }
  myprofile(){
    this.router.navigate(['./home/myprofile']);
  }
  serachField(){
    this.router.navigate(['./home/search']);
  }
  myloan(){
    this.router.navigate(['./home/myloanrenew']);
  }
  myrsv(){
    this.router.navigate(['./home/myreservation']);
  }
  logout(){
    this.router.navigate(['./home/logout']);
  }

  async logoutAction() {
    const alert = await this.alertController.create({
      header: 'Oh no! You are leaving...',
      message: '<strong>Are you sure ?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.authService.logout();
        }
      }
      ]
    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

}
