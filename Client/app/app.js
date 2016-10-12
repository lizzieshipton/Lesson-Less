angular.module('lesson', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/app/landing.html',
  })
    .when('/student', {
      templateUrl: '/app/student.html',
      controller: 'studentListController'
    })
    .when('/teacher', {
      templateUrl: '/app/teacher.html',
      controller: 'teacherController'
    })
    .otherwise({
      redirectTo: '/'
    });
  })

.controller('teacherController', function($scope, $http){

  $scope.student = {};

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
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/AUTUMN%20LEAVES-36.jpg',
       title:'Autumn Leaves'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/A%20FOGGY%20DAY-6.jpg',
       title:'Foggy Day'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/MY%20FUNNY%20VALENTINE-308.jpg',
       title:'My Funny Valentine'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/MISTY-296.jpg',
       title:'Misty'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/STELLA%20BY%20STARLIGHT-408.jpg',
       title:'Stella by Starlight'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/ROUND%20MIDNIGHT-364.jpg',
       title:'Round Midnight'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/NARDIS-316.jpg',
       title:'Nardis'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/ALONE%20TOGETHER-19.jpg',
       title:'Alone Together'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/OLEO-327.jpg',
       title:'Oleo'
     },
     {
       url:'http://www.guitarcats.com/images/JazzStandardCharts/Isfahan-150.jpg',
       title:'Isfahan'
     }
    ]
   };

   $scope.addAssignment = function(){
     $http({
       method: 'POST',
       url: '/assignments',
       data: $scope.student
     });
     $scope.student = '';
   };
})

.controller('studentListController', function($scope, $http){
  $scope.getStudents = function(){
    $http({
      method: 'GET',
      url: '/studentList'
    })
    .then(function(students){
      $scope.students = students.data;
    });
  };
});
