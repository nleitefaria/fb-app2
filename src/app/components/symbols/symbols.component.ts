import { Component, OnInit } from '@angular/core';
import { SymbolsService } from '../../services/symbols.service';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css'],
  providers: [SymbolsService]
})

export class SymbolsComponent implements OnInit
{
	p: number = 1;
	symbols: any;
    location: string = 'Symbols';

  	constructor(private httpService : SymbolsService) 
  	{ 
  	}

  	ngOnInit() 
  	{ 	
  		this.init(); 	 	
  	}
  	
  	init()
    {  
        this.httpService.getSymbols().subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.symbols = response;															
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }

}
