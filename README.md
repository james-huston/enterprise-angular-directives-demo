enterprise-angular-directives-demo
==================================

Demo project for Enterprise Developers guild presentation on AngularJS scope with Controllers and Directives. This project is broken into 3 phases, each in it's own branch, and each designed to show the progression of how most new Angular developers learn to deal with scope in their projects.

It's important to note that the code and concepts here are heavily biased to my own experience and opinions and I don't pretend to be and expert at Angular. I have used it on some medium to large projects and have learned a lot about what you should and shouldn't do in your application.

# Running the project
To run this project simply clone it and run the following:

	npm install
	git checkout demo/badscope
	npm run server

This will get you a running web server on port 8000. You can overide the port with something like:
	
	PORT=5000 npm run server
	
To view the site navigate to the following URL:

	http://localhost:8000/
	
# What this demo does NOT teach you (or flat out does wrong)

This demo is very specific in it's scope and does not cover some very important things. Mainly these are:

* We don't have a build process to do important things like lint checking, concatenation, and minification. These are all things that your project should do, I have avoided them here to make this demo simple and keep it's requirements to a minimum. Learn about Grunt and Gulp and use them!
* We aren't doing any unit or end to end testing here. This is a critical part of writing good Angular code (really, any code) and should also be a part of your project.
* We don't do any complicated routing, config loading, dependency loading, or any of the things like this a real application should and will do. Thinks like angular.config and angular.resolve are very much your friends, learn how to use them.
* We don't compile our templates. This would be part of your build process and you will want to do this to take advantage of template caching and speed up your apps. Don't let Angular load your templates as individual requests at runtime like I do in this example. If you do you are doing it wrong.

# What this demo does do
## Round 1 (demo/badscope branch). Fight!
Throughout my experience with Angular I have learned a lot about how to manage scope in an application. My first (and most likely yours too) relied on values on the top level controller's $scope service to power the app. Every controller and directive on the page basically got a reference to that scope and went on their merry way corrupting other controllers data and being coupled to the app/main controller in bad ways. This is probably also where you will create your first real "component" in the from of a directive and try to start reusing some code in smart ways. If you are like me though you won't quite hit the mark.

## Round 2 (demo/directivescope branch). Fight!
Ok you have a directive, nice and reusable right? But wait, no. It's still sharing data from the route controllers scope and when you try to use it a second time on the same page with different input data, well that doesn't work out well. So you learn to setup private scope in your directive and inject the data it needs when you declare it. Low and behold it works. Man you have this Angular thing down and are kicking some ass!

## Round 3 (demo/contactservice branch). Fight!
You are happy with your app. It works. Your directives are running with their own scope, your use of data binding is AWESOME, and you are feeling pretty good. But you know what? You are still doing it wrong. That application state that you fired up and attached to $scope in your root level controller? Yeah, thats on every child controller in your entire app, whether you need it or not, mucking up your scope and sharing data like the Internet shares "Pro Tips". Now it's time to learn how contain that data and use Angular's dependency injection to inject it only where it's needed. Keep a clean house. Your code, tests, and other developers will appreciate it. 