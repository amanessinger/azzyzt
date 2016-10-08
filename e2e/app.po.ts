import { browser, element, by } from 'protractor';

export class AzzyztedDataPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root div.app-title')).getText();
  }
}
