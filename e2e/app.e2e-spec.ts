import { SplitaxiPage } from './app.po';

describe('splitaxi App', () => {
  let page: SplitaxiPage;

  beforeEach(() => {
    page = new SplitaxiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
