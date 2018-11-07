!function(e){
	"use strict";

	// Smooth scrolling using jQuery easing
	e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){
		if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
			var a=e(this.hash);
			if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)
				return e("html, body").animate({scrollTop:a.offset().top-70},1e3,"easeInOutExpo"),!1}
		}),
	// Closes responsive menu when a scroll trigger link is clicked
	// Activate scrollspy to add active class to navbar items on scroll
	e(".js-scroll-trigger").click(function(){
		e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:100});
	// Collapse Navbar
	var a=function(){
		100<e("#mainNav").offset().top?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")};
		a(),e(window).scroll(a)

}(jQuery);


window.onload = function () {
          var backgroundImg=["img/test1.jpeg","img/test2.jpeg","img/test3.jpeg"
          ,"img/test4.jpeg","img/test5.jpeg","img/test6.jpeg","img/test7.jpeg"
          ,"img/test8.jpeg"]
          
            setInterval(changeImage, 5000);
           function changeImage() {   
            var i = Math.floor((Math.random() * 4));
            
            document.getElementById('bannerImage').style.backgroundImage = "url('"+backgroundImg[i]+"')";
    
        }
}
