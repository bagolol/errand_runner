describe('Map page', function(){
  it('has a title', function(){
    browser.get('http://localhost:8100');
    var title = element(by.className('title'));
    expect(title.getText()).toEqual('Errand Runner');

  });
});
