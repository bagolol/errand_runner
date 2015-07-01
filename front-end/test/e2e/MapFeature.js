describe('Map page', function(){
  it('has a title', function(){
    browser.get('http://localhost:8100');
    expect(element(by.className('title'))).toEqual('Errand Runner')

  });
});