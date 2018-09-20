import { AppPage } from './app.po';

describe('fb-app2 App', () => 
{
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Please browse the following subjects to get more info:');
  });
});