
console.log('amr')
var lefta = document.getElementById('left');
var righta = document.getElementById('right');
var slider = document.getElementById('deal');
var images = ['bgg.jpg','imagey.jpg','oip.jpeg','imagez.jpg','letter-a.png'];
var mode = document.getElementById('m');
var darkm = document.getElementById('d');
var list = document.getElementById('list');
var copyx = document.getElementById('copy');
var a =document.getElementById('a1')
var a2 =document.getElementById('a2')
var i;
i = 0;

  var form=document.getElementById('form');
form.onclick=function(){alertx12.style.display='block'}
var alertx12=document.getElementById('alertx')
var video2=document.getElementById('video2');

list.style.display ='none';

slider.style.backgroundImage = "url("+images[i]+")";

lefta.onclick  = function() {
  video2.style.display='none';
	video3.style.display='none';
   slider.style.backgroundImage = "url("+images[i-1]+")" ;;;
    console.log('left');
    i = i-1;
    if(i<0){ slider.style.backgroundImage = "url("+images[i+1]+")";
    console.log('left'); i=i+1;}
}
righta.onclick  = function() {
	
	video2.style.display='none';
	video3.style.display='none';
    slider.style.backgroundImage = "url("+images[i+1]+")";
i = i +1;
    console.log('right');
     if(i>4){ slider.style.backgroundImage = "url("+images[i-1]+")";
    console.log('left'); i=i-1;}	video2.style.display='none';
}

window.onscroll =function(){list.style.display = 'none';}

window.onscroll = function(){lefta.style.filter='brightness(490%)'; console.log('the page scrolled');  icon.src = 'list%20(1).png';
    list.style.display = 'none';
        list2.style.display = 'none';
  list3.style.display = 'none';
          icon.style.width='53px'
    ms='c';
							 us='c';
  
console.log('menu closed');}

var icon = document.getElementById('d');
var list = document.getElementById('list');
var ms;
ms = 'c';

icon.onclick =function(){
if(ms=='c'){
    icon.src = 'close.png';
    list.style.display = 'block';
    
      list.style.marginLeft= '698px;';
   icon.style.width='19px'
    ms='o';
console.log('menu opened');
}
   else{
    icon.src = 'list%20(1).png';
    list.style.display = 'none';
        list2.style.display = 'none';
	    list3.style.display = 'none';
          icon.style.width='53px'
    ms='c';
      
console.log('menu closed');}
}
if(i>4){slider.style.backgroundImage ="url("+images[1]+")";}



window.ondragend=function() {console.log(' an item dragged')}
var search=document.getElementById('sss');
var mobi=document.getElementById('mobiles');
var moni=document.getElementById('monitors');
var lap=document.getElementById('laptops');
var iphone=document.getElementById('iphones');
var acs=document.getElementById('mobilea')
search.onclick=function(){var research =prompt('what are you looking for'); 
      if(research=='monitors'){ console.log( 'you searched about monitors');mobi.style.display='none'; lap.style.display='none';iphone.style.display='none';
                             acs.style.display='none'; moni.style.width='20%'}
                         else if(research=='mobiles'){console.log( 'you searched about mobiles');mobi.style.display='block'; lap.style.display='none';iphone.style.display='none';
                             acs.style.display='none'; moni.style.display='none'}
                                else if(research=='iphones'){console.log( 'you searched about iphones');mobi.style.display='none'; lap.style.display='none';iphone.style.display='block';
                             acs.style.display='none'; moni.style.display='none'}
                                                  else if(research=='laptops'){console.log( 'you  searched about ');mobi.style.display='none'; lap.style.display='block';iphone.style.display='none';lap.style.width='20%';
                             acs.style.display='none'; moni.style.display='none'}
                            else if(research=='mobile accessories'){console.log( 'you  searched about mobile accessories');mobi.style.display='none'; lap.style.display='none';iphone.style.display='none';lap.style.width='20%';
                             acs.style.display='block'; moni.style.display='none'}
                          else{alert('search failed try again');mobi.style.display='block'; lap.style.display='block';iphone.style.display='block';
                             acs.style.display='block'; moni.style.display='block';lap.style.width='20%';moni.style.width='20%';}}
                        
                     var signo =document.getElementById('signo');

signo.onclick=function(){ var t =prompt('would you like to change your info  prees y to continue or n ');
if(t=='y'){var u =prompt('enter the new email'); var c =prompt('enter the new password'); e=u; p=c;}
else{e='a@g.com';
p='123a';
}
var text=document.getElementById('form');
window.alert('hello to my form!')
window.alert('made by AMR KHALED ')
var n=prompt('enter your name');
var x=prompt('enter email');
var y= prompt('enter password');
    
text.style.color='red';
text.innerHTML='signing in failed,try again'
var z;
                         
z=0;
function f(){for(o=0; o<4; o=o+1){if(z>1){var x=prompt('enter email');
var y= prompt('enter password')
var s;  var z;
										  var form=document.getElementById('form');
form.onclick=function(){alertx12.style.display='block'}
var alertx12=document.getElementById('alertx')

}}}
//if statements
if(x==e&&y==p){window.alert('login has been succsesfuled');  var form=document.getElementById('form');

var alertx12=document.getElementById('alertx')
z=z-5;  text.style.color = 'green'; text.innerHTML='hello ,'+n;  }
 else if(x==e){  var form=document.getElementById('form');
form.onclick=function(){alertx12.style.display='block'}
var alertx12=document.getElementById('alertx')
;window.alert('password is false');  z=z+1; }
else if(y==p){window.alert('email is false');  z=z+1;f();  var form=document.getElementById('form');
form.onclick=function(){alertx12.style.display='block'}
var alertx12=document.getElementById('alertx')
} 
else{window.alert('login failed');  z=z+1; f();  var form=document.getElementById('form');
form.onclick=function(){alertx12.style.display='block'}
var alertx12=document.getElementById('alertx')
}
if(z>0){for(o=0; z<4; o=o+1){var x=prompt('enter email');
var y= prompt('enter password');if(x==e&&y==p){window.alert('login has been succsesfuled');z=z+9; text.style.color = 'green';text.innerHTML='hello ,'+n;}
 else if(x==e){window.alert('password is false');  z=z+1; }
else if(y==p){window.alert('email is false');  z=z+1; f();} 
else{window.alert('login failed');  z=z+1; f();} alert('new attemp') ;if(z==3){window.alert('too many attepms, try again later'); z=z+9;}}}
console.log(z);

}
 var mode12=document.getElementById('mode12');
var main12=document.getElementById('m');
 ms2='l' ;
mode12.onclick=function(){if(ms2=='l'){mode12.innerHTML='<li> light mode</li>'; main12.style.backgroundColor='black'; ms2='d'} else{mode12.innerText=' dark mode'; main12.style.backgroundColor='skyblue'; ms2='l';}} 
var main2=document.getElementById('m2');

var list2=document.getElementById('list2');
var icon2=document.getElementById('mode13');
var us;
us = 'c';
icon2.onclick =function(){
if(us=='c'){

    list2.style.display = 'block';
     
  
    us='o';
console.log('menu opened');
}
   else{
  
    list2.style.display = 'none';
                

    us='c';
      
console.log('menu closed');}
}
var list2=document.getElementById('list2');
var icon2=document.getElementById('mode13');
var us;
us = 'c';
icon2.onclick =function(){
if(us=='c'){

    list2.style.display = 'block';
     
  
    us='o';
console.log('menu opened');
}
   else{
  
    list2.style.display = 'none';
     
    us='c';
      
console.log('menu closed');}
}
main2.onclick=function(){icon.src = 'list%20(1).png';
    list.style.display = 'none';
        list2.style.display = 'none';
						    list3.style.display = 'none';
          icon.style.width='53px'
    ms='c';
      
console.log('menu closed');}

var tcs=document.getElementById('tcolor');
var colors=['red','green','blue','black','brown']
var fv3;
fv3=0;
tcs.style.color='black';
tcs.onclick=function(){tcs.style.color=colors[fv3]; m2.style.color=colors[fv3]; fv3=fv3+1;if(fv3==5){fv3=fv3-3;}}
if(fv3==3){fv3=fv3-1;}
var fs=document.getElementById('fsize');
var size;
size=['6px','10px','13px','16px'];
sn=['very small','small','medium','large']
var fv4;
fv4=0;
fs.onclick=function(){m2.style.fontSize=size[fv4];fs.innerText=sn[fv4] ;fv4=fv4+1;if(fv4==4){fv4=fv4-4;}}
var contlist=document.getElementById('list3');
var contbtn=document.getElementById('contbtn');
contbtn.onclick=function(){var us;
var cs1;
 cs1 = 'c';
contbtn.onclick =function(){
if(cs1=='c'){

    list3.style.display = 'block';
     
  
    cs1='o';
console.log('menu3 opened');
}
   else{
  
    list3.style.display = 'none';
        
    cs1='c';
      
console.log('menu3 closed');}
}}
alertx12.onclick=function(){alertx12.style.display='none'}
var cl=document.getElementById('clxx');
cl.onclick=function(){list2.style.display='none'}
list3.onclick=function(){list3.style.display='none'}
var b2=document.getElementById('a2')
var b1=document.getElementById('a1')
var laph=document.getElementById('laph')
var monh1=document.getElementById('monh')
var mobh1=document.getElementById('mobh')
var iphh1=document.getElementById('iphh1')
var moch1=document.getElementById('moch1')
var foth1=document.getElementById('foth1')
var lanli=document.getElementById('lanli')
var imggg=document.getElementById('imggg');
var ls;
ls='e';
lanli.onclick=function(){
if(ls=='e'){
lanli.innerText='arabic'; a1.innerText='الصفحة الرئيسية'; a2.innerText='الأقسام'; laph.innerText='لابتوبات'; monh.innerText='شاشات'; mobh1.innerText='موبايلات'; moch1.innerText='اكسسوارات الموبايلات'; iphh1.innerText='ايفونات'; foth1.innerText='  لخدمات المواقغ/A3/صنع بواسطة م/عمرو خالد ';  console.log('page  translated into into arabic') ; ls='a' ;}

	
	else if(ls=='a'){lanli.innerText='francais'; a1.innerText='page daccueil'; a2.innerText='categories'; laph.innerText='ordinateurs portables'; monh.innerText='moniteurs'; mobh1.innerText='potables'; moch1.innerText='accesories mobile '; iphh1.innerText='iphone'; foth1.innerText='ce site Web est réalisé par langlais/amr khaled ahmed /A3/ pour les services de sites Web' ; ; console.log('page translated into  englisgh'); ls='f'; imggg.style.width='100px'}


else if(ls=='f'){lanli.innerText='ENglish'; a1.innerText='home page'; a2.innerText='catogrioes'; laph.innerText='laptops'; monh.innerText='monitors'; mobh1.innerText='mobiles'; moch1.innerText='mobile accesories'; iphh1.innerText='iphones'; foth1.innerText=' this website belongs to : eng/ amr khaled AHMED  /A3®/FOR WEBSITES SETRVICES'; ; console.log('page translated into  englisgh'); ls='e'; }


}
var bbrr=document.getElementById('bbrr')

var bs;
bs='off';
bbrr.onclick=function(){if(bs=='off'){m.style.filter='brightness(112%)';  bs='on'; bbrr.innerText='brightmode :on'; }
else if(bs=='on'){m.style.filter='brightness(50%)'; bs='low' ; bbrr.innerText=' brightmode:low';}
else if(bs=='low'){m.style.filter='brightness(130%)'; bs='high' ; bbrr.innerText=' brightmode:high';}
else{m.style.filter='brightness(100%)'; bs='off' ; bbrr.innerText=' brightmode:off'}}
console.log(i)
var m33=document.getElementById('m33');
var a3=document.getElementById('a3');
a3.onclick=function(){alert('hurray')}