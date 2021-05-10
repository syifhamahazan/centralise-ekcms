import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OpacSearchService } from 'src/app/services/opac-search.service';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@Component({
  selector: 'app-meta-result',
  templateUrl: './meta-result.page.html',
  styleUrls: ['./meta-result.page.scss'],
})
export class MetaResultPage implements OnInit {
  public authUser: any;

  postData = {
    token: ''
  };

  constructor(
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private opacSearchService: OpacSearchService,
    private previewAnyFile: PreviewAnyFile) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log('Inside get user token');
      const path = this.activatedRoute.snapshot.paramMap.get('filepath');
    });

  }

}
