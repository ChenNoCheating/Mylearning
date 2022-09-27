window.addEventListener('load',function() {
    //1.获取元素
    var focus = this.document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var w = focus.offsetWidth;
    var index = 0;
    //轮播
    var timer = this.setInterval(function() {
        index++;
        var translatex = - index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX('+translatex+'px)';
        // console.log(index);
    },2000)
    //
    ul.addEventListener('transitionend',function() {
        if(index >= ul.children.length - 2) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX('+translatex+'px)';
        } else if(index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX('+translatex+'px)';
        }
        //圆点变化
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    })
    //手指滑动
    var startx = 0;
    var movex = 0;
    ul.addEventListener('touchstart',function(e) {
        startx = e.targetTouches[0].pageX;
        clearInterval(timer);
    })
    //移动手指
    ul.addEventListener('touchmove',function(e) {
        movex = e.targetTouches[0].pageX - startx;
        var translatex = - index * w + movex;
        ul.style.transform = 'translateX('+translatex+'px)';
        e.preventDefault();
    })
    //移开手指
    ul.addEventListener('touchend',function(e) {
        if(Math.abs(movex) > 50) {
            if(movex > 0) {
                index--;
            } else if(movex < 0) {
                index++;
            }
        }
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX('+translatex+'px)';
        //开启定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translatex = - index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX('+translatex+'px)';
            // console.log(index);
        },2000)
    })

    //返回顶部模块
    var goBack = this.document.querySelector('.goBack');
    var nav = this.document.querySelector('nav');
    this.window.addEventListener('scroll',function() {
        if(this.window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    })
    //绑定
    goBack.addEventListener('click',function() {
        window.scroll(0,0);
    })
})