import { Component, Input, OnInit } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';
import { MyoverdueService } from 'src/app/services/myoverdue.service';

@Component({
  selector: 'app-overdue-card',
  templateUrl: './overdue-card.component.html',
  styleUrls: ['./overdue-card.component.scss'],
})
export class OverdueCardComponent implements OnInit {
  homecode: any;

  @Input() loginUser: any;
  overdueData: any;
  constructor(private myoverdueService: MyoverdueService, private home: HomePage ) {}

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.myoverdueService.overdueData$.subscribe((res: any) => {
      this.overdueData = res;
      this.homecode = this.home.homecode;
    });

  }

}
