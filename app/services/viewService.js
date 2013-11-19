app.service('viewService', function($rootScope) {
	var views = [];
	var activeView = {};
	
	this.setActiveView = function(view) {
		activeView = view;
		$rootScope.$broadcast('activeViewChanged');
	};
});