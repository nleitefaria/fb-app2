import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MarketsService } from '../../services/markets.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css'],
  providers: [MarketsService]
})
export class MarketsComponent implements OnInit
{
	location: string = 'Markets';	

  	constructor(private httpService : MarketsService) { }

  	ngOnInit() 
  	{
  		this.init();
  	}
  	
  	init()
  	{
  		console.log('Vou chamar o serviço');
  		this.httpService.getAllMarkets();
  	}

}
