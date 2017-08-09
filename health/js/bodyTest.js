(function($){
    var main={
        init:function(){
            this.chose();

        },
        chose:function(){
            var li=$('.chose>li');
            li.click(function(){
                $('li').css('color', 'black');
                $(this).css('color','green')
            });
        }
    };
    main.init();

})(Zepto);
