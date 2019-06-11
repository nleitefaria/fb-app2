import { Component, OnInit } from '@angular/core';
import { ExchangesService } from '../../services/exchanges.service';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css'],
  providers: [ExchangesService]
})
export class ExchangesComponent implements OnInit {

    location: string = 'Exchanges';
    exchanges: any;

  	constructor(private httpService : ExchangesService) 
  	{ 
  	}

  	ngOnInit() 
  	{ 	
  		this.init(); 	 	
  	}
  	
  	init()
    {  
        this.httpService.getExchanges().subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.exchanges = response;															
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }

}
