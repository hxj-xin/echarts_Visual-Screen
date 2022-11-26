// 完成rem适配
function setRem(){
    var clientWidth= document.clientWidth||document.body.clientWidth;

    clientWidth = clientWidth>1920? 1920:clientWidth;
    clientWidth = clientWidth<1024? 1024:clientWidth;

    // 我的电脑尺寸1366*768  为了让每一个rem等于80px  /18
    var rem = clientWidth/17.075;

    var html=document.getElementsByTagName('html')[0];
    html.style.fontSize=rem + 'px';
}
window.onload = setRem;
window.onresize = setRem;
