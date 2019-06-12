import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class UsExchangesService {

    private BASE_URL:string = environment.apiUrl;
    private TKN:string = environment.tkn;

  	constructor(private http:Http) 
  	{ 
  	}
  	
  	public getUSExchanges():any
    { 	
    	return this.http.get(`${this.BASE_URL}ref-data/market/us/exchanges?token=${this.TKN}`)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}

}
