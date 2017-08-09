/**
 * Created by Administrator on 2017/3/18.
 */
(function ($) {
    var tell1 = $('.tell input');
    var pwd1 = $('.pwd input');
    $('.login button').click(function () {
            var tell = tell1.val();
            var pwd = pwd1.val();
            if(!/^13|14|15|17|18\d{9}$/.test(tell)){
                alert('电话号码格式不正确');
                if(!/^[0-9a-z]\w{3,15}$/i.test(pwd)){
                    alert("密码格式不正确");
                }
            }else{
                alert('登录成功');
                window.open('pageHome.html');
            }

    })
})(Zepto);