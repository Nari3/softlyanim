softlyanim
==========

jQuery softlyanim Plugin
version: 1.0
Author: T.Morimoto

無限ループするアニメーションプラグイン
http://wood-roots.com/sample/softlyanim/

###html
head内にjQueryおよびjQuery.easing.jsと当プラグインsoftlyanim.jsをロードします。

```
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="jquery.easing.min.js"></script>
<script type="text/javascript" src="softlyanim.js"></script>
```

###javascript及びオプション
移動量、イージング、スピード、リピートの有無（mouseenterなどでの使用を想定）、ディレイを設定できます。

```
  (function($){
		$(function(){
			$('.block,.block2').softlyanim({
				'v': 100, //縦方向の振れ幅
				'h': 100, //横方向の振れ幅
				'easing': 'linear', //イージング
				'speed': 'normal', //スピード
				'repeat': true, //リピートするかどうか
				'delay': 0 //1アクション後のタメ
			});
		});
	})(jQuery);
```

###CSS
適用するオブジェクトはposition: absolute;かrelative;かfixed;にしてください。
