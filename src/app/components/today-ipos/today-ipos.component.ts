import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { TodayIposService } from '../../services/today-ipos.service';

@Component({
  selector: 'app-today-ipos',
  templateUrl: './today-ipos.component.html',
  styleUrls: ['./today-ipos.component.css'],
  providers: [TodayIposService]
})
export class TodayIposComponent implements OnInit {

	location: string = 'Today IPOS';
    todayIpos: any;

  	constructor(private httpService : TodayIposService) 
  	{ 
  	}

  	ngOnInit() 
  	{ 	
  		this.init(); 	 	
  	}
  	
  	init()
    {  
        this.httpService.getTodayIpos().subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.todayIpos = response;															
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }

}
