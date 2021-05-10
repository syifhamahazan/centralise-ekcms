import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { SearchAreaComponent } from 'src/app/modal/search-area/search-area.component';
import { AuthService } from 'src/app/services/auth.service';
import { OpacSearchService, SearchType } from 'src/app/services/opac-search.service';
import { ToastService } from 'src/app/services/toast.service';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  show = true;
  public authUser: any;
  postData = {
    token: ''
  };

  results: Observable<any>;
  metadata: Observable<any>;
  repository: Observable<any>;

  // tslint:disable-next-line: no-inferrable-types
  searchTerm: string = '';
  type: SearchType = SearchType.title;
  constructor(
    private auth: AuthService,
    private router: Router,
    private modalCtrl: ModalController,
    private opacSearchService: OpacSearchService,
    private toastService: ToastService,
    private previewAnyFile: PreviewAnyFile,
    private document: DocumentViewer,
    private fileOpener: FileOpener) {
     }
   options: DocumentViewerOptions = {
      title: 'My PDF'
    };

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
    this.metadata = this.opacSearchService.searchMetadata(this.searchTerm, this.type, this.authUser);
    this.repository = this.opacSearchService.searchRepo(this.searchTerm, this.type, this.authUser);
    console.log(this.results);
  }

  _ionChange(event) {
    console.log(event.detail.value);
  }

searchAction(){
  this.router.navigate(['./home/search-result']);
 }

advSearch(){
  this.router.navigate(['./home/advance-search']);
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
PreviewFile(path){
  console.log(path);
  // this.document.viewDocument(path, 'application/pdf', this.options);
  this.previewAnyFile.preview(path)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));
  console.log(path);
}

async searchArea(){
  const modal = await this.modalCtrl.create({
    component: SearchAreaComponent
  });
  await modal.present();
}

}
