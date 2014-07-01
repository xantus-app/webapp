'use strict';

angular.module('webappApp')
  .factory('User', ['$resource', function($resource) {

    return $resource( "http://192.168.0.8:3000/" + 'users/:Id', 
        { Id: '@Id' }, { 
            get: { 
                method: 'GET', 
                params: { Id: '@Id' }, 
                isArray: false 
            },
            save: { 
                method: 'POST', 
                params: {},
                isArray: false 
            },
            update: { 
                method: 'PUT', 
                params: { Id: '@id' }, 
                isArray: false 
            },
            delete: { 
                method: 'DELETE', 
                params: { Id: '@Id' }, 
                isArray: false 
            }
            
        } );

}]);

angular.module('webappApp')
.factory('Message', ['$resource', function($resource) {

    return $resource( apiBase + 'messages/:Id', 
        { Id: '@Id' }, { 
            get: { 
                method: 'GET', 
                params: { Id: '@Id' }, 
                isArray: false 
            },
            save: { 
                method: 'POST', 
                params: {},
                isArray: false 
            },
            update: { 
                method: 'PUT', 
                params: { Id: '@id' }, 
                isArray: false 
            },
            delete: { 
                method: 'DELETE', 
                params: { Id: '@Id' }, 
                isArray: false 
            }
            
        } );

}]);

angular.module('webappApp')
.factory('UserMessages', ['$resource', function($resource) {

    return $resource( apiBase + 'messages/user/:user', 
        { user: '@user' }, { 

            get: { 
                method: 'GET', 
                params: { user: '@user' }, 
                isArray: false 
            }
            
        } );

}]);