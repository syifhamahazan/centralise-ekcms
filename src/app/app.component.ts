import { Component } from '@angular/core';

import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BnNgIdleService } from 'bn-ng-idle';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private bnIdle: BnNgIdleService,
    private authService: AuthService,
    private loadingCtrl: LoadingController
  ) {
    this.initializeApp();
    // this.backButtonEvent();
  }

  private loading;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.bnIdle.startWatching(500).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.authService.logoutAction();
        console.log('session expired');
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // backButtonEvent(){
  //   this.platform.backButton.subscribeWithPriority(10, () => {
  //     this.backButtonAlert();
  //   });
  // }

  // async backButtonAlert(){
  //     const alert = await this.alertController.create({
  //       header: 'Alert',
  //       subHeader: 'Subtitle',
  //       message: 'This is an alert message.',
  //       buttons: ['OK']
  //     });

  //     await alert.present();

  // }
}
