import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { MywishlistService } from 'src/app/services/mywishlist.service';

@Component({
  selector: 'app-wishlist-req',
  templateUrl: './wishlist-req.component.html',
  styleUrls: ['./wishlist-req.component.scss'],
})
export class WishlistReqComponent implements OnInit {
  wishlistData: any;
  required = new FormControl('', Validators.required);

  constructor(
    private modalContoller: ModalController,
    private mywishlistService: MywishlistService,
    ) { }

  ngOnInit() {
 // tslint:disable-next-line: deprecation
 this.mywishlistService.wishlistData$.subscribe((res: any) => {
  this.wishlistData = res;
  console.log('In wishlist component');
  console.log(this.wishlistData);
});
  }

  dismissModal(){
    this.modalContoller.dismiss();
  }

  wishlistReq(){
    console.log('hhhhhh');
    console.log(this.wishlistData);

  }

  onSubmit() {
    console.log('We are in function onSubmit');
    // this.http.post(this.requesturl, postData);
  }

}
