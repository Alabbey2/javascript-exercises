Question 1
function integer(a,b) {

    if (a > 0 && b > 0 && a > b) {
      document.write("The larger number is " + a );
    } else if (a > 0 && b > 0 && a < b) {
      document.write("The larger number is " + b);
    } else if (a === b && a > 0 && b > 0) {
      document.write("Both numbers are equal!")
    } else {
        document.write("Please add an integer!");
  
    }
  }
  
  
// Question 2: get the product of the 3 numbers and compare with 0. if greater than zero return pos+, and if less than zero, return neg

    var x=3;
    var y=-7;
    var z=2;
    if (x>0 && y>0 && z>0)
    {
           alert("The sign is +");
    }
    else if (x<0 && y<0 && z<0)
            {
              console.log("The sign is +");
            }
            else if (x>0 && y<0 && z<0)
            {
              console.log("The sign is +");
            }
            else if (x<0 && y>0 && z<0)
            {
              console.log("The sign is +");
            }
            else
            {

//Question 4

var a=-5;
var b=-2;
var c=-6;
var d= 0;
var f=-1;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}

//Question 5

for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

        
        