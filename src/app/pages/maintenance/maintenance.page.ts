import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage{

  options: AnimationOptions = {
    path: '../../../assets/maintenance.json'
  };

  constructor(private router: Router) { }

  navigateToHome(){
    this.router.navigate(['/home/search']);
  }

}
