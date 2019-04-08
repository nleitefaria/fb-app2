import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SymbolsService } from '../../services/symbols.service';
import { CompaniesService } from '../../services/companies.service';
import { EarningsService } from '../../services/earnings.service';
import { QuoteService } from '../../services/quote.service';
import { EffectiveSpreadService } from '../../services/effective-spread.service';
import { FinancialsService } from '../../services/financials.service';
import { LogosService } from '../../services/logos.service';
import { BooksService } from '../../services/books.service';
import { StatsService } from '../../services/stats.service';
import { LargestTradesService } from '../../services/largest-trades.service';
import { PeersService } from '../../services/peers.service';
import { SplitsService } from '../../services/splits.service';
import { NewsService } from '../../services/news.service';
import { OhlcService } from '../../services/ohlc.service';

import { SplitsFilterData } from '../../model/splits-filter-data';

@Component( {
    selector: 'app-symbol-details',
    templateUrl: './symbol-details.component.html',
    styleUrls: ['./symbol-details.component.css'],
    providers: [SymbolsService, CompaniesService, EarningsService, EffectiveSpreadService, FinancialsService, LogosService, BooksService, StatsService, LargestTradesService, PeersService, SplitsService, QuoteService, NewsService, OhlcService]
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

    constructor( private route: ActivatedRoute, private httpService: SymbolsService, private httpService1: CompaniesService, private httpService2: EffectiveSpreadService, private httpService3: FinancialsService, private httpService4: LogosService, private httpService5: BooksService, private httpService6: StatsService, private httpService7: LargestTradesService, private httpService8: PeersService, private httpService9: SplitsService, private httpService10: QuoteService, private httpService11: NewsService , private httpService12: OhlcService ) {
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
        this.getEffectiveSpreads( this.id );
        this.getFinancials( this.id );
        this.getLogo( this.id );
        this.getBook( this.id );
        this.getStats( this.id );
        this.getLargestTrades( this.id );
        this.getPeers( this.id );
        this.getSplits( this.id, '5y' );
        this.getQuotes( this.id );
        this.getNewsForSymb( this.id );
        this.getOhlcForSymb( this.id );
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

    getEffectiveSpreads( sym: string ) {
        this.httpService2.getEffectiveSpreads( sym ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                } else {
                    this.effectiveSpreads = response;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }

    getFinancials( sym: string ) {
        this.httpService3.getFinancials( sym ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                } else {
                    this.financials = response.financials;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }

    getLogo( sym: string ) {
        this.httpService4.getLogo( sym ).subscribe(
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

    getBook( sym: string ) {
        this.httpService5.getBook( sym ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                } else {
                    this.book = response;
                    this.trades = this.book.trades;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }

    getStats( sym: string ) {
        this.httpService6.getStats( sym ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                }
                else {
                    this.stats = response;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }

    getLargestTrades( sym: string ) {
        this.httpService7.getLargestTrades( sym ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                }
                else {
                    this.largestTrades = response;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }

    getPeers( sym: string ) {
        this.httpService8.getAllPeers( sym ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                }
                else {
                    this.peers = response;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }

    getSplits( sym: string, range: string ) {
        this.httpService9.getAllSplits( sym, range ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                }
                else {
                    this.splits = response;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }

    getQuotes( sym: string ) {
        this.httpService10.getQuote( sym ).subscribe(
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
    
    getNewsForSymb( sym: string ) {
        this.httpService11.getAllNewsForSymb(sym).subscribe(
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
      
    getOhlcForSymb( sym: string ) 
    {
        this.httpService12.getOhlcForSymb(sym).subscribe(
                response => 
                {
                    if ( response.error ) 
                    {
                        alert( 'Server Error' );
                    }
                    else {
                        this.ohlc = response;
                    }
                },
                error => 
                {
                    alert( 'Server error' );
                }
            );
    }

    onSelectSplitsFilter( splitsFilterDataId ) {
        this.selectedSplitsFilterData = null;
        for ( var i = 0; i < this.splitsFilterData.length; i++ ) {
            if ( this.splitsFilterData[i].id == splitsFilterDataId ) {
                this.selectedSplitsFilterData = this.splitsFilterData[i];
            }
        }

        this.getSplits( this.id, this.selectedSplitsFilterData.name );
    }
}