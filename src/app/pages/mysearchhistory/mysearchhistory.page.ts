import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SearchhistService } from 'src/app/services/searchhist.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-mysearchhistory',
  templateUrl: './mysearchhistory.page.html',
  styleUrls: ['./mysearchhistory.page.scss'],
})
export class MysearchhistoryPage implements OnInit {
  @Input() loginUser: any;
  badRequest = false;
  public authUser: any;
  postData = {
    token: ''
  };

  constructor(
    private auth: AuthService,
    private searchhistService: SearchhistService,
    private toastService: ToastService) { }



  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(res);
      this.getSearchhist(res);
    });
  }

  getSearchhist(token: any){
    // this.postData.token = this.authUser;
    console.log('This is token');
    console.log(token);
    // tslint:disable-next-line: deprecation
    this.searchhistService.searchhistData(token).subscribe(
        (res: any) => {
          console.log('Search History response');
          console.log(res);
          this.searchhistService.changeSearchhistData(res);
        },
        (error: any) => {
          this.badRequest = true;
          // this.toastService.presentToast('Please wait...');
        }
      );

  }


}
