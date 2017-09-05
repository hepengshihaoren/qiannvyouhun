//头部导航栏区域
var top_nav = document.getElementById("navbar");
var navbarLis = top_nav.children;
for (var i = 1; i < navbarLis.length; i++) {
  navbarLis[i].children[0].style.display = "none";
  navbarLis[i].children[1].style.display = "none";
  navbarLis[i].index = i;
  navbarLis[i].onmouseover = function () {
    for (var i = 1; i < navbarLis.length; i++) {
      console.log(navbarLis[i].children[0]);
      navbarLis[i].children[0].style.display = "none";
      navbarLis[i].children[1].style.display = "none";
    }
    this.children[0].style.display = "block";
    this.children[1].style.display = "block";
  };
  
  navbarLis[i].onmouseout = function () {
    var inx = this.index;
    navbarLis[inx].children[0].style.display = "none";
    navbarLis[inx].children[1].style.display = "none";
  };
}


//右侧tab栏
var new_head = document.getElementsByClassName("news-head")[0];
var newsHeadUl = new_head.children[0];
var newsHeadLis = newsHeadUl.children;
var newsCon = document.getElementsByClassName("news-con")[0];
var newsConDivs = newsCon.children;
for (var i = 0; i < newsHeadLis.length; i++) {
  newsHeadLis[i].index = i;
  newsHeadLis[i].onmouseover = function () {
    for (var i = 0; i < newsHeadLis.length; i++) {
      newsHeadLis[i].className = "news-head";
      newsConDivs[i].className = "news-con";
    }
    this.className = "news-current";
    
    var inx = this.index;
    newsConDivs[inx].className = "current";
  };
}

/********手风琴开始******************/
var sfq = document.getElementById("sfq");
var sfq_uls = sfq.children[0];
var sfq_lis = sfq_uls.children;

(function () {
  for (var i = 0; i < sfq_lis.length; i++) {
    sfq_lis[i].index = i;
    if (i > 0) {
      sfq_lis[i].style.left = i * 100 + 400 + "px";
    }
    
    sfq_lis[i].onmouseover = function () {
      for (var i = 0; i < sfq_lis.length; i++) {
        var inx = this.index;
        sfq_lis[i].children[0].children[0].style.display = "block";
        sfq_lis[i].children[0].children[1].style.display = "none";
        
        if (i <= this.index) {
          animate(sfq_lis[i], {left: i * 100});
        } else {
          animate(sfq_lis[i], {left: i * 100 + 400});
        }
      }
      sfq_lis[inx].children[0].children[1].style.display = "block";
      sfq_lis[inx].children[0].children[0].style.display = "none";
      
    };
  }
})();
//经过头像切换背景
var top1 = document.getElementsByClassName("top1")[0];
var top2 = document.getElementsByClassName("top2")[0];
var bot1 = document.getElementsByClassName("bot1")[0];
var bot2 = document.getElementsByClassName("bot2")[0];
var person1_img = document.getElementsByClassName("person1-img")[0];
var person2_img = document.getElementsByClassName("person2-img")[0];
bot1.onmouseover = function () {
  this.style.display = "none";
  top2.style.display = "block";
  top1.style.display = "none";
  bot2.style.display = "block";
};
bot2.onmouseover = function () {
  this.style.display = "none";
  top1.style.display = "block";
  top2.style.display = "none";
  bot1.style.display = "block";
};
/********手风琴结束******************/


/******************************轮播图开始**************************************/

var slider_wrap = document.getElementsByClassName("slider-wrap")[0];
var slider1 = document.getElementById("slider1");
var uls1 = slider1.children[0];
var ulis1 = uls1.children;
var ols1 = slider1.children[1];
var olis1 = ols1.children;
// var imgWidth = slider_wrap.offsetWidth;
var arrow1 = document.getElementById("arrow1");
;
var leftArr1 = arrow1.children[0];
var rightArr1 = arrow1.children[1];
var slider2 = document.getElementById("slider2");
var uls2 = slider2.children[0];
var ulis2 = uls2.children;
var ols2 = slider2.children[1];
var olis2 = ols2.children;
var arrow2 = document.getElementById("arrow2");
var leftArr2 = arrow2.children[0];
var rightArr2 = arrow2.children[1];
var btn = document.getElementById("btn");
var btns = btn.children;
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
// var count = 0;
// var timer = null;
// var flag = true;
(function () {
  slider(slider1, olis1, ulis1, uls1, rightArr1, leftArr1, arrow1);
  btn1.onclick = function () {
    slider2.style.display = "none";
    slider1.style.display = "block";
    slider(slider1, olis1, ulis1, uls1, rightArr1, leftArr1, arrow1);
  };
  
  btn2.onclick = function () {
    slider1.style.display = "none";
    slider2.style.display = "block";
    slider(slider2, olis2, ulis2, uls2, rightArr2, leftArr2, arrow2);
  };
})();


/**********************右侧小轮播开始***************/


/**********************右侧小轮播结束***************/

function slider(obj, olis, ulis, uls, rightArr, leftArr, arrow) {
  var count = 0;
  var flag = true;
  var imgWidth = obj.offsetWidth;
  clearInterval(obj.timer);
  for (var i = 0; i < olis.length; i++) {
    olis[i].index = i;
    olis[i].onmouseover = function () {
      for (var i = 0; i < olis.length; i++) {
        olis[i].style.backgroundColor = "";
      }
      this.style.backgroundColor = "#c8b070";
      
      //如果是假图片瞬间换成真图片
      if (count > ulis.length - 1) {
        count = 0;
        uls.style.left = "0px";
      }
      
      var target = -this.index * imgWidth;
      animate(uls, {"left": target});
      
      count = this.index;
    };
  }
  
  rightArr.onclick = function () {
    if (flag) {
      flag = false;
      
      if (count >= ulis.length - 1) {
        count = 0;
        uls.style.left = "0px";
      }
      count++;
      
      var target = -count * imgWidth;
      animate(uls, {"left": target}, function () {
        flag = true;
      });
      
      for (var i = 0; i < olis.length; i++) {
        olis[i].style.backgroundColor = "";
      }
      if (count >= ulis.length - 1) {
        olis[0].style.backgroundColor = "#c8b070";
      } else {
        olis[count].style.backgroundColor = "#c8b070";
      }
    }
  };
  
  leftArr.onclick = function () {
    if (flag) {
      flag = false;
      
      if (count <= 0) {
        count = ulis.length - 1;
        uls.style.left = -count * imgWidth + "px";
      }
      count--;
      
      var target = -count * imgWidth;
      animate(uls, {"left": target}, function () {
        flag = true;
      });
      
      for (var i = 0; i < olis.length; i++) {
        olis[i].style.backgroundColor = "";
      }
      if (count >= ulis.length - 1) {
        olis[0].style.backgroundColor = "#c8b070";
      } else {
        olis[count].style.backgroundColor = "#c8b070";
      }
    }
  };

// //4. 自动播放功能
  obj.timer = setInterval(rightArr.onclick, 1000);
  
  obj.onmouseover = function () {
    animate(arrow, {"opacity": 1});
    clearInterval(obj.timer);
  };
  
  obj.onmouseout = function () {
    animate(arrow, {"opacity": 0});
    obj.timer = setInterval(rightArr.onclick, 1000);
  };
}

/******************************轮播图开始**************************************/
// };

$(function () {
  var timer = null;
  var count = 0;
  
  $(".rightArrow-right").click(function () {
    count++;
    
    
    if (count == $(".rightSlider li").length) {
      count = 0;
    }
    // console.log(count);
    //让count渐渐的显示，其他兄弟渐渐的隐藏
    $(".rightSlider li").eq(count).fadeIn().siblings("li").fadeOut();
  });
  
  $(".rightArrow-left").click(function () {
    count--;
    
    if (count == -1) {
      count = $(".rightSlider li").length - 1;
    }
    console.log(count);
    //让count渐渐的显示，其他兄弟渐渐的隐藏
    $(".rightSlider li").eq(count).fadeIn().siblings("li").fadeOut();
  })
  timer = setInterval(function () {
    $(".rightArrow-right").click();
  }, 1000);
  
  $(".rightSlider").mouseenter(function () {
    $(".rightArrow").animate({"opacity": 1});
    clearInterval(timer);
  });
  $(".rightSlider").mouseleave(function () {
    $(".rightArrow").animate({"opacity": 0});
    timer = setInterval(function () {
      $(".rightArrow-right").click();
    }, 1000);
  });
  // console.log($(".rightArrow-right").click);
});


//固定导航栏
var headerSroll = document.getElementById("sroll");
var headerbtn = headerSroll.children[0];
var srollWidth = headerSroll.offsetWidth;
headerbtn.onclick = function () {
  if (this.innerText == "收起") {
    animate(headerSroll, {"width": 0});
    this.innerHTML = "展开";
  } else {
    animate(headerSroll, {"width": srollWidth});
    this.innerHTML = "收起";
  }
}
var top=getScroll().scrollTop;

window.onscroll=function(){

  if(top>100){
    animate(headerSroll,{"right":0})
  }else{
    animate(headerSroll,{"right":-180})
  }
}


//左侧文字特效
$(function () {
  $(".zzhList li").mouseenter(function () {
    $(this).css("background", "#ccc").siblings().css("background", "transparent");
  }).mouseleave(function () {
    $(this).css("background", "transparent");
  });
});

//左侧底部特效
$(function () {
  $(".icons li").mouseenter(function () {
    $(this).children("span").stop().animate({top: 0}, 100, "linear");
    var idx = $(this).index();
    
    
  }).mouseleave(function () {
    $(this).children("span").stop().animate({top: 83}, 100, "swing");
  });
});


//百叶窗特效
$(function () {
  $('#slider').nivoSlider({
    effect: 'random',
    slices: 15,
    animSpeed: 500,
    pauseTime: 3000,
    directionNav: true,
    controlNav: true,
    keyboardNav: true
  });
});


//背景旋转
// var lianhua = document.getElementById("lianhua");
// var count = 12;
// setInterval(function() {
//   count--;
//   lianhua.style.transform = "rotate(" + 30 * count + "deg)";
// },15);
var lhNav = document.getElementById("lhNav");
var lhLis = lhNav.children;
// var lhSpans = lhLis.getElementsByTagName("span");
var arr = ["#ff6600", "#ff6633", "#ff3300", "#ff3333", "#ff6666", "#ff9900", "#6666cc", "#3300cc", "#003399", "#FF6347"];
var arr1 = ["#C71585", "#D87093", "#FF1493", "#FF00FF", "#FF69B4", "#9370DB", "#7B68EE", "#BA55D3", "#EE82EE", "#8B008B"];
for (var i = 0; i < lhLis.length; i++) {
  lhLis[i].style.backgroundColor = arr[i];
  // lhLis[i].children[1].style.backgroundColor = arr1[i];
}


$(function () {
  $(".cut li").each(function (index, ele) {
    $(this).css({"left": 420 / 5 * index, "transition-delay": index * 0.2 + "s"});
    $(this).find("div").css({backgroundPosition: -420 / 5 * index + "px 0"});
  });
  var num = 0;
  $(".cut .next").click(function () {
    num++;
    $("li").css("transform", "rotateX(" + num * 90 + "deg)");
  });
  $(".cut .prev").click(function () {
    num--;
    $(".cut li").css("transform", "rotateX(" + num * 90 + "deg)");
  });
  
  // setInterval($(".cut .next").click, 1000);
});



(function () {
  
  //1. 找对象
  var footSlider = document.getElementById("footSlider");
 var sliderwrap = footSlider.children[0];
 var sliderUL = sliderwrap.children;
  var imgWidth = footSlider.offsetWidth;
  var footArrow = footSlider.children[1];
  var ArrowLeft = footArrow.children[0];
  var ArrowRight = footArrow.children[1];
  
  var timer = null;
  var count = 0;
  
  ArrowRight.onclick = function() {
    if (count >= sliderUL.length - 1) {
      count = 0;
      sliderwrap.style.left = "0px";
    }
    count++;
    var target = -count * imgWidth;
    animates(sliderwrap,target);
  }
  
  // setInterval(function() {
  //   ArrowRight.onclick();
  // },30);
  
  timer = setInterval(ArrowRight.onclick, 2000);
  
  
})();

function animates(obj, target) {
  //1. 清理定时器
  clearInterval(obj.timer);
  //2. 设置定时器
  obj.timer = setInterval(function () {
    //3. 获取目标当前位置
    var leader = obj.offsetLeft;
    //4. 获取步长
    var step = 20;
    //5. 如果目标在当前位置的左边就往回走
    step = target > leader ? step : -step;
    //盒子来回抖动
    // leader += step;
    //7. 判断如果剩余距离大于等于步长继续前进
    if(Math.abs(target - leader) >= Math.abs(step)) {
      //6. 重新设置目标的当前位置,放在这里可以防止盒子来回抖动
      leader += step;
      obj.style.left = leader + "px";
    }else {
      //8. 否则直接走到终点
      obj.style.left = target + "px";
      //到达终点, 清理定时器
      clearInterval(obj.timer);
    }
  }, 50)};
  
  











