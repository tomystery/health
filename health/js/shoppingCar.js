(function($){
    //�����ѡ��ť
    //���ȫѡ��ť
    var a=function(){
        $('.total .circle').click(function(){
            if($(this).hasClass('circleOn')){
                $('.circle').removeClass('circleOn');
            }else{
                $('.circle').addClass('circleOn')
            }
        });
        //���������ť
        $('.wrap .circle').click(function() {
            $(this).toggleClass('circleOn');
        });
        //�������������ť��������ȫѡ��ť����
        var check1=$('.check1').hasClass('circleOn');
        var check2=$('.check2').hasClass('circleOn');
        //����
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
//�ײ����
    $('.footer ul li div').click(function(){
        console.log($(this));
        $(this).addClass('li1');
        console.log( $(this).addClass('li1') .parent().siblings().children().removeClass('li1'));
//.parent().siblings().child().removeClass('li1');
    })

})(Zepto);
