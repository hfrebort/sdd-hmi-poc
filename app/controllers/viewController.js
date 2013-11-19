app.controller('ViewController', function ($scope, viewService) {
	$scope.views = [];
	$scope.viewsCount = 0;

	init();

	function init() {
		$scope.viewsCount = 0;
	}

	$scope.addView = function (ps) {
		$scope.views.push({
			viewId : $scope.viewsCount++,
			parameterSet : ps,
			active : true,
			editing : false,
			dirty : false
		});
	};

	$scope.removeView = function (id) {
		for (var i = $scope.views.length - 1; i >= 0; i--) {
			if ($scope.views[i].viewId === id) {
				$scope.views.splice(i, 1);
				break;
			}
		}
	};
});
