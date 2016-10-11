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

  $scope.data = {
    model: null,
    options: [
      {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/AFRO%20BLUE-9.jpg',
       title:'Afro Blue'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/Georgia-119.jpg',
       title:'Georgia'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/A%20NIGHT%20IN%20TUNISIA-7.jpg',
       title:'A Night in Tunisia'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/FOOTPRINTS-157.jpg',
       title:'Footprints'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/BODY%20AND%20SOUL-59.jpg',
       title:'Body and Soul'
     }
    ]
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
    });
  };
});
