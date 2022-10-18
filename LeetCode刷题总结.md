# LeetCode刷题关键问题自我总结 #
---
## Author:陈南锜 ##
---
### 17题 电话号码的字母组合 ###
```js
    //回溯函数
    function backtracking(n, k, a) {
        if(path.length === k) {
            res.push(path.join(""));
            return;
        }
        for(const v of map[n[a]]) {
            //n[a]读取到的是字符，但是放在map[]里面会自动转换成数字索引
            path.push(v);
            backtracking(n, k, a + 1);
            path.pop();
        }
    }
```