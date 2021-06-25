import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { MyprofileService } from '../services/myprofile.service';
import { ToastService } from '../services/toast.service';
const { Browser } = Plugins;
import * as CryptoJS from 'crypto-js';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
homecode: any;
  profileData: any;
  profileUser: any;
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
      this.getProfile(res);
      this.homecode = this.authService.authcode;
      console.log('This is app for ' + this.homecode);
    });

   }
   getProfile(token: any){
    // this.postData.token = this.authUser;
    console.log('This is token');
    console.log(token);
    // tslint:disable-next-line: deprecation
    this.profileService.profileData(token, this.homecode).subscribe(
        (res: any) => {
          console.log('Profile response');
          console.log(res);
          this.profileService.changeProfileData(res);
          this.profileUser = res;
        },
        (error: any) => {
          this.toastService.presentToast('Please wait...');
        }
      );
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
  eresources(username: any){
    const timestamp = Math.floor(Date.now() / 1000);
    const param = 'username=' + username + '&ts=' + timestamp;
    console.log(param);

    const key = CryptoJS.enc.Hex.parse(CryptoJS.SHA256('1Pn0M07ozr').toString());
    const iv = CryptoJS.enc.Hex.parse('01020304050607080900010203040506');
    const encrypted = CryptoJS.AES.encrypt(param, key, { iv });
    console.log(encodeURIComponent(encrypted.toString()));
    Browser.open({ url: 'http://115.133.237.17:18888/Home/OnlineDatabaseSubscriptionsMobile?e='
    + encodeURIComponent(encrypted.toString())});
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

  about(){
    this.router.navigate(['./home/about']);
  }
  myothercharges(){
    this.router.navigate(['./home/myothercharges']);
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
