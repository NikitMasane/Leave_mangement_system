"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[993],{65861:function(e,t,a){var n=a(74165),r=a(15861),s=a(15671),i=a(43144),u=a(70211),c=a(87165),l=a(40109),d=a(783),o=function(){function e(){(0,s.Z)(this,e)}return(0,i.Z)(e,null,[{key:"LeaveCreate",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.postRequest("/Leave/LeaveCreate",t);case 2:if(a=e.sent,!a.data){e.next=8;break}return l.Z.dispatch((0,c.Yr)()),u.Z.successMessage("Leave Create Successful"),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"LeaveList",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t,a,r){var s,i,u,o,v,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/Leave/LeaveList/".concat(t,"/").concat(a,"/").concat(r));case 2:s=e.sent,(i=s.data)&&(l.Z.dispatch((0,c.Yr)()),p=null===i||void 0===i||null===(u=i[0])||void 0===u||null===(o=u.Total[0])||void 0===o?void 0:o.count,l.Z.dispatch((0,c.ao)(null===i||void 0===i||null===(v=i[0])||void 0===v?void 0:v.Data)),l.Z.dispatch((0,c.L9)(p||0)));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"LeaveAdminList",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t,a,r){var s,i,u,o,v,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/Leave/LeaveAdminList/".concat(t,"/").concat(a,"/").concat(r));case 2:s=e.sent,(i=s.data)&&(l.Z.dispatch((0,c.Yr)()),p=null===i||void 0===i||null===(u=i[0])||void 0===u||null===(o=u.Total[0])||void 0===o?void 0:o.count,l.Z.dispatch((0,c.ao)(null===i||void 0===i||null===(v=i[0])||void 0===v?void 0:v.Data)),l.Z.dispatch((0,c.L9)(p||0)));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"LeaveListAdminByStatus",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t,a,r,s){var i,u,o,v,p,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.postRequest("/Leave/LeaveListAdminByStatus/".concat(t,"/").concat(a,"/").concat(r),s);case 2:i=e.sent,(u=i.data)&&(l.Z.dispatch((0,c.Yr)()),f=null===u||void 0===u||null===(o=u[0])||void 0===o||null===(v=o.Total[0])||void 0===v?void 0:v.count,l.Z.dispatch((0,c.ao)(null===u||void 0===u||null===(p=u[0])||void 0===p?void 0:p.Data)),l.Z.dispatch((0,c.L9)(f||0)));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"LeaveListHodByStatus",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t,a,r,s){var i,u,o,v,p,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.postRequest("/Leave/LeaveListHodByStatus/".concat(t,"/").concat(a,"/").concat(r),s);case 2:i=e.sent,(u=i.data)&&(l.Z.dispatch((0,c.Yr)()),f=null===u||void 0===u||null===(o=u[0])||void 0===o||null===(v=o.Total[0])||void 0===v?void 0:v.count,l.Z.dispatch((0,c.ao)(null===u||void 0===u||null===(p=u[0])||void 0===p?void 0:p.Data)),l.Z.dispatch((0,c.L9)(f||0)));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"LeaveDropDown",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/Leave/LeaveDropDown");case 2:t=e.sent,(a=t.data)&&l.Z.dispatch((0,c.IX)(a));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"LeaveDetails",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/Leave/LeaveDetails/".concat(t));case 2:if(a=e.sent,!(r=a.data)){e.next=7;break}return l.Z.dispatch((0,c.Cw)(null===r||void 0===r?void 0:r[0])),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"LeaveUpdate",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t,a){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.updateRequest("/Leave/LeaveUpdate/".concat(t),a);case 2:if(r=e.sent,!r.data){e.next=8;break}return l.Z.dispatch((0,c.Yr)()),u.Z.successMessage("Leave Update Successful"),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"LeaveDelete",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.deleteRequest("/Leave/LeaveDelete/".concat(t));case 2:if(a=e.sent,!a.data){e.next=7;break}return u.Z.successMessage("Leave Delete Successful"),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=o},70550:function(e,t,a){a(72791);var n=a(89743),r=a(2677),s=a(2461),i=a(80184);t.Z=function(e){return(0,i.jsx)(n.Z,{children:(0,i.jsx)(r.Z,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("div",{className:"page-title-right",children:(0,i.jsxs)(s.Z,{listProps:{className:"m-0"},children:[(0,i.jsx)(s.Z.Item,{href:"/dashboard",children:"Dashboard"}),e.breadCrumbItems.map((function(e,t){return e.active?(0,i.jsx)(s.Z.Item,{active:!0,children:e.label},t):(0,i.jsx)(s.Z.Item,{href:e.path,children:e.label},t)}))]})}),(0,i.jsx)("h4",{className:"page-title",children:e.title})]})})})}},24993:function(e,t,a){a.r(t);var n=a(29439),r=a(59434),s=a(72791),i=a(89743),u=a(2677),c=a(19089),l=a(43360),d=a(62797),o=a(33168),v=a(57689),p=a(70550),f=a(23395),Z=a(65861),h=a(80184);t.default=function(){var e=(0,s.useState)(0),t=(0,n.Z)(e,2),a=t[0],m=t[1],L=(0,o.$)().t,x=(0,r.v9)((function(e){return e.Leave})).LeaveDetails,y=(0,v.s0)();(0,s.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("id");null!==e&&(Z.Z.LeaveDetails(e),m(e))}),[]);var b=d.Ry().shape({NumOfDay:d.Z_().required("Please Enter NumOfDay"),AdminStatus:d.Z_().required("Please Select Admin Status"),AdminRemark:d.Z_().required("Please Enter Admin Remark")});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.Z,{breadCrumbItems:[{label:"Leave",path:"/leave/leave-list"},{label:a?"Update Leave":"Create Leave",path:"/leave/leave-list",active:!0}],title:a?"Update Leave":"Create Leave"}),(0,h.jsx)(i.Z,{children:(0,h.jsx)(u.Z,{children:(0,h.jsx)(c.Z,{children:(0,h.jsx)(c.Z.Body,{children:(0,h.jsx)(i.Z,{children:(0,h.jsx)(u.Z,{children:(0,h.jsxs)(f.J,{onSubmit:function(e){a?Z.Z.LeaveUpdate(a,{AdminRemark:e.AdminRemark,AdminStatus:e.AdminStatus,NumOfDay:e.NumOfDay}).then((function(e){e&&y("/leave/leave-list")})):Z.Z.LeaveCreate({AdminStatus:e.AdminStatus,AdminRemark:e.AdminRemark,NumOfDay:e.NumOfDay}).then((function(e){e&&y("/leave/leave-list")}))},validationSchema:b,defaultValues:x,children:[(0,h.jsxs)(i.Z,{children:[(0,h.jsxs)(u.Z,{xl:12,children:[(0,h.jsx)(f.y,{name:"NumOfDay",label:L("Num Of Day"),placeholder:L("Enter Num Of Day"),containerClass:"mb-3",type:"number"}),(0,h.jsx)(f.y,{name:"AdminStatus",label:L("Admin Status"),placeholder:L("Select Admin Status"),containerClass:"mb-3",type:"react-single-select",options:[{value:"Pending",label:"Pending"},{value:"Approved",label:"Approved"},{value:"Rejected",label:"Rejected"}],defaultValue:[{value:"Pending",label:"Pending"},{value:"Approved",label:"Approved"},{value:"Rejected",label:"Rejected"}].find((function(e){return e.value===(null===x||void 0===x?void 0:x.AdminStatus)}))})]}),(0,h.jsx)(u.Z,{xl:12,children:(0,h.jsx)(f.y,{name:"AdminRemark",label:L("Admin Remark"),placeholder:L("Enter Admin Remark"),containerClass:"mb-3",type:"simple-rich-edior"})})]}),(0,h.jsx)(i.Z,{className:"mt-2",children:(0,h.jsx)(u.Z,{children:(0,h.jsx)(l.Z,{type:"submit",variant:"success",children:a?"Update Leave":"Add Leave"})})})]})})})})})})})]})}}}]);
//# sourceMappingURL=993.3ff4d7d4.chunk.js.map