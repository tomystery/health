(function($){
    var main={
        init:function(){
            this.choice();
        },
        choice:function(){

            $('.content1').click(function(){
                var num=$(this).index()/2;
                var hiddens=$('.hidden');
                hiddens.eq(num).toggleClass('rem');
            });
            $('td').click(function(){
                $('td').css('color', 'black');
                $(this).css('color','green')
            });
        }
    };
    main.init();
})(Zepto);
