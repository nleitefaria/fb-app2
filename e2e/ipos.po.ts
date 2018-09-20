import { browser, by, element } from 'protractor';

export class IposPage 
{
  navigateToIPOs() {
    return browser.get('/ipos/');
  }
}
