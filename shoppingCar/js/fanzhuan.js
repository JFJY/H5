$(function(){
	$("#bbigBox1").mouseenter(function(){
		$("#bbigBox1_img").animate({
			"height":"0px",
			"top":"200px"
		},500,function(){
			this.src="img/fangdajing2.jpg";
			$(this).animate({
				"height":"400px",
				"top":"0px"
			},500);
		});
	});
	$("#bbigBox1").mouseleave(function(){
		$("#bbigBox1_img").animate({
			"height":"0px",
			"top":"200px"
		},500,function(){
			this.src="img/fangdajing1.jpg";
			$(this).animate({
				"height":"400px",
				"top":"0px"
			},500);
		});
	});
});	