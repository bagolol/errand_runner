describe('Adding a new task', function(){
  it('can add a new task', function() {
    browser.get('http://localhost:8100');
    element(by.className('button')).click()
    expect(element(by.css('h1')).getText()).toEqual('Add your task')
  });
});
