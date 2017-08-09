(function($){
    var main={
        init:function(){
            this.choice();
        },
        choice:function(){
            var li=$('.opt>li');
            li.click(function(){
                var index=$(this).index();
                li.eq(index).addClass('active').siblings().removeClass('active');
            })
        }
    };
    main.init();

})(Zepto);
