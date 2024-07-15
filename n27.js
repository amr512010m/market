var uu8=0;
 var btnc13=document.getElementById('cbtn3');
  var btnc14=document.getElementById('cbtn4');
var btnc22=document.getElementById('cbtn12');
  var btnc23=document.getElementById('cbtn123');
  var eimg=document.getElementById('eimg');
  var gb=document.getElementById('gb');
  var q1=document.getElementById('q1');
 btnc13.onclick=function(){alert('your order has beeen addded to cart');uu8=uu8+1;n27.innerText=uu8;}
 btnc14.onclick=function(){alert('your order has beeen addded to cart');uu8=uu8+1;n27.innerText=uu8;}
 btnc22.onclick=function(){alert('your order has beeen addded to cart');uu8=uu8+1;;n27.innerText=uu8;}
  btnc23.onclick=function(){alert('your order has beeen addded to cart');uu8=uu8+1;n27.innerText=uu8;}
var n27=document.getElementById('n27')
n27.innerText=uu8;
n27.onmouseover=function(){q1.style.display='block'}
n27.onmouseout=function(){setTimeout(function(){q1.style.display='none'},5000);}
 var as3=document.getElementById('as3');
  var a23=document.getElementById('a23');
a23.onclick=function(){gb.style .display='none'; as3.style.display='none'}
 