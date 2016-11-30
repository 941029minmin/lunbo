$(function () {
   $(document).mousedown(function (e) {
       e.preventDefault()
   });
    $(document).mouseover(function (e) {
        e.preventDefault()
    });
    var clientH=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function (e) {
        if (!flag){
            return
        }
        num++;
        if (num>=$("#fullpage>section").length){
            num=$("#fullpage>section").length-1;
            return
        }
        flag=false;
        $("#fullpage").css({
            marginTop:-num*clientH
        })
    });
    touch.on("body","swipedown","#fullpage",function () {
        if (!flag){
            return
        }
        num--;
        if (num==-1){
            num=0;
            return
        }
        flag=false
        $("#fullpage").css({
            marginTop:-num*clientH
        })
    });
        $("#fullpage")[0].addEventListener("webkitTransitionEnd",function () {
            flag=true;
        });
    $("#fullpage")[0].addEventListener("mozTransitionEnd",function () {
        flag=true;
    })
});