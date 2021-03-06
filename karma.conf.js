module.exports = {
  frameworks: ['jasmine'],

  plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-nyan-reporter', 'karma-coverage'],

  reporters: ['nyan','coverage'],

  browsers: ['Chrome'],

  coverageReporter: {
    type : 'html',
    dir : 'coverage/'
  },

  preprocessors: { 'app/!(bower_components)/*.js' : ['coverage'] },

  files: [
    'app/bower_components/angular/angular.js',
    'app/bower_components/angular-mocks/angular-mocks.js',

    'app/app.js',
    'app/!(bower_components)/*Module.js',
    'app/!(bower_components)/*Directive.js',
    'app/!(bower_components)/*Controller.js',
    'app/!(bower_components)/*Factory.js',
    'app/!(bower_components)/*Service.js',
    'app/!(bower_components)/*Provider.js',
    'app/!(bower_components)/*Filter.js',

    'test/unit/**/*Spec.js'
  ]
};

