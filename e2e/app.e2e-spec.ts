import { Test6Page } from './app.po';

describe('test6 App', function() {
  let page: Test6Page;

  beforeEach(() => {
    page = new Test6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
