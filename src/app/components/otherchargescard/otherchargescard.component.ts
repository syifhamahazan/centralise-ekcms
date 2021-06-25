import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { MyotherchargesService } from 'src/app/services/myothercharges.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-otherchargescard',
  templateUrl: './otherchargescard.component.html',
  styleUrls: ['./otherchargescard.component.scss'],
})
export class OtherchargescardComponent implements OnInit {
  @Input() loginUser: any;
  otherChargesData: any;
  badRequest = false;

  constructor(private otherchargesService: MyotherchargesService,
              private auth: AuthService,
              public alertCtrl: AlertController,
              private toastService: ToastService,
              private http: HttpClient) { }


  ngOnInit() {
        // tslint:disable-next-line: deprecation
        this.otherchargesService.otherChargesData$.subscribe((res: any) => {
          this.otherChargesData = res;
          console.log('inside other charges components');
          console.log(this.otherChargesData);
        });

      }


}
