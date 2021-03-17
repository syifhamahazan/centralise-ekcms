import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { MywishlistService } from 'src/app/services/mywishlist.service';

@Component({
  selector: 'app-wishlist-update',
  templateUrl: './wishlist-update.component.html',
  styleUrls: ['./wishlist-update.component.scss'],
})
export class WishlistUpdateComponent implements OnInit {
  @Input() loginUser: any;
  public authUser: any;
  wishlistData: any;

  postData = {
    token: '',
    id: '',
    title: ''
  };

  information = null;


  required = new FormControl('', Validators.required);

  constructor(
    private auth: AuthService,
    private modalContoller: ModalController,
    private mywishlistService: MywishlistService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log('Inside get user token');
      const wlId = this.activatedRoute.snapshot.paramMap.get('Id');

    // tslint:disable-next-line: deprecation
      this.mywishlistService.getwlDetails(wlId, this.authUser).subscribe(result => {
      this.information = result;
      console.log('Inside get wishlist details');
      console.log(this.information);
    });
  });

  }

  dismissModal(){
    this.modalContoller.dismiss();
  }

  wishlistUpdateAction(){
    // tslint:disable-next-line: deprecation
    this.mywishlistService.wishlistUpdate(this.postData).subscribe((res: any) => {
      console.log(res.wishlistData);
    });
  }

}
