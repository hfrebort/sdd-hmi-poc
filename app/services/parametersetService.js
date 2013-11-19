

app.service('parametersetService', function() {

	this.getParameterSets = function(filter) {
		return parameterSets;
	};
	
	this.getParameterSet = function(id) {
		return parameterSets[id];
	};
	
	var parameterSets = [
		{id: 0, name:'CFMU_EBBU',active:'A', system:'E',user:'sanchez'},
		{id: 1, name:'CFMU-LOVV',active:'A', system:'E',user:'beckmann'},
		{id: 2, name:'HF-Test-1',active:'A', system:'E',user:'frebort'},
		{id: 3, name:'MF-SMOKE-TEST',active:'A', system:'E',user:'froeschl'},
		{id: 4, name:'OR-EUROCONTROL-130',active:'A', system:'E',user:'makai'},
		{id: 5, name:'TEST-MW-3',active:'A', system:'E',user:'waltl'},
		{id: 6, name:'CFMU-TEST6',active:'A', system:'E',user:'beckmann'},
		{id: 7, name:'CFMU-TEST7',active:'A', system:'E',user:'beckmann'},
		{id: 8, name:'CFMU-TEST8',active:'A', system:'E',user:'waltl'},
		{id: 9, name:'CFMU-TEST9',active:'I', system:'E',user:'waltl'},
		{id: 10, name:'CFMU-TEST10',active:'I', system:'E',user:'waltl'},
		{id: 11, name:'CFMU-TEST11',active:'I', system:'E',user:'waltl'},
		{id: 12, name:'CFMU-TEST12',active:'I', system:'E',user:'waltl'},
		{id: 13, name:'CFMU-TEST13',active:'I', system:'E',user:'beckmann'},
		{id: 14, name:'CFMU-TEST14',active:'I', system:'E',user:'beckmann'},
    ];
});

app.service('downloadService', function() {

	this.getDownloads = function() {
		return downloads;
	};
	
	var downloads = [
		{id: 1, name:'CFMU_EBBU',system:'EAD', effectiveDate:'17-JUN-2013 00:00', scheduledDate:'17-JUN-2013 00:00', downloadDate:'17-JUN-2013 00:00',status:'successful'},
		{id: 2, name:'CFMU-LOVV',system:'EAD', effectiveDate:'27-JUN-2013 00:00', scheduledDate:'17-JUN-2013 00:00', downloadDate:'17-JUN-2013 00:00',status:'successful'},
		{id: 3, name:'HF-Test-1',system:'EAD', effectiveDate:'03-JUL-2013 00:00', scheduledDate:'17-JUN-2013 00:00', downloadDate:'17-JUN-2013 00:00',status:'successful'},
		{id: 4, name:'MF-SMOKE-TEST',system:'EAD', effectiveDate:'22-AUG-2013 00:00', scheduledDate:'17-JUN-2013 00:00', downloadDate:'17-JUN-2013 00:00',status:'successful'},
		{id: 5, name:'OR-EUROCONTROL-130',system:'EAD', effectiveDate:'27-SEP-2013 00:00', scheduledDate:'17-JUN-2013 00:00', downloadDate:'17-JUN-2013 00:00',status:'queued'},
		{id: 6, name:'TEST-MW-3',system:'EAD', effectiveDate:'07-OCT-2013 00:00', scheduledDate:'17-JUN-2013 00:00', downloadDate:'17-JUN-2013 00:00',status:'queued'},
    ];
});
