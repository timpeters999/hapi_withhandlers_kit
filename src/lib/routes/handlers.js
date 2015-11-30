'use strict'
	
	var handlers = {};

	handlers.getAboutMessage =  "This About message is coming from a custom handler";
			
	handlers.getContactUsView =  function(request, reply){

		var data = {
                title: 'This is the Contact Us page',
                message: "This is a small contact us page message"
            };
			
		reply.view('contactus', data);
		
	};
	
	handlers.getSamplesView =  function(request, reply){

		var data = {
                title: request.route.settings.app.title,
                message: request.route.settings.app.message
            };
			
		reply.view('samples', data);
		
	};

module.exports = handlers;