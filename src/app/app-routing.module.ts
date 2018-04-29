import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymbolsComponent } from './components/symbols/symbols.component';
import { CompaniesComponent } from './components/companies/companies.component';

const routes: Routes = [
	{
		path: 'symbols',
		component: SymbolsComponent
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
