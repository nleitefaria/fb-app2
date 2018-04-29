import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { CompaniesComponent } from './components/companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    SymbolsComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule,  
    FormsModule,
    //NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
