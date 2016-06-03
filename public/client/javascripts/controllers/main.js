angular
  .module('mainController', ['HaikuAPI'])
  .controller('MainController', ['$scope', '$http', 'haikuAPI',
    function($scope, $http, haikuAPI){

      $scope.haikus = []

      $scope.saveHaiku = function(){
        console.log("toyo");
        var saveHaiku ={
          newHaiku: {
            line1: $scope.line1,
            line2: $scope.line2,
            line3: $scope.line3
          }
        }

        haikuAPI.save(saveHaiku).then(function(response){
          console.log(response);
          $scope.haikus.push(response.data)
        })

      } //close saveHaiku

      haikuAPI.getAll().then(function(response){
        console.log(response);
        $scope.haikus = response.data
      })


      $scope.deleteHaiku = function(haiku){
        haikuAPI.remove(haiku._id).then(function(response){
          console.log(response);
          $scope.haikus = $scope.haikus.filter(function(f){
            return f._id != haiku._id;
          })
        })
      }



    }

])
