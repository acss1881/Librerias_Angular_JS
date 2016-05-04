angular.service('crudService', function ($http) {

    //crea nuevo registro
    this.post = function (datos, url) {
        var request = $http({
            method: "post",
            url: url,
            data: datos
        });
        return request;
    };
    // consulta registro
    this.get = function (id, url) {
        return $http.get(url + id);
    };
    //Get All Registros
    this.consulta = function (url) {
        return $http.get(url);
    };
    //Delete Registro
    this.delete = function (id, datos, url) {

        var request = $http({
            method: "delete",
            url: url + id,
            data: datos
        });
        return request;
    };
    //Update Registro
    this.put = function (id, datos, url) {
        var request = $http({
            method: "put",
            url: url + id,
            data: datos
        });
        return request;
    };

});

angular.controller('TUController', function ($scope, crudService) {
        var datos = {
            dato1: 'dato1',
            dato2: 'dato2',
        }
        var Post = crudService.post(datos, 'URL');
        Post.then(function (pl) {
          
          var data = pl.data;

        }, function (errorPl) {
          
        });
});
