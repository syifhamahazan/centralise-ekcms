import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MyprofileService } from 'src/app/services/myprofile.service';
import { ToastService } from 'src/app/services/toast.service';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
  profileUser: any;
  public authUser: any;
  postData = {
    token: ''
  };

  constructor(
    private router: Router,
    private auth: AuthService,
    private profileService: MyprofileService,
    private toastService: ToastService) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(res);
      this.getProfile(res);
  });


}

getProfile(token: any){
  // this.postData.token = this.authUser;
  console.log('This is token');
  console.log(token);
  // tslint:disable-next-line: deprecation
  this.profileService.profileData(token).subscribe(
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

changePwd(){
  Browser.open({ url: 'https://pustaka.upsi.edu.my/Home/ForgotPassword' });
}

editprofile(){
  this.router.navigate(['./myprofile/profilepic']);
}

editpwd(){
  this.router.navigate(['./myprofile/editpwd']);
}

}

