import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SymbolsService } from '../../services/symbols.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [SymbolsService]
})

export class CompaniesComponent implements OnInit 
{
	location: string = 'Companies';	
	symbols : any;
	

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
