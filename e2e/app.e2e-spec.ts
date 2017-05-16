import { BiznasTodolistPage } from './app.po';

describe('biznas-todolist App', () => {
  let page: BiznasTodolistPage;

  beforeEach(() => {
    page = new BiznasTodolistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
