import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';

export enum SearchType {
  title = 'title',
  author = 'author',
  isbn = 'isbn',
  issn = 'issn',
  subject = 'subject',
  callnumber = 'callnumber',
  series = 'series',
  summary = 'summary',
  language = 'language',
  dissertationnote = 'dissertationnote'
}

@Injectable({
  providedIn: 'root'
})
export class OpacSearchService {
  url: any;
  apiUrl: any;
  urlmetadata: any;
  urlrepo: any;
  opacurl: any;

  constructor(
    private http: HttpClient,
    private toastService: ToastService
    ) { }


  searchData(title: string, type: SearchType, token, code: any): Observable<any> {
    if ( code === '010'){
      this.apiUrl = environment.upsiUrl ;
    }
    else if (code === '011') {
      this.apiUrl = environment.kuisUrl ;
   }

   else if (code === '020') {
    this.apiUrl = environment.scUrl ;
  }

   else if (code === '023') {
    this.apiUrl = environment.mbsaUrl ;
  }

   else if (code === '025') {
    this.apiUrl = environment.apiUrl ;
  }


    this.url = this.apiUrl + '/api/Material/GetMaterialsById';

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
    return this.http.get(`${this.url}?searchfield=${encodeURI(title)}&searchtype=${type}`, requestOptions).pipe(
      map(results => results),
      catchError(err => {
        this.toastService.presentToast('No catalogue available');
        return throwError(err);
      })

    );
  }

  searchMetadata(title: string, type: SearchType, token, code: any): Observable<any> {

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
    if ( code === '010'){
      this.apiUrl = environment.upsiUrl ;
    }
    else if (code === '011') {
      this.apiUrl = environment.kuisUrl ;
   }

   else if (code === '020') {
    this.apiUrl = environment.scUrl ;
  }

   else if (code === '023') {
    this.apiUrl = environment.mbsaUrl ;
  }

   else if (code === '025') {
    this.apiUrl = environment.apiUrl ;
  }


    this.urlmetadata =  this.apiUrl + 'api/Metadata/GetMetadataById';

    return this.http.get(`${this.urlmetadata}?searchfield=${encodeURI(title)}&searchtype=${type}`, requestOptions).pipe(
      map(results => results),
      catchError(err => {
        this.toastService.presentToast('No metadata available');
        return throwError(err);
      })
    );
  }

  searchRepo(title: string, type: SearchType, token, code: any): Observable<any> {

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
    if ( code === '010'){
      this.apiUrl = environment.upsiUrl ;
    }
    else if (code === '011') {
      this.apiUrl = environment.kuisUrl ;
   }

   else if (code === '020') {
    this.apiUrl = environment.scUrl ;
  }

   else if (code === '023') {
    this.apiUrl = environment.mbsaUrl ;
  }

   else if (code === '025') {
    this.apiUrl = environment.apiUrl ;
  }

    this.urlrepo =  this.apiUrl + '/api/Econtent/GetMaterialsById';

    return this.http.get(`${this.urlrepo}?searchfield=${encodeURI(title)}&searchtype=${type}`, requestOptions).pipe(
      map(results => results),
      catchError(err => {
        this.toastService.presentToast('No repository available');
        return throwError(err);
      })
    );
  }



  getDetails(cwId, token, code) {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    };
    if ( code === '010'){
      this.apiUrl = environment.upsiUrl ;
    }
    else if (code === '011') {
      this.apiUrl = environment.kuisUrl ;
   }

   else if (code === '020') {
    this.apiUrl = environment.scUrl ;
  }

   else if (code === '023') {
    this.apiUrl = environment.mbsaUrl ;
  }

   else if (code === '025') {
    this.apiUrl = environment.apiUrl ;
  }

    this.opacurl =  this.apiUrl + '/api/material/GetMaterialDetails';
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get(`${this.opacurl}?CitedworkId=${encodeURI(cwId)}`, requestOptions);
  }}
