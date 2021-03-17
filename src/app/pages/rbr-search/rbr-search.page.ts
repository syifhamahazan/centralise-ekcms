import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { RbrSearchService, SearchType } from 'src/app/services/rbr-search.service';

@Component({
  selector: 'app-rbr-search',
  templateUrl: './rbr-search.page.html',
  styleUrls: ['./rbr-search.page.scss'],
})
export class RbrSearchPage implements OnInit {
  results: Observable<any>;
  // tslint:disable-next-line: no-inferrable-types
  searchTerm: string = '';
  type: SearchType = SearchType.lecturer_name;

  public authUser: any;
  postData = {
    token: ''
  };

  constructor(
    private rbrSearchService: RbrSearchService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  searchChanged(event) {
    // Call our service function which returns an Observable
    console.log('Token for search');
    console.log(this.authUser);
    this.results = this.rbrSearchService.searchData(this.searchTerm, this.type, this.authUser);
    console.log(this.results);
  }

  _ionChange(event) {
    console.log(event.detail.value);
  }

}
