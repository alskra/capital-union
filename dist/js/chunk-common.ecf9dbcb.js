(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(t,a,e){t.exports=e("44eb")},"02fd":function(t,a,e){},"03fd":function(t,a,e){},"13f1":function(t,a,e){},"22dd":function(t,a,e){"use strict";var n=e("6efd"),l=e.n(n);l.a},"322f":function(t,a,e){"use strict";var n=e("9106"),l=e.n(n);l.a},4175:function(t,a,e){},"43f5":function(t,a,e){},"44eb":function(t,a,e){"use strict";e.r(a);var n=e("be94"),l=(e("a481"),e("ac6a"),e("f5df"),e("eaf9"),e("be30")),c=(e("95f0"),e("cc60")),s=e("a026");Object(l["a"])(),Object(c["a"])(document,{attr:!1,className:"focus-within",force:!0}),s["a"].config.productionTip=!1;const i=e("98f1");i.keys().forEach(t=>{const a=i(t).default||i(t),e=a.name||t.replace(/^.+\//,"").replace(/\.\w+$/,"");s["a"].component(e,a)});const r=(t,a,e)=>{const n=a.getBoundingClientRect(),l=window.innerHeight;return n.top>=0&&n.top<=2*l/3&&(a.style.opacity="",a.style.visibility="",a.classList.add("animated",e.value),!0)},o=(t,a,e)=>{const n=a.getBoundingClientRect(),l=window.innerHeight;return n.top>=0&&n.top<=3*l/4&&(a.addEventListener("load",function t(){a.removeEventListener("load",t),a.style.opacity="",a.style.visibility="",a.classList.add("animated",e.value)}),a.setAttribute("src",a.dataset.src),a.setAttribute("srcset",a.dataset.srcset),!0)};s["a"].directive("scroll",{bind(t,a){"animate"===a.arg?(t.style.opacity="0",t.style.visibility="hidden"):"load"===a.arg&&(t.style.opacity="0",t.style.visibility="hidden",t.dataset.src=t.getAttribute("src"),t.dataset.srcset=t.getAttribute("srcset"),t.setAttribute("src",""),t.setAttribute("srcset","")),t.onWindowScroll=(e=>{let n=!1;"animate"===a.arg&&"string"===typeof a.value?n=r(e,t,a):"load"===a.arg&&"string"===typeof a.value&&(n=o(e,t,a)),"function"===typeof a.value&&(n=a.value(e,t,a)),n&&window.removeEventListener("scroll",t.onWindowScroll)}),window.addEventListener("scroll",t.onWindowScroll)},inserted(t){t.onWindowScroll()},unbind(t){delete t.onWindowScroll,window.removeEventListener("scroll",t.onWindowScroll)}});var h,f,u=s["a"],v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div")},d=[],m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-pi-capital-union",attrs:{"icon-name":"pi-capital-union",width:null,height:"58",viewBox:"0 0 254.246 56.657"}},[e("path",{attrs:{fill:"#FF9A00",d:"M0 0h56.7v56.6H0z"}}),e("path",{attrs:{fill:"#EB6E19",d:"M0 56.6h56.7V0z"}}),e("path",{attrs:{fill:"#FF8200",d:"M0 56.6h.1l28.2-28.3L0 0z"}}),e("path",{attrs:{fill:"#FFF",d:"M34.1 24h3.1v13.2h-3.1zm1.5-5.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-.9-2.2-2.2-2.2zM30 19.9c-1.2-1.1-2.9-1.7-5-1.7h-7V37h3.7v-6.8H25c2.1 0 3.8-.5 5-1.6s1.8-2.5 1.8-4.3c0-1.8-.6-3.3-1.8-4.4zm-2.7 6.6c-.5.6-1.3.9-2.3.9h-3.3v-6.2H25c1 0 1.8.3 2.3.9s.8 1.3.8 2.2c0 .9-.2 1.6-.8 2.2z"}}),e("path",{attrs:{fill:"none",d:"M.046.057h254.2v56.6H.046z"}}),e("path",{attrs:{d:"M86.8 31.2c-.3 1.9-1.1 3.4-2.3 4.4-1.2 1-2.7 1.5-4.4 1.5-1.1 0-2-.2-2.8-.5s-1.5-.8-2.2-1.4c-.5-.5-.8-1-1.1-1.5-.3-.5-.4-1-.5-1.6-.1-.6-.2-1.2-.2-2v-4.8c0-.7.1-1.4.2-2s.3-1.1.5-1.6c.3-.5.6-1 1.1-1.5.6-.6 1.4-1.1 2.2-1.4.8-.3 1.7-.5 2.8-.5 1.7 0 3.2.5 4.4 1.5 1.2 1 2 2.4 2.3 4.4h-3.7c-.2-.8-.5-1.4-1-1.9s-1.2-.7-2.1-.7c-.5 0-.9.1-1.3.3-.4.2-.7.4-1 .7-.2.2-.3.4-.4.6s-.2.6-.3.9c-.1.4-.1.9-.2 1.4 0 .6-.1 1.3-.1 2.2 0 .9 0 1.6.1 2.2 0 .6.1 1.1.2 1.4.1.4.2.7.3.9.1.2.3.5.4.6.3.3.6.5 1 .7s.8.3 1.3.3c.9 0 1.6-.2 2.1-.7s.8-1.1 1-1.9h3.7zm10.7 5.7v-1.2c-.4.4-.9.8-1.4 1s-1.1.3-1.9.3c-1.5 0-2.7-.4-3.4-1.2-.4-.4-.6-.8-.8-1.3-.2-.5-.3-1.1-.3-1.7 0-.5.1-1 .3-1.5.2-.5.5-.9.9-1.2.4-.4.9-.6 1.5-.8.6-.2 1.3-.3 2.1-.3h3.1v-.7c0-.7-.2-1.3-.6-1.6-.4-.3-1-.5-1.9-.5-.6 0-1.1.1-1.5.3-.4.2-.8.5-1.1.9l-2.1-2.1c.7-.7 1.3-1.2 2.1-1.5.7-.3 1.7-.4 2.8-.4 3.8 0 5.8 1.6 5.8 4.8v8.9h-3.6v-.2zm0-5.7h-2.6c-1.3 0-2 .5-2 1.6 0 .5.2.8.5 1.1s.8.4 1.6.4c.4 0 .8 0 1.1-.1.3-.1.6-.3.9-.5.2-.2.3-.4.4-.7s.1-.6.1-1.1v-.7zm18.7-1.1v1.7c0 .5-.1 1-.2 1.5s-.2 1-.4 1.4c-.2.4-.4.8-.8 1.1-.4.4-.9.7-1.4.9-.6.2-1.2.3-1.8.3-.7 0-1.3-.1-1.8-.3s-1-.5-1.4-1.1v6.1H105V23.4h3.3v1.3c.5-.5 1-.9 1.5-1.1s1.2-.3 1.9-.3 1.3.1 1.8.3c.6.2 1 .5 1.4.9.3.3.6.7.8 1.1.2.4.3.9.4 1.4s.2 1 .2 1.5c-.1.5-.1 1.1-.1 1.6zm-3.3 0c0-.5 0-1-.1-1.5s-.2-.9-.3-1.2c-.2-.3-.4-.6-.7-.8-.3-.2-.7-.3-1.2-.3s-.9.1-1.2.3c-.3.2-.5.5-.7.8s-.3.8-.3 1.2c-.1.5-.1 1-.1 1.5 0 .6 0 1.1.1 1.5.1.5.2.9.3 1.2.2.4.4.6.7.8.3.2.7.3 1.2.3s.9-.1 1.2-.3c.3-.2.5-.5.7-.8.2-.4.3-.8.3-1.2 0-.4.1-.9.1-1.5zm7-9v-2.7h3.4v2.7h-3.4zm.1 15.8V23.8h3.4v13.1H120zm11.9 0c-.7 0-1.3-.1-1.8-.3s-.9-.5-1.2-.9-.6-.8-.7-1.2c-.1-.5-.2-.9-.2-1.4v-6.7h-1.4v-2.6h1.4v-4h3.4v4h2.4v2.6h-2.4v6.5c0 .8.4 1.2 1.2 1.2h1.2V37h-1.9v-.1zm12.6 0v-1.2c-.4.4-.9.8-1.4 1s-1.1.3-1.9.3c-1.5 0-2.7-.4-3.4-1.2-.4-.4-.6-.8-.8-1.3s-.3-1.1-.3-1.7c0-.5.1-1 .3-1.5s.5-.9.9-1.2c.4-.4.9-.6 1.5-.8.6-.2 1.3-.3 2.1-.3h3.1v-.7c0-.7-.2-1.3-.6-1.6-.4-.3-1-.5-1.9-.5-.6 0-1.1.1-1.5.3-.4.2-.8.5-1.1.9l-2.1-2.1c.7-.7 1.3-1.2 2.1-1.5.7-.3 1.7-.4 2.8-.4 3.8 0 5.8 1.6 5.8 4.8v8.9h-3.6v-.2zm-.1-5.7h-2.6c-1.3 0-2 .5-2 1.6 0 .5.2.8.5 1.1s.8.4 1.6.4c.4 0 .8 0 1.1-.1s.6-.3.9-.5c.2-.2.3-.4.4-.7.1-.3.1-.6.1-1.1v-.7zm11.3 5.7c-.7 0-1.3-.1-1.8-.3s-.9-.5-1.2-.9-.6-.8-.7-1.2c-.1-.5-.2-.9-.2-1.4V18.4h3.4v14.4c0 .4.1.7.3.9s.5.3.9.3h1.3v2.9h-2zm29.1-6.3c0 1-.2 1.9-.5 2.7-.4.8-.8 1.5-1.5 2-.6.6-1.3 1-2.2 1.3-.8.3-1.7.5-2.7.5-.9 0-1.8-.2-2.7-.5-.8-.3-1.5-.7-2.2-1.3-.6-.6-1.1-1.2-1.5-2s-.5-1.7-.5-2.7V18.4h3.6v12c0 1.1.3 1.9.9 2.5.6.6 1.3.9 2.3.9s1.8-.3 2.3-.9c.6-.6.9-1.4.9-2.5v-12h3.6v12.2h.2zm12 6.3v-8.2c0-.5-.1-.9-.2-1.2-.1-.3-.3-.6-.5-.8-.2-.2-.5-.3-.7-.4-.3-.1-.5-.1-.8-.1s-.5 0-.8.1-.5.2-.7.4c-.2.2-.4.4-.5.8-.1.3-.2.7-.2 1.2v8.2H189V23.4h3.3v1.2c.4-.5 1-.8 1.6-1s1.2-.4 1.8-.4c.7 0 1.3.1 1.8.3.5.2 1 .5 1.4.9.6.6.9 1.1 1.1 1.8.2.6.3 1.3.3 2.1v8.6h-3.5zm7.4-15.8v-2.7h3.4v2.7h-3.4zm.1 15.8V23.8h3.4v13.1h-3.4zm18.4-6.8c0 1.2-.1 2.3-.3 3.1s-.6 1.6-1.2 2.2c-.4.4-1 .8-1.7 1.2-.7.3-1.5.5-2.5.5s-1.8-.2-2.5-.5-1.2-.7-1.7-1.2c-.6-.7-1-1.4-1.2-2.2s-.3-1.8-.3-3.1c0-1.2.1-2.2.3-3s.6-1.5 1.2-2.2c.4-.4 1-.8 1.7-1.2s1.5-.5 2.5-.5 1.8.2 2.5.5 1.2.7 1.7 1.2c.6.7 1 1.4 1.2 2.2.2.8.3 1.8.3 3zm-3.3 0c0-.7 0-1.3-.1-1.9s-.3-1-.6-1.4c-.4-.4-.9-.6-1.6-.6-.6 0-1.2.2-1.6.6-.3.3-.6.8-.6 1.4-.1.6-.1 1.2-.1 1.9s0 1.3.1 1.9c.1.6.3 1 .6 1.4.4.4.9.6 1.6.6.7 0 1.2-.2 1.6-.6.3-.3.6-.8.6-1.4 0-.5.1-1.2.1-1.9zm14.9 6.8v-8.2c0-.5-.1-.9-.2-1.2-.1-.3-.3-.6-.5-.8-.2-.2-.5-.3-.7-.4-.3-.1-.5-.1-.8-.1s-.5 0-.8.1-.5.2-.7.4c-.2.2-.4.4-.5.8-.1.3-.2.7-.2 1.2v8.2h-3.4V23.4h3.3v1.2c.4-.5 1-.8 1.6-1s1.2-.4 1.8-.4c.7 0 1.3.1 1.8.3.5.2 1 .5 1.4.9.6.6.9 1.1 1.1 1.8.2.6.3 1.3.3 2.1v8.6h-3.5z",fill:"currentColor"}})])},p=[],z={name:"IconPiCapitalUnion"},b=z,g=e("2877"),M=Object(g["a"])(b,m,p,!1,null,"11833a08",null),x=M.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div")},w=[],y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-lang-en-uk",attrs:{"icon-name":"lang-en-uk",width:"30",height:"30",viewBox:"0 0 512.002 512.002"}},[e("path",{attrs:{d:"M503.172 423.725H8.828A8.829 8.829 0 0 1 0 414.897V97.104a8.829 8.829 0 0 1 8.828-8.828h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z",fill:"#41479b"}}),e("path",{attrs:{d:"M512 97.104a8.829 8.829 0 0 0-8.828-8.828h-39.495l-163.54 107.147V88.276h-88.276v107.147L48.322 88.276H8.828A8.829 8.829 0 0 0 0 97.104v22.831l140.309 91.927H0v88.276h140.309L0 392.066v22.831a8.829 8.829 0 0 0 8.828 8.828h39.495l163.54-107.147v107.147h88.276V316.578l163.54 107.147h39.495a8.829 8.829 0 0 0 8.828-8.828v-22.831l-140.309-91.927H512v-88.276H371.691L512 119.935V97.104z",fill:"#f5f5f5"}}),e("g",{attrs:{fill:"#ff4b55"}},[e("path",{attrs:{d:"M512 229.518H282.483V88.276h-52.966v141.242H0v52.965h229.517v141.242h52.966V282.483H512z"}}),e("path",{attrs:{d:"M178.948 300.138L.25 416.135c.625 4.263 4.14 7.59 8.577 7.59h12.159l190.39-123.586h-32.428v-.001zm167.44 0H313.96l190.113 123.404c4.431-.472 7.928-4.09 7.928-8.646v-7.258l-165.613-107.5zM0 106.849l161.779 105.014h32.428L5.143 89.137C2.123 90.54 0 93.555 0 97.104v9.745zm332.566 105.014L511.693 95.586c-.744-4.122-4.184-7.309-8.521-7.309h-12.647L300.138 211.863h32.428z"}})])])},H=[],E={name:"IconLangEnUk"},C=E,V=Object(g["a"])(C,y,H,!1,null,"5c1772da",null),L=V.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-lang-it",attrs:{"icon-name":"lang-it",width:"30",height:"30",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M170.667 423.721H8.828A8.829 8.829 0 0 1 0 414.893V97.1a8.829 8.829 0 0 1 8.828-8.828h161.839v335.449z",fill:"#73af00"}}),e("path",{attrs:{fill:"#f5f5f5",d:"M170.67 88.277h170.67v335.45H170.67z"}}),e("path",{attrs:{d:"M503.172 423.721H341.333V88.273h161.839A8.829 8.829 0 0 1 512 97.101v317.793a8.827 8.827 0 0 1-8.828 8.827z",fill:"#ff4b55"}})])},B=[],j={name:"IconLangIt"},I=j,$=Object(g["a"])(I,O,B,!1,null,"6fd90cd2",null),k=$.exports,F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-lang-sr",attrs:{"icon-name":"lang-sr",width:"30",height:"30",viewBox:"0 0 512.001 512.001"}},[e("path",{attrs:{d:"M0 311.908h512v102.988a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 414.896V311.908z",fill:"#f5f5f5"}}),e("path",{attrs:{d:"M8.828 88.276h494.345a8.829 8.829 0 0 1 8.828 8.828v102.988H0V97.103a8.828 8.828 0 0 1 8.828-8.827z",fill:"#ff4b55"}}),e("path",{attrs:{fill:"#41479b",d:"M0 200.09h512V311.9H0z"}}),e("path",{attrs:{fill:"#ffe15a",d:"M173.021 200.07h-63.559l-2.648-15.89h68.855z"}}),e("path",{attrs:{fill:"#ffd350",d:"M108.8 196.097l.662 3.973h63.559l.662-3.973z"}}),e("g",{attrs:{fill:"#ffe15a"}},[e("path",{attrs:{d:"M139.92 147.1h2.648v10.593h-2.648z"}}),e("path",{attrs:{d:"M137.27 149.75h7.945v2.648h-7.945zm35.958 39.726a2.648 2.648 0 0 1-2.49-3.551l5.61-15.481a2.807 2.807 0 0 0-.18-2.319c-.209-.375-.695-1.035-1.624-1.234-6.839-1.453-20.096-3.897-32.023-3.897h-2.558c-11.927 0-25.184 2.444-32.026 3.9-.926.196-1.414.856-1.622 1.231a2.803 2.803 0 0 0-.179 2.319l5.608 15.481a2.648 2.648 0 0 1-1.587 3.393 2.656 2.656 0 0 1-3.392-1.588l-5.61-15.481a8.104 8.104 0 0 1 .526-6.694c1.097-1.978 2.973-3.38 5.149-3.843 7.047-1.5 20.718-4.017 33.131-4.017h2.558c12.413 0 26.084 2.516 33.128 4.013a7.757 7.757 0 0 1 5.152 3.846 8.107 8.107 0 0 1 .527 6.694l-5.611 15.481a2.642 2.642 0 0 1-2.487 1.747z"}}),e("path",{attrs:{d:"M141.251 187.159a2.647 2.647 0 0 1-2.648-2.648v-21.517a2.647 2.647 0 1 1 5.296 0v21.517a2.647 2.647 0 0 1-2.648 2.648z"}}),e("path",{attrs:{d:"M159.559 189.476a2.649 2.649 0 0 1-2.596-3.186l3.212-15.481c.418-2.017-.236-3.784-.608-4.094-3.672-1.347-11.039-3.722-17.594-3.722h-1.465c-6.554 0-13.921 2.375-17.73 3.791-.235.241-.889 2.007-.472 4.024l3.212 15.481a2.648 2.648 0 0 1-2.055 3.132c-1.434.277-2.836-.623-3.13-2.056l-3.212-15.481c-.8-3.859.428-8.801 3.808-10.063 5.063-1.882 12.565-4.125 19.578-4.125h1.465c7.014 0 14.516 2.242 19.576 4.122 3.383 1.265 4.611 6.207 3.811 10.066l-3.212 15.481a2.644 2.644 0 0 1-2.588 2.111z"}})]),e("path",{attrs:{fill:"#ffd350",d:"M107.476 188.152h67.531l.662-3.972h-68.855z"}}),e("path",{attrs:{d:"M90.924 200.07a2.649 2.649 0 0 0-2.648 2.648v92.486c0 29.365 23.713 53.17 52.966 53.17s52.966-23.805 52.966-53.17v-92.486a2.649 2.649 0 0 0-2.648-2.648H90.924z",fill:"#ff4b55"}}),e("path",{attrs:{d:"M146.538 287.464l5.297-13.241-10.593 2.648-10.593-2.648 5.297 13.241-13.241 45.021s7.945 5.297 18.538 5.297 18.538-5.297 18.538-5.297l-13.243-45.021z",fill:"#f5f5f5"}}),e("path",{attrs:{fill:"#ffe15a",d:"M122.061 298.135l-4.673 1.169 10.279-18.501-4.63-2.571-12.485 22.472H98.869v5.297h5.69l-7.344 5.875 3.308 4.138 6.239-4.992-2.461 7.382 5.025 1.675 4.837-14.511 9.183-2.296z"}}),e("path",{attrs:{d:"M122.703 226.552l-12.089-6.045a5.297 5.297 0 0 1-2.77-6.022l.684-2.735a3.007 3.007 0 0 0-5.266-2.607 44.22 44.22 0 0 0-9.69 27.625v55.991s11.059-2.211 21.048-16.742c1.834-2.668 4.853-4.247 8.072-4.412l-5.286 15.857L128 290.111l9.269-11.03-14.566-52.529z",fill:"#f5f5f5"}}),e("path",{attrs:{fill:"#ffe15a",d:"M160.422 298.135l4.673 1.169-10.279-18.501 4.63-2.571 12.484 22.472h11.684v5.297h-5.691l7.345 5.875-3.308 4.138-6.239-4.992 2.461 7.382-5.026 1.675-4.836-14.511-9.183-2.296z"}}),e("path",{attrs:{d:"M159.779 226.552l12.089-6.045a5.297 5.297 0 0 0 2.77-6.022l-.684-2.735a3.007 3.007 0 0 1 5.266-2.607 44.22 44.22 0 0 1 9.69 27.625v55.991s-11.059-2.211-21.048-16.742c-1.834-2.668-4.853-4.247-8.072-4.412l5.286 15.857-10.593 2.648-9.269-11.03 14.565-52.528z",fill:"#f5f5f5"}}),e("path",{attrs:{d:"M125.352 208.014H112.11l3.973 5.297 9.269 2.648-5.297 2.648H128zm31.779 0h13.241l-3.972 5.297-9.269 2.648 5.297 2.648h-7.945z",fill:"#ffe15a"}}),e("path",{attrs:{d:"M158.996 205.938l-12.458 2.076-5.297 10.593-5.297-10.593-12.458-2.076c-1.428-.238-2.524 1.245-1.876 2.54l6.39 12.778-5.297 5.297h37.076l-5.297-5.297 6.389-12.778c.648-1.296-.447-2.779-1.875-2.54z",fill:"#f5f5f5"}}),e("circle",{attrs:{cx:"141.24",cy:"185.34",r:"3.972",fill:"#ffbe50"}}),e("ellipse",{attrs:{cx:"141.19",cy:"194.82",rx:"3.139",ry:"2.207",fill:"#41479b"}}),e("ellipse",{attrs:{cx:"125.52",cy:"194.82",rx:"3.139",ry:"2.207",fill:"#ff4b55"}}),e("g",{attrs:{fill:"#41479b"}},[e("ellipse",{attrs:{cx:"109.85",cy:"194.82",rx:"3.139",ry:"2.207"}}),e("ellipse",{attrs:{cx:"172.52",cy:"194.82",rx:"3.139",ry:"2.207"}})]),e("ellipse",{attrs:{cx:"156.85",cy:"194.82",rx:"3.139",ry:"2.207",fill:"#ff4b55"}}),e("g",{attrs:{fill:"#ffbe50"}},[e("circle",{attrs:{cx:"159.65",cy:"185.34",r:"3.972"}}),e("circle",{attrs:{cx:"174.17",cy:"185.34",r:"3.972"}}),e("circle",{attrs:{cx:"122.86",cy:"185.34",r:"3.972"}}),e("circle",{attrs:{cx:"108.33",cy:"185.34",r:"3.972"}})]),e("path",{attrs:{d:"M145.803 162.994a5.239 5.239 0 0 0 .735-2.648 5.297 5.297 0 1 0-10.594 0c0 .97.279 1.867.735 2.648h9.124z",fill:"#41479b"}}),e("path",{attrs:{d:"M141.241 280.842c-10.953 0-19.862-8.909-19.862-19.862v-35.752h39.724v35.752c0 10.954-8.909 19.862-19.862 19.862z",fill:"#ff4b55"}}),e("path",{attrs:{d:"M159.779 226.552v34.428c0 10.238-8.3 18.538-18.538 18.538s-18.538-8.3-18.538-18.538v-34.428h37.076m2.649-2.648h-42.372v37.076c0 11.682 9.504 21.186 21.186 21.186s21.186-9.504 21.186-21.186v-37.076z",fill:"#a54b50"}}),e("g",{attrs:{fill:"#f5f5f5"}},[e("path",{attrs:{d:"M137.269 279.08c1.281.28 2.607.437 3.972.437s2.691-.158 3.972-.437v-52.529h-7.945l.001 52.529z"}}),e("path",{attrs:{d:"M122.7 248.4h37.08v7.945H122.7z"}})])])},S=[],P={name:"IconLangSr"},A=P,N=Object(g["a"])(A,F,S,!1,null,"6ed627aa",null),U=N.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-lang-zh",attrs:{"icon-name":"lang-zh",width:"30",height:"30",viewBox:"0 0 512.001 512.001"}},[e("path",{attrs:{d:"M503.172 423.725H8.828A8.829 8.829 0 0 1 0 414.897V97.104a8.829 8.829 0 0 1 8.828-8.828h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z",fill:"#ff4b55"}}),e("path",{attrs:{d:"M85.007 140.733l8.416 25.234 26.6.206c3.444.026 4.872 4.422 2.101 6.467l-21.398 15.801 8.023 25.362c1.038 3.284-2.7 5.999-5.502 3.997l-21.64-15.469-21.64 15.468c-2.802 2.003-6.54-.714-5.502-3.997l8.023-25.362-21.398-15.8c-2.771-2.046-1.343-6.441 2.101-6.467l26.6-.206 8.416-25.234c1.09-3.268 5.711-3.268 6.8 0zm96.592 6.218l6.035 8.23 9.739-3.046c1.261-.394 2.298 1.044 1.526 2.115l-5.962 8.281 5.906 8.321c.765 1.077-.282 2.508-1.54 2.105l-9.719-3.111-6.089 8.189c-.788 1.06-2.473.506-2.478-.814l-.045-10.205-9.67-3.261c-1.251-.423-1.246-2.195.009-2.609l9.69-3.196.114-10.204c.014-1.319 1.703-1.86 2.484-.795zm-36.742-24.53l10.145 1.102 4.328-9.241c.561-1.196 2.321-.991 2.591.302l2.086 9.988 10.126 1.26c1.311.163 1.66 1.901.513 2.558l-8.855 5.07 1.931 10.02c.25 1.298-1.295 2.166-2.274 1.279l-7.559-6.855-8.932 4.932c-1.156.639-2.461-.563-1.919-1.768l4.183-9.308-7.452-6.972c-.964-.898-.225-2.509 1.088-2.367zm16.038 98.893l-6.035 8.23-9.739-3.046c-1.261-.394-2.298 1.044-1.526 2.115l5.962 8.281-5.906 8.321c-.765 1.077.282 2.508 1.54 2.105l9.719-3.111 6.089 8.189c.788 1.06 2.473.506 2.478-.814l.045-10.205 9.67-3.261c1.252-.423 1.246-2.195-.009-2.609l-9.69-3.196-.114-10.204c-.016-1.318-1.703-1.861-2.484-.795zm36.74-23.051l-10.145 1.102-4.328-9.241c-.561-1.196-2.321-.991-2.591.302l-2.087 9.988-10.126 1.26c-1.311.163-1.66 1.901-.513 2.558l8.855 5.07-1.931 10.02c-.25 1.298 1.295 2.166 2.274 1.279l7.559-6.855 8.932 4.932c1.156.639 2.461-.563 1.919-1.768l-4.183-9.308 7.452-6.972c.967-.898.228-2.509-1.087-2.367z",fill:"#ffe15a"}})])},W=[],R={name:"IconLangZh"},K=R,J=Object(g["a"])(K,D,W,!1,null,"577775ba",null),T=J.exports,Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-lang-ko",attrs:{"icon-name":"lang-ko",width:"30",height:"30",viewBox:"0 0 512.001 512.001"}},[e("path",{attrs:{d:"M503.172 423.725H8.828A8.829 8.829 0 0 1 0 414.897V97.104a8.829 8.829 0 0 1 8.828-8.828h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z",fill:"#f5f5f5"}}),e("path",{attrs:{d:"M305.009 182.533c-40.563-27.041-95.35-15.986-122.374 24.506-13.555 20.211-8.045 47.674 12.235 61.195 20.265 13.521 47.64 8.03 61.161-12.252 13.521-20.281 40.914-25.704 61.178-12.254 20.298 13.521 25.757 40.984 12.217 61.195 27.042-40.56 16.111-95.348-24.417-122.39",fill:"#ff4b55"}}),e("path",{attrs:{d:"M182.634 207.04c-13.555 20.211-8.045 47.674 12.235 61.195 20.265 13.521 47.64 8.03 61.161-12.252 13.521-20.281 40.914-25.704 61.178-12.254 20.298 13.521 25.757 40.984 12.217 61.195-27.006 40.632-81.775 51.549-122.338 24.507-40.526-27.04-51.494-81.828-24.453-122.391",fill:"#41479b"}}),e("path",{attrs:{d:"M349.92 149.191l16.035 24.102a4.414 4.414 0 0 1-1.219 6.112l-4.066 2.723a4.414 4.414 0 0 1-6.129-1.22l-16.055-24.096a4.415 4.415 0 0 1 1.223-6.119l4.086-2.728a4.413 4.413 0 0 1 6.125 1.226zm24.74 37.161l16.087 24.087a4.415 4.415 0 0 1-1.237 6.134l-4.084 2.699a4.413 4.413 0 0 1-6.103-1.23l-16.078-24.062a4.414 4.414 0 0 1 1.217-6.122l4.074-2.724a4.415 4.415 0 0 1 6.124 1.218zm-7.571-48.619l40.829 61.273a4.413 4.413 0 0 1-1.225 6.12l-4.102 2.734a4.413 4.413 0 0 1-6.121-1.224l-40.843-61.269a4.413 4.413 0 0 1 1.227-6.122l4.115-2.739a4.416 4.416 0 0 1 6.12 1.227zm17.122-11.44l16.07 24.149a4.412 4.412 0 0 1-1.241 6.127l-4.086 2.7a4.412 4.412 0 0 1-6.105-1.234l-16.082-24.117a4.413 4.413 0 0 1 1.224-6.121l4.099-2.732a4.411 4.411 0 0 1 6.121 1.228zm24.756 37.239l16.045 24.099a4.413 4.413 0 0 1-1.22 6.115l-4.075 2.724a4.413 4.413 0 0 1-6.127-1.223l-16.045-24.099a4.414 4.414 0 0 1 1.22-6.115l4.075-2.724a4.413 4.413 0 0 1 6.127 1.223zM132.721 293.983l40.824 61.207a4.413 4.413 0 0 1-1.222 6.12l-4.088 2.73a4.414 4.414 0 0 1-6.123-1.222l-40.824-61.207a4.413 4.413 0 0 1 1.222-6.12l4.088-2.73a4.415 4.415 0 0 1 6.123 1.222zm-17.139 11.449l16.028 24.041a4.413 4.413 0 0 1-1.217 6.116l-4.066 2.722a4.414 4.414 0 0 1-6.126-1.217l-16.047-24.035a4.413 4.413 0 0 1 1.22-6.122l4.086-2.728a4.414 4.414 0 0 1 6.122 1.223zm24.769 37.174l16.046 24.102a4.412 4.412 0 0 1-1.222 6.115l-4.078 2.726a4.414 4.414 0 0 1-6.126-1.221l-16.056-24.097a4.415 4.415 0 0 1 1.222-6.119l4.088-2.73a4.414 4.414 0 0 1 6.126 1.224zm-41.909-25.729l40.798 61.21a4.416 4.416 0 0 1-1.219 6.118l-4.077 2.726a4.413 4.413 0 0 1-6.125-1.22l-40.822-61.202a4.415 4.415 0 0 1 1.224-6.122l4.102-2.734a4.412 4.412 0 0 1 6.119 1.224zm22.852-106.434l40.818-61.257a4.414 4.414 0 0 1 6.124-1.224l4.087 2.729a4.415 4.415 0 0 1 1.222 6.12l-40.834 61.223a4.414 4.414 0 0 1-6.108 1.231l-4.071-2.695a4.413 4.413 0 0 1-1.238-6.127zm-17.147-11.433l40.825-61.269a4.414 4.414 0 0 1 6.126-1.222l4.077 2.726a4.413 4.413 0 0 1 1.22 6.116l-40.814 61.272a4.413 4.413 0 0 1-6.124 1.224l-4.088-2.729a4.413 4.413 0 0 1-1.222-6.118zM86.99 187.626l40.829-61.33a4.415 4.415 0 0 1 6.127-1.224l4.077 2.726a4.413 4.413 0 0 1 1.222 6.114l-40.804 61.339a4.414 4.414 0 0 1-6.123 1.228l-4.102-2.734a4.416 4.416 0 0 1-1.226-6.119zM338.493 355.19l16.047-24.035a4.414 4.414 0 0 1 6.126-1.217l4.066 2.723a4.414 4.414 0 0 1 1.217 6.116l-16.028 24.04a4.414 4.414 0 0 1-6.123 1.223l-4.086-2.728a4.414 4.414 0 0 1-1.219-6.122zm24.75-37.048l16.073-24.154a4.415 4.415 0 0 1 6.123-1.227l4.096 2.73a4.415 4.415 0 0 1 1.223 6.124l-16.107 24.116a4.412 4.412 0 0 1-6.109 1.227l-4.062-2.692a4.414 4.414 0 0 1-1.237-6.124zm-7.617 48.557l16.057-24.098a4.414 4.414 0 0 1 6.122-1.225l4.104 2.737a4.415 4.415 0 0 1 1.225 6.119l-16.047 24.1a4.414 4.414 0 0 1-6.12 1.228l-4.115-2.739a4.416 4.416 0 0 1-1.226-6.122zm24.777-37.235l16.066-24.042a4.415 4.415 0 0 1 6.119-1.22l4.102 2.734a4.413 4.413 0 0 1 1.221 6.124l-16.065 24.042a4.414 4.414 0 0 1-6.118 1.22l-4.103-2.734a4.41 4.41 0 0 1-1.222-6.124zm-7.632 48.618l16.075-24.056a4.414 4.414 0 0 1 6.103-1.23l4.086 2.7a4.415 4.415 0 0 1 1.239 6.131l-16.063 24.088a4.415 4.415 0 0 1-6.121 1.224l-4.099-2.732a4.414 4.414 0 0 1-1.22-6.125zm24.783-37.112l16.035-24.085a4.414 4.414 0 0 1 6.127-1.223l4.072 2.722a4.414 4.414 0 0 1 1.218 6.119l-16.049 24.053a4.413 4.413 0 0 1-6.11 1.229l-4.06-2.69a4.414 4.414 0 0 1-1.233-6.125z",fill:"#464655"}})])},q=[],G={name:"IconLangKo"},Q=G,X=Object(g["a"])(Q,Z,q,!1,null,"4366e498",null),Y=X.exports,tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-lang-ru",attrs:{"icon-name":"lang-ru",width:"30",height:"30",viewBox:"0 0 512.001 512.001"}},[e("path",{attrs:{d:"M512 200.093H0V97.104a8.829 8.829 0 0 1 8.828-8.828h494.345a8.829 8.829 0 0 1 8.828 8.828L512 200.093z",fill:"#f5f5f5"}}),e("path",{attrs:{d:"M503.172 423.725H8.828A8.829 8.829 0 0 1 0 414.897V311.909h512v102.988a8.828 8.828 0 0 1-8.828 8.828z",fill:"#ff4b55"}}),e("path",{attrs:{fill:"#41479b",d:"M0 200.091h512v111.81H0z"}})])},at=[],et={name:"IconLangRu"},nt=et,lt=Object(g["a"])(nt,tt,at,!1,null,"71dc7e34",null),ct=lt.exports,st={name:"ChooseLanguage",components:{IconLangEnUk:L,IconLangIt:k,IconLangSr:U,IconLangZh:T,IconLangKo:Y,IconLangRu:ct},data(){return{opened:!1}},props:{language:{type:Object,default(){return{code:"en-UK",label:"EN"}}}},methods:{onDocumentClick(t){t.target===this.$refs["choose-language"]||this.$refs["choose-language"].contains(t.target)||(this.opened=!1)}},created(){document.addEventListener("click",this.onDocumentClick)},destroyed(){document.removeEventListener("click",this.onDocumentClick)}},it=st,rt=(e("d307"),Object(g["a"])(it,_,w,!1,null,"25c3fcc8",null)),ot=rt.exports,ht={name:"HeaderPage",components:{IconPiCapitalUnion:x,ChooseLanguage:ot}},ft=ht,ut=(e("e106"),e("622a"),Object(g["a"])(ft,v,d,!1,null,"4b00c438",null)),vt=ut.exports,dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div")},mt=[],pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-button",{staticClass:"button-outline",attrs:{tag:t.tag},scopedSlots:t._u([{key:"icon",fn:function(){return[t._t("icon")]},proxy:!0}],!0)},[t._t("default")],2)},zt=[],bt=e("82ea"),gt={name:"ButtonOutline",props:Object(n["a"])({},bt["default"].props)},Mt=gt,xt=(e("8850"),Object(g["a"])(Mt,pt,zt,!1,null,"064083be",null)),_t=xt.exports,wt={name:"IntroPage",components:{ButtonOutline:_t},methods:{handleScroll(t,a){const e=a.parentElement.getBoundingClientRect(),n=window.innerHeight;return e.top>=0&&e.top<n||e.bottom>0&&e.bottom<=n||e.top<0&&e.bottom>n?a.style.animationPlayState="running":a.style.animationPlayState="paused",!1}}},yt=wt,Ht=(e("da65"),Object(g["a"])(yt,dt,mt,!1,null,"de0cd63e",null)),Et=Ht.exports,Ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"service-list"},[t._t("default")],2)},Vt=[],Lt={name:"ServiceList"},Ot=Lt,Bt=(e("22dd"),Object(g["a"])(Ot,Ct,Vt,!1,null,"5c45d8ba",null)),jt=Bt.exports,It=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div")},$t=[],kt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-facebook",attrs:{"icon-name":"facebook",width:"36",height:"36",viewBox:"0 0 455.73 455.73"}},[e("path",{attrs:{d:"M0 0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893 35.582-79.475 79.475-79.475h62.025v64.622h-44.382c-13.947 0-25.254 11.307-25.254 25.254v49.953h68.521l-9.47 71.864h-59.051V455.73H455.73V0H0z"}})])},Ft=[],St={name:"IconFacebook"},Pt=St,At=Object(g["a"])(Pt,kt,Ft,!1,null,"87b85c80",null),Nt=At.exports,Ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-linkedin",attrs:{"icon-name":"linkedin",width:"36",height:"36",viewBox:"0 0 32 32"}},[e("path",{attrs:{d:"M17.303 14.365a.246.246 0 0 0 .031-.048v.048h-.031zM32 0v32H0V0h32zM9.925 12.285H5.153v14.354h4.772V12.285zm.312-4.438c-.03-1.41-1.035-2.482-2.668-2.482-1.631 0-2.698 1.072-2.698 2.482 0 1.375 1.035 2.479 2.636 2.479h.031c1.664 0 2.699-1.104 2.699-2.479zm16.892 10.561c0-4.408-2.355-6.459-5.494-6.459-2.531 0-3.664 1.391-4.301 2.368v-2.032h-4.77c.061 1.346 0 14.354 0 14.354h4.77v-8.016c0-.434.031-.855.157-1.164.346-.854 1.132-1.746 2.448-1.746 1.729 0 2.418 1.314 2.418 3.246v7.68h4.771l.001-8.231z"}})])},Dt=[],Wt={name:"IconLinkedin"},Rt=Wt,Kt=Object(g["a"])(Rt,Ut,Dt,!1,null,"768fa0ec",null),Jt=Kt.exports,Tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-ex-pi",attrs:{"icon-name":"ex-pi",width:null,height:"40",viewBox:"0 0 121.7 56.6"}},[e("path",{attrs:{fill:"none",d:"M0 0h121.7v56.6H0z"}}),e("path",{attrs:{fill:"#FF9A00",d:"M65 0h56.7v56.6H65z"}}),e("path",{attrs:{fill:"#EB6E19",d:"M65 56.6h56.7V0z"}}),e("path",{attrs:{fill:"#FFF",d:"M99.1 24h3.1v13.2h-3.1zm1.6-5.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2c0-1.2-1-2.2-2.2-2.2zM95 19.9c-1.2-1.1-2.9-1.7-5-1.7h-7V37h3.7v-6.8H90c2.1 0 3.8-.5 5-1.6s1.8-2.5 1.8-4.3c0-1.8-.6-3.3-1.8-4.4zm-2.6 6.6c-.5.6-1.3.9-2.3.9h-3.3v-6.2h3.3c1 0 1.8.3 2.3.9s.8 1.3.8 2.2c0 .9-.3 1.6-.8 2.2z"}}),e("path",{attrs:{d:"M16.6 37.1v-19h12.5v3.3h-8.8v4.5h7.5v3.3h-7.5v4.6h8.8v3.3H16.6zm27.6 0l-3.7-6.6-3.7 6.6h-4.2l5.9-9.7-5.5-9.3h4.2l3.3 6.1 3.3-6.1H48l-5.5 9.3 5.9 9.7h-4.2z",fill:"#191817"}})])},Zt=[],qt={name:"IconExPi"},Gt=qt,Qt=Object(g["a"])(Gt,Tt,Zt,!1,null,"1d09ac62",null),Xt=Qt.exports,Yt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-crypto-pi",attrs:{"icon-name":"crypto-pi",width:null,height:"40",viewBox:"0 0 191.8 56.6"}},[e("path",{attrs:{fill:"none",d:"M0 0h191.8v56.6H0z"}}),e("path",{attrs:{fill:"#FF9A00",d:"M135.2 0h56.6v56.6h-56.6z"}}),e("path",{attrs:{fill:"#EB6E19",d:"M135.2 56.6h56.6V0z"}}),e("path",{attrs:{fill:"#181716",d:"M23.6 21.2c1.8 0 2.8 1.1 3.2 2.7h3.8c-.7-4-3.4-6-6.9-6-2.2 0-3.8.7-5.1 2-1.9 1.9-1.9 4-1.9 7.6s0 5.7 1.9 7.6c1.3 1.3 2.9 2 5.1 2 3.5 0 6.2-2 6.9-6h-3.7c-.4 1.5-1.4 2.7-3.2 2.7-1 0-1.8-.4-2.4-1-.7-.8-.9-1.7-.9-5.3s.2-4.5.9-5.3c.4-.6 1.3-1 2.3-1zm25.2 2.6c0-3.2-2.3-5.8-6.1-5.8h-7.4v19H39v-7.5h2.7l3.7 7.5h4.3l-4.2-8.1c1.7-.8 3.3-2.4 3.3-5.1zm-6.4 2.5H39v-5h3.5c1.6 0 2.7 1 2.7 2.5-.1 1.5-1.1 2.5-2.8 2.5zm17.1-.6L56 18.1h-4l5.7 11.1V37h3.7v-7.7L67 18.1h-4l-3.5 7.6zm18.7-7.6h-7.3V37h3.7v-7.1h3.6c3.9 0 6.2-2.7 6.2-5.9 0-3.3-2.3-5.9-6.2-5.9zm-.2 8.4h-3.5v-5.2H78c1.7 0 2.7 1.1 2.7 2.6s-1 2.6-2.7 2.6zm9.6-5.1h4.9V37h3.7V21.4h4.9v-3.3H87.6v3.3zm29-1.5c-1.3-1.3-2.9-2-5-2-2.2 0-3.8.7-5.1 2-1.9 1.9-1.9 4-1.9 7.6s0 5.7 1.9 7.6c1.3 1.3 2.9 2 5.1 2s3.8-.7 5-2c1.9-1.9 1.9-4 1.9-7.6.1-3.6 0-5.7-1.9-7.6zm-2.7 12.9c-.5.6-1.4 1-2.4 1s-1.8-.4-2.4-1c-.7-.8-.9-1.7-.9-5.3s.2-4.5.9-5.3c.6-.6 1.4-1 2.4-1s1.8.4 2.4 1c.7.8.9 1.7.9 5.3.1 3.6-.2 4.5-.9 5.3z"}}),e("path",{attrs:{fill:"#FFF",d:"M169.2 24h3.1v13.2h-3.1zm1.6-5.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-1-2.2-2.2-2.2zm-5.7 1.5c-1.2-1.1-2.9-1.7-5-1.7h-7V37h3.7v-6.8h3.3c2.1 0 3.8-.5 5-1.6s1.8-2.5 1.8-4.3c0-1.8-.6-3.3-1.8-4.4zm-2.6 6.6c-.5.6-1.3.9-2.3.9h-3.3v-6.2h3.3c1 0 1.8.3 2.3.9s.8 1.3.8 2.2c0 .9-.3 1.6-.8 2.2z"}})])},ta=[],aa={name:"IconCryptoPi"},ea=aa,na=Object(g["a"])(ea,Yt,ta,!1,null,"07a80efe",null),la=na.exports,ca=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-icon",{staticClass:"icon-capital-pi",attrs:{"icon-name":"capital-pi",width:null,height:"40",viewBox:"0 0 201 56.6"}},[e("path",{attrs:{fill:"none",d:"M0 0h201v56.6H0z"}}),e("path",{attrs:{fill:"#D60027",d:"M144.4 0H201v56.6h-56.6z"}}),e("path",{attrs:{fill:"#7E0019",d:"M144.4 56.6H201V0z"}}),e("path",{attrs:{d:"M115.6 37V18.1h3.6v15.6h8.6V37zm-11.1-18.9h-2.9L94.7 37h3.8l1.1-3.3h6.7l1.1 3.3h3.8l-6.7-18.9zm-3.8 12.4l2.4-6.9 2.3 6.9h-4.7zm-11.8-9.1V37h-3.7V21.4h-5v-3.3h13.6v3.3zm-16.8-3.3h3.7V37h-3.7zm-10.8 0H54V37h3.7v-7.1h3.6c3.9 0 6.2-2.7 6.2-5.9 0-3.3-2.3-5.9-6.2-5.9zm-.2 8.4h-3.4v-5.2h3.4c1.7 0 2.7 1.1 2.7 2.6.1 1.6-1 2.6-2.7 2.6zm-18.2-8.4H40L33.2 37H37l1.1-3.3h6.7L46 37h3.8l-6.9-18.9zm-3.7 12.4l2.4-6.9 2.3 6.9h-4.7zm-15.6-9.3c-1 0-1.8.3-2.4 1-.8.8-.9 1.7-.9 5.3 0 3.7.2 4.5.9 5.3.6.7 1.4 1 2.4 1 1.8 0 2.8-1.1 3.2-2.7h3.7c-.6 3.8-3.3 6-7 6-2 0-3.7-.7-5.1-2.1-.8-.8-1.3-1.8-1.5-2.8-.2-1.1-.3-2.6-.3-4.7s.1-3.6.3-4.7c.2-1.1.7-2 1.5-2.8 1.4-1.4 3.1-2.1 5.1-2.1 3.6 0 6.3 2.1 7 6h-3.7c-.4-1.6-1.5-2.7-3.2-2.7z"}}),e("path",{attrs:{fill:"#FFF",d:"M178.5 24h3.1v13.2h-3.1zm1.5-5.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-.9-2.2-2.2-2.2zm-5.6 1.5c-1.2-1.1-2.9-1.7-5-1.7h-7V37h3.7v-6.8h3.3c2.1 0 3.8-.5 5-1.6s1.8-2.5 1.8-4.3c0-1.8-.6-3.3-1.8-4.4zm-2.7 6.6c-.5.6-1.3.9-2.3.9h-3.3v-6.2h3.3c1 0 1.8.3 2.3.9s.8 1.3.8 2.2c0 .9-.2 1.6-.8 2.2z"}})])},sa=[],ia={name:"IconCapitalPi"},ra=ia,oa=Object(g["a"])(ra,ca,sa,!1,null,"bceb28c0",null),ha=oa.exports,fa={name:"ServiceItem",components:{ButtonOutline:_t,IconFacebook:Nt,IconLinkedin:Jt,IconExPi:Xt,IconCryptoPi:la,IconCapitalPi:ha}},ua=fa,va=(e("76e2"),e("4914"),e("6846"),Object(g["a"])(ua,It,$t,!1,null,"b2ae9ee8",null)),da=va.exports,ma=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div")},pa=[],za=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-button",{staticClass:"button-primary",attrs:{tag:t.tag},scopedSlots:t._u([{key:"icon",fn:function(){return[t._t("icon")]},proxy:!0}],!0)},[t._t("default")],2)},ba=[],ga={name:"ButtonPrimary",props:Object(n["a"])({},bt["default"].props)},Ma=ga,xa=(e("8ae9"),Object(g["a"])(Ma,za,ba,!1,null,"464e1da1",null)),_a=xa.exports,wa={name:"SectionContacts",components:{ButtonPrimary:_a}},ya=wa,Ha=(e("322f"),Object(g["a"])(ya,ma,pa,!1,null,"c8617fa6",null)),Ea=Ha.exports,Ca=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div")},Va=[],La={name:"FooterPage",mounted(){void 0!==document.documentElement.style.mask&&this.$refs.mask.classList.add("mask")}},Oa=La,Ba=(e("8f73"),Object(g["a"])(Oa,Ca,Va,!1,null,"6e31aa08",null)),ja=Ba.exports,Ia={name:"PageIndex",components:{HeaderPage:vt,IntroPage:Et,ServiceList:jt,ServiceItem:da,SectionContacts:Ea,FooterPage:ja}},$a=Ia,ka=Object(g["a"])($a,h,f,!1,null,"3afb18bc",null),Fa=ka.exports;new u(Object(n["a"])({},Fa)).$mount("base-page")},4914:function(t,a,e){"use strict";var n=e("86ad"),l=e.n(n);l.a},4970:function(t,a,e){"use strict";var n=e("f3d0"),l=e.n(n);l.a},"4d5f":function(t,a,e){"use strict";var n=e("4175"),l=e.n(n);l.a},"503d":function(t,a,e){"use strict";var n=e("f663"),l=e.n(n);l.a},5247:function(t,a,e){},"55ae":function(t,a,e){"use strict";var n=e("13f1"),l=e.n(n);l.a},"622a":function(t,a,e){"use strict";var n=e("b165"),l=e.n(n);l.a},6846:function(t,a,e){"use strict";var n=e("d17f"),l=e.n(n);l.a},"6ea0":function(t,a,e){},"6efd":function(t,a,e){},"6fb1":function(t,a,e){"use strict";var n=e("6ea0"),l=e.n(n);l.a},7461:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("svg",{staticClass:"base-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:t.viewBox,"aria-labelledby":t.iconName,role:"presentation",fill:t.iconColor}},[t._t("default")],2)},l=[],c={name:"BaseIcon",props:{iconName:{type:String,default:null},width:{type:[Number,String],default:24},height:{type:[Number,String],default:24},viewBox:{type:String,default:"0 0 24 24"},iconColor:{type:String,default:"currentColor"}}},s=c,i=(e("503d"),e("2877")),r=Object(i["a"])(s,n,l,!1,null,null,null);a["default"]=r.exports},"7b04":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"base-container"},[t._t("default")],2)},l=[],c={name:"BaseContainer"},s=c,i=(e("4d5f"),e("2877")),r=Object(i["a"])(s,n,l,!1,null,"37997592",null);a["default"]=r.exports},"82ea":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e(t.tag,{tag:"div",staticClass:"base-button"},[e("span",{staticClass:"icon"},[t._t("icon")],2),e("span",{staticClass:"label"},[t._t("default")],2)])},l=[],c={name:"BaseButton",props:{tag:{type:String,default:"button"}}},s=c,i=(e("55ae"),e("d88a"),e("2877")),r=Object(i["a"])(s,n,l,!1,null,"dde18fba",null);a["default"]=r.exports},"86ad":function(t,a,e){},8850:function(t,a,e){"use strict";var n=e("43f5"),l=e.n(n);l.a},"8ae9":function(t,a,e){"use strict";var n=e("bb9d"),l=e.n(n);l.a},"8f73":function(t,a,e){"use strict";var n=e("03fd"),l=e.n(n);l.a},9106:function(t,a,e){},9262:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"base-content"},[t._t("default")],2)},l=[],c={name:"BaseContent"},s=c,i=(e("6fb1"),e("2877")),r=Object(i["a"])(s,n,l,!1,null,null,null);a["default"]=r.exports},"94a7":function(t,a,e){"use strict";var n=e("02fd"),l=e.n(n);l.a},"98f1":function(t,a,e){var n={"./BaseButton.vue":"82ea","./BaseContainer.vue":"7b04","./BaseContent.vue":"9262","./BaseIcon.vue":"7461","./BasePage.vue":"dc12"};function l(t){var a=c(t);return e(a)}function c(t){var a=n[t];if(!(a+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a}l.keys=function(){return Object.keys(n)},l.resolve=c,t.exports=l,l.id="98f1"},b165:function(t,a,e){},b4ed:function(t,a,e){},bb9d:function(t,a,e){},d17f:function(t,a,e){},d307:function(t,a,e){"use strict";var n=e("b4ed"),l=e.n(n);l.a},d88a:function(t,a,e){"use strict";var n=e("5247"),l=e.n(n);l.a},da65:function(t,a,e){"use strict";var n=e("ffd3"),l=e.n(n);l.a},dc12:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"base-page"},[t._t("default")],2)},l=[],c={name:"BasePage"},s=c,i=(e("94a7"),e("4970"),e("2877")),r=Object(i["a"])(s,n,l,!1,null,"32ddbba4",null);a["default"]=r.exports},e106:function(t,a,e){"use strict";var n=e("f7db"),l=e.n(n);l.a},eaf9:function(t,a,e){},f3d0:function(t,a,e){},f663:function(t,a,e){},f7db:function(t,a,e){},ffd3:function(t,a,e){}}]);