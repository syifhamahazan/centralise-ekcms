import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { SearchAreaComponent } from 'src/app/modal/search-area/search-area.component';
import { AuthService } from 'src/app/services/auth.service';
import { OpacSearchService, SearchType } from 'src/app/services/opac-search.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public authUser: any;
  postData = {
    token: ''
  };

  results: Observable<any>;
  // tslint:disable-next-line: no-inferrable-types
  searchTerm: string = '';
  type: SearchType = SearchType.title;
  constructor(
    private auth: AuthService,
    private router: Router,
    private modalCtrl: ModalController,
    private opacSearchService: OpacSearchService,
    private toastService: ToastService) {
     }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(res);
    });

  }

  searchChanged(event) {
    // Call our service function which returns an Observable
    console.log('Token for search');
    console.log(this.authUser);
    this.results = this.opacSearchService.searchData(this.searchTerm, this.type, this.authUser);
    console.log(this.results);
  }

  _ionChange(event) {
    console.log(event.detail.value);
  }

searchAction(){
  this.router.navigate(['./home/search-result']);
 }

advSearch(){
  this.router.navigate(['./home/maintenance']);
}

rbrSearch(){
  this.router.navigate(['./home/rbr-search']);
}

// opacSearch(token: any){
//   // this.postData.token = this.authUser;
//   console.log('This is token');
//   console.log(token);
//   // tslint:disable-next-line: deprecation
//   this.opacSearchService.opacSearchRes(token).subscribe(
//       (res: any) => {
//         console.log('Search response');
//         console.log(res);
//         // this.opacSearchService.changeFinesData(res);
//       },
//       (error: any) => {
//         this.toastService.presentToast('Loading...');
//       }
//     );

// }

async searchArea(){
  const modal = await this.modalCtrl.create({
    component: SearchAreaComponent
  });
  await modal.present();
}

}
