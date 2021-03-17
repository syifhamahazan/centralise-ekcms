import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AdvSearchService, Operators1, Operators2, SearchType1, SearchType2 } from 'src/app/services/adv-search.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.page.html',
  styleUrls: ['./advance-search.page.scss'],
})
export class AdvanceSearchPage implements OnInit {

  public rows: Array<{ firstCol: string, secondCol: string, thirdCol: string  }> = [];
  public maxQuantity = 10;

  public authUser: any;

  postData = {
    token: ''
  };
  results: Observable<any>;
  // tslint:disable-next-line: no-inferrable-types
  searchField1: string = '';
  // tslint:disable-next-line: no-inferrable-types
  searchField2: string = '';
  // tslint:disable-next-line: no-inferrable-types
  searchField3: string = '';
  operators1: Operators1 = Operators1.and;
  operators2: Operators2 = Operators2.and;
  type1: SearchType1 = SearchType1.title;
  type2: SearchType2 = SearchType2.title;
  information = null;


  constructor(
    private auth: AuthService,
    private activatedRoute: ActivatedRoute, private advSearchService: AdvSearchService) { }

  ngOnInit() {
        // tslint:disable-next-line: deprecation
        this.auth.userData$.subscribe((res: any) => {
          this.authUser = res;
          console.log('Inside get user token');
          const cwId = this.activatedRoute.snapshot.paramMap.get('citedworkId');

        // tslint:disable-next-line: deprecation
          this.advSearchService.getAdvDetails(cwId, this.authUser).subscribe(result => {
          this.information = result;
          console.log('Inside get book details');
        });
        });

  }

  searchChanged(event) {
    // Call our service function which returns an Observable
    console.log('Token for search');
    console.log(this.authUser);
    this.results = this.advSearchService.searchData(this.searchField1, this.type1, this.operators1,
      this.searchField2, this.type2, this.operators2, this.authUser);
    console.log(this.results);
  }

  public addrow(): void {
    this.rows.push({ firstCol: '', secondCol: '', thirdCol: '' });
  }

  public removerow(): void {
    this.rows.pop();
  }

  public clearrow(): void {
    this.rows.splice(0, this.rows.length);
  }


}
