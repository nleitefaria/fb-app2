import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { SymbolDetailsComponent } from './components/symbols/symbol-details.component';
import { CompaniesComponent } from './components/companies/companies.component';

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
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
