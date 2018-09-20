import { browser, by, element } from 'protractor';

export class SymbolsPage 
{
  navigateToSymbols() {
    return browser.get('/symbols/');
  }
}
