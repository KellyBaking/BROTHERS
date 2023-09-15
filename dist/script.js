// 螢幕'滑動'時觸發這組動作
// $(window).scroll

$(window).scroll(function(){
  if($(window).scrollTop()>0)
  {$(".explore").removeClass("opa");
   $(".navbar").addClass("bg-light, navbar-light");
   $(".navbar").removeClass("navbar-dark")}
else
  {$(".explore").addClass("opa");
   $(".navbar").removeClass("bg-light, navbar-light");
   $(".navbar").addClass("navbar-dark")};
});



 
$(window).mousemove(function(e){
  var pagex = e.pageX;
  var pagey = e.pageY;
  console.log(pagex,pagey);
  
  // 抓出離左邊的偏移距離
  // .offset().left
  var eleplace = $(".ele").offset().left+$(".ele").width()/2;
  var eletop = $(".ele").offset().top;
  // console.log(eleplace,eletop);
  
  if(pagex < eleplace-100)
    $(".ele").css("rotate","-60deg")
  if(pagex > eleplace-100)
    $(".ele").css("rotate","60deg")
  if(pagex < eleplace-100 && pagey < eletop)
    $(".ele").css("rotate","-30deg")
  if(pagex > eleplace-100 && pagey < eletop)
    $(".ele").css("rotate","30deg")
  if(eleplace+100 > pagex && pagex > eleplace-100)
    $(".ele").css("rotate","0deg")
  
  var ball_y = pagey - $("#footer").offset().top
  // console.log(ball_y);
  
  $(".ball").css("left",pagex+"px");
  $(".ball").css("top",pagey+"px");
  
  if(ball_y < 0)
    $(".ball").css("opacity","0")
  else
    $(".ball").css("opacity","1");
    
  // 利用除以正or負的pagex達到圖片往左往右效果
  $(".mountain").css("transform","translateX("+(pagex/-30)+"px)")
  $(".mountain2").css("transform","translateX("+(pagex/10)+"px)")
  
  $("h3.col-md-4").css("transform","translateX("+pagey/13+"px) rotate(6deg)")
  $("h3.col-md-10").css("transform","translateX("+pagey/-15+"px) rotate(-6deg)")
  
  
  
  
  
});