import{u as l}from"./asyncData.0e0ee21d.js";import{h as d,ag as v,l as f,ah as p,B as m,ai as g,aj as h,ae as y,v as i,e as _}from"./entry.3883dc74.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(r){const{query:a}=v(r),n=f(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&p("dd-navigation").value){const{navigation:t}=m();return{navigation:t}}const{data:o}=await l(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(r){const a=y(),{navigation:n}=r,o=e=>i(_,{to:e._path},()=>e.title),t=(e,u)=>i("ul",u?{"data-level":u}:null,e.map(s=>s.children?i("li",null,[o(s),t(s.children,u+1)]):i("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),j=C;export{j as default};
