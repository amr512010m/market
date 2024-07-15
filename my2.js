var ul1=document.getElementById('ul1')
ul1.style.display='none';
var icon=document.getElementById('xx')
var n=document.getElementById('n')
var loc='n';
var ms;
ms = 'c';
var hh=document.getElementById('')
icon.onclick =function(){
if(ms=='c'){
    
   ul1.style.display = 'block';
    
      
  localStorage.getItem('loc','y')
    ms='o';
console.log('menu opened');
}
   else{
   
  ul1.style.display = 'none';

	    
    ms='c';
      
console.log('menu closed');}
}
var f2=document.getElementById('f2')
f2.style.display='none';
setTimeout(function(){f2.style.display='block'; video.style.display='none'; m.style.backgroundImage=URL('bbbggg.jpg') },4000);
f2.style.display='none'
if(loc=='y'){window.aler('no need')}
console.log(loc)
var sa=document.getElementById('sa')
var eg=document.getElementById('eg')

sa.onclick=function(){n.style.display='block'; f2.style.display='none'; hh.innerText=' hellotegypt ' }
eg.onclick=function(){n.style.display='block'; f2.style.display='none'; hh.innerText='hello to saudi arabia'}
