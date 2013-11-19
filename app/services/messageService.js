
app.service('messageService', function() {
	
	this.getMessageHeader = function() {
		return messages.messageHeader;
	};
	this.getMessages = function() {
		return messages.messageContent;
	};
	
	var messages = {	
			"messageHeader": {
				"headerCreated":"Created on",
				"headerText":"Message"
			},

			"messageContent": [
				{
					"acknowledged":"N",
					"created":"11-JUN-2011 22:00",
					"text":"Download scheduled at 12-JUN-2011 18:00 for Parameter set OR-EUROCONTROL-130 with effective date 16-MAR-2012 18:00"
				},
				{
					"acknowledged":"N",
					"created":"11-JUN-2011 22:00",
					"text":"Download scheduled at 12-JUN-2011 19:00 for Parameter set OR-EUROCONTROL-188 with effective date 17-JUN-2011 19:00"
				},
				{
					"acknowledged":"A",
					"created":"10-JUN-2011 23:00",
					"text":"Download scheduled at 17-JUN-2011 19:00 for Parameter set HF-Test with effective date 17-JUN-2011 19:00"
				},
				{
					"acknowledged":"A",
					"created":"10-JUN-2011 23:00",
					"text":"Download scheduled at 17-JUN-2011 19:00 for Parameter set HF-Test with effective date 17-JUN-2011 19:00"
				},
				{
					"acknowledged":"A",
					"created":"10-JUN-2011 23:00",
					"text":"Download scheduled at 17-JUN-2011 19:00 for Parameter set HF-Test with effective date 17-JUN-2011 19:00"
				},
				{
					"acknowledged":"A",
					"created":"10-JUN-2011 23:00",
					"text":"Download scheduled at 17-JUN-2011 19:00 for Parameter set HF-Test with effective date 17-JUN-2011 19:00"
				},
				{
					"acknowledged":"A",
					"created":"10-JUN-2011 23:00",
					"text":"Download scheduled at 17-JUN-2011 19:00 for Parameter set HF-Test with effective date 17-JUN-2011 19:00"
				},
				{
					"acknowledged":"A",
					"created":"10-JUN-2011 23:00",
					"text":"Download scheduled at 17-JUN-2011 19:00 for Parameter set HF-Test with effective date 17-JUN-2011 19:00"
				},
				{
					"acknowledged":"A",
					"created":"10-JUN-2011 23:00",
					"text":"Download scheduled at 17-JUN-2011 19:00 for Parameter set HF-Test with effective date 17-JUN-2011 19:00"
				},
				{
					"acknowledged":"A",
					"created":"10-JUN-2011 23:00",
					"text":"Download scheduled at 17-JUN-2011 19:00 for Parameter set HF-Test with effective date 17-JUN-2011 19:00"
				},
				{
					"acknowledged":"N",
					"created":"10-JUN-2011 22:00",
					"text":"Download completed with status Created at 18-MAR-2011 03:40 for Parameter set CFMU AIRAC 1 with effective date 07-APR-2011 00:00 and file distribution via ESI compressed (reference ID: 1449752343)"
				}
			]
		};
});