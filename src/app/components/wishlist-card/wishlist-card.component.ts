import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WishlistUpdateComponent } from 'src/app/modal/wishlist/wishlist-update/wishlist-update.component';
import { MywishlistService } from 'src/app/services/mywishlist.service';
import { WishlistAlertService } from 'src/app/services/wishlist-alert.service';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.scss'],
})
export class WishlistCardComponent implements OnInit {
  @Input() loginUser: any;
  wishlistData: any;
  postData = {
    id: '',
    token: ''
  };
  constructor(
    private mywishlistService: MywishlistService,
    private alertSerivce: WishlistAlertService,
    private modalContoller: ModalController
    ) {}

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.mywishlistService.wishlistData$.subscribe((res: any) => {
      this.wishlistData = res;
    });
  }

  removewlReq(wishlistId: any, wishlistIndex: number){
    this.postData.id = wishlistId;
    this.postData.token = this.loginUser;
    console.log(this.postData);
    this.alertSerivce
    .presentAlertConfirm('Remove wishlist', 'Do you want to remove this wishlist?')
    .then((res: any) => {
      console.log(res.role);
      if (res.role === 'okay') {
        this.makewishlistDelete(this.postData, wishlistIndex);
        console.log(this.postData);
      //   this.mywishlistService.cancelwishlistReq(this.postData).subscribe((res: any) => {
      //     if (res.success) {
      //       this.mywishlistService.deleteFeedData(msgIndex);
          }
        });
  }

  makewishlistDelete(postData: any, wishlistIndex: number){
    // tslint:disable-next-line: deprecation
    this.mywishlistService.cancelwishlistReq(this.postData).subscribe((res: any) => {
      console.log('remove wishlist');
    });
  }

  async wishlistEdit(){
    const modal = await this.modalContoller.create({
      component: WishlistUpdateComponent
    });

    await modal.present();

  }
}
