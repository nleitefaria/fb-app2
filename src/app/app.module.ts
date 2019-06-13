import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { SymbolDetailsComponent } from './components/symbols/symbol-details.component';
import { HomeComponent } from './components/home/home.component';
import { ExchangesComponent } from './components/exchanges/exchanges.component';
import { UsExchangesComponent } from './components/us-exchanges/us-exchanges.component';
import { SectorsComponent } from './components/sectors/sectors.component';

@NgModule({
  declarations: [
    AppComponent,
    SymbolsComponent,
    HomeComponent,
    SymbolDetailsComponent,
    ExchangesComponent,
    UsExchangesComponent,
    SectorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule,  
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
