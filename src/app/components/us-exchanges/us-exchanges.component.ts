import { Component, OnInit } from '@angular/core';
import { UsExchangesService } from '../../services/us-exchanges.service';

@Component({
  selector: 'app-us-exchanges',
  templateUrl: './us-exchanges.component.html',
  styleUrls: ['./us-exchanges.component.css'],
  providers: [UsExchangesService]
})
export class UsExchangesComponent implements OnInit {

    location: string = 'U.S. Exchanges';
    usexchanges: any;

  	constructor(private httpService : UsExchangesService) 
  	{ 
  	}

  	ngOnInit() 
  	{ 	
  		this.init(); 	 	
  	}
  	
  	init()
    {  
        this.httpService.getUSExchanges().subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.usexchanges = response;															
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }


}
