import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomePage } from 'src/app/home/home.page';
import { AdvSearchService } from 'src/app/services/adv-search.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adv-result',
  templateUrl: './adv-result.page.html',
  styleUrls: ['./adv-result.page.scss'],
})
export class AdvResultPage implements OnInit {
  public authUser: any;

  postData = {
    token: ''
  };
  searchcode: any;

  information = null;

  constructor(
    private auth: AuthService,
    private activatedRoute: ActivatedRoute, private advSearchService: AdvSearchService,
    private home: HomePage) { }

  ngOnInit() {
    this.searchcode = this.home.homecode;
    console.log('searching code ' + this.searchcode);

        // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log('Inside get user token');
      const cwId = this.activatedRoute.snapshot.paramMap.get('citedworkId');

    // tslint:disable-next-line: deprecation
      this.advSearchService.getAdvDetails(cwId, this.authUser, this.searchcode).subscribe(result => {
      this.information = result;
      console.log('Inside get book details');
    });
    });

  }

}
