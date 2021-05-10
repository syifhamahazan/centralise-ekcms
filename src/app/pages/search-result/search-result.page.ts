import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Router } from '@angular/router';
import { SearchResService } from 'src/app/services/search-res.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  public authUser: any;
  postData = {
    token: ''
  };


  constructor(
    private router: Router,
    private searchResService: SearchResService,
    private auth: AuthService,
    private toastService: ToastService) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(res);
      this.getsearchRes(res);
    });
  }
  bookdetails(){
    this.router.navigate(['./home/bookdetails']);

  }



  getsearchRes(token: any){
    // this.postData.token = this.authUser;
    console.log('This is token');
    console.log(token);
    // tslint:disable-next-line: deprecation
    this.searchResService.searchResData(token).subscribe(
        (res: any) => {
          console.log('Search Result response');
          console.log(res);
          this.searchResService.changeSearchResultData(res);
        },
        (error: any) => {
          this.toastService.presentToast('Please wait...');
        }
      );

  }

}
