import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  post(serviceName: string, data: any) {

  const body = new HttpParams()
  .set(`grant_type`, data.grant_type)
  .set(`username`, data.username)
  .set(`password`, data.password);
  const apiHeaders = {'Content-Type': 'application/x-www-form-urlencoded'};

  const url = environment.apiUrl + serviceName;
  console.log(url);
  console.log(apiHeaders, data);
  return this.http.post(url, body.toString(), {headers: apiHeaders });
  }

  delete(serviceName: string, data: any) {
    console.log(data);
    const apiHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + data
    };
    const url = environment.apiUrl + serviceName;
    console.log(apiHeaders, data);
    return this.http.put(url, { headers: apiHeaders });
    }

  getProfile(serviceName: string, data: any) {
    console.log('Profile Data is');
    console.log(data);
    const apiHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + data
    };
    const url = environment.apiUrl + serviceName;
    console.log (url);
    return this.http.get(url, { headers: apiHeaders });
  }

  getSearch(serviceName: string, data: any) {
    console.log('Search Result...');
    const apiHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + data
    };
    const url = environment.apiUrl + serviceName;
    return this.http.get(url, { headers: apiHeaders });
    }


    getWishlist(serviceName: string, data: any) {
      console.log('Wishlist Data is');
      console.log(data);
      const apiHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data
      };
      const url = environment.apiUrl + serviceName;
      console.log (url);
      return this.http.get(url, { headers: apiHeaders });
      }

    getLoan(serviceName: string, data: any) {
        console.log('Loan data is');
        const apiHeaders = {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Authorization',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data
        };
        const url = environment.apiUrl + serviceName;
        return this.http.get(url, { headers: apiHeaders });
        }


      getFines(serviceName: string, data: any) {
      console.log('Fines data is');
      const apiHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data
      };
      const url = environment.apiUrl + serviceName;
      return this.http.get(url, { headers: apiHeaders });
      }

    getLoanhist(serviceName: string, data: any) {
      console.log('Loan history data is');
      console.log(data);
      const apiHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data
      };
      const url = environment.apiUrl + serviceName;
      console.log (url);
      return this.http.get(url, { headers: apiHeaders });
      }

    getReservation(serviceName: string, data: any) {
      console.log('Reservation data is');
      console.log(data);
      const apiHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data
      };
      const url = environment.apiUrl + serviceName;
      console.log (url);
      return this.http.get(url, { headers: apiHeaders });
      }

      getOverdue(serviceName: string, data: any) {
        console.log('Overdue data is');
        console.log(data);
        const apiHeaders = {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Authorization',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data
        };
        const url = environment.apiUrl + serviceName;
        console.log (url);
        return this.http.get(url, { headers: apiHeaders });
        }

        getSearchhist(serviceName: string, data: any) {
          console.log('Search history is');
          console.log(data);
          const apiHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'Authorization',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + data
          };
          const url = environment.apiUrl + serviceName;
          console.log (url);
          return this.http.get(url, { headers: apiHeaders });
          }

          getSearchRes(serviceName: string, data: any) {
            const body = new HttpParams()
            .set(`searchField`, `10011`);
            const apiHeaders = {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
              'Access-Control-Allow-Headers': 'Authorization',
              Authorization: 'Bearer ' + data
            };
            const url = environment.apiUrl + serviceName;
            console.log (url + body);
            return this.http.get(`${url}?${body}`, { headers: apiHeaders });
            }



}
