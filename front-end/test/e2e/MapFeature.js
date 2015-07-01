describe('Map page', function(){

  beforeEach(function(){
    browser.get('http://localhost:8100');

  });


  it('has a title', function(){
    var title = element(by.className('title'));
    expect(title.getText()).toEqual('Errand Runner');
  });

  // it('loads a map', function(){
  //   var map = element(by.className('gm-style'));


  //   // browser.wait(protractor.until.elementIsVisible(map))
  //   expect(map).toBe(true);
  // });

  it('can display a map', function(){
    var marker = element(by.css('.scroll location 1')).click();
    expect(marker.getText()).toContain('Location 1')
  });

});
