import { Component, OnInit } from '@angular/core';
import { SectorsService } from '../../services/sectors.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css'],
  providers: [SectorsService]
})
export class SectorsComponent implements OnInit {

	location: string = 'Sectors';
    sectors: any;

  	constructor(private httpService : SectorsService) 
  	{ 
  	}

  	ngOnInit() 
  	{ 	
  		this.init(); 	 	
  	}
  	
  	init()
    {  
        this.httpService.getSectors().subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.sectors = response;															
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }
	

}
