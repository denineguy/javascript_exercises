/* Write a JavaScript program to find the most frequent item of an
array.Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; Sample Output : a ( 5
times ). */

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var obj = {};
var item1;
var item2 = 0;

for (var i = 0; i < arr1.length; i++) {
  if(obj.hasOwnProperty(arr1[i])) {
    obj[(arr1[i])]++;
  } else {
    obj[(arr1[i])] = 1;
  }
  obj;
};

for (var key in obj) {
  item1 = obj[key];
  if(item1 > item2) {
    item2 = item1;
    key+'( '+ item2 +' times)';
  } else {
    item2;
  }
}

