(function(){

    $(function(){

        $('#login').on('click',function(){
           var param = {
               'username':$('.username').val(),
               'password':$('.password').val()
           };
           console.log(param)
        })
    })
})();