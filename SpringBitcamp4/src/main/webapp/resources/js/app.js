/**
 * 
 */
var app = app || {};
var route = route || {};

app =(()=>{
	var init=x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Router(x));
			app.algorithm.onCreate();
		})
	};
	return{init:init};
})();
app.algorithm=(()=>{
	var $wrapper,context,algo,view,$wrapperS,$left;
	var onCreate =()=>{
		$wrapper = $('#wrapper');
		$wrapperS = $('#wrapperS');
		$wrapperD = $('#wrapperD');
		context = $.context();
		algo = $.javascript()+'/algo.js';
		view = $.javascript()+'/view.js';
	
		setContentView();
	};
	var setContentView=()=>{
		$wrapper.empty();
		$.getScript(view,()=>{
			$wrapper.append(navigation());
			$(createButtonNav1st())
			.appendTo('#div-nav-1st')
			.click(()=>{
				alert('Button Click!!');
			});				
			$(createATag('li-login',createSpan('glyphicon-user','로그인')))
			.appendTo('#li-login')
			.click(()=>{
				alert('로그인버튼클릭');				
			});
			$(createATag('li-sequence','수열'))
			.appendTo('#li-sequence')
			.click(()=>{
				alert('수열');

				$wrapperS.html($(createDiv('content','container'))
						.append(createHTag('1','sequence'))
						.append(createAlgoTab()));
					var $left=$('#tabLeft'),$right=$('#result-box');
				   $(createUL('ul-seq','list-group')).appendTo($left);
				   $(createLI('li-arith','list-group-item')).appendTo('#ul-seq');
				   $(createLI('li-switch','list-group-item')).appendTo('#ul-seq');
				   $(createLI('li-geo','list-group-item')).appendTo('#ul-seq');
				   $(createLI('li-face','list-group-item')).appendTo('#ul-seq');
				   $(createLI('li-fibo','list-group-item')).appendTo('#ul-seq');
				   $(createATag('a-arith','등차수열의 합')).appendTo('#li-arith');
				   $(createATag('a-switch','스위치수열의 합')).appendTo('#li-switch');
				   $(createATag('a-geo','등비수열의 합')).appendTo('#li-geo');
				   $(createATag('a-face','팩토리얼수열의 합')).appendTo('#li-face');
				   $(createATag('a-fibo','피보나치수열의 합')).appendTo('#li-fibo');
		         //default
				  createInputText('first','form-control')
		         .attr('placeholder','초기값 입력')
		         .appendTo($right);
		         createInputText('last','form-control')
		         .attr('placeholder','리미트값 입력')
		         .appendTo($right);
		         createInputText('bla','form-control')
		         .attr('placeholder','공차 입력')
		         .appendTo($right);
		         $(createButton('btn-result','btn-primary','결과 보기'))
		         .appendTo($right)
		         .attr('style','margin-top:10px;margin-left:100px;width:200px;')
				.on('click',()=>{
		              alert('result button click!!');
		              var x = $('#first').val();
		              var y = $('#last').val();
		              var z = $('#bla').val();
		              if(x !== '' && x > 0 
		              && y !== '' && y > 0 
		              && z !== '' && z > 0 ){
		            	  
		              $.getScript(algo,()=>{
	            	  $($wrapperD).text(arith(x,y,z))
		            	  .attr('style','font-size:50px;margin-left:120px;');

		              });	            
		              }else{
		            	  alert('값을 넣어 주세요.');
		              }		             
		            });
		         //아리스수열
		         $('#li-arith').on('click',()=>{
		        	 $right.empty();
		        	 createInputText('first','form-control')
			         .attr('placeholder','초기값 입력')
			         .appendTo($right);
			         createInputText('last','form-control')
			         .attr('placeholder','리미트값 입력')
			         .appendTo($right);
			         createInputText('bla','form-control')
			         .attr('placeholder','공차 입력')
			         .appendTo($right);
			         $(createButton('btn-result','btn-primary','결과 보기'))
			         .appendTo($right)
			         .attr('style','margin-top:10px;margin-left:100px;width:200px;')
					.on('click',()=>{
			              alert('arith result button click!!');
			              var x = $('#first').val();
			              var y = $('#last').val();
			              var z = $('#bla').val();
			              if(x !== '' && x > 0 
			              && y !== '' && y > 0 
			              && z !== '' && z > 0 ){
			              $.getScript(algo,()=>{
		            	  $($wrapperD).text(arith(x,y,z))
			            	  .attr('style','font-size:50px;margin-left:120px;');
			              });	            
			              }else{
			            	  alert('값을 넣어 주세요.');
			              }		             
			            });
		         });
		         //스위치수열 
		         $('#li-switch').on('click',()=>{
		        	 $right.empty();
		        	 createInputText('first','form-control')
			         .attr('placeholder','초기값 입력')
			         .appendTo($right);
			         createInputText('last','form-control')
			         .attr('placeholder','리미트값 입력')
			         .appendTo($right);
			         createInputText('bla','form-control')
			         .attr('placeholder','공차 입력')
			         .appendTo($right);
			         $(createButton('btn-result','btn-primary','결과 보기'))
			         .appendTo($right)
			         .attr('style','margin-top:10px;margin-left:100px;width:200px;')
					.on('click',()=>{
			              alert('switch result button click!!');
			              var x = $('#first').val();
			              var y = $('#last').val();
			              var z = $('#bla').val();
			              if(x !== '' && x > 0 
			              && y !== '' && y > 0 
			              && z !== '' && z > 0 ){
			            	  
			              $.getScript(algo,()=>{
			                  $($wrapperD).text(switchSeq(x,y,z))
			            	  .attr('style','font-size:50px;margin-left:120px;');
			              });	            
			              }else{
			            	  alert('값을 넣어 주세요.');
			              }		             
			            });
		         });
		         //등비수열
		         $('#li-geo').on('click',()=>{
		        	 $right.empty();
		        	 createInputText('first','form-control')
			         .attr('placeholder','초기값 입력')
			         .appendTo($right);
			         createInputText('last','form-control')
			         .attr('placeholder','리미트값 입력')
			         .appendTo($right);
			         createInputText('bla','form-control')
			         .attr('placeholder','공차 입력')
			         .appendTo($right);
			         $(createButton('btn-result','btn-primary','결과 보기'))
			         .appendTo($right)
			         .attr('style','margin-top:10px;margin-left:100px;width:200px;')
					.on('click',()=>{
			              alert('geo result button click!!');
			              var x = $('#first').val();
			              var y = $('#last').val();
			              var z = $('#bla').val();
			              if(x !== '' && x > 0 
			              && y !== '' && y > 0 
			              && z !== '' && z > 0 ){
			            	  
			              $.getScript(algo,()=>{
			                  $($wrapperD).text(geo(x,y,z))
			            	  .attr('style','font-size:50px;margin-left:120px;');
			              });	            
			              }else{
			            	  alert('값을 넣어 주세요.');
			              }		             
			            });
		         });
		         //팩토리얼수열
		         $('#li-face').on('click',()=>{
		        	 $right.empty();
		        	 $.getScript(algo,()=>{
		            	  $right.html(
		            			  createTab('test','tab-algo-fiveByFive',fiveByFive(),'Basic','default')
		            			  );
		            	  
		         });
		         });
		         //피보나치수열
		         $('#li-fibo').on('click',()=>{
		        	 $right.empty();
		        	 createInputText('first','form-control')
			         .attr('placeholder','초기값 입력')
			         .appendTo($right);
			         createInputText('last','form-control')
			         .attr('placeholder','리미트값 입력')
			         .appendTo($right);
			         createInputText('bla','form-control')
			         .attr('placeholder','공차 입력')
			         .appendTo($right);
			         $(createButton('btn-result','btn-primary','결과 보기'))
			         .appendTo($right)
			         .attr('style','margin-top:10px;margin-left:100px;width:200px;')
					.on('click',()=>{
			              alert('fibo result button click!!');
			              var x = $('#first').val();
			              var y = $('#last').val();
			              var z = $('#bla').val();
			              if(x !== '' && x > 0 
			              && y !== '' && y > 0 
			              && z !== '' && z > 0 ){
			            	  
			              $.getScript(algo,()=>{
			                  $($wrapperD).text(fibo(x,y,z))
			            	  .attr('style','font-size:50px;margin-left:120px;');
			              });	            
			              }else{
			            	  alert('값을 넣어 주세요.');
			              }		             
			            });
		         });
			});
			$(createATag('li-math','수학'))
			.appendTo('#li-math')
			.click(()=>{
				alert('수학');
			});
			$(createATag('li-matrix','배열'))
			.appendTo('#li-matrix')
			.click(()=>{
				alert('배열');
			});
			$(createATag('li-sort','정렬'))
			.appendTo('#li-sort')
			.click(()=>{
				
				alert('정렬');
				  $.getScript(algo, ()=>{
				$wrapperS.html($(createDiv('content','container')).attr('style', 'margin-top: 50px;')
						.append(createHTag('1','SORT'))
						.append(createTab('findBySort', 'border', findBySort(), 'default')));
				  $('#findBySort').attr('style', 'background-color: white');
				  $('#0').attr('style', 'background-color: gray' );
				  $('#1').remove();
				  $('#2').remove();
				  $('#3').remove();
				  $('#4').remove();
				  $('#0').attr('rowspan','5');
				
				  });
			
			});
			
			
			
			
			
			$(createATag('li-application','응용'))
			.appendTo('#li-application')
			.click(()=>{
				alert('응용');
			});
		});
	};
	return {onCreate:onCreate};
})();









