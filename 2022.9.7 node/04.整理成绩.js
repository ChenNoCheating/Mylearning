//
const fs = require('fs');
//
fs.readFile('./files/scores.txt','utf8',function(err,dataStr) {
  if(err) {
    return console.log('ReadFile Failed ' + err.message);
  }
  console.log('ReadFile Succeed ' + dataStr);
  //
  const arr0 = dataStr.split(' ');
  const arr1 = [];
  arr0.forEach(item=> {
    arr1.push(item.replace('=',':'));
  })
  const arr2 = arr1.join('\r\n');
  console.log(arr2);
  //
  fs.writeFile('./files/scores_ok.txt',arr2,function(err) {
    if(err) {
      console.log('WriteFile Failed ' + err.message);
    }
    console.log('WriteFile Succeed ');
  })
})
//
