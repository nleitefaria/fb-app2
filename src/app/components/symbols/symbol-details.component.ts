import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SymbolsService} from '../../services/symbols.service';
import {CompaniesService} from '../../services/companies.service';
import {EarningsService} from '../../services/earnings.service';
import {EffectiveSpreadService} from '../../services/effective-spread.service';
import {FinancialsService} from '../../services/financials.service';
import {LogosService} from '../../services/logos.service';
import {BooksService} from '../../services/books.service';
import {StatsService} from '../../services/stats.service';
import {LargestTradesService} from '../../services/largest-trades.service';

@Component({
  selector: 'app-symbol-details',
  templateUrl: './symbol-details.component.html',
  styleUrls: ['./symbol-details.component.css'],
  providers: [SymbolsService, CompaniesService, EarningsService, EffectiveSpreadService, FinancialsService, LogosService, BooksService, StatsService, LargestTradesService]
})

export class SymbolDetailsComponent implements OnInit 
{
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

  constructor(private route: ActivatedRoute, private httpService: SymbolsService, private httpService1: CompaniesService, private httpService2: EarningsService, private httpService3: EffectiveSpreadService, private httpService4: FinancialsService, private httpService5: LogosService, private httpService6: BooksService, private httpService7: StatsService, private httpService8: LargestTradesService) {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.init();
  }

  init() 
  {
    this.getCompany(this.id);
    this.getEarnings(this.id);
    this.getEffectiveSpreads(this.id);
    this.getFinancials(this.id);
    this.getLogo(this.id);
    this.getBook(this.id);
    this.getStats(this.id);
    this.getLargestTrades(this.id);   
  }

  getCompany(sym: string) {
    this.httpService1.getCompany(sym).subscribe(
      response => {
        if (response.error) {
          alert('Server Error');
        } else {
          this.company = response;
        }
      },
      error => {
        alert('Server error');
      }
    );
  }

  getEarnings(sym: string) {
    this.httpService2.getEarnings(sym).subscribe(
      response => {
        if (response.error) {
          alert('Server Error');
        } else {
          this.earnings = response.earnings;
        }
      },
      error => {
        alert('Server error');
      }
    );
  }

  getEffectiveSpreads(sym: string) {
    this.httpService3.getEffectiveSpreads(sym).subscribe(
      response => {
        if (response.error) {
          alert('Server Error');
        } else {
          this.effectiveSpreads = response;
        }
      },
      error => {
        alert('Server error');
      }
    );
  }

  getFinancials(sym: string) {
    this.httpService4.getFinancials(sym).subscribe(
      response => {
        if (response.error) {
          alert('Server Error');
        } else {
          this.financials = response.financials;
        }
      },
      error => {
        alert('Server error');
      }
    );
  }

  getLogo(sym: string) {
    this.httpService5.getLogo(sym).subscribe(
      response => {
        if (response.error) {
          alert('Server Error');
        } else {
          this.logo = response.url;
        }
      },
      error => {
        alert('Server error');
      }
    );
  }

  getBook(sym: string) {
    this.httpService6.getBook(sym).subscribe(
      response => {
        if (response.error) {
          alert('Server Error');
        } else {

          this.book = response;
          this.trades = this.book.trades;
        }
      },
      error => {
        alert('Server error');
      }
    );
  }

  getStats(sym: string) {
    this.httpService7.getStats(sym).subscribe(
      response => {
        if (response.error) {
          alert('Server Error');
        }
        else {
          this.stats = response;
          console.log(this.stats);
        }
      },
      error => {
        alert('Server error');
      }
    );
  }
  
  getLargestTrades(sym: string) 
  {
    this.httpService8.getLargestTrades(sym).subscribe(
      response => 
      {
        if (response.error) 
        {
          alert('Server Error');
        }
        else
        {
          this.largestTrades = response;
          alert(this.largestTrades);
        }
      },
      error => {
        alert('Server error');
      }
    );
  }




}