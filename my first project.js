var x=document.getElementById('hello')
var video=document.getElementById('video')
x.style.display='none';
var m=document.getElementById('m')
	setTimeout(function(){x.style.display='block';video.style.display='none' },5000);
var y=document.getElementById('hello2')
y.style.display='none'
	setTimeout(function(){y.style.display='block';video.style.display='none'  },5000);
var mm=document.getElementById('mm')
var mmm=document.getElementById('mmm')
var btn=document.getElementById('btn')
var ch=document.getElementById('ch')
mmm.style.display='none';
cc=false;
ch.onclick=function(){if(cc==false){cc=true}else{cc=false}}
var h=document.getElementById('h')
var cc
var user;
var user2 =prompt('enter your name');

var xx='9';
var xxx='9';
var xoo='9';
var us=document.getElementById('us')
var pas=document.getElementById('pas')
var em=document.getElementById('em')
us.onclick=function(){onkeypress=function(){xx='r'}}
pas.onclick=function(){onkeypress=function(){xoo='r'}}
em.onclick=function(){onkeypress=function(){xxx='r'}}
btn.onclick=function(){if(xx=='r'&&xxx=='r'&&xoo=='r'&&cc==true){mmm.style.display='block';mm.style.display='none';} console.log(cc+xx+xxx+xoo)}
console.log(xx+xxx+xoo)
h.innerText='hello '+user2+'           '+'you are almost done';


var mox=document.getElementById('mox');

mox.style.display='none'
var moxb=document.getElementById('moxb');
moxb.onclick=function(){mox.style.display='block';mmm.style.display='none'}
var form=document.getElementById('form');
form.innerText='hello '+user2;
form.style.color='green'
localstorage.getItem(user2)
if(!user2){}
else{}

