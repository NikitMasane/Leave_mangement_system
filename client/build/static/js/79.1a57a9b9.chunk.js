"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[79],{61452:function(e,t,n){var r=n(74165),a=n(15861),s=n(15671),i=n(43144),c=n(70211),l=n(61706),u=n(40109),o=n(783),d=function(){function e(){(0,s.Z)(this,e)}return(0,i.Z)(e,null,[{key:"EmployeeCreate",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.postRequest("/Employee/EmployeeCreate",t);case 2:if(n=e.sent,!n.data){e.next=8;break}return u.Z.dispatch((0,l.FB)()),c.Z.successMessage("Employee Create Successful"),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"EmployeeList",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var s,i,c,d,p,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Employee/EmployeeList/".concat(t,"/").concat(n,"/").concat(a));case 2:s=e.sent,(i=s.data)&&(u.Z.dispatch((0,l.FB)()),m=null===i||void 0===i||null===(c=i[0])||void 0===c||null===(d=c.Total[0])||void 0===d?void 0:d.count,u.Z.dispatch((0,l.cK)(null===i||void 0===i||null===(p=i[0])||void 0===p?void 0:p.Data)),u.Z.dispatch((0,l.z0)(m||0)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"DepartmentHeads",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Employee/DepartmentHeads");case 2:s=e.sent,(i=s.data)&&u.Z.dispatch((0,l.v5)(i));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"StaffList",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Employee/StaffList");case 2:s=e.sent,(i=s.data)&&u.Z.dispatch((0,l.Fc)(i));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"EmployeeDropDown",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Employee/EmployeeDropDown");case 2:t=e.sent,(n=t.data)&&u.Z.dispatch((0,l.z3)(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"EmployeeDetails",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Employee/EmployeeDetails/".concat(t));case 2:if(a=e.sent,!(s=a.data)){e.next=7;break}return u.Z.dispatch((0,l.Np)(null===s||void 0===s?void 0:s[0])),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"EmployeeUpdate",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.updateRequest("/Employee/EmployeeUpdate/".concat(t),n);case 2:if(a=e.sent,!a.data){e.next=8;break}return u.Z.dispatch((0,l.FB)()),c.Z.successMessage("Employee Update Successful"),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"EmployeeDelete",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.deleteRequest("/Employee/EmployeeDelete/".concat(t));case 2:if(n=e.sent,!n.data){e.next=7;break}return c.Z.successMessage("Employee Delete Successful"),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=d},783:function(e,t,n){var r=n(74165),a=n(15861),s=n(15671),i=n(43144),c=n(11912),l=n(34948),u=n(70211),o=n(24500),d=n(36877),p=n(69334),m=n(40109);function h(){c.Z.defaults.headers.common.Authorization="Bearer "+l.Z.GetToken()}c.Z.defaults.baseURL="http://localhost:8080/api/v1",c.Z.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var f=function(e){return m.Z.dispatch((0,d.zy)()),e},x=function(e){return m.Z.dispatch((0,d.zy)()),500===e.response.status?u.Z.errorMessage("Sorry, Something went wrong"):401===e.response.status?(u.Z.errorMessage(e.response.data.message),m.Z.dispatch((0,o.hf)()),m.Z.dispatch((0,p.c1)())):u.Z.errorMessage(e.response.data.message),!1},v=function(){function e(){(0,s.Z)(this,e)}return(0,i.Z)(e,null,[{key:"getRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.Z.dispatch((0,d.Pl)()),e.next=3,c.Z.get(t,h()).then((function(e){return f(e)})).catch((function(e){return x(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"postRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.Z.dispatch((0,d.Pl)()),e.next=3,c.Z.post(t,n,h()).then((function(e){return f(e)})).catch((function(e){return m.Z.dispatch((0,d.zy)()),x(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.Z.dispatch((0,d.Pl)()),e.next=3,c.Z.patch(t,n,h()).then((function(e){return f(e)})).catch((function(e){return x(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"putRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.Z.dispatch((0,d.Pl)()),e.next=3,c.Z.put(t,n,h()).then((function(e){return f(e)})).catch((function(e){return x(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.Z.dispatch((0,d.Pl)()),e.next=3,c.Z.delete(t,h()).then((function(e){return f(e)})).catch((function(e){return x(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=v},70550:function(e,t,n){n(72791);var r=n(89743),a=n(2677),s=n(2461),i=n(80184);t.Z=function(e){return(0,i.jsx)(r.Z,{children:(0,i.jsx)(a.Z,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("div",{className:"page-title-right",children:(0,i.jsxs)(s.Z,{listProps:{className:"m-0"},children:[(0,i.jsx)(s.Z.Item,{href:"/dashboard",children:"Dashboard"}),e.breadCrumbItems.map((function(e,t){return e.active?(0,i.jsx)(s.Z.Item,{active:!0,children:e.label},t):(0,i.jsx)(s.Z.Item,{href:e.path,children:e.label},t)}))]})}),(0,i.jsx)("h4",{className:"page-title",children:e.title})]})})})}},41828:function(e,t,n){var r=n(1413),a=n(15671),s=n(43144),i=n(21830),c=n.n(i),l=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"Delete",value:function(e,t){return c().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){if(n.isConfirmed)return t(e).then((function(e){if(e)return!0}))}))}},{key:"Update",value:function(e,t,n,r){return c().fire({title:"Change Status",input:"select",inputOptions:n,inputValue:t}).then((function(t){if(t.isConfirmed)return r(e,t.value).then((function(e){return e}))}))}},{key:"CourseUpdate",value:function(e,t,n,a){return c().fire({title:"Change Status",input:"select",inputOptions:t,inputValue:n.status}).then((function(t){if(t.isConfirmed)return a(e,(0,r.Z)((0,r.Z)({},n),{},{status:t.value})).then((function(e){return e}))}))}}]),e}();t.Z=l},70211:function(e,t,n){var r=n(15671),a=n(43144),s=n(65218),i=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,null,[{key:"successMessage",value:function(e){return s.ZP.success(e,{position:"top-center"})}},{key:"errorMessage",value:function(e){return s.ZP.error(e,{position:"top-center"})}}]),e}();t.Z=i},92079:function(e,t,n){n.r(t);var r=n(29439),a=n(72791),s=n(89743),i=n(2677),c=n(19089),l=n(43360),u=n(62591),o=n(11087),d=n(96048),p=n.n(d),m=n(76053),h=n(60978),f=n(70550),x=n(59434),v=n(61452),Z=n(41828),y=n(74220),j=n(1239),g=n(80184);t.default=function(){var e=(0,a.useState)(1),t=(0,r.Z)(e,2),n=t[0],d=t[1],b=(0,a.useState)(5),k=(0,r.Z)(b,2),N=k[0],w=k[1],C=(0,a.useState)(0),E=(0,r.Z)(C,2),D=E[0],L=E[1];(0,a.useEffect)((function(){v.Z.EmployeeList(n,N,D)}),[n,N,D]);var R=(0,x.v9)((function(e){return e.Employee})),q=R.EmployeeLists,P=R.TotalEmployee;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f.Z,{breadCrumbItems:[{label:"Employee",path:"/employee/employee-list"},{label:"Create List",path:"/employee/employee-list",active:!0}],title:"Employee List "+P}),(0,g.jsx)(s.Z,{children:(0,g.jsx)(i.Z,{xs:12,children:(0,g.jsx)(c.Z,{children:(0,g.jsxs)(c.Z.Body,{children:[(0,g.jsxs)(s.Z,{className:"mb-2",children:[(0,g.jsx)(i.Z,{sm:5,children:(0,g.jsxs)(o.rU,{to:"/employee/employee-create-update",className:"btn btn-danger mb-2",children:[(0,g.jsx)("i",{className:"mdi mdi-plus-circle me-2"})," Add Employee"]})}),(0,g.jsx)(i.Z,{sm:7,children:(0,g.jsxs)("div",{className:"text-sm-end",children:[(0,g.jsx)(l.Z,{variant:"success",className:"mb-2 me-1",children:(0,g.jsx)("i",{className:"mdi mdi-cog-outline"})}),(0,g.jsxs)(l.Z,{variant:"light",className:"mb-2 me-1",onClick:function(){return(0,y.Z)(q,"Employee","xls")},children:[(0,g.jsx)(h.bBH,{})," Export"]}),(0,g.jsxs)(l.Z,{variant:"light",className:"mb-2",onClick:function(){return(0,y.Z)(q,"Employee","csv")},children:[(0,g.jsx)(m.BI8,{})," Export"]})]})})]}),(0,g.jsx)(s.Z,{children:(0,g.jsx)(i.Z,{children:(0,g.jsx)("div",{className:"mb-2",children:(0,g.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,g.jsx)("input",{placeholder:P+" records...",className:"form-control w-auto ms-1",defaultValue:"",onChange:function(e){var t=e.target.value||0;L(t)}})]})})})}),(0,g.jsx)(s.Z,{children:(0,g.jsx)(i.Z,{children:(0,g.jsxs)(u.Z,{className:"table-centered react-table",responsive:!0,children:[(0,g.jsx)("thead",{className:"table-light",style:{backgroundColor:"#eef2f7"},children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Faculty"}),(0,g.jsx)("th",{children:"Faculty Mobile"}),(0,g.jsx)("th",{children:"Faculty Address"}),(0,g.jsx)("th",{children:"Faculty Roles"}),(0,g.jsx)("th",{children:"Created On"}),(0,g.jsx)("th",{children:"Action"})]})}),(0,g.jsx)("tbody",{children:null===q||void 0===q?void 0:q.map((function(e,t){return(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:(0,g.jsxs)("div",{className:"d-flex px-2 py-1",children:[(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:null===e||void 0===e?void 0:e.Image,className:"avatar avatar-sm me-3",alt:"user1"})}),(0,g.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[(0,g.jsx)("h6",{className:"mb-0 text-sm",children:(null===e||void 0===e?void 0:e.FirstName)+" "+(null===e||void 0===e?void 0:e.LastName)}),(0,g.jsx)("p",{className:"text-xs text-secondary mb-0",children:(0,g.jsx)("td",{children:null===e||void 0===e?void 0:e.Email})})]})]})}),(0,g.jsx)("td",{children:null===e||void 0===e?void 0:e.Phone}),(0,g.jsx)("td",{children:null===e||void 0===e?void 0:e.Address}),(0,g.jsx)("td",{children:null===e||void 0===e?void 0:e.Roles}),(0,g.jsx)("td",{children:(0,j.Z)(null===e||void 0===e?void 0:e.createdAt)}),(0,g.jsxs)("td",{children:[(0,g.jsx)(o.rU,{to:"/employee/employee-create-update?id=".concat(null===e||void 0===e?void 0:e._id),className:"action-icon text-warning",children:(0,g.jsx)("i",{className:"mdi mdi-square-edit-outline"})}),(0,g.jsx)(o.rU,{className:"action-icon text-danger",onClick:function(){return t=null===e||void 0===e?void 0:e._id,void Z.Z.Delete(t,v.Z.EmployeeDelete).then((function(e){e&&v.Z.EmployeeList(n,N,D)}));var t},children:(0,g.jsx)("i",{className:"mdi mdi-delete"})})]})]},t)}))})]})})}),(0,g.jsx)(s.Z,{children:(0,g.jsx)(i.Z,{children:(0,g.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[(0,g.jsxs)("div",{className:"d-inline-block me-3",children:[(0,g.jsx)("label",{className:"me-1",children:"Display :"}),(0,g.jsxs)("select",{className:"form-select d-inline-block w-auto",onChange:function(e){"All"===e.target.value?w(P):w(e.target.value)},children:[(0,g.jsx)("option",{value:5,children:"5"}),(0,g.jsx)("option",{value:10,children:"10"}),(0,g.jsx)("option",{value:20,children:"20"}),(0,g.jsx)("option",{value:"All",children:"All"})]})]}),(0,g.jsxs)("span",{className:"me-3",children:["Page",(0,g.jsxs)("strong",{children:[n," of ",Math.ceil(P/N)]})]}),(0,g.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,g.jsx)("label",{children:"Go to page : "}),(0,g.jsx)("input",{type:"number",min:1,className:"form-control w-25 ms-1 d-inline-block",defaultValue:1,onChange:function(e){d(e.target.value)}})]}),(0,g.jsx)(p(),{previousLabel:"<",nextLabel:">",pageClassName:"page-item d-none d-xl-inline-block",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",pageCount:P/N,marginPagesDisplayed:2,pageRangeDisplayed:5,containerClassName:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",activeClassName:"active",onPageChange:function(e){d(e.selected+1)},initialPage:n-1,forcePage:n-1})]})})})]})})})})]})}},1239:function(e,t,n){n(72791);var r=n(46431),a=n.n(r),s=n(80184);t.Z=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a(),{format:"D MMM YYYY",withTitle:!0,children:e})," ",(0,s.jsx)("br",{}),(0,s.jsx)("small",{children:(0,s.jsx)(a(),{format:"hh:mm A",children:e})})]})}},74220:function(e,t,n){var r=n(63589);t.Z=function(e,t,n){if("csv"===n){var a=r.Z.types.csv;return(0,r.Z)({data:e,fileName:t,exportType:a})}if("xls"===n){var s=r.Z.types.xls;return(0,r.Z)({data:e,fileName:t,exportType:s})}}}}]);
//# sourceMappingURL=79.1a57a9b9.chunk.js.map