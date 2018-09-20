import { browser, by, element } from 'protractor';

export class MarketsPage 
{
  navigateToMarkets() {
    return browser.get('/markets/');
  }
}
