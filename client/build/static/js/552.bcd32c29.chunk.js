"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[552],{52381:function(e,r,s){var t=s(74165),n=s(15861),a=s(15671),o=s(43144),c=s(34948),i=s(70211),u=s(69334),l=s(40109),d=s(783),p=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"ProfileDetails",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var r,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/Employee/ProfileDetails");case 2:if(r=e.sent,!(s=r.data)){e.next=7;break}return l.Z.dispatch((0,u.Ky)(null===s||void 0===s?void 0:s[0])),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"SendRecoveryOtp",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var s,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/Employee/SendRecoveryOtp/".concat(r));case 2:if(s=e.sent,!(n=s.data)){e.next=8;break}return i.Z.successMessage(null===n||void 0===n?void 0:n.message),c.Z.SetRecoverVerifyEmail(r),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"VerifyRecoveryOtp",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var s,n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.Z.GetRecoverVerifyEmail(),console.log(s),e.next=4,d.Z.getRequest("/Employee/VerifyRecoveryOtp/".concat(s,"/").concat(r));case 4:if(n=e.sent,!(a=n.data)){e.next=10;break}return c.Z.SetRecoverVerifyOTP(r),i.Z.successMessage(null===a||void 0===a?void 0:a.message),e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"RecoveryResetPass",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var s,n,a,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.Z.GetRecoverVerifyEmail(),n=c.Z.GetRecoverVerifyOTP(),e.next=4,d.Z.postRequest("/Employee/RecoveryResetPass/".concat(s,"/").concat(n),r);case 4:if(a=e.sent,!(o=a.data)){e.next=9;break}return i.Z.successMessage(null===o||void 0===o?void 0:o.message),e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"VerifyAccountSentOtp",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var r,s,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.Z.GetRecoverVerifyEmail(),console.log(r),e.next=4,d.Z.getRequest("/User/VerifyAccountSentOtp/".concat(r));case 4:if(s=e.sent,!(n=s.data)){e.next=9;break}return i.Z.successMessage(null===n||void 0===n?void 0:n.message),e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"VerifyAccountVerifyOtp",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r,s){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/User/VerifyAccountVerifyOtp/".concat(r,"/").concat(s));case 2:if(n=e.sent,!(a=n.data)){e.next=7;break}return i.Z.successMessage(null===a||void 0===a?void 0:a.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(r,s){return e.apply(this,arguments)}}()},{key:"ProfileUpdate",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var s,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.updateRequest("/Employee/ProfileUpdate",r);case 2:if(s=e.sent,!(n=s.data)){e.next=7;break}return i.Z.successMessage(null===n||void 0===n?void 0:n.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"EmployeeChangePassword",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var s,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.putRequest("/Employee/EmployeeChangePassword",r);case 2:if(s=e.sent,!(n=s.data)){e.next=7;break}return i.Z.successMessage(null===n||void 0===n?void 0:n.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}]),e}();r.Z=p},70550:function(e,r,s){s(72791);var t=s(89743),n=s(2677),a=s(2461),o=s(80184);r.Z=function(e){return(0,o.jsx)(t.Z,{children:(0,o.jsx)(n.Z,{children:(0,o.jsxs)("div",{className:"page-title-box",children:[(0,o.jsx)("div",{className:"page-title-right",children:(0,o.jsxs)(a.Z,{listProps:{className:"m-0"},children:[(0,o.jsx)(a.Z.Item,{href:"/dashboard",children:"Dashboard"}),e.breadCrumbItems.map((function(e,r){return e.active?(0,o.jsx)(a.Z.Item,{active:!0,children:e.label},r):(0,o.jsx)(a.Z.Item,{href:e.path,children:e.label},r)}))]})}),(0,o.jsx)("h4",{className:"page-title",children:e.title})]})})})}},46552:function(e,r,s){s.r(r);s(59434);var t=s(89743),n=s(2677),a=s(19089),o=s(43360),c=s(62797),i=s(33168),u=s(57689),l=s(70550),d=s(23395),p=s(52381),f=s(80184);r.default=function(){var e=(0,i.$)().t,r=(0,u.s0)(),s=c.Ry().shape({PreviousPassword:c.Z_().required("Please Enter Previous Password"),NewPassword:c.Z_().required("Please Enter New Password"),PasswordConfirmation:c.Z_().required("Please Enter Confirm Password").oneOf([c.iH("NewPassword"),null],"Passwords must match")});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{breadCrumbItems:[{label:"Setting",path:"/dashboard"},{label:"Update Setting",path:"/dashboard",active:!0}],title:"Update Password"}),(0,f.jsx)(t.Z,{children:(0,f.jsx)(n.Z,{children:(0,f.jsx)(a.Z,{children:(0,f.jsx)(a.Z.Body,{children:(0,f.jsx)(t.Z,{children:(0,f.jsx)(n.Z,{children:(0,f.jsxs)(d.J,{onSubmit:function(e){p.Z.EmployeeChangePassword({PreviousPassword:e.PreviousPassword,NewPassword:e.NewPassword}).then((function(e){e&&r("/dashboard")}))},validationSchema:s,defaultValues:{PreviousPassword:"",NewPassword:"",PasswordConfirmation:""},children:[(0,f.jsxs)(t.Z,{children:[(0,f.jsx)(n.Z,{sm:12,children:(0,f.jsx)(d.y,{name:"PreviousPassword",label:e("Previous Password"),placeholder:e("Enter Previous Password"),containerClass:"mb-3",type:"password"})}),(0,f.jsx)(n.Z,{sm:12,children:(0,f.jsx)(d.y,{name:"NewPassword",label:e("New Password"),placeholder:e("Enter New Password"),containerClass:"mb-3",type:"password"})}),(0,f.jsx)(n.Z,{sm:12,children:(0,f.jsx)(d.y,{name:"PasswordConfirmation",label:e("Confirm New Password"),placeholder:e("Enter Confirm New Password"),containerClass:"mb-3",type:"password"})})]}),(0,f.jsx)(t.Z,{className:"mt-2",children:(0,f.jsx)(n.Z,{children:(0,f.jsx)(o.Z,{type:"submit",variant:"success",children:"Update Profile"})})})]})})})})})})})]})}}}]);
//# sourceMappingURL=552.bcd32c29.chunk.js.map