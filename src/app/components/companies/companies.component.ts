import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SymbolsService } from '../../services/symbols.service';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [SymbolsService, CompaniesService]
})

export class CompaniesComponent implements OnInit 
{
	location: string = 'Companies';	
	symbols : any;
	symbolsLoading : boolean;
	company : any;
  	myform: FormGroup;
  	symb: FormControl;
	
	constructor(private httpService : SymbolsService, private httpService1 : CompaniesService) 
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
     
}
