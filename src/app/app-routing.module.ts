import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymbolsComponent } from './components/symbols/symbols.component';

const routes: Routes = [
	{
		path: 'symbols',
		component: SymbolsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
