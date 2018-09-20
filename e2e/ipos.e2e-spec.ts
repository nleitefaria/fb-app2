import { IposPage } from './ipos.po';

describe('fb-app2 IPOs', () => 
{
  let page: IposPage;

  beforeEach(() => {
    page = new IposPage();
  });

  it('should navigate to ipos and have bread crumbs', () => {
    page.navigateToIPOs();
    expect($$('ol li').count()).toEqual(2);
  });
});