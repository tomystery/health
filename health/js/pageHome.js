(function($){
    var main={
        init:function(){
            this.header();

        },
        header:function(){
            var btn=$('.btn li');
            var list=$('.list li');
            var index=0;
            function core(num){
                btn.eq(num).addClass('on').siblings().removeClass('on');
                list.eq(num).addClass('in').siblings().removeClass('in');
        }
            btn.click(function(){
                index=$(this).index();
                core(index);
            });
            function play(){
                index++;
                if(index>btn.length-1){
                    index=0
                }
                core(index);
            }
            setInterval(play,1500);
        }
    };
    main.init();
})(Zepto);
