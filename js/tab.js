 // tabÀ¸Ä¿
var zh_tab_title = document.getElementById("zh_tab_title");
  var title_ulis = zh_tab_title.children;
  var content = document.getElementById("content");
  var content_lis = content.children;
  var per
  for (var i = 0; i < title_ulis.length; i++) {
    title_ulis[i].index = i;
    title_ulis[i].onmouseover = function () {
      for (var i = 0; i < title_ulis.length; i++) {
        title_ulis[i].className = "";
        content_lis[i].className = "";
      }
      this.className = "current";
      
      
      content_lis[this.index].className = "current";
    };
  }
  







