import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SymbolsService } from '../../services/symbols.service';
import { CompaniesService } from '../../services/companies.service';
import { EarningsService } from '../../services/earnings.service';
import { EffectiveSpreadService } from '../../services/effective-spread.service';
import { FinancialsService } from '../../services/financials.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [SymbolsService, CompaniesService, EarningsService, EffectiveSpreadService, FinancialsService]
})

export class CompaniesComponent implements OnInit 
{
	location: string = 'Companies';	
	symbols : any;
	symbolsLoading : boolean;
	company : any;
	earnings : any[];
	effectiveSpreads : any[];
	financials: any[];
  	myform: FormGroup;
  	symb: FormControl;
	
	constructor(private httpService : SymbolsService, private httpService1 : CompaniesService, private httpService2 : EarningsService, private httpService3 : EffectiveSpreadService, private httpService4 : FinancialsService) 
	{ 
    }

    ngOnInit() 
    {
    	this.symbolsLoading = true;
    	this.createFormControls();
    	this.createForm();
    	this.init();    	 
    }
    
    createFormControls() 
    {   
    	this.symb = new FormControl('');
  	}

  	createForm() 
  	{
    	this.myform = new FormGroup({
      		symb: this.symb
    	});
  	}

  	onSubmit() 
  	{
    	if (this.myform.valid)
    	{
      		this.getCompany(this.myform.value.symb);
      		this.getEarnings(this.myform.value.symb);
      		this.getEffectiveSpreads(this.myform.value.symb);
      		this.getFinancials(this.myform.value.symb);
    	}
  	}
    
    init()
    {  
        this.httpService.getSymbols().subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.symbols = response;
					this.symbolsLoading = false;															
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }
    
    getCompany(sym : string)
    {
    	this.httpService1.getCompany(sym).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.company = response;															
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }
    
    getEarnings(sym : string)
    {
    	this.httpService2.getEarnings(sym).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.earnings = response.earnings;														
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }
    
    getEffectiveSpreads(sym : string)
    {
    	this.httpService3.getEffectiveSpreads(sym).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.effectiveSpreads = response;												
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }
    
    getFinancials(sym : string)
    {
    	this.httpService4.getFinancials(sym).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.financials = response.financials;												
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }
     
}
