const n={form:document.querySelector(".feedback-form"),emailForm:document.querySelector('[name="email"]'),messageForm:document.querySelector('[name="message"]')},{form:o,emailForm:t,messageForm:a}=n,s=localStorage.getItem("feedback-form-state"),c=s?JSON.parse(s):{};t.value=c.email||"";a.value=c.message||"";const l={email:t.value.trim(),message:a.value.trim()};o.addEventListener("input",e=>{(e.target===t||e.target===a)&&(l[e.target.name]=e.target.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(l))});o.addEventListener("submit",e=>{e.preventDefault();const r=t.value.trim(),m=a.value.trim();r&&m?(console.log({email:r,message:m}),o.reset(),localStorage.clear()):console.log("Будь ласка, заповніть усі поля форми.")});
//# sourceMappingURL=2-form-7d45fe21.js.map
