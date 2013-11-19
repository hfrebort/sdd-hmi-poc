
app.service('domainService', function() {

	this.getDomains = function() {
		return domains;
	};
	
	this.getDomain = function(name) {
		return domains[name];
	};
	
	var domains = {	
			"system": {
				"domainName": "System",
			
				"domainValues": [
					{"value":"E","meaning":"EAD"},
					{"value":"A","meaning":"ADMS"}
				]
			},
			"fileFormat": {
				"domainName": "File format",
			
				"domainValues": [
					{"value":"X","meaning":"AIXM"}
				]
			},
			"version": {
				"domainName": "Version",
			
				"domainValues": [
					{"value":"5.1","meaning":"AIXM 5.1"}
				]
			},
			"active": {
				"domainName": "Active",
			
				"domainValues": [
					{"value":"A","meaning":"Active"},
					{"value":"I","meaning":"Inactive"}
				]
			},
			"timesliceType": {
				"domainName": "Timeslice type",
			
				"domainValues": [
					{"value":"B","meaning":"Baseline"},
					{"value":"P","meaning":"Permdelta"}
				]
			},
			"dataStatus": {
				"domainName": "Data status",
			
				"domainValues": [
					{"value":"C","meaning":"Committed"},
					{"value":"P","meaning":"Pending"},
					{"value":"A","meaning":"Committed + Pending"}
				]
			},
			"deliveryType": {
				"domainName": "Delivery type",
			
				"domainValues": [
					{"value":"O","meaning":"Once only"},
					{"value":"Y","meaning":"Cyclic"},
					{"value":"C","meaning":"On commit"}
				]
			},
			"deliveryFrequency": {
				"domainName": "Delivery frequency",
			
				"domainValues": [
					{"value":"D","meaning":"Day"},
					{"value":"W","meaning":"Week"},
					{"value":"M","meaning":"Month"},
					{"value":"Y","meaning":"Year"},
					{"value":"A","meaning":"AIRAC cycle"}
				]
			},
			"downloadStatus": {	
				"domainName": "Status",

				"domainValues": [
					{"value":"A","meaning":"All"},
					{"value":"S","meaning":"In Progress"},
					{"value":"Z","meaning":"File Empty"},
					{"value":"I","meaning":"File Invalid"},
					{"value":"R","meaning":"Retry Failed"},
					{"value":"E","meaning":"Failed"},
					{"value":"Q","meaning":"Scheduled"},
					{"value":"C","meaning":"Successful"},
					{"value":"U","meaning":"Unscheduled"}
				]
			},
			"messageIndicator":{	
				"domainName": "Indicator",

				"domainValues": [
					{"value":"B","meaning":"Both"},
					{"value":"N","meaning":"Not Acknowledged"},
					{"value":"A","meaning":"Acknowledged"}
				]
			}
		};
});
