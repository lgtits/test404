import{f as o,o as s,c as r,a as c}from"./index.eb251561.js";const l={class:"flex flex-center"},p={__name:"FaqPage",setup(i){return o(async()=>{async function a(){let n=(await fetch("https://one.one.one.one/cdn-cgi/trace").then(t=>t.text())).trim().split(`
`).map(t=>t.split("="));return Object.fromEntries(n)}await a().then(console.log)}),(a,e)=>(s(),r("div",l,e[0]||(e[0]=[c("h1",null,"Faq",-1)])))}};export{p as default};