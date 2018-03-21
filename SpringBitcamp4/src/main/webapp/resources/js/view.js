/**
 * 
 */
function hello(){
	return '<h1>hellow !! AJAX </h1>';
}
function navigation(){
	return '<nav class="navbar navbar-default">'
	+'      <div class="container-fluid">'
	+'        <div class="navbar-header" id ="div-nav-1st">'
	+'          <a class="navbar-brand" href="#">'
	+'           <img src ="'+$.image()+'/logo3.jpg"></img>'
	+'          </a> '
	+'        </div>'
	+'        <div id="navbar" class="collapse navbar-collapse">'
	+'         '
	+'          <ul class="nav navbar-nav">'
	+'            <li class="active">'
	+'            <a id = "a-home" href="#">'
	+'        <span class="glyphicon glyphicon-home" aria-hidden="true">&nbsp;Home</span>'
	+'    </a>'
	+'    </li>'
	+'                    <li id="li-login">'
	+'                    </li>'
    +'     <li class="dropdown">'
    +'     <a href="#" class="dropdown-toggle" '
    +'       data-toggle="dropdown" '
    +'       role="button" '
    +'       aria-haspopup="true" '
    +'       aria-expanded="false">'
    +'         유틸리티'
    +'       <span class="caret">'
    +'      </span>'
    +'     </a>'
    +' <ul class="dropdown-menu" id="ul-util" >'
    +' <li id ="li-sequence"></li>'
    +'      <li id ="li-math"></li>'
    +'      <li id ="li-matrix"></li>'
    +'      <li id ="li-sort"></li>'
    +'      <li id ="li-application"></li>'
    +'        </ul>'
    +'      </li> '
    +'     <li>'
	+'            <a id="span-board" href="#">'
	+'              <span class="glyphicon glyphicon-question-sign" aria-hidden="true">&nbsp;Community</span>'
	+'        </a>'
	+'        </li>'
	+'    </ul>'
	+'   </div> <!-- /example -->   <!-- 드롭다운 LAST -->     '
	+'   </div>'
	+' </nav>';
}
var createTab=(x, y, json, type)=>{
	  var tab = '<table id="'+x+'" class="table table-'+y+'">'
	    +'<tr><th style="width: 50%">목록</th>'
	    +'<th style="width: 50%; background-color: green;">결과</th></tr>';
	  $.each(json, (i, j)=> {
	    tab += '<tr>'
	      +'<td>'+j+'</td>'
	      +'<td id="'+i+'"></td>'
	  });
	  tab += '</tr></table>'
	  return tab;
	};
/*var createTab=(x,y,json,txt,type)=>{
	tab = '<table id "'+x+'" class = "'+y+'">'
	+'<tr>'
	+'<th colspan="5">'+txt+'</th>'
	+'</tr>'
	$.each(json,(i,j)=>{
		tab +=
			+'<tr >'
			+'<td >('+i+')'+j.a+'</td>'
			+'<td >('+i+')'+j.b+'</td>'
			+'<td >('+i+')'+j.c+'</td>'
			+'<td >('+i+')'+j.d+'</td>'
			+'<td >('+i+')'+j.e+'</td>'
			+'</tr>'
	});
	tab += '</table>'
	return tab;
}*/
var createHTag=(x,y)=>{
	return '<h'+x+'>'+y+'</h'+x+'>';
}
var createDiv=(x,y)=>{
	return '<div id="'+x+'"class='+y+'></div>';
}
var createAlgoTab=x=>{
	return  '<table id="tab-algo" class="table table-bordered">'
	+'<tr>'
	+'<td id="li-arith"><a id ="a-arith" href=""></a></td>'
	+'<td id="result-box" rowspan="5"></td>'
	+'</tr>'
	+'<tr>'
	+'<td id="li-switch"><a id ="a-switch" href=""></a></td>'
	+'</tr>'
	+'<tr>'
	+'<td id="li-geo"><a id ="a-geo" href=""></a></td>'
	+'</tr>'
	+'<tr>'
	+'<td id="li-face"><a id ="a-face" href=""></a></td>'
	+'</tr>'
	+'<tr>'
	+'<td id="li-fibo"><a id ="a-fibo" href=""></a></td>'
	+'</tr>'
	+'</table>'
;
}
var createUL=(x,y)=>{
	return '<ul id="'+x+'" class="'+y+'"></ul>';
}
var createLI=(x,y)=>{
	return '<li id="'+x+'" class="'+y+'"></li>';
}
var createInputText=(x,y)=>{
	return $('<input type="text" id="'
			+x
			+'"class="'
			+y
			+'"placeholder="example" aria-describedby="basic-addn1">');
}
var createButton=(x,y,z)=>{
	return '<button type ="button" id="'+x+'" class="btn '+y+'">'+z+'</button>';
}

function createButtonNav1st(){
	return '<button id="btn-nav-1st" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'
	+'            <span class="sr-only">Toggle navigation</span>'
	+'            <span class="icon-bar"></span>'
	+'            <span class="icon-bar"></span>'
	+'            <span class="icon-bar"></span>'
	+'          </button>';
}
function createButtonSequence(){
	return '<a id="a-sequence">수열</a>';
}
function createButtonMath(){
	return '<a id="a-math">수학</a>';
}
function createButtonSort(){
	return '<a id="a-sort">정렬</a>';
}
function createButtonMatrix(){
	return '<a id="a-matrix">배열</a>';
}
function createButtonApplication(){
	return '<a id-"a-application">응용</a>';
}
var createATag=(x,y)=>{
	return '<a id="'+x+'" href="#"> '+y+'</a>';
}
var createSpan=(x,y)=>{
	return '<span class="glyphicon '+x+'aria-hidden="true">&nbsp;'+y+'</span>';
}

var createText=x=>{
	return '<span id="'+x+'"></span>';
}
var createSort=(x,y,json,txt,type)=>{
	tab = '<table id "'+x+'" class = "'+y+'">'
	+'<tr>'
	+'<th colspan="5">'+txt+'</th>'
	+'</tr>'
	$.each(json,(j)=>{
		tab +=
			+'<tr >'
			+'<td >'+j.a+'</td>'
			+'<td >'+j.b+'</td>'
			+'<td >'+j.c+'</td>'
			+'<td >'+j.d+'</td>'
			+'<td >'+j.e+'</td>'
			+'</tr>'
	});
	tab += '</table>'
	return tab;
}
