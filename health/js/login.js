(function ($){
    var main={
        init:function(){
            this.login();
        },
        login:function(){
            var phone = $('.phone');
            var pwd = $('.pwd');
            $('.btn').click(function () {
                var phone = phone.val();
                var pwd = pwd.val();
                if(!/^13|14|15|17|18\d{9}$/.test(phone)){
                    alert('电话号码格式不正确');
                    if(!/^[0-9a-z]\w{3,15}$/i.test(pwd)){
                        alert("验证码不正确");
                    }
                }else{
                    alert('注册成功')
                }

            });
        }
    };
    main.init();

})(Zepto);






