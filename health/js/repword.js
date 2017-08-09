(function () {
			var mun=parseInt(Math.random()*9999);
			var psd=$('.psd');
			var pw=/^\w{3,17}$/i;
			var repsd=$('.repsd');
			var main={
				psdword:function  () {
					var psd=$('.psd');
					var repsd=$('.repsd');
					
					psd.blur(function  () {
							if (pw.test(psd.val())) {
								$('.sp').hide();
							} else{
								$('.sp').css('display','block');
								psd.val('');
							}
					});
					repsd.blur(function  () {
						if (pw.test(repsd.val())) {
								$('.rep').hide();
							} else{
								$('.rep').css('display','block');
								repsd.val('');
							}
					})
				},
				verification:function  () {
					
					$('.omg').html(mun);
					$('.what').click(function  () {
						mun=parseInt(Math.random()*9999);
						$('.omg').html(mun);
					})
					$('.code').blur(function  () {
						if ($('.code').val()==mun) {
							$('.code').css('border-bottom','1px solid #43bf92');
						} else{
							$('.code').css('border-bottom','1px solid red');
						}
					})
					
				},
				btn:function  () {
					$('button').click(function  () {
						if ($('.code').val()==mun&&pw.test(repsd.val())&&pw.test(psd.val())) {
							alert('修改密码成功！');
						} else {
							alert('修改密码不成功，请重新修改');
							$('input').val('');
						}
					})
				}
			}
			
			main.psdword();
			main.verification();
			main.btn();
		})()