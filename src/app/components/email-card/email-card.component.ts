import { Component, Input, OnInit } from '@angular/core';
import { MyemailsService } from 'src/app/services/myemails.service';

@Component({
  selector: 'app-email-card',
  templateUrl: './email-card.component.html',
  styleUrls: ['./email-card.component.scss'],
})
export class EmailCardComponent implements OnInit {
  @Input() loginUser: any;
  emailsData: any;
  badRequest = false;

  constructor(private myemailsService: MyemailsService) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.myemailsService.emailsData$.subscribe((res: any) => {
      this.emailsData = res;
      console.log('inside email components');
      console.log(this.emailsData);
    });
  }

}
