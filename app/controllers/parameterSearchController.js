/**
 * TODO write an useful filter function!!!
 */
app.controller('ParameterSearchController', function ($scope, $http, $timeout, parametersetService, domainService, viewService) {
	$scope.domainSystem = [];
	$scope.domainActive = [];
	$scope.psFilter = {};
	$scope.loading = false;
	$scope.parametersets = [];
	$scope.orderby = 'name';
	$scope.reverse = false;
	$scope.showLimit = 0;
	$scope.showOffset = 0;
	$scope.selectedParameterset = null;

	init();

	function init() {
		$scope.domainSystem = domainService.getDomain('system');
		$scope.domainActive = domainService.getDomain('active');
		$scope.psFilter = {
			filterSystem : 'E',
			filterActive : 'A',
			filterName : '',
			filterCreatedFor : ''
		};
		$scope.showOffset = 5;
		$scope.showLimit = 5;
	}

	// call the parametersets asynchron with a timeout of 2,5 seconds
	$scope.searchParameterSets = function () {
		$scope.selectedParameterset = null;
		$scope.loading = true;
		var promise = $timeout(function () {
				$scope.parametersets = parametersetService.getParameterSets();
			}, 1500);

		promise.then(function (data) {
			console.log('success: ' + $scope.loading + ', data: ' + data);
			$scope.loading = false;
		}, function (error) {
			console.log('failed: ' + $scope.loading + ', error: ' + error);
			$scope.loading = false;
		});
	};

	$scope.setOrder = function (orderby) {
		if (orderby === $scope.orderby) {
			$scope.reverse = !$scope.reverse;
		}
		$scope.orderby = orderby;
	};

	$scope.clearFilter = function () {
		$scope.psFilter.filterSystem = '';
		$scope.psFilter.filterActive = '';
		$scope.psFilter.filterName = '';
		$scope.psFilter.filterCreatedFor = '';
	};

	$scope.newBasedOn = function () {};

	$scope.hasMoreEntries = function () {
		return $scope.parametersets.length > $scope.showLimit;
	};

	$scope.removeLimit = function () {
		$scope.showLimit = $scope.parametersets.length;
	};

	$scope.nextParameterSets = function () {
		if ($scope.showLimit < $scope.parametersets.length) {
			$scope.showLimit += $scope.showOffset;
		}
	};

	$scope.prevParameterSets = function () {
		if ($scope.showLimit > $scope.showOffset) {
			$scope.showLimit -= $scope.showOffset;
		}
	};

	$scope.inverseActive = function (ps) {
		$scope.selectParameterSet(ps);
		// trigger modal confirm dialog
		// "Are you sure you want to de/activate this parameter set?"
		if ('A' === ps.active) {
			$scope.selectedParameterset.active = 'I';
		} else {
			$scope.selectedParameterset.active = 'A';
		}
	};

	$scope.selectParameterSet = function (ps) {
		$scope.selectedParameterset = ps;
	};

	$scope.showParameterSet = function (ps) {
		viewService.setActiveView(ps);
	};
});
