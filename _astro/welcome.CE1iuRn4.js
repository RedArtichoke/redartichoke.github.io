import{j as n,F as M,c as S}from"./index.wHlUnA0e.js";import{r as e}from"./index.CqrSl2Gl.js";/* empty css                       */const w=()=>{const[i,l]=e.useState(""),[u,d]=e.useState(""),[m,a]=e.useState(""),[f,s]=e.useState(!1),[j,h]=e.useState(!1),[x,o]=e.useState(!1);e.useEffect(()=>{fetch("/data/greetings.txt").then(t=>t.text()).then(t=>{const r=t.split(`
`),E=r[Math.floor(Math.random()*r.length)],[c,L]=E.split("|");l(c.trim()),d(L.trim()),a(c.trim())}).catch(t=>console.error("Error fetching greetings:",t))},[]);const p=()=>{s(!0),h(!0),o(!0),setTimeout(()=>{a(u),s(!1)},300)},g=()=>{s(!0),setTimeout(()=>{a(i),s(!1),o(!1)},300)};return n.jsxs("div",{className:"welcome-container",children:[n.jsx(M,{icon:S,className:`translation-icon ${x?"icon-fade-out":""}`}),n.jsx("h1",{className:`welcome-text ${f?"fade-out":""}`,onMouseEnter:p,onMouseLeave:g,children:m})]})};export{w as default};
