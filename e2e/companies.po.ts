import { browser, by, element } from 'protractor';

export class CompaniesPage 
{
  navigateToCompanies() {
    return browser.get('/companies/');
  }
}
