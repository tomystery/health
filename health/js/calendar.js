/*他人代码*/
(function($){
	var calendar = {
		page:0,
		init:function(){
			var self = this;
			window.onload = function(){
				self.calenda();
				self.incident();
			}
		},
		calenda:function(){
			$('.calendar .day').remove();
			var date = new Date();
			date.setMonth(date.getMonth()+this.page);
			var html = '';
			var y = date.getFullYear();
			var m = date.getMonth();
			var d = date.getDate();
			var one = new Date(y,m,1).getDay();
			$('.title').html(y+'年'+(m+1)+'月');
			var today=y+'年'+(m+1)+'月'+d+'日';
			var common = 32 - new Date(y, m, 32).getDate();
			var old = 32 - new Date(y, m-1, 32).getDate();
			var next = old-(one-2);
			var index1 = index2 = 1;
			for(var i=0;i<7*5;i++){
				var day = 0;
				if(!i%7){
					if(i!=0)html+='</li>';
					html+='<li class="clearfix warp day">';
				}
				if(i<one-1){
					day = next++; 	
				}else{
					if(index1>common){
						day = index2++;
					}else{
						day = index1++;
					}
				}
				html+='<a href="#">';
				html+='<span';
				if(d==day){
					html+=' class="on"';
				}
				html+='>'+day+'</span></a>';
			}
			$('.calendar ul').append(html);
		},
		incident:function(){
			var self = this;
			var calendar = $('.calendar')[0];
			var startX = startY = 0;
			calendar.addEventListener('touchstart',function(e){
				var client =  e.changedTouches[0];
				startX = client.clientX;
				startY = client.clientY;
			})
			calendar.addEventListener('touchend',function(e){
				var client =  e.changedTouches[0];
				var diffX = client.clientX-startX;
				var diffY = client.clientY-startY;
				if(Math.abs(diffX)<=50){
					var target = $(e.target);
					if(target[0].nodeName=='SPAN'){
						target.addClass('on');
						target.parent().siblings().children('span').removeClass('on');
					}
					return;
				}
				if(diffX&&Math.abs(diffY)<calendar.clientHeight/2){
					diffX>0?self.page--:self.page++;
					self.calenda();
				}
			})
		}
	}
	calendar.init();
})(Zepto)
