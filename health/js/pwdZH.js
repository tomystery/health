(function ($) {
    var btn = $('.login button');
    var inputs = $('input');
    btn.click(function () {
        var tell = inputs.eq(0).val();
        var code = inputs.eq(1).val();
        if(!/^1[345678]\d{9}$/.test(tell)){
            alert("电话号码格式不正确");
        }else if(!/^\d{6}$/.test(code)){
            alert('验证码格式不正确');
        }else{
            console.log('密码找回成功');
        }
    })
})(Zepto);