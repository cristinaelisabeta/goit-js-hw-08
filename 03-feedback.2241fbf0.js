const e=document.querySelector(".feedback-form");let t={};e.addEventListener("submit",(function(a){a.preventDefault();const{email:n,message:o}=a.target.elements;n.value&&o.value||alert("Заповніть форму");console.log(t),localStorage.clear(),e.reset(),t={}})),e.addEventListener("input",throttle((function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),function(){const a=localStorage.getItem("feedback-form-state"),n=JSON.parse(a);Object.entries(n).forEach((([a,n])=>{t[a]=n,e.elements[a].value=n}))}();
//# sourceMappingURL=03-feedback.2241fbf0.js.map
