/**
 * 
 */

var arith=(x,y,z)=>{
	// 등차수열 초기값x, 리밋값y , 공차z
	//1+2+3+4...+10 
	console.log('넘어옴?'+x);
	var x=x*1,y=y*1,z=z*1;
	var sum = 1;
	var k = x;
	var str =x+"+";
	for(var i=1; i<y; i++){	
		if(i<y-1){
			k+=z;
			sum +=k;
			str += k+"+";
		}else if(i=y-1){
			k+=z;
			sum +=k;
			str += k+"=";
		}
			
}
	console.log('결과?'+sum);
	return str+sum;
}
var switchSeq=(x,y,z)=>{
	//스위치 수열
	//1-2+3-4+5-6...-100 = -50
	console.log('스위치?'+x);
	var x=x*1,y=y*1,z=z*1;
	var sum = 0;
	var sw = 0;
	var k = x;
	var str ="";
	for(var i=1; i<=y; i++){
		if(sw==0){
			k+=z;
			sum += k;
			sw = 1;
		}else if(sw==1){
			k+=z;
			sum -= k;
			sw = 0;
		}
	}
	console.log('스위치 결과?'+sum);
	return str+sum;
}
var geo=(x,y,z)=>{
	//2+6+18+54+162 = 242  
	// *3  
	//5항까지
	console.log('등비?'+x);
	var x=x*1,y=y*1,z=z*1;
	var sum = 1;
	var k= x;
	var str = "";
	for(var i=0; i<y; i++){
		sum *=z;
	}
   console.log('등비 결과?'+sum);
   return str+sum-1;
}

var face=(x,y,z)=>{
	
}
var fibo=(x,y,z)=>{
	
}

var fiveByFive=()=>{
	var stx = new Array(new Array(5), new Array(5),
		new Array(5),new Array(5),new Array(5));
	var x =[
		{
			a : 1,
			b : 2,
			c : 3,
			d : 4,
			e : 5
		},
		{
			a : 6,
			b : 7,
			c : 8,
			d : 9,
			e : 10
		},
		{
			a : 11,
			b : 12,
			c : 13,
			d : 14,
			e : 15
		},
		{
			a : 16,
			b : 17,
			c : 18,
			d : 19,
			e : 20
		},
		{
			a : 21,
			b : 22,
			c : 23,
			d : 24,
			e : 25
		}
	]
	return x;
}
var findBySort=()=>{
	var x =[
			'선택 정렬',
			'버블 정렬',
			'삽입 정렬',
			'석차 구하기',
			'이분 검색'
			
	];
	return x;
}
