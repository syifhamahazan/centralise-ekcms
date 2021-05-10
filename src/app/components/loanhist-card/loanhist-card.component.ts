import { Component, Input, OnInit } from '@angular/core';
import { LoanhistService } from 'src/app/services/loanhist.service';

@Component({
  selector: 'app-loanhist-card',
  templateUrl: './loanhist-card.component.html',
  styleUrls: ['./loanhist-card.component.scss'],
})
export class LoanhistCardComponent implements OnInit {
  @Input() loginUser: any;
  loanhistData: any;

  constructor(private myloanhistService: LoanhistService) { }

  ngOnInit() {
        // tslint:disable-next-line: deprecation
        this.myloanhistService.loanhistData$.subscribe((res: any) => {
          this.loanhistData = res;
        });

  }

}
