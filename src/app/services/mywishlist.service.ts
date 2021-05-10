import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class MywishlistService {
  url =  environment.apiUrl + 'api/Wishlist/GetAllWishlist';

  wishlistData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService, private http: HttpClient,
              private toastService: ToastService) { }


  changeWishlistData(data: any) {
    this.wishlistData$.next(data);
  }

  getCurrentWishlistData(){
    return this.wishlistData$.getValue();
  }

  // delete data from Object
  deleteWishlistData(msgIndex: number){
    const data = [];
    const currentWishlistData = this.getCurrentWishlistData();

    currentWishlistData.splice(msgIndex, 1);
    const newUpdatedWishlist = data.concat(currentWishlistData);
    this.changeWishlistData(newUpdatedWishlist);
  }

  wishlistData(postData: any): Observable<any> {
    console.log('Get Wishlist');
    this.toastService.presentToast('Gathering data. Please wait!');
    return this.httpService.getWishlist('api/Wishlist/GetAllWishlist', postData);
  }

// delete data from API
  cancelwishlistReq(postData: any): Observable<any> {
      console.log('Cancel Wishlist');
      return this.httpService.delete('api/Wishlist/GetAllWishlist', postData);
    }

// get details wishlist data
getwlDetails(wlId, token) {
  const headerDict = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
  };

  const requestOptions = {
    headers: new HttpHeaders(headerDict)
  };
  return this.http.get(`${this.url}?Id=${encodeURI(wlId)}`, requestOptions);
}


updateWishlistData(newWishlist: any) {
  const data = [];
  data.push(newWishlist);
  const currentWishlistData = this.getCurrentWishlistData();

  const newWishlistUpdateData = data.concat(currentWishlistData);
  this.changeWishlistData(newWishlistUpdateData);
}


wishlistUpdate(postData: any): Observable<any> {
  return this.httpService.post('wishlistUpdate', postData);
}


}
