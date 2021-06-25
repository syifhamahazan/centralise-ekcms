import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Declare behaviour subject with dollar sign because cannot call getUserData in every page
  userData$ = new BehaviorSubject<any>('');
  authcode: any;
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router,
    public alertController: AlertController,

  ) { }
  private loading;

  // Need auth service to access user data, need to call in every page
  getUserData(){
    // connect to storage service
    this.storageService.get(AuthConstants.AUTH).then(res => {
      console.log('Iam in getuserdata');
      console.log(res);
      this.userData$.next(res);
    });
  }
  // Observable like promises for rxjs
  login(postData: any, code: any): Observable<any>{
    console.log('Login post code ' + code);
    return this.httpService.loginpost('token', postData, code);
  }

  authlogin(postData: any, code: any ): Observable<any>{
    console.log('this is login forr ' + code);
    this.authcode =  code;
    return this.httpService.authpost('token', postData, code);
  }


  signup(postData: any){
    return this.httpService.post('signup', postData);
  }

  logout(){
    // get the userdatakey using AUTH
    // do it in promise way since sometimes it may take time
    // to clear off userdata
    console.log('logout as' + this.authcode);
    this.storageService.removeItem(AuthConstants.AUTH).then(res => {
      this.router.navigate(['/login']);
  });

}

userlogout(){
      this.router.navigate(['/logout']);

}

async logoutAction() {
  const alert = await this.alertController.create({
    message: 'Your session is already expired. ',
    buttons: [
     {
        text: 'Login again',
        handler: () => {
          this.logout();
      }
    }
    ],
    backdropDismiss: false
  });

  await alert.present();
  const result = await alert.onDidDismiss();
  console.log(result);
}



}
