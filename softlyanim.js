/*
jQuery softlyanim Plugin
version: 1.0
Author: T.Morimoto

https://github.com/woodroots/infiniteslide
http://wood-roots.com/?p=514
*/

(function($){

$.fn.softlyanim = function(options) {

//option
var settings = $.extend( {
		'v': 100, //縦方向の振れ幅
		'h': 100, //横方向の振れ幅
		'easing': 'linear', //イージング
		'speed': 'normal', //スピード
		'repeat': true, //リピートするかどうか
		'delay': 0 //1アクション後のタメ
	}, options);

//アニメーション
var softlyanim = function(obj){
	$(obj).animate({
		left: (settings.h/2) - Math.floor( Math.random() * (settings.h)) + 'px',
		top: (settings.v/2) - Math.floor( Math.random() * (settings.v)) + 'px'
		},settings.speed,settings.easing).delay(settings.delay).promise().done(function(){
			if(settings.repeat){
				softlyanim(obj);
			}
		});
}

	//処理の実行
	return this.each(function() {
		softlyanim(this);
	});

  };
})(jQuery);