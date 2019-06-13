import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { SymbolDetailsComponent } from './components/symbols/symbol-details.component';
import { ExchangesComponent } from './components/exchanges/exchanges.component';
import { UsExchangesComponent } from './components/us-exchanges/us-exchanges.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { TagsComponent } from './components/tags/tags.component';
import { MutualFundsComponent } from './components/mutual-funds/mutual-funds.component';
import { OtcComponent } from './components/otc/otc.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'symbols',
		component: SymbolsComponent
	},
	{
		path: 'symbol-details/:id',
		component: SymbolDetailsComponent
	},
	{
		path: 'exchanges',
		component: ExchangesComponent
	},
	{
		path: 'us-exchanges',
		component: UsExchangesComponent
	},
	{
		path: 'sectors',
		component: SectorsComponent
	},
	{
		path: 'tags',
		component: TagsComponent
	},
	{
		path: 'mutual-funds',
		component: MutualFundsComponent
	},
	{
		path: 'otc',
		component: OtcComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
