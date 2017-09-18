import { FAAPPage } from './app.po';

describe('faap App', () => {
  let page: FAAPPage;

  beforeEach(() => {
    page = new FAAPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
