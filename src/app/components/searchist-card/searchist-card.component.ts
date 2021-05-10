import { Component, Input, OnInit } from '@angular/core';
import { SearchhistService } from 'src/app/services/searchhist.service';

@Component({
  selector: 'app-searchist-card',
  templateUrl: './searchist-card.component.html',
  styleUrls: ['./searchist-card.component.scss'],
})
export class SearchistCardComponent implements OnInit {
  @Input() loginUser: any;
  searchhistData: any;

  constructor(private searchhistService: SearchhistService) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.searchhistService.searchhistData$.subscribe((res: any) => {
      this.searchhistData = res;
    });

  }

}
