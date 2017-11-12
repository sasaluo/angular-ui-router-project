angular.module('myApp').directive('atPagination',function($rootScope){
    return{
        restrict: 'AE',
        replace:true,
        scope:{
            option:'=',//绑定父作用域里面的属性 <at-pagination option = "pageOption"></at-pagination>
            getData:"&"//绑定副作用域里面的方法

        },
        templateUrl:'js/directive/page/page.html',
        link: function ($scope, element, attr) {

            console.log($scope.option)
            var vm = this;
            $scope.goFirstPage = goFirstPage;
            $scope.goPrevPage = goPrevPage;
            $scope.goNextPage = goNextPage;
            $scope.goLastPage = goLastPage;
            function goFirstPage(){
                $scope.option.pageIndex = 1;
                console.log($scope.option)
            }
            function goPrevPage (){
                console.log($scope.option)
                if($scope.option.pageIndex>1){
                    $scope.option.pageIndex--;
                    console.log($scope.option)
                }
            }
            function goNextPage(){
                $scope.option.pageIndex ++;
                console.log($scope.option)
            }
            function goLastPage(){
                console.log($scope.option)
            }

        }














    }
});