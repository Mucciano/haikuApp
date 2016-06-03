angular
  .module('HaikuAPI', [])
  .factory('haikuAPI', ['$http',
    function($http) {
      return {

        getAll: function(){
          return $http.get('/haikus');
        },

        save: function(newHaiku){
          return $http.post('/haikus', newHaiku);
        },

        remove: function(id){
          return $http.delete('/haikus/'+ id);
        }

      }
    }])
