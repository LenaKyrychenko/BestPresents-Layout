$(function () {
	var elWrap = $('#slide'),
		el =  elWrap.find('.item'),
		indexImg = 1,
		indexMax = el.length,
		slide1 = $('.slide1'),
		slide2 = $('.slide2'),
		slide3 = $('.slide3'),
		slider = $('.slider a');

	
	function change () {
		el.fadeOut(500).delay(500).filter(':nth-child('+indexImg+')').fadeIn(500);
		//setTimeout(function(){el.filter(':nth-child('+indexImg+')').fadeIn(500);},500); //el.filter(':nth-child('+indexImg+')').fadeIn(500);

	}	
		
	function autoCange () {	
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}		
		if(indexImg == 1){
			slide1.css('background-color', '#A8A8A8');
			slide2.css('background-color', '#E8E8E8');
			slide3.css('background-color', '#E8E8E8');
		}else if(indexImg == 2){
			slide2.css('background-color', '#A8A8A8');
			slide1.css('background-color', '#E8E8E8');
			slide3.css('background-color', '#E8E8E8');
		}else{
			slide3.css('background-color', '#A8A8A8');
			slide2.css('background-color', '#E8E8E8');
			slide1.css('background-color', '#E8E8E8');
		}
		change ();
	}	

	var interval = setInterval(autoCange, 5000);

	elWrap.mouseover(function() {
		clearInterval(interval);
	});

	elWrap.mouseout(function() {
		interval = setInterval(autoCange, 5000);
	});

	slider.mouseover(function(){
		$(this).css('background-color', '#A8A8A8');
	});

	slider.mouseout(function(){
		$(this).css('background-color', '#E8E8E8');
	});


	
	// elWrap.append('<span class="next"></span><span class="prev"></span>');
	
	slide1.click(function() {
		indexImg = 0;
		clearInterval(interval);
		autoCange();
		interval = setInterval(autoCange, 5000);
	});

	slide2.click(function() {
		indexImg = 1;
		clearInterval(interval);
		autoCange();
		interval = setInterval(autoCange, 5000);
	});

	slide3.click(function() {
		indexImg = 2;
		clearInterval(interval);
		autoCange();
		interval = setInterval(autoCange, 5000);
	});

	// $('span.prev').click(function() {
	// 	indexImg--;
	// 	if(indexImg < 1) {
	// 		indexImg = indexMax;
	// 	}
	// 	change ();
	// });	
});