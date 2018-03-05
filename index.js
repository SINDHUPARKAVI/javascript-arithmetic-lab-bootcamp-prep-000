var a
var b
var n
function add(a,b)
{
 return a+b;
}
add(3,4)
function subtract(a,b)
{
  return a-b;
}
subtract(7,6)
function multiply(a,b)
{
  return a*b;
  
}
multiply(2,3)
function divide(a,b)
{
  return a/b;
}
divide(3,2)
function inc(a)
{
  return a+1;
}
inc(4)
function dec(a)
{
  return a-1;
  
}
dec(5)
function makeInt(a)
{
   return (parseInt(a).toString());
}
makeInt("2.222")
function makeInt(b)
{
  return (parseInt(b,8));
}
makeInt("0x12")
function makeInt(a)
{
  if (isNaN (parseInt(a)))
  return true;
}
makeInt("sldkjflksjf")