
(function($,Edge,compId){var _=null,y=true,n=false,x1='4.0.0',c='color',x14='rgba(0,0,0,0)',g='image',x4='both',a='Base State',x18='143px',x8='hidden',x10='bird',m='rect',dt='Default Timeline',x2='3.0.0',i='none',e9='${_bird}',x3='4.0.0.1747',lf='left',e16='${symbolSelector}',e22='${_cloud-1}',bg='background-color',x21='cloud',x13='auto',x19='94px',x17='cloud-1',s='style',x12='238px',w='width',tp='top',x11='0px',ql='linear',ov='overflow',e7='${_Stage}',h='height',x5='stage',x6='rgba(67,154,203,1.00)';var im='images/';var g20='cloud-1.png',g15='bird.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={};var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,stf:i,cg:x4,iS:a,gpu:n,rI:n,cn:{dom:[{id:'bird',t:m,r:['0','0','auto','auto','auto','auto']},{id:'tweet',t:'audio',tag:'audio',r:['0','0','320px','45px','auto','auto'],sr:['audio/tweet.mp3']},{id:'cloud',t:m,r:['-177','346','auto','auto','auto','auto']}],sI:[{id:'bird',sN:'bird',a:{}},{id:'cloud',sN:'cloud',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:5000,a:y,l:{"flying":1000},tt:[{id:"eid6",tr:[function(e,d){this.eSA(e,d);},['play','${_bird}',[]],""],p:5000}]}}},"bird":{v:x1,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x10,t:g,r:[x11,x11,x12,x12,x13,x13],f:[x14,im+g15,x11,x11]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"cloud":{v:x1,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x17,t:g,r:[x11,x11,x18,x19,x13,x13],f:[x14,im+g20,x11,x11]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:5000,a:y,tt:[]}}}};var S1=symbols[x5];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e7).P(bg,x6,c).P(ov,x8).P(h,1020).P(w,760);A1.A(e9).P(lf,0).T(1,773,2,ql).P(tp,0).T(1,219,2);var S2=symbols[x10];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e9).P(lf,0).P(tp,0);A2.A(e16).P(h,238).P(w,238);var S3=symbols[x21];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e16).P(h,94).P(w,143);A3.A(e22).P(tp,0).P(lf,0).T(0,1022,5,ql);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-5327561");