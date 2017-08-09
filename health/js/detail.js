(function($){
    var count=$('.count').html();
    $('.plus').click(function(){
        ++count;
        $('.count').html(count);
    })


})(Zepto)
