import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class MarketsService 
{
	private BASE_URL:string = environment.apiUrl;

  	constructor(private http:Http) 
  	{ 
  	}
  	
  	public getAllMarkets():any
  	{	
  		return this.http.get(`${this.BASE_URL}market`)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
  	}

}
