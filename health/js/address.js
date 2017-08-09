(function($){
    var main={
        init:function(){
            this.circular();

        },
        circular:function(){
            $('.last span').click(function(){
                $('.last span').removeClass('active');
                $(this).toggleClass('active');
            });
            $('.last a:last-child').click(function(){
                $(this).parent().parent().parent().addClass('rem');
            });
        }
    };
    main.init();

})(Zepto);