import { Component, Input, OnInit } from '@angular/core';
import { MyfinesService } from 'src/app/services/myfines.service';

@Component({
  selector: 'app-fines-card',
  templateUrl: './fines-card.component.html',
  styleUrls: ['./fines-card.component.scss'],
})
export class FinesCardComponent implements OnInit {
  @Input() loginUser: any;
  finesData: any;

  constructor(private myfinesService: MyfinesService) { }

  ngOnInit() {
        // tslint:disable-next-line: deprecation
        this.myfinesService.finesData$.subscribe((res: any) => {
          this.finesData = res;
          console.log('inside components');
          console.log(this.finesData);
        });
      }


}
