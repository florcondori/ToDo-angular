(function(){
	var app = angular.module('todoApp', []);

	app.controller('TodoController', function(){
		this.todos = [];
		this.todo = {};

		this.addTodo = function(){
			console.log(this.todos);
			this.todo.completed = false;
			this.todo.date = new Date();
			this.todos.push(this.todo);
			this.todo = {};
		};
	});

})();