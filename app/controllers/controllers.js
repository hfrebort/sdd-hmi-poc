
/**
 * 
 */
app.controller('ParameterSetController', function($scope, parametersetService, downloadService, domainService, viewService) {
	$scope.orderby = 'effectiveDate';
	$scope.reverse = false;
	
	$scope.domainSystem = [];
	$scope.domainFileFormat = [];
	$scope.domainVersion = [];
	$scope.domainDeliveryType = [];
	$scope.domainDeliveryFrequency = [];
	$scope.domainDataStatus = [];
	$scope.domainTimesliceType = [];
	$scope.domainDownloadStatus = [];
	$scope.downloads = [];
	
	$scope.validInputs = false;
	$scope.parameterSet = {};
	init();
	
	function init() {
		$scope.domainSystem = domainService.getDomain('system');
		$scope.domainFileFormat = domainService.getDomain('fileFormat');
		$scope.domainVersion = domainService.getDomain('version');
		$scope.domainDeliveryType = domainService.getDomain('deliveryType');
		$scope.domainDeliveryFrequency = domainService.getDomain('deliveryFrequency');
		$scope.domainDataStatus = domainService.getDomain('dataStatus');
		$scope.domainTimesliceType = domainService.getDomain('timesliceType');
		$scope.domainDownloadStatus = domainService.getDomain('downloadStatus');
	}
	
    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby) {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };
    
    $scope.reschedule = function( event ) {
        var answer = confirm("Are you sure you want to reschedule this download?");
        if (!answer) {
            event.preventDefault();
        }
    };
    
    $scope.stop = function( event ) {
        var answer = confirm("Are you sure you want to stop this download?");
        if (!answer) {
            event.preventDefault();
        }
    };    
    
	$scope.$on('activeViewChanged', function() {
		$scope.parameterSet = parametersetService.getParameterSet(
			viewService.activeView.id
		);
		$scope.downloads = downloadService.getDownloads();
	});
});

