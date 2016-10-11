angular.module('lesson', [])

.controller('teacherController', function($scope, $http){

  $scope.student = {};

  $scope.addAssignment = function(){
    console.log('inside addAssignment');
     $http({
      method: 'POST',
      url: '/assignments',
      data: $scope.student
    });

  };
})

.controller('studentListController', function($scope, $http){

  $scope.getStudents = function(){
    console.log('inside getStudents');
    $http({
      method: 'GET',
      url: '/studentList'
    })
    .then(function(students){
      console.log(students);
      $scope.students = students.data;
    })
  }
})
