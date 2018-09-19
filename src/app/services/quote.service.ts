import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class QuoteService {

    private BASE_URL:string = environment.apiUrl;

    constructor(private http:Http) 
    { 
    }
    
    public getQuote(symb: string):any
    {   
      //return this.http.get(`${this.BASE_URL}stock/${symb}/splits/${range}`)
      return this.http.get(`${this.BASE_URL}/stock/${symb}/quote`)
          .map((response:Response) => response.json())
          .catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
    }

}
