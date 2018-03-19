/**
 * 
 */
var app = app || {};
var route = route || {};
app = (()=>{
  var init =x=>{
    onCreate(x);
    setContentView();
  };
  var onCreate=x=>{
    app.router.onCreate(x);
  };
  var setContentView =()=>{
    alert(route.$());
    $('#wrapper').empty();
    app.algorithm.onCreate();
  };
  return { //클로저
    init : init
  };
})(); //IIFE(이파이) 즉시 실행함수 패턴


app.algorithm=(()=>{
	var r = $.javascript()+'/router.js'
	var v =$.javascript()+'/view.js';
	var onCreate =()=>{
		setContentView();
	};
	var setContentView=()=>{
		$('#wrapper').html(v.hello());
	};
	return {onCreate:onCreate};
})();

app.router=(()=>{
	var onCreate=x=>{
		$.getScript(x+'/resources/router.js',()=>{
			$.extend(new Router(x));
			app.algorithm.onCreate();
		})
	}
	return{onCreate:onCreate};
})






