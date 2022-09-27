window.addEventListener('load',function() {
    //获取元素
    var arrow_l = this.document.querySelector('.arrow-l');
    var arrow_r = this.document.querySelector('.arrow-r');
    var focus = this.document.querySelector('.focus');
    //显示左右箭头
    focus.addEventListener('mouseenter',function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = none;
    })
    focus.addEventListener('mouseleave',function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            arrow_r.click();
        },2000)
    })
    //小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var focusWidth = focus.offsetWidth;
    var index;

    for(var i = 0;i < ul.children.length;i++) {
        var li = this.document.createElement('li');
        ol.appendChild(li);
        //绑定事件
        li.setAttribute('index',i);
        li.addEventListener('click',function() {
            for(var i = 0;i < ol.children.length;i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            index = this.getAttribute('index');
            num = index;
            animate(ul,-index * focusWidth);
        })
    }
    //第一个圆点亮
    ol.children[0].className = 'current';
    //克隆第一张图片li到ul最后
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //左按钮
    var num = 0;
    arrow_l.addEventListener('click',function() {
        if(num == 0) {
            num = ul.children.length - 1;
            ul.style.left = num * focusWidth + 'px';
        }
        num--;
        animate(ul,-num * focusWidth);
        for(var i = 0;i < ol.children.length;i++) {
            ol.children[i].className = '';
        }
        ol.children[num].className = 'current';
        if(num == -1 ) {
            ol.children[ul.children.length - 1].className = 'current';
        } else {
            ol.children[num].className = 'current';
        }
    })
    //右按钮
    arrow_r.addEventListener('click',function() {
        if(num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul,-num * focusWidth);
        for(var i = 0;i < ol.children.length;i++) {
            ol.children[i].className = '';
        }
        if(num == ul.children.length - 1 ) {
            ol.children[0].className = 'current';
        } else {
            ol.children[num].className = 'current';
        }
    })
    //定时器
    var timer = this.setInterval(function() {
        arrow_r.click();
    },2000)
})