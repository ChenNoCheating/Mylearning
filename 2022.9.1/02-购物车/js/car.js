$(function() {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
    // 事件可以使用change
    getSum();
    changeBackground();
    $('.checkall').change(function() {
        $('.j-checkbox,.checkall').prop('checked',$(this).prop('checked'));
        getSum();
        changeBackground();
    })
    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    $('.j-checkbox').change(function() {
        if($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall').prop('checked',true);
        } else {
            $('.checkall').prop('checked',false);
        }
        getSum();
        changeBackground();
    })
        
        
    // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
    $('.increment').click(function() {
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);
        var p = $(this).parent().parent().siblings('.p-price').html();
        p = p.substr(1);
        $(this).parent().parent().siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        getSum();
    })
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val();
        if(n > 1) {
            n--;
        }
        $(this).siblings('.itxt').val(n);
        //  4. 用户修改文本框的值 计算 小计模块 
        var p = $(this).parent().parent().siblings('.p-price').html();
        p = p.substr(1);
        $(this).parent().parent().siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        getSum();
    })

    $('.itxt').change(function() {
        var n = $(this).val();
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        getSum();
    })
    // 5. 计算总计和总额模块
    function getSum() {
        var nsum = 0;
        var psum = 0;
        $('.p-num .itxt').each(function(i,domEle) {
            if($(domEle).parents('.p-num').siblings('.p-checkbox').children('.j-checkbox').prop('checked')) {
                nsum += $(domEle).val() - 0;
                psum += $(domEle).parents('.p-num').siblings('.p-sum').html().substr(1) - 0;
            }
        })
        $('.amount-sum em').html(nsum);
        $('.price-sum em').html('￥' + psum.toFixed(2));
    }

    function changeBackground() {
        $('.cart-item').each(function(i,domEle) {
            if($(domEle).find('.j-checkbox').prop('checked')) {
                $(domEle).addClass('check-cart-item');
            } else {
                $(domEle).removeClass('check-cart-item');
            }
        })
    }
    // 6. 删除商品模块
    // (1) 商品后面的删除按钮
    $('.p-action a').click(function() {
        $(this).parents('.cart-item').remove();
        getSum();
    })
    // (2) 删除选中的商品
    $('.operation .remove-batch').click(function() {
        $('.cart-item').each(function(i,domEle) {
            if($(domEle).find('.j-checkbox').prop('checked')) {
                $(this).remove();
            }
        })
        getSum();
    })
    // (3) 清空购物车 删除全部商品
    $('.operation .clear-all').click(function() {
        $('.cart-item').remove();
        getSum();
    })
})