import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OpacSearchService } from 'src/app/services/opac-search.service';

@Component({
  selector: 'app-opac-result',
  templateUrl: './opac-result.page.html',
  styleUrls: ['./opac-result.page.scss'],
})
export class OpacResultPage implements OnInit {
  public authUser: any;

  postData = {
    token: ''
  };

  information = null;

  constructor(
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private opacSearchService: OpacSearchService) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log('Inside get user token');
      const cwId = this.activatedRoute.snapshot.paramMap.get('citedworkId');

    // tslint:disable-next-line: deprecation
      this.opacSearchService.getDetails(cwId, this.authUser).subscribe(result => {
      this.information = result;
      console.log('Inside get book details');
    });
    });

}


reserveAction(){
  this.router.navigate(['./home/reservation']);
}
}
