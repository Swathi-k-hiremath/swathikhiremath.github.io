import{j as t,m as e}from"./index-fd1552ec.js";import{r as o}from"./globalVariants-43ca08f3.js";const r=[{id:1,title:"Project 1",description:"Some description about the project",link:"https://github.com"},{id:2,title:"Project 2",description:"Some description about the project",link:"https://github.com"},{id:3,title:"Project 3",description:"Some description about the project",link:"https://github.com"}],s={hidden:{opacity:0,y:-10},show:{opacity:1,y:0,transition:{ease:"easeOut",duration:.2}},exit:{opacity:0,transition:{ease:"easeIn",duration:.2}}},c=()=>t.jsxs(e.div,{className:"projects--container",initial:"hidden",animate:"show",exit:"exit",variants:o,children:[t.jsx("h2",{children:"Projects"}),t.jsx("section",{children:r.map(i=>t.jsxs(e.div,{className:"projects--item",variants:s,children:[t.jsx("h3",{children:i.title}),t.jsx("p",{children:i.description}),t.jsx("a",{target:"_blank",rel:"noreferrer",href:i.link,children:"View on Github"})]},`project-item-${i.id}`))})]});export{c as default};
