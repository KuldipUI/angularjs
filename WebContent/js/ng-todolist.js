var Myapp=angular.module("myapp",[]);
Myapp.controller("todoctrl",function ($scope){
	//first list of todos
	$scope.todos= [{
		done: false,
		text:'first'
	}, {
        done: false,
        text:'second'
	}];
	
	$scope.removeTodo = function(start){
		$scope.todos.splice(start, 1);
	};
// adding new todos
	$scope.addtodo = function(){
	var newTodo={
			done: false,
			text: $scope.todoText
	};
	$scope.todos.push(newTodo);
	$scope.todotext='';
};

});