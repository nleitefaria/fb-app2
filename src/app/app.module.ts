import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { SymbolDetailsComponent } from './components/symbols/symbol-details.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { HomeComponent } from './components/home/home.component';
import { MarketsComponent } from './components/markets/markets.component';
import { IposComponent } from './components/ipos/ipos.component';
import { NewsComponent } from './components/news/news.component';
import { MostactiveComponent } from './components/mostactive/mostactive.component';
import { GainersComponent } from './components/gainers/gainers.component';
import { LosersComponent } from './components/losers/losers.component';

@NgModule({
  declarations: [
    AppComponent,
    SymbolsComponent,
    CompaniesComponent,
    HomeComponent,
    SymbolDetailsComponent,
    MarketsComponent,
    IposComponent,
    NewsComponent,
    MostactiveComponent,
    GainersComponent,
    LosersComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule,  
    FormsModule,
    ReactiveFormsModule,
    //NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
