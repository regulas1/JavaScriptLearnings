function appendAndDelete(s, t, k) {
  // Write your code here

  if (k == 0 && s == t) {
    return true;
  } else {
    var arr_s = [...s];
    var arr_t = [...t];
    var arr_New = [];

    for (i = 0; i <= arr_s.length; i++) {
      if (arr_s[i] == arr_t[i]) {
        arr_New.push(arr_s[i]);
      } else {
        break;
      }
    }
    var sDelete = arr_s.length - arr_New.length;
    var sAppend = arr_t.length - arr_New.length;
  }
  if (sDelete + sAppend == k) {
    return console.log('Yes');
  } else {
    return console.log('No');
  }
}

console.log(appendAndDelete('aaaaaaa', 'aaaa', 4));
