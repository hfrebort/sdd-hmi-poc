/**
 * 
 */
app.controller('MessageController', function($scope, messageService, domainService) {
	$scope.orderby = 'created';
	$scope.reverse = true;

	$scope.acknowledge = false;
	
	$scope.messageHeader = {};
	$scope.messages = [];
	$scope.domainMessageIndicator = [];
	
	$scope.messagefilter = {};
	
	init();
	
	function init() {
		$scope.domainMessageIndicator = domainService.getDomain('messageIndicator');
		$scope.messagefilter = {filterIndicator: 'A',filterFrom: '10-JUN-2013 01:00',filterTo: '20-NOV-2013 00:00'};
		$scope.messageHeader = messageService.getMessageHeader();
		$scope.messages = messageService.getMessages();
	}
	
    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby) {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };
	
    $scope.submitMessageForm = function() {
    };
    
    $scope.clickAllOrNothing = function(){
        for (var i = $scope.messages.length - 1; i >= 0; i--) {
        	if ( $scope.acknowledge ) {
        		$scope.messages[i].acknowledged = 'A';
        	} else {
        		$scope.messages[i].acknowledged = 'N';
        	}
        }
    };
    $scope.acknowledgeAllMessages = function(){
        for (var i = $scope.messages.length - 1; i >= 0; i--) {
            if ($scope.messages[i].acknowledged === 'A') {
            	$scope.messages.splice(i, 1);
            }
        }
    };
});
