var mm=document.getElementById('mm')
var mmm=document.getElementById('mmm')
var vbtn=document.getElementById('vbtn')
var alert31=document.getElementById('alert31')
var alert81=document.getElementById('alert551')
var a1=document.getElementById('a1')


var btny=document.getElementById('btny')
var ch=document.getElementById('ch')
mmm.style.display='none';
cc=false;
ch.onclick=function(){if(cc==false){cc=true}else{cc=false}}
var h=document.getElementById('h')
var cc
var user;
var user2 =prompt('enter your name');
alert31.style.display='none';
var xx='9';
var xxx='9';
var xoo='9';
var us=document.getElementById('us')
var imge=document.getElementById('imge')
var pas=document.getElementById('pas')
var em=document.getElementById('em')
us.onclick=function(){onkeypress=function(){xx='r'}}
pas.onclick=function(){onkeypress=function(){xoo='r'}}
em.onclick=function(){onkeypress=function(){xxx='r'}}
btn.onclick=function(){if(xx=='r'&&xxx=='r'&&xoo=='r'&&cc==true){mmm.style.display='block';mm.style.display='none';} console.log(cc+xx+xxx+xoo)}
console.log(xx+xxx+xoo)
h.innerText='hello '+user2+'           '+'you are almost done';


var mox=document.getElementById('mox');
alert81.style.display='none'
mox.style.display='none'
var moxb=document.getElementById('moxb');
moxb.onclick=function(){mox.style.display='block';mmm.style.display='none'}
var form=document.getElementById('form');
form.innerText='hello '+user2;
form.style.color='green';
vbtn.onmouseover=function(){alert31.style.display='block'}
vbtn.onmouseout=function(){alert31.style.display='none'}
a1.onmouseover=function(){alert81.style.display='block'}
a1.onmouseout=function(){alert81.style.display='none'}
imge.onmouseover=function(){q1.style.display='none'}
imge.onmouseout=function(){q1.style.display='block'}
