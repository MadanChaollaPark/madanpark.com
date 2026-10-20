const names=['Raw','Index','Chronicle','Play','Signal','Arcade','Form','Flux','Dream','Lumen'];
const sections=[...document.querySelectorAll('.wear-section')];
const controllers=[];
const hasMask=typeof CSS!=='undefined'&&(CSS.supports('mask-image','linear-gradient(black, transparent)')||CSS.supports('-webkit-mask-image','linear-gradient(black, transparent)'));
for(const section of sections){
 const stage=section.querySelector('.wear-stage'),under=stage.querySelector('.under');
 const surface=under.cloneNode(true);surface.className='face surface skin-0';surface.setAttribute('aria-hidden','true');stage.append(surface);
 const mask=document.createElement('canvas'),ctx=mask.getContext('2d',{willReadFrequently:true});
 const nameLabel=section.querySelector('.layer-name'),percentLabel=section.querySelector('.wear-percent'),reveal=section.querySelector('.reveal'),announcement=section.querySelector('.announcement');
 let current=0,finished=false,last=null,pending=null,frame=0,dirty=0,scale=1,lastW=0,lastH=0,coverage=0;
 function label(){const next=Math.min(current+1,9);stage.dataset.current=String(current);stage.dataset.next=String(next);stage.dataset.worn=String(coverage);nameLabel.textContent=current===9?'10 Lumen · final layer':`${String(current+1).padStart(2,'0')} ${names[current]} → ${String(next+1).padStart(2,'0')} ${names[next]}`;percentLabel.textContent=`${coverage}% worn`;reveal.disabled=current===9;reveal.textContent=current===9?'All layers revealed':finished?'Reveal next layer ↓':'Reveal this layer ↓';}
 function paintMask(){if(!hasMask)return;const url=`url("${mask.toDataURL('image/png')}")`;surface.style.maskImage=url;surface.style.webkitMaskImage=url;}
 function resize(){
  if(!ctx)return;
  const old=document.createElement('canvas');old.width=mask.width;old.height=mask.height;if(mask.width)old.getContext('2d').drawImage(mask,0,0);
  stage.style.height='';under.style.minHeight='';surface.style.height='auto';surface.style.bottom='auto';
  const height=Math.ceil(Math.max(under.scrollHeight,surface.scrollHeight));stage.style.height=height+'px';under.style.minHeight=height+'px';surface.style.height=height+'px';
  const width=stage.clientWidth;scale=Math.min(.65,960/width);mask.width=Math.max(1,Math.round(width*scale));mask.height=Math.max(1,Math.round(height*scale));
  if(lastW&&lastH)ctx.drawImage(old,0,0,mask.width,mask.height);else{ctx.fillStyle='#fff';ctx.fillRect(0,0,mask.width,mask.height)}
  lastW=width;lastH=height;last=null;paintMask();
 }
 function clearMask(){ctx.globalCompositeOperation='source-over';ctx.fillStyle='#fff';ctx.fillRect(0,0,mask.width,mask.height);coverage=0;paintMask();}
 function setLayers(){under.className=`face under skin-${Math.min(current+1,9)}`;surface.className=`face surface skin-${current}`;surface.hidden=current===9;surface.style.opacity='1';finished=current===9;resize();clearMask();if(current===9)coverage=100;label();}
 function finish(){if(finished)return;finished=true;coverage=100;surface.hidden=true;label();announcement.textContent=`${names[Math.min(current+1,9)]} revealed in ${section.getAttribute('aria-label')}.`;}
 function advance(){if(!finished||current>=9)return;current++;setLayers();}
 function reset(){current=0;finished=false;last=null;pending=null;if(frame)cancelAnimationFrame(frame);frame=0;setLayers();announcement.textContent='Surface restored to Raw.';}
 function estimate(){const data=ctx.getImageData(0,0,mask.width,mask.height).data;let total=0,count=0;for(let i=3;i<data.length;i+=64){total+=255-data[i];count++}coverage=Math.min(99,Math.round(total/(count*255)*100));label();if(coverage>=88)finish();}
 function dab(x,y,r){
  const g=ctx.createRadialGradient(x,y,r*.12,x,y,r);g.addColorStop(0,'rgba(0,0,0,.24)');g.addColorStop(.55,'rgba(0,0,0,.16)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
  // Fine abrasions accumulate at the centre instead of a perfectly smooth cutout.
  ctx.strokeStyle='rgba(0,0,0,.12)';ctx.lineWidth=Math.max(.6,scale);for(let i=-2;i<=2;i++){ctx.beginPath();ctx.moveTo(x-r*.4,y+i*r*.09);ctx.lineTo(x+r*.4,y+i*r*.09+r*.06);ctx.stroke();}
 }
 function render(){frame=0;if(!pending||finished)return;const point=pending;pending=null;const rect=stage.getBoundingClientRect();const x=(point.x-rect.left)*scale,y=(point.y-rect.top)*scale;const radius=(point.touch?65:100)*scale;
  ctx.globalCompositeOperation='destination-out';if(last){const dx=x-last.x,dy=y-last.y,d=Math.hypot(dx,dy);if(d<2*scale)return;const steps=Math.min(90,Math.max(1,Math.ceil(d/(radius*.35))));for(let n=1;n<=steps;n++)dab(last.x+dx*n/steps,last.y+dy*n/steps,radius);}else dab(x,y,radius);
  ctx.globalCompositeOperation='source-over';last={x,y};paintMask();if(++dirty%3===0)estimate();
 }
 function move(event){if(!ctx||!hasMask||finished)return;if(event.pointerType==='touch'&&event.buttons===0)return;pending={x:event.clientX,y:event.clientY,touch:event.pointerType==='touch'};if(!frame)frame=requestAnimationFrame(render);}
 stage.addEventListener('pointerenter',()=>{if(finished)advance();last=null});
 stage.addEventListener('pointermove',move,{passive:true});
 stage.addEventListener('pointerdown',event=>{if(finished)advance();last=null;move(event)},{passive:true});
 stage.addEventListener('pointerleave',()=>{if(pending)render();last=null;if(!finished&&ctx)estimate()});
 stage.addEventListener('pointercancel',()=>{last=null;pending=null});
 reveal.addEventListener('click',()=>{if(finished)advance();if(current<9)finish()});
 section.querySelector('.reset').addEventListener('click',reset);
 if(ctx){setLayers();let width=stage.clientWidth;new ResizeObserver(()=>{if(stage.clientWidth!==width){width=stage.clientWidth;resize()}}).observe(stage);document.fonts.ready.then(()=>resize());}
 else{under.className='face under skin-1';surface.hidden=true;reveal.disabled=true;nameLabel.textContent='02 Index';percentLabel.textContent='Interactive surface unavailable';}
 controllers.push({reset});
}
document.getElementById('reset-all').addEventListener('click',()=>controllers.forEach(c=>c.reset()));
