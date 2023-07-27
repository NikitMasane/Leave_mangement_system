"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[503],{26823:function(e,a,i){i.d(a,{Sh:function(){return v},tD:function(){return b},vf:function(){return m}});var s=i(93433),n=i(39126),l=i(17425),t=i(58617),r=i(78820),c=i(33168),o=i(59434),d=i(80184),u=function(){var e=(0,c.$)().t,a=(0,o.v9)((function(e){return e.User})).UserDetails,i=(0,o.v9)((function(e){return e.Auth})).AccessToken;return i&&"STAFF"===(null===a||void 0===a?void 0:a.Roles)?[{key:"navigation",label:e("Hod Routes"),isTitle:!0},{key:"Dashboard",label:e("Dashboard"),url:"/dashboard",isTitle:!1,icon:(0,d.jsx)(l.Ez2,{className:"side-bar-item-icon"})},{key:"Leave",label:e("Leave"),isTitle:!1,icon:(0,d.jsx)(t.Gdq,{className:"side-bar-item-icon"}),children:[{key:"NewLeave",label:e("Apply for Leave"),url:"/leave/leave-create-update",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})},{key:"Leave List",label:e("Leave List"),url:"/leave/leave-list",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})},{key:"Leave List Pending",label:e("Leave List Pending"),url:"/leave/leave-list-pending",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})},{key:"Leave List Approved",label:e("Leave List Approved"),url:"/leave/leave-list-approved",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})},{key:"Leave List Rejected",label:e("Leave List Rejected"),url:"/leave/leave-list-rejected",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})}]}]:i&&"HOD"===(null===a||void 0===a?void 0:a.Roles)?[{key:"navigation",label:e("Hod Routes"),isTitle:!0},{key:"Dashboard",label:e("Dashboard"),url:"/dashboard",isTitle:!1,icon:(0,d.jsx)(l.Ez2,{className:"side-bar-item-icon"})},{key:"Leave",label:e("Leave"),isTitle:!1,icon:(0,d.jsx)(t.Gdq,{className:"side-bar-item-icon"}),children:[{key:"Leave List",label:e("Leave List"),url:"/leave/leave-list",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})},{key:"Leave List Pending",label:e("Leave List Pending"),url:"/leave/leave-list-pending",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})},{key:"Leave List Approved",label:e("Leave List Approved"),url:"/leave/leave-list-approved",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})},{key:"Leave List Rejected",label:e("Leave List Rejected"),url:"/leave/leave-list-rejected",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})}]}]:i&&"ADMIN"===(null===a||void 0===a?void 0:a.Roles)?[{key:"navigation",label:e("Admin Routes"),isTitle:!0},{key:"Dashboard",label:e("Dashboard"),url:"/dashboard",isTitle:!1,icon:(0,d.jsx)(l.Ez2,{className:"side-bar-item-icon"})},{key:"Department",label:e("Department"),isTitle:!1,icon:(0,d.jsx)(t.Gdq,{className:"side-bar-item-icon"}),children:[{key:"NewDepartment",label:e("New Department"),url:"/department/department-create-update",parentKey:"Department",icon:(0,d.jsx)(r.vM4,{size:16,className:"side-bar-subitem-icon"})},{key:"DepartmentList",label:e("Department List"),url:"/department/department-list",parentKey:"Department",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})}]},{key:"LeaveType",label:e("Leave Type"),isTitle:!1,icon:(0,d.jsx)(t.Gdq,{className:"side-bar-item-icon"}),children:[{key:"Leave Type List",label:e("Leave Type List"),url:"/leave-type/leave-type-list",parentKey:"LeaveType",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})}]},{key:"Employee",label:e("Employee"),isTitle:!1,icon:(0,d.jsx)(t.Gdq,{className:"side-bar-item-icon"}),children:[{key:"NewEmployee",label:e("New Employee"),url:"/employee/employee-create-update",parentKey:"Employee",icon:(0,d.jsx)(r.vM4,{size:16,className:"side-bar-subitem-icon"})},{key:"Employee List",label:e("Employee List"),url:"/employee/employee-list",parentKey:"Employee",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})}]},{key:"Leave",label:e("Leave"),isTitle:!1,icon:(0,d.jsx)(t.Gdq,{className:"side-bar-item-icon"}),children:[{key:"NewLeave",label:e("Apply for Leave"),url:"/leave/leave-create-update",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})},{key:"Leave List",label:e("Leave List"),url:"/leave/leave-list",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})},{key:"Leave List Pending",label:e("Leave List Pending"),url:"/leave/leave-list-pending",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})},{key:"Leave List Approved",label:e("Leave List Approved"),url:"/leave/leave-list-approved",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})},{key:"Leave List Rejected",label:e("Leave List Rejected"),url:"/leave/leave-list-rejected",parentKey:"Leave",icon:(0,d.jsx)(n.b9R,{size:16,className:"side-bar-subitem-icon"})}]}]:void 0},m=function(){return u()},v=function e(a,i){var n=[],l=b(a,i.parentKey);return l&&(n.push(l.key),l.parentKey&&(n=[].concat((0,s.Z)(n),(0,s.Z)(e(a,l))))),n},b=function e(a,i){if(a&&i)for(var s=0;s<a.length;s++){if(a[s].key===i)return a[s];var n=e(a[s].children,i);if(n)return n}return null}},11503:function(e,a,i){i.r(a),i.d(a,{default:function(){return h}});var s=i(72791),n=i(1413),l=i(93433),t=i(29439),r=i(11087),c=i(57689),o=i(81694),d=i.n(o),u=i(26823),m=i(80184),v=function e(a){var i=a.item,n=a.tag,l=a.linkClassName,c=a.className,o=a.subMenuClassNames,u=a.activeMenuItems,v=a.toggleMenu,b=n,y=(0,s.useState)(u.includes(i.key)),L=(0,t.Z)(y,2),h=L[0],k=L[1],j=window.screen.width<=768&&h;(0,s.useEffect)((function(){k(u.includes(i.key))}),[u,i]);return(0,m.jsxs)(b,{className:d()("dropdown",c,u.includes(i.key)?"active":""),children:[(0,m.jsxs)(r.rU,{to:"/#",onClick:function(e){e.preventDefault();var a=!h;return k(a),v&&v(i,a),!1},"data-menu-key":i.key,className:d()("dropdown-toggle","arrow-none",l),id:i.key,role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":h,children:[i.icon&&i.icon,(0,m.jsxs)("span",{children:[" ",i.label," "]}),(0,m.jsx)("div",{className:"arrow-down"})]}),i.children?(0,m.jsx)("div",{className:d()(o,{show:j}),"aria-labelledby":i.key,children:i.children.map((function(a,i){return(0,m.jsx)(s.Fragment,{children:a.children?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(e,{item:a,tag:"div",linkClassName:d()("dropdown-item",u.includes(a.key)?"active":""),activeMenuItems:u,className:"",subMenuClassNames:"dropdown-menu",toggleMenu:v})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(p,{item:a,className:d()("dropdown-item",{active:u.includes(a.key)})})})},i)}))}):null]})},b=function(e){var a=e.item,i=e.className,s=e.linkClassName;return(0,m.jsx)("li",{className:d()("nav-item",i),children:(0,m.jsx)(p,{item:a,className:s})})},p=function(e){var a=e.item,i=e.className;return(0,m.jsxs)(r.rU,{to:a.url,target:a.target,className:d()(i),"data-menu-key":a.key,children:[a.icon&&a.icon,(0,m.jsxs)("span",{children:[" ",a.label," "]})]})},y=function(e){var a=e.menuItems,i=(0,s.useRef)(null),r=(0,c.TH)(),o=(0,s.useState)([]),d=(0,t.Z)(o,2),p=d[0],y=d[1],L=(0,s.useState)([]),h=(0,t.Z)(L,2),k=h[0],j=h[1],N=function(e,a){a&&j([e.key].concat((0,l.Z)((0,u.Sh)(p,e))))},f=(0,s.useCallback)((function(){var e=document.getElementById("main-side-menu"),a=null;if(e){for(var i=e.getElementsByTagName("a"),s=0;s<i.length;++s)if(r.pathname===i[s].pathname){a=i[s];break}if(a){var n=a.getAttribute("data-menu-key"),t=(0,u.tD)(p,n);t&&j([t.key].concat((0,l.Z)((0,u.Sh)(p,t))))}}}),[r.pathname,p]);return(0,s.useEffect)((function(){var e=a?a.filter((function(e){return e.isTitle?null:e})):[],i=window.screen.width>1366?7:5;if(e.length>i){var s=e.slice(0,i),t=e.slice(i,a.length).map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{parentKey:"more"})})),r={id:e.length+1,path:"/",label:"More",icon:"uil-ellipsis-h",key:"more",children:t};e=[].concat((0,l.Z)(s),[r]),y(e)}else y(e)}),[a]),(0,s.useEffect)((function(){p&&p.length>0&&f()}),[f,p]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("ul",{className:"navbar-nav",ref:i,id:"main-side-menu",children:(p||[]).map((function(e,a){return(0,m.jsx)(s.Fragment,{children:e.children?(0,m.jsx)(v,{item:e,tag:"li",className:"nav-item",subMenuClassNames:"dropdown-menu",activeMenuItems:k,linkClassName:"nav-link",toggleMenu:N}):(0,m.jsx)(b,{item:e,linkClassName:"nav-link dropdown-toggle arrow-none",className:{active:k.includes(e.key)}})},a)}))})})},L=i(85887),h=function(e){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"topnav shadow-sm",children:(0,m.jsx)("div",{className:"container-fluid",children:(0,m.jsx)("nav",{className:d()("navbar","navbar-expand-lg","topnav-menu","navbar-light"),children:(0,m.jsx)(L.Z,{in:e.isMenuOpened,className:"navbar-collapse",id:"topnav-menu-content",children:(0,m.jsx)("div",{children:(0,m.jsx)(y,{menuItems:(0,u.vf)()})})})})})})})}}}]);
//# sourceMappingURL=503.62f2398d.chunk.js.map