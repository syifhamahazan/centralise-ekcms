import { Component, OnInit } from '@angular/core';
import { SearchResService } from 'src/app/services/search-res.service';

@Component({
  selector: 'app-searchres-card',
  templateUrl: './searchres-card.component.html',
  styleUrls: ['./searchres-card.component.scss'],
})
export class SearchresCardComponent implements OnInit {
  searchresData: any;

  constructor(private searchResService: SearchResService) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.searchResService.searchResData$.subscribe((res: any) => {
      this.searchresData = res;
      console.log('inside components');
      console.log(this.searchresData);
      });
  }


}
