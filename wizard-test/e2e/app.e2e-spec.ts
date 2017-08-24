import { WizardTestPage } from './app.po';

describe('wizard-test App', () => {
  let page: WizardTestPage;

  beforeEach(() => {
    page = new WizardTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
