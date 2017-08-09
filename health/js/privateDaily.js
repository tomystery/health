(function($){
    var main={
        init:function(){
            this.input();
            this.show();
        },
        input:function(){
            var input=$('input');
            input.click(function(){
                $(this).addClass('in');
            })
        },
        show:function(){
            $('.s_tit>img:last-child').click(function(){
                $(this).parent().next().toggleClass('rem')
            });

        }
    };
    main.init();
})(Zepto);
