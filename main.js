(()=>{"use strict";const e=document.querySelector("[data-new-form]"),t=document.querySelector("[data-new-city-input]"),n=document.getElementById("container");e.addEventListener("submit",(a=>{a.preventDefault();const i=t.value;null!=i&&""!==i&&((async e=>{(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(n);const t=await(async e=>{try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${config.apiKey}`);return await t.json()}catch(e){return e}})(e),a=document.createElement("div"),i=document.createElement("p");i.classList.add("city-name");const d=document.createElement("p"),c=document.createElement("p");i.innerText="City name: "+t.name,d.innerText="Weather type: "+t.weather[0].description,document.body.classList.add("rainy"),c.innerText="Temperature in Fahrenheit: "+t.main.temp,d.classList.add("city-name"),c.classList.add("city-name"),a.appendChild(i),a.appendChild(d),a.appendChild(c),n.appendChild(a)})(i),e.reset())}))})();