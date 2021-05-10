import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OpacSearchService } from 'src/app/services/opac-search.service';
import { ToastService } from 'src/app/services/toast.service';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-opac-result',
  templateUrl: './opac-result.page.html',
  styleUrls: ['./opac-result.page.scss'],
})
export class OpacResultPage implements OnInit {
  public authUser: any;
  badRequest = false;
  postData = {
    token: ''
  };

  information = null;

  constructor(
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private opacSearchService: OpacSearchService,
    private toastService: ToastService,
    private http: HttpClient) { }


  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log('Inside get user token');
      const cwId = this.activatedRoute.snapshot.paramMap.get('citedworkId');

    // tslint:disable-next-line: deprecation
      this.opacSearchService.getDetails(cwId, this.authUser).subscribe(result => {
      this.information = result;
      console.log('Inside get book details');
      console.log(this.information);
    },
        (error: any) => {
          this.toastService.presentToast('Please wait...');
          this.badRequest = true;
          console.log('Bad request');
        });
    });

}


reserveAction(inf, index){
  // this.router.navigate(['./home/reservation']);
  console.log('index is' + index);
  console.log('Post Data' +  JSON.stringify(inf));
  console.log(this.authUser);
  const headers = new Headers();
  const apiHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + this.authUser
  };

  this.http.post( environment.apiUrl + '/api/Reservation/NewReservation',  JSON.stringify(inf), { headers: apiHeaders })
      .subscribe((data: string) => {
        this.toastService.presentToast(data);
        location.reload();
       }, error => {
        console.log(error);
      });
}

}
