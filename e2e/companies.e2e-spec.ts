import { CompaniesPage } from './companies.po';

describe('fb-app2 Companies', () => 
{
  let page: CompaniesPage;

  beforeEach(() => {
    page = new CompaniesPage();
  });

  it('should navigate to companies and have bread crumbs', () => {
    page.navigateToCompanies();
    expect($$('ol li').count()).toEqual(2);
  });
});