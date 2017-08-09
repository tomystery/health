(function($){
    var health= {
        init: function () {
            var self=this;
            self.fit();
            return this;
        },
        fit: function(){
            var num=1/window.devicePixelRatio;
            $(document.body).append('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale='+num+', maximum-scale='+num+',minimum-scale='+num+'" />');
            var fonSize=$(window).width()/10;
            $('html').css('font-size',fonSize);
        }
    };
    health.init();
})(Zepto);
