/// <reference path="../Scripts/angular-1.1.4.js" />

/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

var app = angular.module('sddApp', ['ui.router','ui.bootstrap.datepicker','ui.bootstrap.position', 'ui.bootstrap.tabs','ui.bootstrap.dropdownToggle']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($stateProvider, $urlRouterProvider) {
	navigation = { controller: 'NavigationController', templateUrl: 'app/partials/Navigation.html' };
	parameterSearchView = { controller: 'ParameterSearchController', templateUrl: 'app/partials/ParameterSearchView.html' };
	welcomeView = { controller: 'MessageController', templateUrl: 'app/partials/WelcomeView.html' };
	parameterSetView = { controller: 'ParameterSetController', templateUrl: 'app/partials/ParameterSet.html' };
	
    $stateProvider
        .state('index', {
        	url: '',
        	views: {
        		'navigation': navigation,
        		'parameterSearch': parameterSearchView,
        		'welcome' : welcomeView,
        		'parameterset': parameterSetView
        	}
		});
});
