import { MarketsPage } from './markets.po';

describe('fb-app2 Markets', () => 
{
  let page: MarketsPage;

  beforeEach(() => {
    page = new MarketsPage();
  });

  it('should navigate to markets and have bread crumbs', () => {
    page.navigateToMarkets();
    expect($$('ol li').count()).toEqual(2);
  });
});