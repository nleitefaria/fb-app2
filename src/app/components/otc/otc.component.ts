import { Component, OnInit } from '@angular/core';
import { OtcService } from '../../services/otc.service';

@Component({
  selector: 'app-otc',
  templateUrl: './otc.component.html',
  styleUrls: ['./otc.component.css'],
  providers: [OtcService]
})
export class OtcComponent implements OnInit {

    location: string = 'OTC';
    otcs: any;

  	constructor(private httpService : OtcService) 
  	{ 
  	}

  	ngOnInit() 
  	{ 	
  		this.init(); 	 	
  	}
  	
  	init()
    {  
        this.httpService.getOtcs().subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.otcs = response;															
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }

}
