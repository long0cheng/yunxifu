//窗体滚动事件开始==================================================
$(window).scroll(function(event) {
  headerInit();
});

function headerInit(){
  if($(this).scrollTop()>0){
    $("body").addClass("fixed-header-on");
  }else{
    $("body").removeClass("fixed-header-on");
  }
}

headerInit();
//窗体滚动事件结束==================================================

//首页事件的开始====================================================
var images = ["img/02.jpg", "img/02.jpg", "img/02.jpg"];

$(".index").backstretch(images, {
        fade: 750,
        duration: 3000,
        preload: 1, //Use the lazy-loading functionality
        start: 2 //Optional - now starts with "dome.jpg"
    });
//首页事件的结束====================================================

//关于脚本的开始====================================================
if($("[data-animation-effect]").length>0){
  $("[data-animation-effect]").each(function(index, el) {
    var $this = $(this);
    var animationEffect = $this.attr["data-animation-effect"];
    setTimeout(function(){
      $this.removeClass("object-non-visiable").addClass("object-visiable");
      $this.addClass('animated '+ animationEffect);
    },400);
  });
}

//滚动监听
$('body').scrollspy({ target: '#mynavbar' })

//平滑滚动
$(".navbar a").click(function(event) {
  var target = $(this.hash);
  $("html").animate({
    scrollTop:target.offset().top
  },1000);

});

//关于脚本 的开始====================================================

//图集 的开始====================================================
$(".filter li a").click(function(){
  var filterValue =  $(this).attr('data-filter');
  $(".isotope-container").isotope({ filter: filterValue });

$(this).parent().addClass('active').siblings().removeClass('active');

  return false;
});

//图集 的结束====================================================
