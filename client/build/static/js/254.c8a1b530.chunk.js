"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[254],{65861:function(e,t,n){var a=n(74165),r=n(15861),s=n(15671),i=n(43144),c=n(70211),u=n(87165),l=n(40109),o=n(783),d=function(){function e(){(0,s.Z)(this,e)}return(0,i.Z)(e,null,[{key:"LeaveCreate",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.postRequest("/Leave/LeaveCreate",t);case 2:if(n=e.sent,!n.data){e.next=8;break}return l.Z.dispatch((0,u.Yr)()),c.Z.successMessage("Leave Create Successful"),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"LeaveList",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n,r){var s,i,c,d,v,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Leave/LeaveList/".concat(t,"/").concat(n,"/").concat(r));case 2:s=e.sent,(i=s.data)&&(l.Z.dispatch((0,u.Yr)()),p=null===i||void 0===i||null===(c=i[0])||void 0===c||null===(d=c.Total[0])||void 0===d?void 0:d.count,l.Z.dispatch((0,u.ao)(null===i||void 0===i||null===(v=i[0])||void 0===v?void 0:v.Data)),l.Z.dispatch((0,u.L9)(p||0)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"LeaveAdminList",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n,r){var s,i,c,d,v,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Leave/LeaveAdminList/".concat(t,"/").concat(n,"/").concat(r));case 2:s=e.sent,(i=s.data)&&(l.Z.dispatch((0,u.Yr)()),p=null===i||void 0===i||null===(c=i[0])||void 0===c||null===(d=c.Total[0])||void 0===d?void 0:d.count,l.Z.dispatch((0,u.ao)(null===i||void 0===i||null===(v=i[0])||void 0===v?void 0:v.Data)),l.Z.dispatch((0,u.L9)(p||0)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"LeaveListAdminByStatus",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n,r,s){var i,c,d,v,p,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.postRequest("/Leave/LeaveListAdminByStatus/".concat(t,"/").concat(n,"/").concat(r),s);case 2:i=e.sent,(c=i.data)&&(l.Z.dispatch((0,u.Yr)()),h=null===c||void 0===c||null===(d=c[0])||void 0===d||null===(v=d.Total[0])||void 0===v?void 0:v.count,l.Z.dispatch((0,u.ao)(null===c||void 0===c||null===(p=c[0])||void 0===p?void 0:p.Data)),l.Z.dispatch((0,u.L9)(h||0)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"LeaveListHodByStatus",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n,r,s){var i,c,d,v,p,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.postRequest("/Leave/LeaveListHodByStatus/".concat(t,"/").concat(n,"/").concat(r),s);case 2:i=e.sent,(c=i.data)&&(l.Z.dispatch((0,u.Yr)()),h=null===c||void 0===c||null===(d=c[0])||void 0===d||null===(v=d.Total[0])||void 0===v?void 0:v.count,l.Z.dispatch((0,u.ao)(null===c||void 0===c||null===(p=c[0])||void 0===p?void 0:p.Data)),l.Z.dispatch((0,u.L9)(h||0)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"LeaveDropDown",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Leave/LeaveDropDown");case 2:t=e.sent,(n=t.data)&&l.Z.dispatch((0,u.IX)(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"LeaveDetails",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Leave/LeaveDetails/".concat(t));case 2:if(n=e.sent,!(r=n.data)){e.next=7;break}return l.Z.dispatch((0,u.Cw)(null===r||void 0===r?void 0:r[0])),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"LeaveUpdate",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.updateRequest("/Leave/LeaveUpdate/".concat(t),n);case 2:if(r=e.sent,!r.data){e.next=8;break}return l.Z.dispatch((0,u.Yr)()),c.Z.successMessage("Leave Update Successful"),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"LeaveDelete",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.deleteRequest("/Leave/LeaveDelete/".concat(t));case 2:if(n=e.sent,!n.data){e.next=7;break}return c.Z.successMessage("Leave Delete Successful"),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=d},783:function(e,t,n){var a=n(74165),r=n(15861),s=n(15671),i=n(43144),c=n(11912),u=n(34948),l=n(70211),o=n(24500),d=n(36877),v=n(69334),p=n(40109);function h(){c.Z.defaults.headers.common.Authorization="Bearer "+u.Z.GetToken()}c.Z.defaults.baseURL="http://localhost:8080/api/v1",c.Z.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var f=function(e){return p.Z.dispatch((0,d.zy)()),e},m=function(e){return p.Z.dispatch((0,d.zy)()),500===e.response.status?l.Z.errorMessage("Sorry, Something went wrong"):401===e.response.status?(l.Z.errorMessage(e.response.data.message),p.Z.dispatch((0,o.hf)()),p.Z.dispatch((0,v.c1)())):l.Z.errorMessage(e.response.data.message),!1},x=function(){function e(){(0,s.Z)(this,e)}return(0,i.Z)(e,null,[{key:"getRequest",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.Z.dispatch((0,d.Pl)()),e.next=3,c.Z.get(t,h()).then((function(e){return f(e)})).catch((function(e){return m(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"postRequest",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.Z.dispatch((0,d.Pl)()),e.next=3,c.Z.post(t,n,h()).then((function(e){return f(e)})).catch((function(e){return p.Z.dispatch((0,d.zy)()),m(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateRequest",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.Z.dispatch((0,d.Pl)()),e.next=3,c.Z.patch(t,n,h()).then((function(e){return f(e)})).catch((function(e){return m(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"putRequest",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.Z.dispatch((0,d.Pl)()),e.next=3,c.Z.put(t,n,h()).then((function(e){return f(e)})).catch((function(e){return m(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteRequest",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.Z.dispatch((0,d.Pl)()),e.next=3,c.Z.delete(t,h()).then((function(e){return f(e)})).catch((function(e){return m(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=x},70550:function(e,t,n){n(72791);var a=n(89743),r=n(2677),s=n(2461),i=n(80184);t.Z=function(e){return(0,i.jsx)(a.Z,{children:(0,i.jsx)(r.Z,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("div",{className:"page-title-right",children:(0,i.jsxs)(s.Z,{listProps:{className:"m-0"},children:[(0,i.jsx)(s.Z.Item,{href:"/dashboard",children:"Dashboard"}),e.breadCrumbItems.map((function(e,t){return e.active?(0,i.jsx)(s.Z.Item,{active:!0,children:e.label},t):(0,i.jsx)(s.Z.Item,{href:e.path,children:e.label},t)}))]})}),(0,i.jsx)("h4",{className:"page-title",children:e.title})]})})})}},41828:function(e,t,n){var a=n(1413),r=n(15671),s=n(43144),i=n(21830),c=n.n(i),u=function(){function e(){(0,r.Z)(this,e)}return(0,s.Z)(e,null,[{key:"Delete",value:function(e,t){return c().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){if(n.isConfirmed)return t(e).then((function(e){if(e)return!0}))}))}},{key:"Update",value:function(e,t,n,a){return c().fire({title:"Change Status",input:"select",inputOptions:n,inputValue:t}).then((function(t){if(t.isConfirmed)return a(e,t.value).then((function(e){return e}))}))}},{key:"CourseUpdate",value:function(e,t,n,r){return c().fire({title:"Change Status",input:"select",inputOptions:t,inputValue:n.status}).then((function(t){if(t.isConfirmed)return r(e,(0,a.Z)((0,a.Z)({},n),{},{status:t.value})).then((function(e){return e}))}))}}]),e}();t.Z=u},70211:function(e,t,n){var a=n(15671),r=n(43144),s=n(65218),i=function(){function e(){(0,a.Z)(this,e)}return(0,r.Z)(e,null,[{key:"successMessage",value:function(e){return s.ZP.success(e,{position:"top-center"})}},{key:"errorMessage",value:function(e){return s.ZP.error(e,{position:"top-center"})}}]),e}();t.Z=i},7254:function(e,t,n){n.r(t);var a=n(29439),r=n(72791),s=n(89743),i=n(2677),c=n(19089),u=n(43360),l=n(62591),o=n(11087),d=n(96048),v=n.n(d),p=n(76053),h=n(60978),f=n(70550),m=n(59434),x=n(65861),Z=n(41828),g=n(74220),j=n(1239),y=n(81694),L=n.n(y),b=n(80184);t.default=function(){var e=(0,r.useState)(1),t=(0,a.Z)(e,2),n=t[0],d=t[1],y=(0,r.useState)(5),k=(0,a.Z)(y,2),w=k[0],N=k[1],C=(0,r.useState)(0),S=(0,a.Z)(C,2),D=S[0],A=S[1];(0,r.useEffect)((function(){x.Z.LeaveListHodByStatus(n,w,D,{status:"Pending"})}),[n,w,D]);var R=(0,m.v9)((function(e){return e.Leave})),P=R.LeaveLists,q=R.TotalLeave;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.Z,{breadCrumbItems:[{label:"Leave",path:"/leave/leave-list"},{label:"Create List",path:"/leave/leave-list",active:!0}],title:"Leave List "+q}),(0,b.jsx)(s.Z,{children:(0,b.jsx)(i.Z,{xs:12,children:(0,b.jsx)(c.Z,{children:(0,b.jsxs)(c.Z.Body,{children:[(0,b.jsxs)(s.Z,{className:"mb-2",children:[(0,b.jsx)(i.Z,{sm:5}),(0,b.jsx)(i.Z,{sm:7,children:(0,b.jsxs)("div",{className:"text-sm-end",children:[(0,b.jsx)(u.Z,{variant:"success",className:"mb-2 me-1",children:(0,b.jsx)("i",{className:"mdi mdi-cog-outline"})}),(0,b.jsxs)(u.Z,{variant:"light",className:"mb-2 me-1",onClick:function(){return(0,g.Z)(P,"Leave","xls")},children:[(0,b.jsx)(h.bBH,{})," Export"]}),(0,b.jsxs)(u.Z,{variant:"light",className:"mb-2",onClick:function(){return(0,g.Z)(P,"Leave","csv")},children:[(0,b.jsx)(p.BI8,{})," Export"]})]})})]}),(0,b.jsx)(s.Z,{children:(0,b.jsx)(i.Z,{children:(0,b.jsx)("div",{className:"mb-2",children:(0,b.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,b.jsx)("input",{placeholder:q+" records...",className:"form-control w-auto ms-1",defaultValue:"",onChange:function(e){var t=e.target.value||0;A(t)}})]})})})}),(0,b.jsx)(s.Z,{children:(0,b.jsx)(i.Z,{children:(0,b.jsxs)(l.Z,{className:"table-centered react-table",responsive:!0,children:[(0,b.jsx)("thead",{className:"table-light",style:{backgroundColor:"#eef2f7"},children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Employee"}),(0,b.jsx)("th",{children:"Leave Type"}),(0,b.jsx)("th",{children:"Application Date"}),(0,b.jsx)("th",{children:"Total Day"}),(0,b.jsx)("th",{children:"Hod Status"}),(0,b.jsx)("th",{children:"Admin Status"}),(0,b.jsx)("th",{children:"Action"})]})}),(0,b.jsx)("tbody",{children:null===P||void 0===P?void 0:P.map((function(e,t){var a,r,s,i,c,u,l,d;return(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:(0,b.jsxs)("div",{className:"d-flex px-2 py-1",children:[(0,b.jsx)("div",{children:(0,b.jsx)("img",{src:null===e||void 0===e||null===(a=e.Employee)||void 0===a||null===(r=a[0])||void 0===r?void 0:r.Image,className:"avatar avatar-sm me-3",alt:"user1"})}),(0,b.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[(0,b.jsx)("h6",{className:"mb-0 text-sm",children:(null===e||void 0===e||null===(s=e.Employee)||void 0===s||null===(i=s[0])||void 0===i?void 0:i.FirstName)+" "+(null===e||void 0===e||null===(c=e.Employee)||void 0===c||null===(u=c[0])||void 0===u?void 0:u.LastName)}),(0,b.jsx)("p",{className:"text-xs text-secondary mb-0",children:(0,b.jsx)("td",{children:null===e||void 0===e||null===(l=e.Employee)||void 0===l||null===(d=l[0])||void 0===d?void 0:d.Email})})]})]})}),(0,b.jsx)("td",{children:null===e||void 0===e?void 0:e.LeaveType}),(0,b.jsx)("td",{children:(0,j.Z)(null===e||void 0===e?void 0:e.createdAt)}),(0,b.jsx)("td",{children:null===e||void 0===e?void 0:e.NumOfDay}),(0,b.jsx)("td",{children:(0,b.jsx)("span",{className:L()("badge",{"bg-success":"Approved"===(null===e||void 0===e?void 0:e.HodStatus),"bg-warning":"Pending"===(null===e||void 0===e?void 0:e.HodStatus),"bg-danger":"Rejected"===(null===e||void 0===e?void 0:e.HodStatus)}),children:null===e||void 0===e?void 0:e.HodStatus})}),(0,b.jsx)("td",{children:(0,b.jsx)("span",{className:L()("badge",{"bg-success":"Approved"===(null===e||void 0===e?void 0:e.AdminStatus),"bg-warning":"Pending"===(null===e||void 0===e?void 0:e.AdminStatus),"bg-danger":"Rejected"===(null===e||void 0===e?void 0:e.AdminStatus)}),children:null===e||void 0===e?void 0:e.AdminStatus})}),(0,b.jsxs)("td",{children:[(0,b.jsx)(o.rU,{to:"/leave/leave-create-update?id=".concat(null===e||void 0===e?void 0:e._id),className:"action-icon text-warning",children:(0,b.jsx)("i",{className:"mdi mdi-square-edit-outline"})}),(0,b.jsx)(o.rU,{className:"action-icon text-danger",onClick:function(){return t=null===e||void 0===e?void 0:e._id,void Z.Z.Delete(t,x.Z.LeaveDelete).then((function(e){e&&x.Z.LeaveListHodByStatus(n,w,D,{status:"Pending"})}));var t},children:(0,b.jsx)("i",{className:"mdi mdi-delete"})})]})]},t)}))})]})})}),(0,b.jsx)(s.Z,{children:(0,b.jsx)(i.Z,{children:(0,b.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[(0,b.jsxs)("div",{className:"d-inline-block me-3",children:[(0,b.jsx)("label",{className:"me-1",children:"Display :"}),(0,b.jsxs)("select",{className:"form-select d-inline-block w-auto",onChange:function(e){"All"===e.target.value?N(q):N(e.target.value)},children:[(0,b.jsx)("option",{value:5,children:"5"}),(0,b.jsx)("option",{value:10,children:"10"}),(0,b.jsx)("option",{value:20,children:"20"}),(0,b.jsx)("option",{value:"All",children:"All"})]})]}),(0,b.jsxs)("span",{className:"me-3",children:["Page",(0,b.jsxs)("strong",{children:[n," of ",Math.ceil(q/w)]})]}),(0,b.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,b.jsx)("label",{children:"Go to page : "}),(0,b.jsx)("input",{type:"number",min:1,className:"form-control w-25 ms-1 d-inline-block",defaultValue:1,onChange:function(e){d(e.target.value)}})]}),(0,b.jsx)(v(),{previousLabel:"<",nextLabel:">",pageClassName:"page-item d-none d-xl-inline-block",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",pageCount:q/w,marginPagesDisplayed:2,pageRangeDisplayed:5,containerClassName:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",activeClassName:"active",onPageChange:function(e){d(e.selected+1)},initialPage:n-1,forcePage:n-1})]})})})]})})})})]})}},1239:function(e,t,n){n(72791);var a=n(46431),r=n.n(a),s=n(80184);t.Z=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r(),{format:"D MMM YYYY",withTitle:!0,children:e})," ",(0,s.jsx)("br",{}),(0,s.jsx)("small",{children:(0,s.jsx)(r(),{format:"hh:mm A",children:e})})]})}},74220:function(e,t,n){var a=n(63589);t.Z=function(e,t,n){if("csv"===n){var r=a.Z.types.csv;return(0,a.Z)({data:e,fileName:t,exportType:r})}if("xls"===n){var s=a.Z.types.xls;return(0,a.Z)({data:e,fileName:t,exportType:s})}}}}]);
//# sourceMappingURL=254.c8a1b530.chunk.js.map