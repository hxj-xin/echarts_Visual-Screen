// 订单 切换 自动切换
(function (){
    var tab_ = document.getElementsByClassName('filter')[0].children;
    var orderdata = document.getElementsByClassName('orderdata');
    var index=0;
    var timer=null;
    for(var i=0;i<tab_.length;i++){
        tab_[i].setAttribute('index',i);
        tab_[i].onclick = function(){
            var index = this.getAttribute('index');
            for(var k=0;k<tab_.length;k++){
                tab_[k].classList.remove('active');
                tab_[index].classList.add('active');
            }
            for(var j=0;j<orderdata.length;j++){
                orderdata[j].classList.add('datahidden');
                orderdata[index].classList.remove('datahidden');
            }
        }
    }
    
    function autoCheck(){
        timer=setInterval(function(){
            index ++;
            if(index >= tab_.length){
                index=0;
            }
            tab_[index].onclick();   
        },1000)
    };
    autoCheck();

    var order=document.getElementsByClassName('order')[0];
    order.onmouseenter=function(){
        clearInterval(timer);
    };
    order.onmouseleave=function(){
        autoCheck(),1500;
    } 
})();


