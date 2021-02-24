var arr = "aaaabbbbbcca";

function foo(arr) {
  var a = [],
    b = [],
    prev;
  arr.split("").sort().join("");
  var final = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }

  for (i = 0; i < a.length; i++) {
    final.push([a[i], b[i]]);
  }

  return final;
}

console.log(foo(arr));
