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
import {PeersService} from '../../services/peers.service';
import {SplitsService} from '../../services/splits.service';

import {SplitsFilterData} from '../../model/splits-filter-data';

@Component({
  selector: 'app-symbol-details',
  templateUrl: './symbol-details.component.html',
  styleUrls: ['./symbol-details.component.css'],
  providers: [SymbolsService, CompaniesService, EarningsService, EffectiveSpreadService, FinancialsService, LogosService, BooksService, StatsService, LargestTradesService, PeersService, SplitsService]
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
    

  constructor(private route: ActivatedRoute, private httpService: SymbolsService, private httpService1: CompaniesService, private httpService2: EarningsService, private httpService3: EffectiveSpreadService, private httpService4: FinancialsService, private httpService5: LogosService, private httpService6: BooksService, private httpService7: StatsService, private httpService8: LargestTradesService, private httpService9: PeersService, private httpService10: SplitsService) {
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
    this.getPeers(this.id);  
    this.getSplits(this.id, '5y');
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
        }
      },
      error => {
        alert('Server error');
      }
    );
  }

	getPeers(sym: string)
	{
		this.httpService9.getAllPeers(sym).subscribe(
      		response => 
      		{
        		if (response.error) 
        		{
          			alert('Server Error');
        		}
        		else
        		{
          			this.peers = response;
        		}
      		},
      		error => 
      		{
        		alert('Server error');
      		}
    );
	} 
	
	getSplits(sym: string, range: string)
	{
		this.httpService10.getAllSplits(sym, range).subscribe(
      		response => 
      		{
        		if (response.error) 
        		{
          			alert('Server Error');
        		}
        		else
        		{
          			this.splits = response;
        		}
      		},
      		error => 
      		{
        		alert('Server error');
      		}
    );
	} 
	
	 onSelectSplitsFilter(splitsFilterDataId) 
	 { 
        this.selectedSplitsFilterData = null;
        for (var i = 0; i < this.splitsFilterData.length; i++)
        {
          if (this.splitsFilterData[i].id == splitsFilterDataId) {
            this.selectedSplitsFilterData = this.splitsFilterData[i];
          }
        }
        
        this.getSplits(this.id, this.selectedSplitsFilterData.name);
    }
}