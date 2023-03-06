# LeetCode刷题关键问题自我总结
---
## Author:陈南锜
---
### 17题 电话号码的字母组合
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
---
### 22题 括号生成
```js
    //学会利用递归进行遍历，这是很重要的思想和算法
    const dfs = (lLeft,rLeft,str) => {
        if(str.length === 2 * n) {
            res.push(str)
        }
        if(lLeft > 0) {
            dfs(lLeft - 1,rLeft,str + '(')
        }
        if(lLeft < rLeft) {
            dfs(lLeft,rLeft - 1,str + ')')
        }
    }
    dfs(n,n,'')
```
---
### 23题 合并链表组
#### 学会运用foreach 熟练运用链表结构
---
### 48题 旋转图像
#### 二维数组深拷贝(ES6方法)
```js
    let re=[];
    for(let i=0;i<arr.length;i++){
        let [...arr1]=arr;
        re.push(arr1);
    }
```
---