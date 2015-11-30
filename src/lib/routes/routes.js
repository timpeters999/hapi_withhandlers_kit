// this is where you create all of your routes.  for this kit, we just have a home page and an about page
// I also added an extra "route" for all paths that will include all files underneath the public folder such
// as css and js files
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
                title: 'This is the home page',
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
                title: 'This is the about page',
                message: 'This is a small about page message'
            };

            return reply.view('about', data);
        }
    }
];

//let's make the routes available to the server
module.exports = routes;