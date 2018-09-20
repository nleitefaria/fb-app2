import { SymbolsPage } from './symbols.po';

describe('fb-app2 Symbols', () => 
{
  let page: SymbolsPage;

  beforeEach(() => {
    page = new SymbolsPage();
  });

  it('should navigate to symbols and have bread crumbs', () => {
    page.navigateToSymbols();
    expect($$('ol li').count()).toEqual(2);
  });
});