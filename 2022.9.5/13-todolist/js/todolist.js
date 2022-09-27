$(function() {
    loadData();
    $('#title').on('keydown',function(event) {
        if(event.keyCode === 13) {
            //读取
            var local = getData();
            //更新local数组
            if($(this).val() != '') {
                local.push({title:$(this).val(),done:false});
            }
            $(this).val('');
            //完成本地存储
            saveData(local);
            loadData();
        }
    });
    //删除按钮，删除本地存储中数据
    $('ol, ul').on('click','a',function() {
        //get data
        var data = getData();
        //rewrite data
        var index = $(this).attr('id');
        console.log(index);
        data.splice(index,1);
        saveData(data);
        loadData();
    })
    //复选框选择
    $('ol, ul').on('click','input',function() {
        var data = getData();
        var index = $(this).siblings('a').attr('id');
        data[index].done = $(this).prop('checked');
        saveData(data);
        loadData();
    })
    //获取本地存储
    function getData() {
        var data = localStorage.getItem('todolist');
        if(data != null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    //储存本地数据
    function saveData(data) {
        localStorage.setItem('todolist',JSON.stringify(data));
    }
    //渲染加载
    function loadData() {
        //Clear all 'li' firstly
        $('ol, ul').empty();
        var data = getData();
        var todoCount = 0;
        var doneCount = 0;
        $.each(data,function(i,n) {
            if(n.done == false) {
                $('ol').prepend("<li><input type='checkbox'> <p>"+n.title+"</p> <a href='javascript:;' id="+i+"></a></li>");
                todoCount++;
            } else {
                $('ul').prepend("<li><input type='checkbox' checked> <p>"+n.title+"</p> <a href='javascript:;' id="+i+"></a></li>");
                doneCount++;
            }
        });
        $('#todocount').text(todoCount);
        $('#donecount').text(doneCount);
    }
})