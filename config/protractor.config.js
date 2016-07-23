exports.config = {


  // seleniumAddress: 'http://localhost:4444/wd/hub'
  seleniumAddress: 'http://localhost:4723/wd/hub',
  directConnect: false,

  specs: [
    'E:/NodeJS/cucumber-protractor/features/*.feature'
  ],

  /*
  {
    browserName: 'firefox',

	},
	{
		browserName: 'chrome',
	
		'chromeOptions': {
					
						'mobileEmulation' : {
								'deviceName': 'Apple iPhone 6'
											}
						}

	},
	
  */
  
  capabilities: 
	{
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '5.1',
    deviceName: 'TA93303LN9'
   },
  
  // ---------------------------------------------------------------------------
  // ----- Global test information ---------------------------------------------
  // ---------------------------------------------------------------------------
  //
  baseUrl: 'http://localhost:9876',

  rootElement: 'body',

  allScriptsTimeout: 11000,

  getPageTimeout: 10000,
  beforeLaunch: function() {
  },


  onPrepare: function() {
    var chai = require('chai');
    var should = chai.should();
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);

    Object.defineProperty(protractor.promise.Promise.prototype, 'should', {
        get: Object.prototype.__lookupGetter__('should'),
        set: Object.prototype.__lookupSetter__('should')
    });


  var wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);
  
  },

  onComplete: function() {
  },

  onCleanUp: function(exitCode) {},

  afterLaunch: function(exitCode) {
    //Generate HTML report here..
  },

  resultJsonOutputFile: null,
  restartBrowserBetweenTests: false,

  untrackOutstandingTimeouts: false,

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // Options to be passed to Cucumber (when set up as a custom framework).
  cucumberOpts: {
    require: '../features/step_definitions/*.js',
    format: 'pretty'
   },
};
