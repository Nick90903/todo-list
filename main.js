(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=[],n=[];const o=(e,o,r,c,l)=>{let a=e;const i=o,d=r,s=c;let u=l,g="Enter a description.",p=t.length+n.length;const m=[];return 1==r&&(p+=500),{getTitle:()=>a,getColor:()=>i,getFavorite:()=>d,getDate:()=>s,getPriority:()=>u,getID:()=>p,getDescription:()=>g,getTasks:()=>m,updateTitle:e=>a=e,updateDescription:e=>g=e,updatePriority:e=>{u=e,t.sort(((e,t)=>e.getPriority()-t.getPriority()))}}},r=(e,o)=>{document.querySelectorAll(".container").forEach((e=>{e.remove()}));const r=function(e,o){if(o){for(var r=0;r<n.length;r++)if(console.log(`${n[r].getID()}Value`),n[r].getID()==e)return r;return-1}for(r=0;r<t.length;r++)if(console.log(`${t[r].getID()}Value`),t[r].getID()==e)return r;return-1}(e,o);console.log(`${r}Index`),o&&function(e){const t=document.querySelector(".content"),n=document.createElement("div");n.classList.add("container");const o=document.createElement("h3");o.classList.add("title"),o.textContent=e[r].getTitle();const c=document.createElement("p");c.classList.add("description"),c.textContent=e[r].getDescription();const l=document.createElement("div");l.classList.add("taskContainer"),e[r].getTasks().forEach((e=>{}));const a=document.createElement("button");a.classList.add("addTask"),a.addEventListener("click",(()=>{document.querySelector("#taskFormHolder").style.display="block"})),a.textContent="Add Task",l.appendChild(a),n.appendChild(o),n.appendChild(c),n.appendChild(l),t.appendChild(n)}(n)};t.push(o("Name",0,!1,"2022-04-12",2)),n.push(o("Name Favorite",0,!0,"2022-04-12",2)),(()=>{function e(e){for(let t=0;t<e.length;t++){const n=document.querySelector(".projects_Expansion_Panel"),o=document.createElement("button");o.classList.add("project"),o.value=e[t].getID(),o.addEventListener("click",(function(){r(this.value,e[t].getFavorite())})),console.log(`${o.value}Favorite`);const c=document.createElement("p");c.textContent=e[t].getTitle(),1==e[t].getFavorite()&&(c.style.color="blue"),o.appendChild(c),n.appendChild(o)}}document.querySelectorAll(".project").forEach((e=>{e.remove()})),e(n),e(t)})(),(0,e.addListeners)()})();