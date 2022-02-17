(this["webpackJsonprandom-number-generator"]=this["webpackJsonprandom-number-generator"]||[]).push([[0],{20:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var r,a,i=n(1),l=n.n(i),o=n(12),c=n.n(o),s=(n(20),n(2)),b=n(15),d=n(0),u=function(t){return"start"===t?"flex-start":"end"===t?"flex-end":t},h=function(t){var e=t.children,n=t.stack,r=t.align,a=t.style,i=t.important;return Object(d.jsx)("div",{className:Object(b.a)(Object(s.a)({display:"flex",flexDirection:n?"column":"row",alignItems:u(n?null===r||void 0===r?void 0:r.horizontal:null===r||void 0===r?void 0:r.vertical),justifyContent:u(n?null===r||void 0===r?void 0:r.vertical:null===r||void 0===r?void 0:r.horizontal),flexGrow:i?1:void 0,boxSizing:"border-box"},a)),children:e})},m=function(t){var e=t.children,n=t.style;return Object(d.jsx)("div",{style:n,children:Object(d.jsx)("div",{style:{display:"flex",minHeight:"100vh"},children:Object(d.jsx)("main",{style:{display:"flex",flexDirection:"column",flex:"0px"},children:e})})})},j=n(5),x=n(6),v=x.a.div(r||(r=Object(j.a)(["\n\talign-self: 'end';\n\tinput::-webkit-outer-spin-button,\n\tinput::-webkit-inner-spin-button {\n\t\t-webkit-appearance: none;\n\t\tmargin: 0;\n\t}\n\t.form__group {\n\t\tposition: relative;\n\t\tpadding: 15px 0 0;\n\t\tmargin-top: 10px;\n\t\twidth: 75%;\n\t}\n\n\t.form__field {\n\t\tfont-family: inherit;\n\t\twidth: 100%;\n\t\tborder: 0;\n\t\tborder-bottom: 2px solid var(--white);\n\t\toutline: 0;\n\t\tfont-size: 1.3rem;\n\t\tcolor: var(--white);\n\t\tpadding: 7px 0;\n\t\tbackground: transparent;\n\t\ttransition: border-color 0.2s;\n\n\t\t&::placeholder {\n\t\t\tcolor: transparent;\n\t\t}\n\n\t\t&:placeholder-shown ~ .form__label {\n\t\t\tfont-size: 1.3rem;\n\t\t\tcursor: text;\n\t\t\ttop: 20px;\n\t\t}\n\t}\n\n\t.form__label {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tdisplay: block;\n\t\ttransition: 0.2s;\n\t\tfont-size: 1rem;\n\t\tcolor: var(--white);\n\t}\n\n\t.form__field:focus {\n\t\t~ .form__label {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tdisplay: block;\n\t\t\ttransition: 0.2s;\n\t\t\tfont-size: 1rem;\n\t\t\tcolor: var(--discover-blue-dark);\n\t\t\tfont-weight: 700;\n\t\t}\n\t\tpadding-bottom: 6px;\n\t\tfont-weight: 700;\n\t\tborder-width: 3px;\n\t\tborder-color: var(--discover-blue-dark);\n\t\tcolor: var(--discover-blue-dark);\n\t\tborder-image-slice: 1;\n\t}\n"]))),p=function(t){var e=t.label,n=t.onChange,r=t.horizontalAlign,a=t.max,i=t.min,l=t.value;return Object(d.jsx)(v,{children:Object(d.jsx)(h,{align:{horizontal:r||"start"},children:Object(d.jsxs)("div",{className:"form__group field",children:[Object(d.jsx)("input",{type:"number",className:"form__field",placeholder:".",name:e,required:!0,onChange:n,value:l,max:a,min:i}),Object(d.jsx)("label",{htmlFor:e,className:"form__label",children:e})]})})})},f=x.a.button(a||(a=Object(j.a)(["\n\tbackground-color: Transparent;\n\tbackground-repeat: no-repeat;\n\tborder: 2px solid var(--white);\n\tcursor: pointer;\n\toverflow: hidden;\n\twidth: 12rem;\n\theight: 3rem;\n\tcolor: var(--white);\n\tborder-radius: 9em;\n\t:hover {\n\t\ttransition: 0.2s;\n\t\tcolor: var(--discover-blue-dark);\n\t\tborder-color: var(--discover-blue-dark);\n\t}\n"]))),g=function(t){var e=t.btnLabel,n=t.type,r=t.horizontalAlign,a=t.style,i=t.onClick;return Object(d.jsx)(h,{style:a,align:{horizontal:r||"start"},children:Object(d.jsxs)(f,{type:n,onClick:i,children:[e," "]})})},O=function(t){var e=t.style,n=t.title,r=t.subtitle,a=t.horizontalAlign,i=t.titleStyle,l=t.subtitleStyle;return Object(d.jsxs)(h,{stack:!0,style:e,align:{horizontal:a||"start"},children:[Object(d.jsx)("h3",{style:i,children:n}),Object(d.jsx)("h5",{style:l,children:r})]})},y=function(t){return"".concat(Math.round(1e3*(t+Number.EPSILON))/1e3/16,"rem")},k=n(11),w=function(){var t=Object(i.useState)({min:0,max:0}),e=Object(k.a)(t,2),n=e[0],r=e[1],a=Object(i.useState)(0),l=Object(k.a)(a,2),o=l[0],c=l[1],b=Object(i.useMemo)((function(){return{title:"Random Number Generator",subtitle:"Number Generated: ",labelMin:"Min",labelMax:"Max",btnLabel:"Generate"}}),[]);return{handleGenerateOnClick:function(t){if(t.preventDefault(),n.min>n.max)r(Object(s.a)(Object(s.a)({},n),{},{min:n.max,max:n.min}));else{console.log("min",n.min,"max",n.max);var e=(a=n.min,i=n.max,Math.floor(Math.random()*(i+1-a)+a));c(e)}var a,i},generatedValue:o,resources:b,handleOnChange:function(t){"Min"===t.target.name?r(Object(s.a)(Object(s.a)({},n),{},{min:Number(t.target.value)})):r(Object(s.a)(Object(s.a)({},n),{},{max:Number(t.target.value)}))},values:n}},z=function(){var t=w(),e=t.handleGenerateOnClick,n=t.generatedValue,r=t.handleOnChange,a=t.resources,i=t.values;return Object(d.jsx)(m,{style:{backgroundColor:"var(--grey-900)"},children:Object(d.jsx)(h,{stack:!0,style:{height:"100%",justifyContent:"space-evenly"},children:Object(d.jsx)(h,{align:{horizontal:"center"},style:{color:"var(--white)"},children:Object(d.jsx)(h,{style:{border:"1px solid var(--grey-100)",borderRadius:"5px",padding:y(50)},children:Object(d.jsxs)(h,{stack:!0,align:{horizontal:"center"},children:[Object(d.jsx)(O,{title:a.title,subtitle:n?a.subtitle+n:a.subtitle,horizontalAlign:"center",subtitleStyle:{color:n?"var(--discover-blue-dark)":"var(--white)"}}),Object(d.jsxs)("form",{autoComplete:"off",children:[Object(d.jsx)(h,{stack:!0,style:{marginBottom:y(48)},children:Object(d.jsxs)(h,{children:[Object(d.jsx)(p,{value:i.min,label:a.labelMin,onChange:r}),Object(d.jsx)(p,{value:i.max,label:a.labelMax,horizontalAlign:"end",onChange:r})]})}),Object(d.jsx)(g,{type:"submit",btnLabel:a.btnLabel,onClick:e,horizontalAlign:"center"})]})]})})})})})};var _=function(){return Object(d.jsx)(z,{})};c.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8ab0fb93.chunk.js.map