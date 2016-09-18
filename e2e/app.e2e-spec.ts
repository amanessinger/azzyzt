import { AzzyztedDataPage } from './app.po';

describe('azzyzted-data App', function() {
  let page: AzzyztedDataPage;

  beforeEach(() => {
    page = new AzzyztedDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
