'use strict';

var Fibonacci ={
    name: 'Fibonacci',
    of: function(x){
        var num = [0, 1, 1];
        if (x<=2){
            return 1;
        }
        for(var i=3; i<=x; i++){
            num.push(num[i-1]+num[i-2]);
        }
        return num[x];
    }
}

console.log("打印1~200的Fibonacci数列");
for (i=1; i<=200; i++){
    console.log(Fibonacci.of(i));
}