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

module.exports = handlers;