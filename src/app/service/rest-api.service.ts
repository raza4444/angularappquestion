import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http/';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient ) { }
  get(link: string)
  {
    return this.http.get(link);
  }
  post(link:string , body:any)
  {
    return this.http.post(link , body);

  }
  private catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error || "Server error");
  }

  private logResponse(res: Response | any) {
    console.log("server response", res);
    // console.log("server response - parsed", res.json());
  }
  private extractData(res: Response) {
    return res.json();
  }
}
