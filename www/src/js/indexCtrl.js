angular.module('myApp')
    .controller('indexCtrl',function($scope,$state,$translate,i18){
        $scope.switchLanguage = switchLanguage;
        $scope.flag = false;
        $scope.cur_lang = $translate.use();

        function switchLanguage(lang){
            console.log('clicked!!')
            $scope.flag =  !$scope.flag;
            console.log($scope.flag)
            console.log(lang)
            $translate.use(lang);
            window.localStorage.lang = lang;
            window.location.reload();
        }


    })