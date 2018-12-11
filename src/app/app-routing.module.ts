import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { SymbolDetailsComponent } from './components/symbols/symbol-details.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { MarketsComponent } from './components/markets/markets.component';
import { IposComponent } from './components/ipos/ipos.component';
import { NewsComponent } from './components/news/news.component';
import { MostactiveComponent } from './components/mostactive/mostactive.component';
import { GainersComponent } from './components/gainers/gainers.component';
import { LosersComponent } from './components/losers/losers.component';



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
		path: 'companies',
		component: CompaniesComponent
	},
	{
		path: 'markets',
		component: MarketsComponent
	},
	{
		path: 'ipos',
		component: IposComponent
	},
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'mostactive',
        component: MostactiveComponent
    },
    {
        path: 'gainers',
        component: GainersComponent
    },
    {
        path: 'losers',
        component: LosersComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
