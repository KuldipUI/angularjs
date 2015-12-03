var nameApp = angular.module('nameApp',[]);
nameApp.controller('myCtrl', function ($scope){
	$scope.fname = '';
	$scope.lname='';
	$scope.phonenumber='';
	$scope.email='';
	$scope.gender='';
	

	$scope.submit= function(){
		$scope.fname="";
		$scope.lname="";
		}
	
});