
//1:vars collection

var sb=document.getElementById('sb');
var elec=document.getElementById('elec');
var furn=document.getElementById('furn');
var groc=document.getElementById('groc');
var dis=document.getElementById('dis');
var fo=document.getElementById('fo');
////////////////////////////////////////////////////////////

//2:functions

sb.onclick=function(){
var ll =prompt('what are you looking for')	
if(ll=='food'||ll=='meals'){dis.style.display='none'; elec.style.display='none'; furn.style.display='none'; groc.style.display='none'; fo.style.display='block'}	
	
	
else if(ll=='mobiles'||ll=='phones'||ll=='iphones'||ll=='computers'||ll=='monitors'||ll=='electronics'||ll=='mobile'){dis.style.display='none'; elec.style.display='block';fo.style.display='none'; furn.style.display='none'; groc.style.display='none';}
	
	
else if(ll=='furniture'||ll=='sofa'||ll=='table'||ll=='chair'||ll=='carpet'||ll=='carpets'||ll=='FURNITURE'){dis.style.display='none'; elec.style.display='none';fo.style.display='none'; furn.style.display='block'; groc.style.display='none';}
else if(ll=='grocceries'||ll=='milk'||ll=='eggs'||ll=='oil'||ll=='food oil'||ll=='chicken strips'||ll=='chips'||ll=='chocolate'){dis.style.display='none'; elec.style.display='none';fo.style.display='none'; furn.style.display='none'; groc.style.display='block';}
	
	
	else {alert('search failed ,try again  &check spelling');dis.style.display='block'; elec.style.display='block';fo.style.display='block'; furn.style.display='block'; groc.style.display='block';}
	
	
}
