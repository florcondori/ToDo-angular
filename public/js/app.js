(function(){
	var app = angular.module('todoApp', []);

	app.controller('TodoController', ['$scope', function($scope){
		$scope.todos = [];
		
		$scope.addTodo = function(){
			$scope.newTodo = {
				'body' : $scope.body,
				completed : false,
				date : new Date(),
				editable : false
			};
			

			$scope.todos.push($scope.newTodo);
			$scope.body = '';
		};

		$scope.removeTodo = function(index){
			$scope.todos.splice(index, 1);
		};

		$scope.showBtnSave = function(index){
			$scope.todos.forEach(function(todo, i){
				if(i == index){
					todo['editable'] = true;
					$scope.changed = todo.body;
				}
			});
		};

		$scope.saveChange = function(index){

			$scope.todos.forEach(function(todo, i){
				if(i == index){
					todo['body'] = $scope.changed;
					todo['editable'] = false;
					console.log(todo.body);					
				}
			});
		};

	}]);

})();