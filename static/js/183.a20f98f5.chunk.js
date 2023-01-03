"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[183],{7183:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,i,a,o,s,c,l,u,d,x,p,h,m,f=t(168),b=t(6444),g=t(9434),j=function(n){return n.contacts.items},v=function(n){return n.filter},Z=t(3634),w=t(2791),y=t(184),C=b.ZP.ul(r||(r=(0,f.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),P=(0,b.F4)(i||(i=(0,f.Z)(["\n  from {\n    width: 0;\n  }\n   "]))),k=b.ZP.li(a||(a=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 30px;\n  margin: 10px;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid white;\n  transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n  transform: scale(1, 1);\n  /* animation: "," 2s steps(22), blink 1s step-end infinite alternate; */\n\n  &:hover {\n    transform: scale(1, 1.1);\n    transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n    border-color: gold;\n  }\n"])),P),F=b.ZP.button(o||(o=(0,f.Z)(["\n  justify-content: center;\n\n  padding: 2px 15px;\n  border-radius: 5px;\n  background-color: white;\n  &:hover {\n    box-shadow: inset -5px 10px 20px gold;\n  }\n"]))),_=function(){var n=(0,g.v9)(j),e=(0,g.v9)(v),t=(0,g.I0)(),r=e.toLowerCase(),i=n.filter((function(n){return n.name.toLowerCase().includes(r)}));return(0,w.useEffect)((function(){t(Z.yF())}),[t]),(0,y.jsx)(C,{children:i.map((function(n){var e=n.id,r=n.name,i=n.number,a=n.phone;return(0,y.jsxs)(k,{children:[(0,y.jsxs)("p",{children:[r,": ",i||a]}),(0,y.jsx)(F,{onClick:function(){return t((0,Z.GK)(e))},children:"Delete"})]},e)}))})},A=t(9439),L=b.ZP.form(s||(s=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),S=b.ZP.label(c||(c=(0,f.Z)(["\n  margin: 5px;\n"]))),q=b.ZP.input(l||(l=(0,f.Z)(["\n  margin: 5px;\n  border-radius: 5px;\n"]))),z=b.ZP.button(u||(u=(0,f.Z)(["\n  margin: 0 auto;\n  justify-content: center;\n  max-width: 120px;\n  margin-top: 10px;\n  padding: 5px 15px;\n  border-radius: 5px;\n  background-color: white;\n  &:hover {\n    box-shadow: inset -5px 10px 20px gold;\n  }\n"]))),I=function(){var n=(0,w.useState)(""),e=(0,A.Z)(n,2),t=e[0],r=e[1],i=(0,w.useState)(""),a=(0,A.Z)(i,2),o=a[0],s=a[1],c=(0,g.v9)(j),l=(0,g.I0)();return(0,y.jsx)("div",{children:(0,y.jsxs)(L,{onSubmit:function(n){n.preventDefault(),l(void(c.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is alrady in contacts")):l((0,Z.uK)({name:t,number:o})))),r(""),s("")},children:[(0,y.jsx)(S,{htmlFor:"nameContact",children:"Name"}),(0,y.jsx)(q,{onChange:function(n){return r(n.target.value)},value:t,type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,y.jsx)(S,{htmlFor:"number",children:"Phone number"}),(0,y.jsx)(q,{onChange:function(n){return s(n.target.value)},value:o,type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,y.jsx)(z,{type:"submit",children:" Add contact"})]})})},N=t(2073),D=b.ZP.div(d||(d=(0,f.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n"]))),K=b.ZP.label(x||(x=(0,f.Z)(["\n  margin: 5px;\n"]))),T=b.ZP.input(p||(p=(0,f.Z)(["\n  margin: 5px;\n  border-radius: 5px;\n"]))),B=function(){var n=(0,g.I0)(),e=(0,g.v9)(v);return(0,y.jsxs)(D,{children:[(0,y.jsx)(K,{htmlFor:"filter",children:" Find contacts by name: "}),(0,y.jsx)(T,{onChange:function(e){var t=e.target.value;return n((0,N.l4)(t))},value:e,type:"text",name:"filter"})]})},E=b.ZP.p(h||(h=(0,f.Z)(["\n  margin: 10px auto;\n  width: 100px;\n  text-align: center;\n"]))),G=b.ZP.h1(m||(m=(0,f.Z)(["\n  text-align: center;\n"]))),J=function(){var n=(0,g.v9)(j);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{children:(0,y.jsxs)(E,{children:["Phonebook ",(0,y.jsx)("br",{}),(0,y.jsxs)("span",{children:[n.length," "]}),"contacts"]})}),(0,y.jsx)(I,{}),(0,y.jsx)(G,{children:"Contacts"}),(0,y.jsx)(B,{}),(0,y.jsx)(_,{})]})},M=t(4270);function O(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{children:"CONTACTS"}),(0,y.jsx)(M.q,{children:(0,y.jsx)("title",{children:"Phonebook"})}),(0,y.jsx)(J,{})]})}}}]);
//# sourceMappingURL=183.a20f98f5.chunk.js.map