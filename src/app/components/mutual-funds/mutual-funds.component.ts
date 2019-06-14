import { Component, OnInit } from '@angular/core';
import { MutualFundsService } from '../../services/mutual-funds.service';

@Component({
  selector: 'app-mutual-funds',
  templateUrl: './mutual-funds.component.html',
  styleUrls: ['./mutual-funds.component.css'],
  providers: [MutualFundsService]
})
export class MutualFundsComponent implements OnInit {

	location: string = 'Mutual funds';
    mutualFunds: any;
    loading: boolean;

  	constructor(private httpService : MutualFundsService) 
  	{ 
  	}

  	ngOnInit() 
  	{ 	
  		this.init(); 	 	
  	}
  	
  	init()
    {  
    	this.loading = true;   
        this.httpService.getMutualFunds().subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {
					this.loading = false;																																	
					this.mutualFunds = response;															
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }
}