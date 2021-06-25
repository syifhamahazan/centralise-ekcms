import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  logoutcode: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.logoutcode = this.authService.authcode;
    console.log('Logout with code ' + this.logoutcode);
  }

  logoutAction(){
    this.authService.logout();
  }

}
