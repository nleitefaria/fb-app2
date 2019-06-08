import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SymbolsService } from '../../services/symbols.service';
import { CompaniesService } from '../../services/companies.service';
import { QuoteService } from '../../services/quote.service';
import { StatsService } from '../../services/stats.service';
import { LogosService } from '../../services/logos.service';

@Component( {
    selector: 'app-symbol-details',
    templateUrl: './symbol-details.component.html',
    styleUrls: ['./symbol-details.component.css'],
    providers: [LogosService, SymbolsService, CompaniesService, QuoteService, StatsService]
} )

export class SymbolDetailsComponent implements OnInit {
    id: string;
    logo: any;
    location: string = 'symbols';
    symbols: any;
    symbolsLoading: boolean;
    company: any;
    quote: any;  
    stat: any;

    constructor( private route: ActivatedRoute, private httpService: SymbolsService, private httpService1: CompaniesService, private httpService2: LogosService, private httpService3: QuoteService, private httpService4: StatsService ) {
        this.route.params.subscribe(( params ) => {
            this.id = params.id;
        } );
    }

    ngOnInit() 
    {
        this.init();
    }

    init() 
    {
        this.getCompany( this.id );      
        this.getLogo( this.id );       
        this.getQuotes( this.id );
        this.getStats( this.id );
        
    }

    getCompany( sym: string ) {
        this.httpService1.getCompany( sym ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                } else {
                    this.company = response;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }

    getLogo( sym: string ) {
        this.httpService2.getLogo( sym ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                } else {
                    this.logo = response.url;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }

    getQuotes( sym: string ) {
        this.httpService3.getQuote( sym ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                }
                else {
                    this.quote = response;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }
    
    getStats( sym: string ) {
        this.httpService4.getStats( sym ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                }
                else {
                    this.stat = response;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }
}