// this is where you create all of your routes.  for this kit, we just have a home page and an about page
// I also added an extra "route" for all paths that will include all files underneath the public folder such
// as css and js files

//this is where make our custom handlers accessible to the routes
var handlers = require('./handlers');

var routes = [
    {
		path: '/{path*}',
		method: 'GET',
		handler: {
			directory: {
				path: './lib/public',
				listing: false
			}
		}
	},
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            //this is what i want to do for my home page:  render my index.html page and pass in some data to it
            var data = {
                title: 'This is the Home page',
                message: 'This is a small home page message'
            };

            return reply.view('index', data);
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: function(request, reply) {
            //this is what i want to do for my about page:  render my about.html page and pass in some data to it
            var data = {
                title: 'This is the About page',
                message: handlers.getAboutMessage
            };

            return reply.view('index', data);
        }
    },
    {//here we want to return a view from a custom handler
        method: 'GET',
        path: '/contactus',
        handler: handlers.getContactUsView
    },
    {//here we want to return a view from a custom handler and pass in some parameters
        method: 'GET',
        path: '/samples',
        config: {
         handler: handlers.getSamplesView, 
         app: {
             title: "This is the Samples page",
             message: "This is a small samples page message"
        }
     }
    }
];

//let's make the routes available to the server
module.exports = routes;