import { AzzyztedDataPage } from './app.po';

describe('azzyzted-data App', function() {
  let page: AzzyztedDataPage;

  beforeEach(() => {
    page = new AzzyztedDataPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Azzyzted Data');
  });
});
