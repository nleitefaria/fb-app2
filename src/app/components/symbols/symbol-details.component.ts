import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SymbolsService } from '../../services/symbols.service';
import { CompaniesService } from '../../services/companies.service';
import { QuoteService } from '../../services/quote.service';
import { LogosService } from '../../services/logos.service';

@Component( {
    selector: 'app-symbol-details',
    templateUrl: './symbol-details.component.html',
    styleUrls: ['./symbol-details.component.css'],
    providers: [LogosService, SymbolsService, CompaniesService, QuoteService]
} )

export class SymbolDetailsComponent implements OnInit {
    id: string;
    logo: any;
    location: string = 'symbols';
    symbols: any;
    symbolsLoading: boolean;
    company: any;
    earnings: any[];
    effectiveSpreads: any[];
    financials: any[];
    book: any;
    trades: any[];
    ipo: any;
    stats: any;
    largestTrades: any[];
    peers: any[];
    splits: any[];
    splitsFilterData: SplitsFilterData[] = [
        { "id": 1, "name": "5y" },
        { "id": 2, "name": "2y" },
        { "id": 3, "name": "1y" },
        { "id": 4, "name": "ytd" },
        { "id": 5, "name": "6m" },
        { "id": 6, "name": "3m" },
        { "id": 7, "name": "1m" }
    ];

    selectedSplitsFilterData: SplitsFilterData = this.splitsFilterData[0];
    quote: any;
    news: any[];
    ohlc: any;

    constructor( private route: ActivatedRoute, private httpService: SymbolsService, private httpService1: CompaniesService, private httpService2: LogosService, private httpService3: QuoteService ) {
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
}