import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SymbolsService } from '../../services/symbols.service';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [SymbolsService, NewsService]
})
export class NewsComponent implements OnInit 
{
    news : any[];
    location: string = 'News';
    myform: FormGroup;
    symb: FormControl;
    symbols : any;
    symbolsLoading : boolean;

    constructor(private httpService : SymbolsService, private httpService1 : NewsService) { }

    ngOnInit() {
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
    
    onSubmit() 
    {
        if (this.myform.valid)
        {
            alert(this.myform.value.symb);
            this.getNewsForSymb(this.myform.value.symb);           
        }
    }
    
    getNewsForSymb( sym: string ) {
        this.httpService1.getAllNewsForSymb(sym).subscribe(
                response => {
                    if ( response.error ) {
                        alert( 'Server Error' );
                    }
                    else {
                        this.news = response;
                    }
                },
                error => {
                    alert( 'Server error' );
                }
            );
    }

}
