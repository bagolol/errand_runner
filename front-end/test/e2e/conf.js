exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['MapFeature.js'],
  allScriptsTimeout: 20000,
          onPrepare: function(){
                browser.driver.get('http://localhost:3000')}
}