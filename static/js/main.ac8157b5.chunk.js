(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),c=a.n(o),i=a(18),l=a(44),s=(a(93),a(59)),m=a(9),u=a(119),h=a(7),f=a(11),p=a(40),E=a(26),b=a(64),d=a(5),v=a(60);function g(){var e=Object(n.useState)([.5*Math.random(),1,.5*Math.random()]),t=Object(f.a)(e,2),a=t[0],o=t[1],c=Object(n.useMemo)((function(){return function(e){var t=(new v.a).fromBufferGeometry(e);return t.mergeVertices(),[t.vertices.map((function(e){return[e.x,e.y,e.z]})),t.faces.map((function(e){return[e.a,e.b,e.c]})),[]]}(new d.IcosahedronGeometry(.1))}),[]),i=Object(p.c)((function(){return{args:c,mass:.1,position:a}})),l=Object(f.a)(i,2),s=l[0],m=l[1],u=Object(b.a)((function(e){var t=e.first,n=e.last,r=Object(f.a)(e.vxvy,2),o=r[0],c=r[1];if(t){var i;null===(i=m.mass)||void 0===i||i.set(0),m.velocity.set(0,0,0);var l=Object(f.a)(a,3),s=l[0],u=l[2];m.position.set(s,.5,u)}else if(n){var h;null===(h=m.mass)||void 0===h||h.set(.6),m.velocity.set(10*o,0,10*c)}else m.velocity.set(2*o,0,2*c)}),{pointerEvents:!0});return m.position.subscribe((function(e){return o(e)})),r.a.createElement("mesh",Object.assign({receiveShadow:!0,castShadow:!0,ref:s},u()),r.a.createElement("icosahedronGeometry",{attach:"geometry",args:[.1]}),r.a.createElement("meshLambertMaterial",{attach:"material"}))}var y=Object(i.b)((function(e){return{}}),{})((function(e){function t(e){var t=Object(p.b)((function(){return Object(h.a)({args:[2,.1,2],mass:0,type:"Static"},e)})),a=Object(f.a)(t,1)[0];return r.a.createElement("mesh",{ref:a,receiveShadow:!0},r.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,0,2]}),r.a.createElement("shadowMaterial",{attach:"material",color:"#000000",opacity:1}))}return r.a.createElement(E.a,{style:{height:window.innerHeight},pixelRatio:window.devicePixelRatio,colorManagement:!0,shadowMap:!0,gl:{alpha:!1,antialias:!0},camera:{fov:50,position:[0,2,2]}},r.a.createElement("color",{attach:"background",args:[148/255,198/255,214/255]}),r.a.createElement("hemisphereLight",{intensity:.35}),r.a.createElement("spotLight",{position:[5,5,5],angle:.3,penumbra:1,intensity:2,castShadow:!0,"shadow-mapSize-width":256,"shadow-mapSize-height":256}),r.a.createElement("gridHelper",{args:[2,20,"#000000","#000000"]}),r.a.createElement(p.a,{defaultContactMaterial:{restitution:.6}},r.a.createElement(t,null),r.a.createElement(t,{position:[0,2,0]}),r.a.createElement(t,{rotation:[0,0,-Math.PI/2],position:[1,1,0]}),r.a.createElement(t,{rotation:[0,0,-Math.PI/2],position:[-1,1,0]}),r.a.createElement(t,{rotation:[-Math.PI/2,0,0],position:[0,1,1]}),r.a.createElement(t,{rotation:[-Math.PI/2,0,0],position:[0,1,-1]}),r.a.createElement(g,null)))})),w=Object(i.b)((function(e){return{}}),{})((function(e){return r.a.createElement(u.a,null,r.a.createElement(u.a.Header,null),r.a.createElement(u.a.Content,{style:{display:"flex",alignItems:"baseline"}},r.a.createElement(y,null)),r.a.createElement(u.a.Footer,null))})),j=function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",element:r.a.createElement(w,null)}))},O=a(14),M=a(79),S=Object(O.c)({}),x=Object(M.a)({reducer:S});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{store:x},r.a.createElement(s.ParallaxProvider,null,r.a.createElement(j,null))))),document.getElementById("root"))},85:function(e,t,a){e.exports=a(116)},93:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.ac8157b5.chunk.js.map