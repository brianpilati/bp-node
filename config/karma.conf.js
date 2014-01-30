module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'tests/unit/*.js'
    ],

    exclude : [
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-jasmine',
            'karma-requirejs',
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
