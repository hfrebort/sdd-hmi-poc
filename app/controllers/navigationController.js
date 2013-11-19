app.controller('NavigationController', function($scope, navigationService) {
	$scope.menus = [];
	
	init();
	
	function init() {
		$scope.menus = navigationService.getMenus();
	}
});
