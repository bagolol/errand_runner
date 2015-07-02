describe('Map page', function(){

  beforeEach(function(){
    browser.get('http://localhost:8100');

  });


  it('has a title', function(){
    var title = element(by.className('title'));
    expect(title.getText()).toEqual('Errand Runner');
  });

 xit('can display a map', function(){
    var map = element(by.css('.scroll'))
    var marker = element(by.tagName('title'))
    browser.driver.sleep(3000)
    marker.click()
    browser.driver.sleep(2000)
    var textBox = element(by.css('h2'));
    expect(textBox.getText()).toContain('Pick up my bag')
  });

});
