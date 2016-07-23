 
var stepdefs = function(){
  
  this.setDefaultTimeout (60 * 1000);
  
  this.Given(/^I am on the redbus home page$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         browser.get('http://www.protractortest.org/').then(function(){
		   element(by.linkText('Tutorial')).click().then(function(){
		     browser.sleep(20000).then(function(){
			    callback();
			 })
		     
		   });
		 });
		
       });
	   
};

module.exports= stepdefs;