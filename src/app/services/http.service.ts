import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpcode: any;
  url: any;
  constructor(private http: HttpClient) {}

  authpost(serviceName: string, data: any, code: any) {
  console.log('http with code' + code);
  const body = new HttpParams()
  .set(`grant_type`, data.grant_type)
  .set(`username`, data.username)
  .set(`password`, data.password);
  const apiHeaders = {'Content-Type': 'application/x-www-form-urlencoded'};

  if ( code === '010'){
    this.url = environment.upsiUrl + serviceName;
    this.httpcode = code;
  }
  else if (code === '011') {
    this.url = environment.kuisUrl + serviceName;
 }

 else if (code === '020') {
  this.url = environment.scUrl + serviceName;
  this.httpcode = code;
}

 else if (code === '023') {
  this.url = environment.mbsaUrl + serviceName;
}

 else if (code === '025') {
  this.url = environment.apiUrl + serviceName;
}

  console.log(apiHeaders, data);
  return this.http.post(this.url, body.toString(), {headers: apiHeaders });
  }


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

    loginpost(serviceName: string, data: any, code: any) {
      console.log('The code login ' + code);
      const body = new HttpParams()
      .set(`grant_type`, data.grant_type)
      .set(`username`, data.username)
      .set(`password`, data.password);
      const apiHeaders = {'Content-Type': 'application/x-www-form-urlencoded'};
      if ( code === '010'){
        this.url = environment.upsiUrl + serviceName;
      }
      else if (code === '011') {
        this.url = environment.kuisUrl + serviceName;
     }

     else if (code === '020') {
      this.url = environment.scUrl + serviceName;
    }

     else if (code === '023') {
      this.url = environment.mbsaUrl + serviceName;
    }

     else if (code === '025') {
      this.url = environment.apiUrl + serviceName;
    }

      console.log(this.url);
      console.log(apiHeaders, data);
      return this.http.post(this.url, body.toString(), {headers: apiHeaders });
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

  getProfile(serviceName: string, data: any, code: any) {
    console.log('Profile Data is');
    console.log(data);
    const apiHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + data
    };
    if ( code === '010'){
      this.url = environment.upsiUrl + serviceName;
    }
    else if (code === '011') {
      this.url = environment.kuisUrl + serviceName;
   }

   else if (code === '020') {
    this.url = environment.scUrl + serviceName;
  }

   else if (code === '023') {
    this.url = environment.mbsaUrl + serviceName;
  }

   else if (code === '025') {
    this.url = environment.apiUrl + serviceName;
  }

    console.log (this.url);
    return this.http.get(this.url, { headers: apiHeaders });
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


    getWishlist(serviceName: string, data: any, code: any) {
      console.log('Wishlist Data is');
      console.log(data);
      const apiHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data
      };

      if ( code === '010'){
        this.url = environment.upsiUrl + serviceName;
      }
      else if (code === '011') {
        this.url = environment.kuisUrl + serviceName;
     }

     else if (code === '020') {
      this.url = environment.scUrl + serviceName;
    }

     else if (code === '023') {
      this.url = environment.mbsaUrl + serviceName;
    }

     else if (code === '025') {
      this.url = environment.apiUrl + serviceName;
    }

      return this.http.get(this.url, { headers: apiHeaders });
      }

    getLoan(serviceName: string, data: any, code: any) {
        console.log('Loan data is');
        const apiHeaders = {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Authorization',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data
        };
        if ( code === '010'){
          this.url = environment.upsiUrl + serviceName;
        }
        else if (code === '011') {
          this.url = environment.kuisUrl + serviceName;
       }

       else if (code === '020') {
        this.url = environment.scUrl + serviceName;
      }

       else if (code === '023') {
        this.url = environment.mbsaUrl + serviceName;
      }

       else if (code === '025') {
        this.url = environment.apiUrl + serviceName;
      }

        return this.http.get(this.url, { headers: apiHeaders });
        }


      getFines(serviceName: string, data: any, code: any) {
      console.log('Fines data is');
      const apiHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data
      };
      if ( code === '010'){
        this.url = environment.upsiUrl + serviceName;
      }
      else if (code === '011') {
        this.url = environment.kuisUrl + serviceName;
     }

     else if (code === '020') {
      this.url = environment.scUrl + serviceName;
    }

     else if (code === '023') {
      this.url = environment.mbsaUrl + serviceName;
    }

     else if (code === '025') {
      this.url = environment.apiUrl + serviceName;
    }

      return this.http.get(this.url, { headers: apiHeaders });
      }

    getLoanhist(serviceName: string, data: any, code: any) {
      console.log('Loan history data is');
      console.log(data);
      const apiHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data
      };
      if ( code === '010'){
        this.url = environment.upsiUrl + serviceName;
      }
      else if (code === '011') {
        this.url = environment.kuisUrl + serviceName;
     }

     else if (code === '020') {
      this.url = environment.scUrl + serviceName;
    }

     else if (code === '023') {
      this.url = environment.mbsaUrl + serviceName;
    }

     else if (code === '025') {
      this.url = environment.apiUrl + serviceName;
    }
      return this.http.get(this.url, { headers: apiHeaders });
      }

    getReservation(serviceName: string, data: any, code: any) {
      console.log('Reservation data is');
      console.log(data);
      const apiHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data
      };
      if ( code === '010'){
        this.url = environment.upsiUrl + serviceName;
      }
      else if (code === '011') {
        this.url = environment.kuisUrl + serviceName;
     }

     else if (code === '020') {
      this.url = environment.scUrl + serviceName;
    }

     else if (code === '023') {
      this.url = environment.mbsaUrl + serviceName;
    }

     else if (code === '025') {
      this.url = environment.apiUrl + serviceName;
    }
      return this.http.get(this.url, { headers: apiHeaders });
      }

      getOverdue(serviceName: string, data: any, code: any) {
        console.log('Overdue data is');
        console.log(data);
        const apiHeaders = {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Authorization',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data
        };
        if ( code === '010'){
          this.url = environment.upsiUrl + serviceName;
        }
        else if (code === '011') {
          this.url = environment.kuisUrl + serviceName;
       }

       else if (code === '020') {
        this.url = environment.scUrl + serviceName;
      }

       else if (code === '023') {
        this.url = environment.mbsaUrl + serviceName;
      }

       else if (code === '025') {
        this.url = environment.apiUrl + serviceName;
      }
        return this.http.get(this.url, { headers: apiHeaders });
        }
        getSearchhist(serviceName: string, data: any, code: any) {
          console.log('Search history is');
          console.log(data);
          const apiHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'Authorization',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + data
          };
          if ( code === '010'){
            this.url = environment.upsiUrl + serviceName;
          }
          else if (code === '011') {
            this.url = environment.kuisUrl + serviceName;
         }

         else if (code === '020') {
          this.url = environment.scUrl + serviceName;
        }

         else if (code === '023') {
          this.url = environment.mbsaUrl + serviceName;
        }

         else if (code === '025') {
          this.url = environment.apiUrl + serviceName;
        }
          return this.http.get(this.url, { headers: apiHeaders });
      }

      getOtherCharges(serviceName: string, data: any) {
        console.log('Other Charges data is');
        const apiHeaders = {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Authorization',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data
        };
        const body = new HttpParams();
        const url = environment.mbsaUrl + serviceName;
        return this.http.post(url, body.toString(), { headers: apiHeaders });
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

            getEmails(serviceName: string, data: any, code: any) {
              console.log('Emails Data is');
              console.log(data);
              const apiHeaders = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'Authorization',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + data
              };
              if ( code === '010'){
                this.url = environment.upsiUrl + serviceName;
              }
              else if (code === '011') {
                this.url = environment.kuisUrl + serviceName;
             }

             else if (code === '020') {
              this.url = environment.scUrl + serviceName;
            }

             else if (code === '023') {
              this.url = environment.mbsaUrl + serviceName;
            }

             else if (code === '025') {
              this.url = environment.apiUrl + serviceName;
            }
              console.log (this.url);
              return this.http.get(this.url, { headers: apiHeaders });
            }


}


