app.service('navigationService', function() {
	
	this.getMenus = function() {
		return navigation['menu'];
	};
	
	var navigation = {
			"menu": [
			 		{
			 			"menuName":"File",
			 			"menuItems": [{
			 				"menuItem":"Save",
			 				"menuSref":"index"
			 				},{
			 				"menuItem":"Exit",
			 				"menuSref":"index"
			 			}]
			 		},
			 		{
			 			"menuName":"Maintenance",
			 			"menuItems": [{
			 				"menuItem":"New Parameter Set",
			 				"menuSref":"newParameterSet",
			 				"viewName":"parameterset"
			 				},{
			 				"menuItem":"Search Parameter Sets",
			 				"menuSref":"index"
			 			}]
			 		},
			 		{
			 			"menuName":"Help",
			 			"menuItems": [{
			 				"menuItem":"Help Contents",
			 				"menuSref":"index"
			 				},{
			 				"menuItem":"About",
			 				"menuSref":"index"
			 			}]
			 		}
			 	]
			 }
});