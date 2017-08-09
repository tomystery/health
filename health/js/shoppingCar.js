(function($){
    //点击勾选按钮
    //点击全选按钮
    var a=function(){
        $('.total .circle').click(function(){
            if($(this).hasClass('circleOn')){
                $('.circle').removeClass('circleOn');
            }else{
                $('.circle').addClass('circleOn')
            }
        });
        //点击单个按钮
        $('.wrap .circle').click(function() {
            $(this).toggleClass('circleOn');
        });
        //如果两个单个按钮都点了则全选按钮变亮
        var check1=$('.check1').hasClass('circleOn');
        var check2=$('.check2').hasClass('circleOn');
        //结算
        if(check1 && !check2){
            $('.count').html(1);
            $('.money').html(45)
        }
        if(!check1 && check2){
            $('.count').html(1);
            $('.money').html(45)
        }
        if(!check1 && !check2){
            $('.count').html(0);
            $('.money').html(0)
        }
        if(check1 && check2){
            $('.total .circle').addClass('circleOn');
            $('.count').html(2);
            $('.money').html(90)
        }else{
            $('.total .circle').removeClass('circleOn')
        }
    };
    a();
    setInterval(a,100);
//底部点击
    $('.footer ul li div').click(function(){
        console.log($(this));
        $(this).addClass('li1');
        console.log( $(this).addClass('li1') .parent().siblings().children().removeClass('li1'));
//.parent().siblings().child().removeClass('li1');
    })

})(Zepto);
